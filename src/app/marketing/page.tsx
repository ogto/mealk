// app/marketing/page.tsx

export default function MarketingPage() {
  return (
    <div className="bg-white px-4 py-16 max-w-[800px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black">마케팅 수신 동의</h1>
      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
        {`1. 마케팅 및 광고 목적의 개인정보 이용 동의

회사는 아래와 같은 목적으로 개인정보를 이용합니다.
- 신제품 출시, 이벤트, 할인 혜택 등 각종 마케팅 정보 제공
- 고객 맞춤형 서비스 및 혜택 안내

2. 수집 항목
- 필수 항목: 이름, 연락처, 이메일

3. 보유 및 이용 기간
- 개인정보는 동의일로부터 회원 탈퇴 또는 동의 철회 시까지 보유 및 이용됩니다.

4. 동의 거부 권리
- 마케팅 정보 수신 동의를 거부하실 수 있으며, 거부 시에도 서비스 이용에 제한은 없습니다.
- 다만, 이벤트 및 혜택 안내는 제공되지 않을 수 있습니다.

※ 마케팅 수신 동의 철회는 [고객센터] 또는 [내 정보 관리]를 통해 언제든지 가능.`}
      </div>
    </div>
  );
}
