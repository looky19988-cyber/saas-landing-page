import { Sparkles, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#E6E6FF] via-[#F3E8FF] to-white pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#6B46C1] bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 shadow-sm border border-purple-100">
          <Sparkles className="w-4 h-4" />
          <span>AI Writing Assistant 2.0</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          희원이와 함께 <span className="text-[#6B46C1]">더 빠르게 더 잘 쓰세요</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
          아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요. 창의적인 흐름을 방해하지 않는 당신만의 지능형 파트너.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="#trial" 
            className="w-full sm:w-auto bg-[#6B46C1] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#553C9A] transition-colors shadow-md text-lg"
          >
            무료 체험 시작
          </Link>
          <button className="w-full sm:w-auto bg-white text-gray-800 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 flex items-center justify-center gap-2 text-lg">
            <Play className="w-5 h-5 text-gray-600" />
            <span>데모 보기</span>
          </button>
        </div>
      </div>
    </section>
  );
}
