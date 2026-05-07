import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.routes'
import { ThemeProvider } from './components/theme-provider'

export const JazaApp = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="jazael-ui-theme">
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}
