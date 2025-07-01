
import { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#10100f] flex items-center justify-center z-50">
      <div className="relative">
        {/* Camera lens animation */}
        <div className="w-32 h-32 relative">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-[#fff503] rounded-full animate-pulse"></div>
          
          {/* Lens blades */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute top-1/2 left-1/2 w-12 h-1 bg-[#fff503] origin-left transform -translate-y-1/2 ${
                isAnimating ? 'animate-spin' : ''
              }`}
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(20px)`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
          
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-[#fff503] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
        
        {/* Loading text */}
        <div className="text-center mt-8">
          <p className="text-[#fff503] text-xl font-semibold animate-pulse">Loading Gallery...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
