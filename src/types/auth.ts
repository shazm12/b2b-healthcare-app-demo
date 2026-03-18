export interface AuthUser {
  id: string
  name: string
  email: string
  photoURL?: string
}

export interface AuthContextType {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  loginWithGoogle: () => Promise<void>
  logout: () => Promise<void>
}
