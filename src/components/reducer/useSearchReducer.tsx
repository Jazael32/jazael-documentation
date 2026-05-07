import { useReducer, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { docsContent } from "@/documentation/documents/docs";

interface SearchResult {
  path: string;
  title: string;
  description: string;
  matchType: "title" | "description" | "content";
}

interface SearchState {
  searchQuery: string;
  searchResults: SearchResult[];
  isOpen: boolean;
  selectedIndex: number;
}

type SearchAction =
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_RESULTS"; payload: SearchResult[] }
  | { type: "SET_IS_OPEN"; payload: boolean }
  | { type: "SET_SELECTED_INDEX"; payload: number }
  | { type: "CLEAR_SEARCH" }
  | { type: "MOVE_UP" }
  | { type: "MOVE_DOWN" }

const initialState: SearchState = {
  searchQuery: "",
  searchResults: [],
  isOpen: false,
  selectedIndex: 0,
};

const searchReducer = (state: SearchState, action: SearchAction): SearchState => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, searchQuery: action.payload, selectedIndex: 0 };
    case "SET_RESULTS":
      return { ...state, searchResults: action.payload };
    case "SET_IS_OPEN":
      return { ...state, isOpen: action.payload };
    case "SET_SELECTED_INDEX":
      return { ...state, selectedIndex: action.payload };
    case "MOVE_UP":
      return { ...state, selectedIndex: Math.max(state.selectedIndex - 1, 0) };
    case "MOVE_DOWN":
      return { ...state, selectedIndex: Math.min(state.selectedIndex + 1, state.searchResults.length - 1) };
    case "CLEAR_SEARCH":
      return { ...initialState };
    default:
      return state;
  }
};

const searchDocs = (query: string): SearchResult[] => {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];

  Object.entries(docsContent).forEach(([path, doc]) => {
    if (doc.title.toLowerCase().includes(lowerQuery)) {
      results.push({ path, title: doc.title, description: doc.description, matchType: "title" });
    } else if (doc.description.toLowerCase().includes(lowerQuery)) {
      results.push({ path, title: doc.title, description: doc.description, matchType: "description" });
    } else if (doc.content.toLowerCase().includes(lowerQuery)) {
      results.push({ path, title: doc.title, description: doc.description, matchType: "content" });
    }
  });

  return results;
};

export const useSearchReducer = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const results = searchDocs(state.searchQuery);
    dispatch({ type: "SET_RESULTS", payload: results });
    dispatch({ type: "SET_IS_OPEN", payload: results.length > 0 && state.searchQuery.trim().length > 0 });
  }, [state.searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        dispatch({ type: "SET_IS_OPEN", payload: false });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    dispatch({ type: "CLEAR_SEARCH" });
    inputRef.current?.blur();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      dispatch({ type: "MOVE_DOWN" });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      dispatch({ type: "MOVE_UP" });
    } else if (event.key === "Enter" && state.searchResults.length > 0) {
      event.preventDefault();
      handleNavigate(state.searchResults[state.selectedIndex].path);
    } else if (event.key === "Escape") {
      dispatch({ type: "SET_IS_OPEN", payload: false });
      inputRef.current?.blur();
    }
  };

  return {
    state,
    dispatch,
    inputRef,
    containerRef,
    handleNavigate,
    handleKeyDown,
  };
};