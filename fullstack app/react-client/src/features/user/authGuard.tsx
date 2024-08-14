import { Spinner } from "@nextui-org/react"
import React, { JSX } from "react"
import { useCurrentQuery } from "../../app/services/userApi"

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery()

  if (isLoading) {
    return <Spinner />
  }

  return children
}
