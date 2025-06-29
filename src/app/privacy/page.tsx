export default function PrivacyPage() {
  return (
    <div className="bg-white px-4 py-16 max-w-[800px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black">개인정보처리방침</h1>
      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
        {`1. 수집하는 개인정보 항목
회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.

2. 개인정보의 수집 및 이용목적
회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
- 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산

...`}
      </div>
    </div>
  );
}
