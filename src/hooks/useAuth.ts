import { useEffect, useState } from 'react'
import { setPersistence, onAuthStateChanged, signOut, User, browserSessionPersistence } from 'firebase/auth'
import { auth } from '@/firebase/firebase'

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      await setPersistence(auth, browserSessionPersistence)

      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser && !firebaseUser.emailVerified) {
          await signOut(auth)
          setUser(null)
          setLoading(false)
          return
        }

        setUser(firebaseUser)
        setLoading(false)
      })

      return unsubscribe
    }

    const unsubscribePromise = init()

    return () => {
      unsubscribePromise.then((unsubscribe) => {
        if (unsubscribe) unsubscribe()
      })
    }
  }, [])

  return { user, loading }
}
