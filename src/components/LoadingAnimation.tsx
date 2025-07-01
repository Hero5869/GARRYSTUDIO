
import { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';

const LoadingAnimation = () => {
  const [animationStage, setAnimationStage] = useState('initial'); // initial, camera-click, flash, complete
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      // Stage 1: Show camera and wait
      setTimeout(() => {
        setAnimationStage('camera-click');
        // Play camera shutter sound
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHnfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkE==');
        audio.volume = 0.3;
        audio.play().catch(() => {
          // Fallback if audio doesn't play
          console.log('Camera shutter sound effect');
        });
      }, 1000);

      // Stage 2: Flash effect
      setTimeout(() => {
        setAnimationStage('flash');
      }, 1500);

      // Stage 3: Fade out
      setTimeout(() => {
        setAnimationStage('complete');
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }, 2000);
    };

    sequence();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#10100f] flex items-center justify-center z-50 transition-all duration-500">
      {/* Yellow flash overlay */}
      <div 
        className={`absolute inset-0 bg-[#fff503] transition-opacity duration-300 ${
          animationStage === 'flash' ? 'opacity-80' : 'opacity-0'
        }`}
      ></div>

      {/* Camera container */}
      <div className="relative z-10">
        <div className="relative">
          {/* Camera body */}
          <div 
            className={`w-32 h-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl transition-all duration-300 ${
              animationStage === 'camera-click' ? 'scale-95' : 'scale-100'
            }`}
          >
            {/* Camera lens */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div 
                className={`w-16 h-16 bg-black rounded-full border-4 border-gray-600 flex items-center justify-center transition-all duration-200 ${
                  animationStage === 'camera-click' ? 'scale-90' : 'scale-100'
                }`}
              >
                <Camera 
                  className={`w-8 h-8 text-[#fff503] transition-all duration-200 ${
                    animationStage === 'camera-click' ? 'scale-110' : 'scale-100'
                  }`} 
                />
              </div>
            </div>

            {/* Camera flash */}
            <div 
              className={`absolute -top-2 left-6 w-6 h-4 bg-white rounded-sm transition-all duration-100 ${
                animationStage === 'camera-click' ? 'opacity-100 bg-[#fff503]' : 'opacity-60'
              }`}
            ></div>

            {/* Camera button */}
            <div 
              className={`absolute top-2 right-4 w-3 h-3 bg-gray-400 rounded-full transition-all duration-200 ${
                animationStage === 'camera-click' ? 'bg-[#fff503] scale-90' : 'scale-100'
              }`}
            ></div>
          </div>

          {/* Click animation rings */}
          {animationStage === 'camera-click' && (
            <>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-[#fff503] rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-[#fff503] rounded-full animate-ping opacity-50" style={{ animationDelay: '0.2s' }}></div>
            </>
          )}
        </div>

        {/* Loading text */}
        <div className="text-center mt-8">
          <p className="text-[#fff503] text-xl font-semibold">
            {animationStage === 'initial' && 'Get Ready...'}
            {animationStage === 'camera-click' && 'Click!'}
            {animationStage === 'flash' && 'Capturing Magic...'}
            {animationStage === 'complete' && 'Welcome!'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
