'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth'
import { auth } from '@/firebase/firebase'

export default function SignUpForm() {
  const router = useRouter()

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    referralCode: '',
    agreeTerms: false,
    agreeMarketing: false,
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  })

  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const validateSingleField = (field: string, value: string): string => {
    switch (field) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : '올바른 메일 형식으로 입력해주세요.'
      case 'password':
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/.test(value)
          ? ''
          : '최소 8자의 영문, 숫자, 특수문자를 입력해주세요.'
      case 'confirmPassword':
        return value === form.password
          ? ''
          : '비밀번호와 비밀번호 확인이 일치하지 않습니다.'
      case 'phone':
        return /^\d{10,11}$/.test(value)
          ? ''
          : '올바른 휴대폰 번호를 입력해주세요.'
      default:
        return ''
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleBlur = (field: string) => {
    const value = form[field as keyof typeof form]
    if (typeof value === 'string') {
      const error = validateSingleField(field, value)
      setErrors(prev => ({ ...prev, [field]: error }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const fieldsToValidate = ['email', 'password', 'confirmPassword', 'phone']
    const newErrors = { ...errors }

    fieldsToValidate.forEach(field => {
      const value = form[field as keyof typeof form]
      if (typeof value === 'string') {
        newErrors[field as keyof typeof newErrors] = validateSingleField(field, value)
      }
    })

    setErrors(newErrors)
    const hasError = Object.values(newErrors).some(e => e)
    if (hasError) {
      toast.error('입력값을 다시 확인해주세요.')
      return
    }

    if (!form.agreeTerms) {
      toast.error('개인정보 수집 동의는 필수입니다.')
      return
    }

    // 유효성 검사를 통과했으면 모달 띄우기
    setShowConfirmModal(true)
  }

  const handleConfirm = async () => {
    setShowConfirmModal(false)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password)

      await updateProfile(userCredential.user, { displayName: form.name })

      await sendEmailVerification(userCredential.user)

      toast.success('[회원가입완료] 이메일 인증을 진행해주세요.')
      router.push('/login')
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        toast.error('이미 가입된 이메일입니다.')
      } else {
        toast.error('회원가입 중 오류가 발생했습니다.')
      }
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto relative">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">회원가입</h2>

      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        <Input
          label="이메일 주소"
          value={form.email}
          error={errors.email}
          onChange={val => handleChange('email', val)}
          onBlur={() => handleBlur('email')}
        />
        <Input
          label="비밀번호"
          type="password"
          value={form.password}
          error={errors.password}
          onChange={val => handleChange('password', val)}
          onBlur={() => handleBlur('password')}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          value={form.confirmPassword}
          error={errors.confirmPassword}
          onChange={val => handleChange('confirmPassword', val)}
          onBlur={() => handleBlur('confirmPassword')}
        />
        <Input
          label="이름"
          value={form.name}
          onChange={val => handleChange('name', val)}
        />
        <Input
          label="휴대폰 번호"
          value={form.phone}
          error={errors.phone}
          onChange={val => handleChange('phone', val)}
          onBlur={() => handleBlur('phone')}
        />
        <Input
          label="추천인 코드 (선택)"
          value={form.referralCode}
          onChange={val => handleChange('referralCode', val)}
        />

        <div className="space-y-2 text-sm text-gray-700">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 scale-150 cursor-pointer"
              checked={form.agreeTerms}
              onChange={e => handleChange('agreeTerms', e.target.checked)}
            />
            [필수] 개인정보 수집 및 이용 동의
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 scale-150 cursor-pointer"
              checked={form.agreeMarketing}
              onChange={e => handleChange('agreeMarketing', e.target.checked)}
            />
            [선택] 마케팅 수신 동의
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-300 text-white rounded-lg text-base font-semibold hover:bg-red-400 transition"
        >
          계정 만들기
        </button>

        <p className="text-center text-sm text-gray-500">
          이미 계정이 있으신가요?{' '}
          <a href="/login" className="text-red-300 font-medium hover:underline">
            로그인
          </a>
        </p>
      </form>

      {showConfirmModal && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center space-y-4 w-80">
            <h3 className="text-lg font-semibold text-gray-800">회원가입 확인</h3>
            <p className="text-sm text-gray-600">회원가입을 진행하시겠습니까?</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 text-sm"
                onClick={() => setShowConfirmModal(false)}
              >
                취소
              </button>
              <button
                className="px-4 py-2 bg-red-300 text-white rounded-lg hover:bg-red-400 text-sm"
                onClick={handleConfirm}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
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
  return (
    <div>
      <label className="block text-gray-800 font-semibold mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        className={`w-full px-3 py-3 border text-lg rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:ring-red-400'
            : 'border-gray-300 focus:ring-blue-500'
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
}
