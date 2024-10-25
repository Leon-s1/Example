import { NextUIProvider } from "@nextui-org/react"
import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from "./app/store"
import "./index.css"
import Layout from "./components/layout"
import ThemeProvider from "./components/theme-provider"
import Auth from "./pages/auth"
import Company from "./pages/company"
import Software from "./pages/software"
import TelephoneBook from "./pages/telephone-book"
import UserProfile from "./pages/user-profile"

const container = document.getElementById("root")

const router = createBrowserRouter([
  { path: "/auth", element: <Auth /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <TelephoneBook />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/software",
        element: <Software />,
      },
    ],
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <NextUIProvider>
          <ThemeProvider children={ThemeProvider}>
            <RouterProvider router={router} />
            {/*<App />*/}
          </ThemeProvider>
        </NextUIProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
