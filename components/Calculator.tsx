import React, { useState, useEffect, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import { Calculator as CalcIcon, Info, AlertCircle } from 'lucide-react';
import { LeaveCalculation } from '../types';

// Example data for the chart explanation
const chartData = [
  { ot: 3, calc: 1.5, final: 2, label: '3h' },
  { ot: 5, calc: 2.5, final: 2, label: '5h' },
  { ot: 8, calc: 4, final: 4, label: '8h' },
  { ot: 13, calc: 6.5, final: 6, label: '13h' },
  { ot: 16, calc: 8, final: 8, label: '16h' },
];

export const Calculator: React.FC = () => {
  const [inputOt, setInputOt] = useState<string>('');
  const [result, setResult] = useState<LeaveCalculation | null>(null);

  const calculate = useCallback((value: number) => {
    if (isNaN(value) || value < 0) {
      setResult(null);
      return;
    }

    const calculated = value * 0.5;
    // Logic: Round to nearest multiple of 2
    const final = Math.round(calculated / 2) * 2;

    const breakdown: string[] = [];
    let remaining = final;

    if (remaining >= 8) {
      const days = Math.floor(remaining / 8);
      breakdown.push(`${days}일`);
      remaining %= 8;
    }
    if (remaining >= 4) {
        breakdown.push(`반차(4h)`);
        remaining %= 4;
    }
    if (remaining >= 2) {
        breakdown.push(`반반차(2h)`);
        remaining %= 2;
    }

    setResult({
      otHours: value,
      calculatedHours: calculated,
      finalHours: final,
      breakdown: breakdown.length > 0 ? breakdown : ['미부여'],
      isEligible: final > 0
    });
  }, []);

  useEffect(() => {
    const val = parseFloat(inputOt);
    calculate(val);
  }, [inputOt, calculate]);

  return (
    <section id="calculator" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">리프레시 계산기</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            승인된 연장 근로 시간을 입력하면 예상 리프레시 휴가를 즉시 확인할 수 있습니다.
            휴가는 2시간 단위로 반올림되어 산정됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Input & Result Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-gray-200 rounded-3xl shadow-card overflow-hidden relative">
               <div className="absolute top-0 left-0 w-full h-2 bg-google-blue"></div>
               <div className="p-8">
                  <label htmlFor="ot-input" className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                    사전 승인된 총 연장 근로 (시간)
                  </label>
                  <div className="relative rounded-md shadow-sm mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <CalcIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      name="ot-input"
                      id="ot-input"
                      className="focus:ring-google-blue focus:border-google-blue block w-full pl-12 pr-12 py-4 sm:text-lg border-gray-300 rounded-xl bg-gray-50 placeholder-gray-400 transition-colors"
                      placeholder="예: 13"
                      value={inputOt}
                      onChange={(e) => setInputOt(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">시간</span>
                    </div>
                  </div>

                  {result ? (
                    <div className="space-y-6 animate-fade-in">
                      <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                        <span className="text-gray-600">산정 시간 (50%)</span>
                        <span className="text-lg font-medium text-gray-500">{result.calculatedHours.toFixed(1)} 시간</span>
                      </div>
                      <div className="bg-indigo-50 rounded-2xl p-6 text-center">
                        <p className="text-indigo-600 text-sm font-bold uppercase tracking-wider mb-1">최종 부여 휴가</p>
                        <div className="text-4xl font-bold text-google-blue mb-2">
                          {result.finalHours} <span className="text-2xl font-medium text-indigo-400">시간</span>
                        </div>
                        <div className="inline-block bg-white px-4 py-1 rounded-full shadow-sm text-indigo-800 font-medium text-sm">
                          {result.breakdown.join(' + ')}
                        </div>
                      </div>
                      {result.calculatedHours > 0 && result.calculatedHours !== result.finalHours && (
                        <div className="flex items-start space-x-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                          <Info size={14} className="mt-0.5 flex-shrink-0 text-google-blue" />
                          <span>
                            {result.finalHours > result.calculatedHours 
                              ? '유리한 반올림이 적용되어 0.5시간이 추가되었습니다.' 
                              : '2시간 단위 산정 기준에 따라 소수점 이하 시간이 제외되었습니다.'}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-10 text-gray-400">
                      <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CalcIcon size={24} />
                      </div>
                      <p>시간을 입력하면 결과가 표시됩니다.</p>
                    </div>
                  )}
               </div>
            </div>
          </div>

          {/* Right: Chart & Explanation */}
          <div className="lg:col-span-7">
             <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 h-full flex flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">산정 기준 시각화</h3>
                    <p className="text-sm text-gray-500">산정 시간(50%) 대비 최종 부여 시간(2시간 단위 반올림)</p>
                  </div>
                  <div className="hidden sm:flex space-x-4 text-xs">
                    <div className="flex items-center"><div className="w-3 h-3 bg-indigo-300 rounded-full mr-1"></div>산정(50%)</div>
                    <div className="flex items-center"><div className="w-3 h-3 bg-google-blue rounded-full mr-1"></div>최종부여</div>
                  </div>
                </div>

                <div className="flex-grow min-h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                      barGap={2}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                      <XAxis 
                        dataKey="label" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#6b7280', fontSize: 12}}
                        dy={10}
                        label={{ value: '총 연장근로 시간', position: 'insideBottom', offset: -5, fontSize: 12, fill: '#9ca3af' }}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#6b7280', fontSize: 12}}
                      />
                      <Tooltip 
                        cursor={{fill: 'rgba(0,0,0,0.03)'}}
                        contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                      />
                      <ReferenceLine y={0} stroke="#e5e7eb" />
                      <Bar dataKey="calc" name="산정 시간" fill="#a5b4fc" radius={[4, 4, 0, 0]} barSize={20} />
                      <Bar dataKey="final" name="최종 부여" fill="#4285F4" radius={[4, 4, 0, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-xl border border-indigo-100 flex items-start space-x-3">
                   <AlertCircle className="text-indigo-500 flex-shrink-0 mt-1" size={18} />
                   <div className="text-sm text-gray-600">
                      <span className="font-bold text-gray-900">핵심 포인트: </span>
                      3시간 연장근로 시 50%인 1.5시간이 산정되지만, 2시간 단위 반올림 규칙에 따라 최종 <span className="font-bold text-google-blue">2시간(반반차)</span>이 부여됩니다. 이는 직원에게 유리한 방향으로 설정된 기준입니다.
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};