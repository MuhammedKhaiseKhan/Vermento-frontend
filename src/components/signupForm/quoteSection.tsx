import React from "react";

const QuoteSection: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-[linear-gradient(135deg,#111_0%,#222_50%,#111_100%)] relative overflow-hidden">
      <div className="relative w-[400px] h-[400px] flex flex-col items-center justify-center">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        
        <div className="text-center z-10 max-w-[350px]">
          <div className="text-2xl font-bold leading-[1.3] mb-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            "The best mentors are those who show you where to look, but don't tell you what to see."
          </div>
          <div className="text-sm text-white/70 italic mb-5">— Alexandra K. Trenfor</div>
          <div className="text-base text-white/60 font-medium tracking-[2px] uppercase">
            Grow • Learn • Succeed
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;