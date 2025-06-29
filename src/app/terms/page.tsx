export default function TermsPage() {
  return (
    <div className="bg-white px-4 py-16 max-w-[800px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black">이용약관</h1>
      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
        {`제 1 조 (목적)
이 약관은 주식회사 정채움(이하 "회사")이 제공하는 서비스의 이용에 관한 조건 및 절차를 규정함을 목적으로 합니다.

제 2 조 (약관의 효력 및 변경)
1. 이 약관은 사이트에 게시함으로써 효력을 발생합니다.
2. 회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 공지사항을 통해 공지합니다.

...`}
      </div>
    </div>
  );
}
