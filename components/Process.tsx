import React from 'react';
import { ArrowRight, FileText, UserCheck, CalendarClock, CheckCircle } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-white border-y border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-google-blue font-bold tracking-wider uppercase text-sm">Workflow</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">신청 절차</h2>
          <p className="mt-4 text-gray-600">투명하고 공정한 휴가 부여를 위해 아래 절차를 준수해 주세요.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                 <FileText className="text-gray-500 group-hover:text-google-blue" size={24} />
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase mb-1">Step 1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">연장근로 필요 발생</h3>
              <p className="text-sm text-gray-500">업무상 필요에 의해<br/>직원이 연장근로 소요 파악</p>
            </div>

            {/* Step 2 */}
            <div className="group bg-white p-6 rounded-2xl border-2 border-google-blue shadow-md scale-105 transform transition-all text-center relative">
               <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-google-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                  Must
               </div>
              <div className="w-14 h-14 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                 <UserCheck className="text-google-blue" size={24} />
              </div>
              <div className="text-xs font-bold text-google-blue uppercase mb-1">Step 2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">사전 승인</h3>
              <p className="text-sm text-gray-500">PM 및 회사 관리자에게<br/>사전 승인 획득 (필수)</p>
            </div>

            {/* Step 3 */}
            <div className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                 <CalendarClock className="text-gray-500 group-hover:text-google-blue" size={24} />
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase mb-1">Step 3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">근로 수행</h3>
              <p className="text-sm text-gray-500">승인된 시간 내에서<br/>연장 근로 성실 수행</p>
            </div>

             {/* Step 4 */}
             <div className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4">
                 <CheckCircle className="text-google-green" size={24} />
              </div>
              <div className="text-xs font-bold text-google-green uppercase mb-1">Final</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">휴가 부여</h3>
              <p className="text-sm text-gray-500">시간 검토 후<br/>최종 리프레시 휴가 확정</p>
            </div>
          </div>
          
          {/* Mobile Arrow indicators */}
          <div className="md:hidden flex flex-col items-center space-y-2 py-4 absolute inset-0 pointer-events-none justify-between opacity-10">
             <ArrowRight className="rotate-90" />
             <ArrowRight className="rotate-90" />
             <ArrowRight className="rotate-90" />
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600 border border-gray-100">
           <div className="bg-white p-2 rounded-lg shadow-sm text-google-red">
              <ArrowRight size={20} />
           </div>
           <p>
              <span className="font-bold text-gray-900">주의:</span> 사전 승인받지 않은 임의 연장 근로는 리프레시 휴가 산정 시간으로 <span className="underline decoration-google-red decoration-2 underline-offset-2">인정되지 않습니다.</span>
           </p>
        </div>
      </div>
    </section>
  );
};
