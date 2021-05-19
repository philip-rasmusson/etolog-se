import { useState, createContext } from 'react'

export const UserContext = createContext<any>(null)

export const UserProvider = (props: { children?: React.ReactChild }) => {
  const defaultUsername = 'defaul'
  const [authenticatedUser, setAuthenticatedUser] = useState({ defaultUsername, admin: false })
  return (<UserContext.Provider
    value={[authenticatedUser, setAuthenticatedUser]}>
    {props.children}
  </UserContext.Provider>)
}
