import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function useGoogleLogin() {
  const router = useRouter()

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)

      router.push('/')
    } catch (error: any) {
      console.log('구글 로그인 에러:', error)
      toast.error('로그인에 실패했습니다.')
    }
  }

  return { handleGoogleLogin }
}
