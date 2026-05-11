import { Outlet } from "react-router"
import "@/home/styles/elden-theme.css"
import { Header } from "@/components/shared/Header"

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col bg-background elden-theme">
        <Outlet />
      </div>
    </>
  )
}
