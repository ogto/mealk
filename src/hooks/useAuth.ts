import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from '@/firebase/firebase'

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        if (!firebaseUser.emailVerified) {
          signOut(auth) // 이메일 인증 안 했으면 강제 로그아웃
          setUser(null)
          setLoading(false)
          return
        }
        setUser(firebaseUser)
        setLoading(false)
      } else {
        setUser(null)
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return { user, loading }
}
