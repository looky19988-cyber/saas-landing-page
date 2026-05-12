import { PenTool, CheckCircle, Target, Globe, LayoutTemplate, Users } from "lucide-react";

const features = [
  {
    icon: <PenTool className="w-6 h-6 text-[#6B46C1]" />,
    title: "AI 글쓰기 어시스턴트",
    description: "클릭 한 번으로 초안을 작성하고 콘텐츠를 확장합니다."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-[#6B46C1]" />,
    title: "완벽한 문법",
    description: "언제나 정확하고 매끄러운 문장을 유지하세요."
  },
  {
    icon: <Target className="w-6 h-6 text-[#6B46C1]" />,
    title: "브랜드 맞춤형",
    description: "여러분의 고유한 브랜드 목소리에 맞게 조절합니다."
  },
  {
    icon: <Globe className="w-6 h-6 text-[#6B46C1]" />,
    title: "다국어 지원",
    description: "30개 이상의 다양한 언어로 자연스럽게 작성합니다."
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-[#6B46C1]" />,
    title: "템플릿 라이브러리",
    description: "100개 이상의 바로 쓸 수 있는 템플릿을 제공합니다."
  },
  {
    icon: <Users className="w-6 h-6 text-[#6B46C1]" />,
    title: "실시간 협업",
    description: "팀원들과 실시간으로 함께 작성하고 피드백을 나눕니다."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#FAFAFA] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">완벽한 글쓰기를 위한 도구</h2>
          <p className="text-lg text-gray-600">복잡한 작업은 AI에게 맡기고 창의력에 집중하세요.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
