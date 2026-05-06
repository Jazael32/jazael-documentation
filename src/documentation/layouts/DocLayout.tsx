import { Header } from "@/components/shared/Header"
import { Outlet } from "react-router"
import { DocSidebar } from "../components/DocSidebar"

export const DocLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="w-full flex-1">
        <div className="max-w-screen-2xl mx-auto px-4 flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          <DocSidebar />
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}