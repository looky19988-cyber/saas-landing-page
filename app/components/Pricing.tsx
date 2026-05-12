"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#EBE9F6] px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">단순하고 투명한 가격</h2>
          <p className="text-lg text-gray-600 mb-8">필요에 맞는 플랜을 선택하세요.</p>
          
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-200">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${!isAnnual ? 'bg-[#F3F4F6] text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              월간
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${isAnnual ? 'bg-[#F3F4F6] text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              연간 (20% 할인)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">$0</span>
              <span className="text-gray-500">/ 월</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>월 5개 문서</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>기본 문법 검사</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>이메일 지원</span>
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-[#6B46C1] text-[#6B46C1] font-semibold hover:bg-purple-50 transition-colors">
              시작하기
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#6B46C1] relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6B46C1] text-white px-4 py-1 rounded-full text-sm font-bold">
              가장 인기
            </div>
            <h3 className="text-xl font-bold text-[#6B46C1] mb-2">Pro</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">{isAnnual ? '$15' : '$19'}</span>
              <span className="text-gray-500">/ 월</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>무제한 문서</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>고급 AI 기능</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>우선 지원</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>API 액세스</span>
              </li>
            </ul>
            <button className="w-full py-3 rounded-full bg-[#6B46C1] text-white font-semibold hover:bg-[#553C9A] transition-colors shadow-md">
              Pro 시작하기
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">{isAnnual ? '$39' : '$49'}</span>
              <span className="text-gray-500">/ 월</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>Pro 전체 포함</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>맞춤 AI 학습</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>전담 매니저</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
                <span>SSO 지원</span>
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
              영업팀 문의
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
