import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { AuthContextType, AuthUser } from '../types/auth'
import { auth } from '../services/firebase';
import { GoogleAuthProvider, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';

const AuthContext = createContext<AuthContextType | null>(null)
const googleProvider = new GoogleAuthProvider();

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribeAuthChange = onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName ?? "Unknown",
          email: firebaseUser.email ?? "",
          photoURL: firebaseUser.photoURL ?? undefined
        })
      } else {
        setUser(null);
      }
      setIsLoading(false);
    })
    return unsubscribeAuthChange; //cleanup
  },[])

  const loginWithGoogle = async() => {
    await signInWithPopup(auth, googleProvider)
  };
  
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated: !!user , loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
