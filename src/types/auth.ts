export interface AuthUser {
  id: string
  name: string
  email: string
  role: 'admin' | 'doctor' | 'nurse'
}

export interface AuthContextType {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (user: AuthUser) => void
  logout: () => void
}
