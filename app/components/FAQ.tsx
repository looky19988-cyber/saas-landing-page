"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "무료 체험은 어떻게 진행되나요?",
    answer: "가입 후 14일 동안 Pro 플랜의 모든 기능을 무료로 사용할 수 있습니다. 결제 정보는 필요하지 않습니다."
  },
  {
    question: "언제든지 구독을 취소할 수 있나요?",
    answer: "네, 설정 페이지에서 언제든지 클릭 한 번으로 구독을 취소할 수 있습니다. 위약금은 없습니다."
  },
  {
    question: "제 데이터는 안전한가요?",
    answer: "물론입니다. 당사는 업계 표준 암호화를 사용하여 모든 데이터를 보호하며, 귀하의 데이터를 AI 모델 학습에 사용하지 않습니다."
  },
  {
    question: "환불이 가능한가요?",
    answer: "결제 후 7일 이내에 불만족하실 경우 전액 환불해 드립니다. 고객 지원팀에 문의해 주세요."
  },
  {
    question: "어떤 결제 수단을 지원하나요?",
    answer: "모든 주요 신용카드, 체크카드, 카카오페이, 네이버페이, 그리고 PayPal을 지원합니다."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA] px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">자주 묻는 질문</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-[#6B46C1] flex-shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#6B46C1] flex-shrink-0 ml-4" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
