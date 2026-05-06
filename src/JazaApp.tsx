import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.routes'

export const JazaApp = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}
