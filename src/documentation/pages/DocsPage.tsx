import { useParams, useNavigate } from "react-router"
import { useEffect } from "react"
import { getDocBySlug } from "@/documentation/documents/docs"
import { MdxContent } from "../components/MdxContent"

import { TableOfContents } from "@/documentation/components/Toc"
import { DocsPager } from "@/documentation/components/Pager"


export default function DocPage() {
  const { "*": slugPath } = useParams()
  const navigate = useNavigate()

  const slug = slugPath ? slugPath.split("/").filter(Boolean) : []
  const doc = getDocBySlug(slug)

  useEffect(() => {
    if (!doc) {
      navigate("/not-found", { replace: true })
    }
  }, [doc, navigate])

  useEffect(() => {
    if (doc?.title) {
      document.title = doc.title
    }
  }, [doc?.title])

  if (!doc) return null

  return (
    <>
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="truncate">Docs</div>
          {slug.map((part, index) => (
            <span key={index} className="flex items-center">
              <span className="mx-1">/</span>
              <span className="capitalize">{part.replace(/-/g, " ")}</span>
            </span>
          ))}
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">{doc.description}</p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <MdxContent key={doc.title} content={doc.content} />
        </div>
        <DocsPager slug={slug} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
          <TableOfContents key={doc.title} content={doc.content} />
        </div>
      </div>
    </>
  )
}