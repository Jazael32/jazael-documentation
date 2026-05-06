import { Link } from "react-router"

export const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0 px-2">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Built with{" "}
          <Link
            to="https://es.react.dev/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            React
          </Link>{" "}
          and{" "}
          <Link
            to="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
