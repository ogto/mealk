'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { toast } from 'react-hot-toast'
import Image from 'next/image'

import useGoogleLogin from '@/hooks/useGoogleLogin'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { handleGoogleLogin } = useGoogleLogin()
  const [saveEmail, setSaveEmail] = useState(false)

  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail')
    if (savedEmail) {
      setEmail(savedEmail)
      setSaveEmail(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error('이메일과 비밀번호를 모두 입력해주세요.')
      return
    }

    setLoading(true)

    try {

      if (saveEmail) {
        localStorage.setItem('savedEmail', email)
      } else {
        localStorage.removeItem('savedEmail')
      }
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if (!userCredential.user.emailVerified) {
        toast.error('이메일 인증이 완료되지 않았습니다.')
        setLoading(false)
        return
      }

      router.push('/')
    } catch (error: any) {
      console.log('error 전체 구조:', error)
      console.log('error.code:', error.code)

      if (error.code === 'auth/invalid-credential') {
        toast.error('이메일 또는 비밀번호를 다시 확인해주세요.')
      } else if (error.code === 'auth/invalid-email') {
        toast.error('이메일 형식이 올바르지 않습니다.')
      } else {
        toast.error('로그인 중 오류가 발생했습니다.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
        정성을 채우는 한 끼🍱
      </h1>
      <p className="text-base text-gray-600 mb-8">회원 전용 혜택과 간편한 쇼핑을 만나보세요.</p>

      <form className="w-full max-w-sm space-y-5" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <div className="flex items-center justify-between text-base text-gray-700">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 scale-150"
              checked={saveEmail}
              onChange={e => setSaveEmail(e.target.checked)}
            />
            아이디 저장
          </label>
          <a href="find-pwd" className="hover:underline text-red-300">비밀번호 찾기</a>
        </div>
        <button
          type="submit"
          className="w-full bg-red-300 text-white py-3 text-base rounded-md font-semibold hover:bg-red-400 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? '로그인 중...' : '로그인'}
        </button>
        <div className="text-center text-sm text-gray-400">또는</div>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-base text-gray-700 bg-white border border-gray-300 font-semibold hover:bg-gray-100"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          Google로 로그인
        </button>
        <div className="text-center text-base mt-4 text-gray-700">
          계정이 없으신가요?{' '}
          <a href="/signup" className="text-red-300 font-semibold hover:underline">회원가입</a>
        </div>
      </form>

      <div className="mt-8 w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/sub_banner.png"
          alt="정채움 소개"
          width={600}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
