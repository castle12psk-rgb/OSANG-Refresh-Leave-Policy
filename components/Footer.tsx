import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
           <p className="text-gray-900 font-semibold"><span className="text-google-blue">(주)오상</span>테크놀로지</p>
           <p className="text-gray-500 text-sm mt-1">Internal HR Document</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} (주)오상테크놀로지. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-300 mt-2">
            본 문서는 사내 배포용으로 외부 유출을 금합니다.
          </p>
        </div>
      </div>
    </footer>
  );
};