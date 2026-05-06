import { Outlet } from "react-router"

export const HomeLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Outlet />
    </div>
  )
}
