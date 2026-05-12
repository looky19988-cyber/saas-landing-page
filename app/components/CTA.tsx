export default function CTA() {
  return (
    <section className="py-24 bg-[#EBE9F6] px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 md:p-16 text-center shadow-lg border border-gray-50">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          글쓰기를 혁신할 준비가<br className="hidden md:block" /> 되셨나요?
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          10,000명 이상의 작가와 함께하세요.
        </p>
        <div className="flex flex-col items-center">
          <button className="bg-[#6B46C1] text-white px-10 py-4 rounded-full font-bold hover:bg-[#553C9A] transition-colors shadow-md text-lg w-full sm:w-auto mb-4">
            무료 체험 시작
          </button>
          <span className="text-sm text-gray-500">신용카드 정보 불필요</span>
        </div>
      </div>
    </section>
  );
}
