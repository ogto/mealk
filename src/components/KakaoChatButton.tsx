'use client'

export default function KakaoChatButton() {
  return (
    <a
      href="https://pf.kakao.com/_xoKxcPxj/chat"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
    >
      <img
        src="/images/kakao-chat.png"
        alt="카카오톡 채팅"
        className="w-16 h-16 rounded-full hover:scale-110 transition-transform cursor-pointer object-cover"
      />
    </a>
  )
}
