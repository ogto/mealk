'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { toast } from 'react-hot-toast'

export default function FindPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast.error('이메일을 입력해주세요.')
      return
    }

    setLoading(true)

    try {
      await sendPasswordResetEmail(auth, email)
      toast.success('비밀번호 재설정 메일이 발송되었습니다.')
      router.push('/login')
    } catch (error: any) {
      console.log('error 전체 구조:', error)
      console.log('error.code:', error.code)

      if (error.code === 'auth/user-not-found') {
        toast.error('가입된 이메일이 없습니다.')
      } else if (error.code === 'auth/invalid-email') {
        toast.error('이메일 형식이 올바르지 않습니다.')
      } else {
        toast.error('비밀번호 재설정 중 오류가 발생했습니다.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">비밀번호 찾기</h1>
      <p className="text-base text-gray-600 mb-8">가입한 이메일로 비밀번호 재설정 링크를 보내드립니다.</p>

      <form className="w-full max-w-sm space-y-5" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <button
          type="submit"
          className="w-full bg-red-300 text-white py-3 text-base rounded-md font-semibold hover:bg-red-400 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? '메일 발송 중...' : '메일 발송하기'}
        </button>
        <div className="text-center text-base mt-4 text-gray-700">
          <a href="/login" className="text-red-300 font-semibold hover:underline">로그인으로 돌아가기</a>
        </div>
      </form>
    </div>
  )
}
