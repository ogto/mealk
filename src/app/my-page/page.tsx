'use client'

import { useEffect, useState } from 'react'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged, sendPasswordResetEmail, signOut, updateProfile } from 'firebase/auth'
import { toast } from 'react-hot-toast'

export default function MyPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [newName, setNewName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser)
        setNewName(currentUser.displayName || '')
        setLoading(false)
      } else {
        router.push('/login')
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleNameChange = async () => {
    if (!user) return

    try {
      await updateProfile(user, { displayName: newName })
      toast.success('이름이 변경되었습니다.')
      router.refresh()
    } catch {
      toast.error('이름 변경 중 오류가 발생했습니다.')
    }
  }

  const handlePasswordReset = async () => {
    if (!user?.email) return
    try {
      await sendPasswordResetEmail(auth, user.email)
      toast.success('비밀번호 재설정 메일이 발송되었습니다.')
    } catch {
      toast.error('메일 발송 중 오류가 발생했습니다.')
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
    toast.success('로그아웃 되었습니다.')
    router.push('/login')
  }

  if (!user || loading) return null

  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">내 정보</h1>

      <div className="space-y-4 w-full max-w-sm text-base">
        <Input label="이메일" value={user.email} onChange={() => {}} error="" type="text" onBlur={() => {}} />
        <Input label="이름" value={newName} onChange={val => setNewName(val)} error="" type="text" onBlur={() => {}} />
        <Input label="휴대폰 번호" value="미등록" onChange={() => {}} error="" type="text" onBlur={() => {}} />
        <Input label="추천인 코드" value="미등록" onChange={() => {}} error="" type="text" onBlur={() => {}} />
        {/* <Input label="마케팅 수신 동의" value="회원가입 시 입력됨 (변경 불가)" onChange={() => {}} error="" type="text" onBlur={() => {}} /> */}
      </div>

      <button
        onClick={handleNameChange}
        className="w-full max-w-sm mt-6 bg-red-400 text-white py-3 text-base rounded-md font-semibold hover:bg-red-500"
      >
        저장
      </button>

      <div className="flex justify-between w-full max-w-sm mt-4 gap-4">
        <button
          onClick={handlePasswordReset}
          className="w-1/2 bg-white text-red-400 border border-red-400 py-3 text-base rounded-md font-semibold hover:bg-red-50"
        >
          비밀번호 재설정
        </button>

        <button
          onClick={handleLogout}
          className="w-1/2 bg-white text-gray-700 border border-gray-300 py-3 text-base rounded-md font-semibold hover:bg-gray-100"
        >
          로그아웃
        </button>
      </div>
    </div>
  )
}

// Input 컴포넌트
function Input({
  label,
  placeholder = '',
  type = 'text',
  value,
  error,
  onChange,
  onBlur,
}: {
  label: string
  placeholder?: string
  type?: string
  value: string
  error?: string
  onChange: (value: string) => void
  onBlur?: () => void
}) {
  const isDisabled = label !== '이름'

  return (
    <div>
      <label className="block text-gray-800 font-semibold mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        disabled={isDisabled}
        className={`w-full px-3 py-3 border text-lg rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-400' : isDisabled ? 'border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed' : 'border-gray-300 focus:ring-blue-500'
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
}
