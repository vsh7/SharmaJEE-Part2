import React from 'react';

export function ConversationHero() {
  return (
    <div className="sm:py-4 py-6 relative grid place-items-center text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-[500]">
      {/* Responsive Student Image */}
      <img
        alt="hero-student"
        src="https://static.pw.live/ua/images/hero-student-m.webp"
        className="sm:hidden block h-[225px] w-[320px] bg-center bg-no-repeat bg-contain"
      />
      <img
        alt="hero-student"
        src="https://static.pw.live/ua/images/hero-student-w.webp"
        className="sm:block hidden h-[318px] w-[600px] bg-center bg-no-repeat bg-contain"
      />

      {/* Bubble 1 */}
      <div className="bg-white p-2 sm:h-[36px] h-[34px] absolute sm:right-[180px] sm:top-[85px] right-[40px] top-[48px] rounded-md z-0 shadow-[0_0_8px_0_rgba(0,0,0,0.08)]">
        <div className="w-[20px] h-full absolute flex right-[-13px] top-0 z-[-1]">
          <div className="bg-white sm:w-[14px] sm:h-[14px] w-[12px] h-[12px] rounded-sm my-auto rotate-45" />
        </div>
        <p>Sharma Sir,What is your vision?</p>
      </div>

      {/* Bubble 2 */}
      <div className="bg-[#140D52] p-2 sm:h-[36px] h-[34px] text-white absolute sm:left-[170px] sm:top-[158px] left-[40px] top-[115px] rounded-md z-0 shadow-[0_0_8px_0_rgba(0,0,0,0.08)]">
        <div className="w-[20px] h-full absolute flex left-[-6px] top-0 z-[-1]">
          <div className="bg-[#140D52] sm:w-[14px] sm:h-[14px] w-[12px] h-[12px] rounded-sm my-auto rotate-45" />
        </div>
        <p>To make quality education accessible</p>
      </div>

      {/* Bubble 3 */}
      <div className="bg-[#140D52] px-2 pt-1 pb-2 sm:h-[30px] h-[28px] text-white absolute sm:left-[170px] sm:top-[185px] left-[40px] top-[141px] rounded-md z-[1] shadow-[0_0_8px_0_rgba(0,0,0,0.08)] sm:w-[222px] w-[195px]">
        <p>and affordable with </p>
      </div>
      <div className="bg-[#140D52] px-2 pt-1 pb-2 sm:h-[30px] h-[28px] text-white absolute sm:left-[170px] sm:top-[208px] left-[40px] top-[141px] rounded-md z-[1] shadow-[0_0_8px_0_rgba(0,0,0,0.08)] sm:w-[222px] w-[195px]">
        <p>personalised guidance.</p>
      </div>
    </div>
  );
}