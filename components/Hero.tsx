import React from 'react';
import { HeartHandshake, Coffee, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="intro" className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-google-blue text-xs font-bold tracking-wide uppercase mb-6">
          HR Policy Guide
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
          수고한 당신을 위한<br className="hidden sm:block" />
          <span className="text-google-blue">리프레시 휴가</span> 제도
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          단기 프로젝트의 성공을 위해 헌신해주신 임직원 여러분의 노고에 감사드리며,
          충분한 휴식과 재충전을 위한 배려적 유급 휴가를 지원합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:shadow-card transition-shadow duration-300">
            <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-google-red">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">배려와 감사</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              법적 의무를 넘어, 회사가 자율적으로 부여하는 순수 복리후생 제도입니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:shadow-card transition-shadow duration-300">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-google-blue">
              <Coffee size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">확실한 휴식</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              연장 근로 시간의 50%를 계산하여 반차, 반반차 등 유연하게 사용 가능합니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:shadow-card transition-shadow duration-300">
            <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-google-green">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">공정한 산정</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              사전 승인된 연장 근로에 한하여 투명하고 명확한 기준을 적용합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
