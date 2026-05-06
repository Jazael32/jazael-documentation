import { DocLayout } from "@/documentation/layouts/DocLayout";
import DocPage from "@/documentation/pages/DocsPage";
import { HomeLayout } from "@/home/layouts/HomeLayout";
import { HomePage } from "@/home/pages/HomePage";
import { createBrowserRouter } from "react-router";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
    ],
  },
  {
    path: '/docs',
    element: <DocLayout />,
    children: [
      {
        index: true,
        element: <DocPage />
      },
      {
        path: '*',
        element: <DocPage />
      }
    ],
  }
])

