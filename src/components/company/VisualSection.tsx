'use client';

export default function VisualSection() {
  return (
    <section className="bg-white w-full py-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* 왼쪽 텍스트 영역 */}
        <div className="flex-1 text-center">
          <h2 className="text-[60px] md:text-[104px] font-extrabold text-gray-900 leading-tight mb-6">
            Hello, <span className="text-green-400">밀키트</span>
          </h2>
          <a
            href="#story"
            className="inline-flex items-center text-red-300 hover:text-red-600 transition font-medium text-lg"
          >
            정채움 스토리 보기 &gt;
          </a>
        </div>

        {/* 오른쪽 이미지 영역 */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/images/hello.png"
            alt="정채움 손인사"
            className="w-full max-w-[250px] md:max-w-[300px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
