import React from 'react';
import { CheckCircle2, Ban, Clock, Calendar } from 'lucide-react';

export const Rules: React.FC = () => {
  return (
    <>
      <section id="eligibility" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">대상 및 기준</h2>
            <p className="mt-4 text-gray-600">누가, 언제, 어떤 기준으로 적용받나요?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card 1 */}
             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-110 transition-transform"></div>
                <div className="relative z-10">
                   <div className="w-12 h-12 bg-blue-100 text-google-blue rounded-2xl flex items-center justify-center mb-6">
                      <CheckCircle2 size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3">적용 대상</h3>
                   <p className="text-gray-600 leading-relaxed">
                      포괄임금제로 계약된 직원 중, 
                      <span className="font-medium text-google-blue"> 단기 프로젝트</span>에 참여하여 
                      <span className="font-medium text-gray-900"> 사전 승인된 연장 근로</span>를 수행한 분
                   </p>
                </div>
             </div>

             {/* Card 2 */}
             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-50 rounded-full group-hover:scale-110 transition-transform"></div>
                <div className="relative z-10">
                   <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                      <Calendar size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3">적용 기간</h3>
                   <p className="text-gray-600 leading-relaxed">
                      회사가 지정한 <span className="font-medium text-gray-900">단기 프로젝트 기간 내</span>에 발생한 연장 근로에 한하여 한정적으로 적용됩니다.
                   </p>
                </div>
             </div>

             {/* Card 3 */}
             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gray-100 rounded-full group-hover:scale-110 transition-transform"></div>
                <div className="relative z-10">
                   <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center mb-6">
                      <Clock size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3">프로젝트 구분</h3>
                   <p className="text-gray-600 leading-relaxed">
                      프로젝트의 장·단기 구분은 프로젝트의 성격과 일정을 고려하여 회사 및 담당 PM이 최종 판단합니다.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section id="rules" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
             <h2 className="text-3xl font-bold text-gray-900">금지 사항 및 주의</h2>
             <p className="mt-2 text-gray-600">근로자의 건강권 보호를 위해 아래 사항을 엄격히 금지합니다.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-1 shadow-sm border border-red-100 flex flex-col md:flex-row overflow-hidden">
               <div className="bg-red-50 p-6 flex flex-col items-center justify-center md:w-48 flex-shrink-0 text-google-red">
                  <Ban size={40} />
                  <span className="font-bold mt-2">절대 금지</span>
               </div>
               <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">야간 및 휴일 근로 제한</h3>
                  <p className="text-gray-600 mb-4">
                     오후 10시부터 익일 6시까지의 야간 근로와 주휴일/법정공휴일 근로는 리프레시 휴가 적용 대상이 아니며, 원칙적으로 금지됩니다.
                  </p>
                  <div className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg inline-block">
                     ※ 불가피한 경우 반드시 사전에 PM 및 회사와 협의해야 합니다.
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-2xl p-1 shadow-sm border border-orange-100 flex flex-col md:flex-row overflow-hidden">
               <div className="bg-orange-50 p-6 flex flex-col items-center justify-center md:w-48 flex-shrink-0 text-orange-600">
                  <Clock size={40} />
                  <span className="font-bold mt-2">52시간 준수</span>
               </div>
               <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">주 52시간 초과 불가</h3>
                  <p className="text-gray-600 mb-3">
                     연장 근로를 포함하여 주 52시간을 초과하는 근로는 명백한 법적 위반 사항입니다.
                     어떠한 경우에도 이를 초과하여 근무할 수 없습니다.
                  </p>
                  <p className="text-xs text-gray-400">
                     * 회사와 사전 승인 없는 개인의 임의적 초과 근로에 대해서는 수당이나 책임을 부담하지 않습니다.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
