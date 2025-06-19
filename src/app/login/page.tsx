'use client'

import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* 타이틀 */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
        정성을 채우는 한 끼,
        <Image
          src="/logo/logo2.png"
          alt="정채움 로고"
          width={100}
          height={32}
        />
        🍱
      </h1>
      <p className="text-base text-gray-600 mb-8">회원 전용 혜택과 간편한 쇼핑을 만나보세요.</p>

      {/* 로그인 폼 */}
      <form className="w-full max-w-sm space-y-5">
        <input
          type="email"
          placeholder="이메일"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <div className="flex items-center justify-between text-base text-gray-700">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            자동 로그인
          </label>
          <a href="#" className="text-green-600 hover:underline">비밀번호 찾기</a>
        </div>
        <button
          type="submit"
          className="w-full bg-red-300 text-white py-3 text-base rounded-md font-semibold hover:bg-red-400 cursor-pointer"
        >
          로그인
        </button>

        {/* 소셜 로그인 구분선 */}
        <div className="text-center text-sm text-gray-400">또는</div>

        {/* 소셜 로그인 버튼 */}
        <button className="w-full py-3 rounded-md text-base text-black bg-[#FEE500] font-semibold cursor-pointer">
          카카오로 로그인
        </button>
        <button className="w-full py-3 rounded-md text-base text-white bg-green-500 font-semibold cursor-pointer">
          네이버로 로그인
        </button>

        {/* 회원가입 링크 */}
        <div className="text-center text-base mt-4 text-gray-700">
          계정이 없으신가요?{' '}
          <a href="#" className="text-green-600 font-semibold hover:underline">회원가입</a>
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
