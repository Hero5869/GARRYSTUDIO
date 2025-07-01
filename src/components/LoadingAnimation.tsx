
import { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';

const LoadingAnimation = () => {
  const [animationStage, setAnimationStage] = useState('initial'); // initial, camera-click, flash, fade-out
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      // Stage 1: Show camera (1 second)
      setTimeout(() => {
        setAnimationStage('camera-click');
        // Play camera shutter sound
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHnfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkE==');
        audio.volume = 0.5;
        audio.play().catch(() => {
          console.log('Camera shutter sound effect');
        });
      }, 1000);

      // Stage 2: Flash effect (0.5 seconds after click)
      setTimeout(() => {
        setAnimationStage('flash');
      }, 1300);

      // Stage 3: Start fade to black (0.5 seconds after flash)
      setTimeout(() => {
        setAnimationStage('fade-out');
      }, 1800);

      // Stage 4: Complete fade out (1 second fade duration)
      setTimeout(() => {
        setIsVisible(false);
      }, 2800);
    };

    sequence();
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-1000 ${
      animationStage === 'fade-out' ? 'bg-[#10100f]' : 'bg-[#fff503]'
    }`}>
      {/* Camera container with 3D effects */}
      <div className="relative z-10">
        <div className="relative">
          {/* Enhanced 3D Camera body */}
          <div 
            className={`w-40 h-28 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-2xl transition-all duration-300 transform-gpu ${
              animationStage === 'camera-click' ? 'scale-95 shadow-yellow-400/50' : 'scale-100'
            }`}
            style={{
              boxShadow: animationStage === 'camera-click' 
                ? '0 0 40px rgba(255, 245, 3, 0.6), 0 20px 60px rgba(0, 0, 0, 0.5)' 
                : '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Camera lens with enhanced 3D effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div 
                className={`w-20 h-20 bg-gradient-to-br from-gray-900 to-black rounded-full border-4 border-gray-600 flex items-center justify-center transition-all duration-300 ${
                  animationStage === 'camera-click' ? 'scale-90 border-[#fff503]' : 'scale-100'
                }`}
                style={{
                  boxShadow: 'inset 0 -8px 16px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Inner lens rings */}
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-full border-2 border-gray-500 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center">
                    <Camera 
                      className={`w-4 h-4 text-[#fff503] transition-all duration-300 ${
                        animationStage === 'camera-click' ? 'scale-125 text-white' : 'scale-100'
                      }`} 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced camera flash */}
            <div 
              className={`absolute -top-3 left-8 w-8 h-6 rounded-sm transition-all duration-200 ${
                animationStage === 'camera-click' 
                  ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]' 
                  : 'bg-gray-200'
              }`}
              style={{
                boxShadow: animationStage === 'camera-click' 
                  ? '0 0 20px rgba(255, 255, 255, 0.8)' 
                  : 'none'
              }}
            ></div>

            {/* Camera details */}
            <div className="absolute top-3 right-6 w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="absolute bottom-3 left-6 w-6 h-2 bg-gray-600 rounded"></div>
            <div className="absolute bottom-3 right-6 w-4 h-2 bg-gray-600 rounded"></div>
          </div>

          {/* Shutter click effect rings */}
          {animationStage === 'camera-click' && (
            <>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white rounded-full animate-ping opacity-50" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white rounded-full animate-ping opacity-25" style={{ animationDelay: '0.4s' }}></div>
            </>
          )}
        </div>

        {/* Loading text */}
        <div className="text-center mt-12">
          <p className={`text-2xl font-bold transition-all duration-500 ${
            animationStage === 'fade-out' ? 'text-[#fff503]' : 'text-[#10100f]'
          }`}>
            {animationStage === 'initial' && 'Get Ready...'}
            {animationStage === 'camera-click' && 'Click!'}
            {animationStage === 'flash' && 'Capturing Magic...'}
            {animationStage === 'fade-out' && 'Welcome!'}
          </p>
        </div>
      </div>

      {/* Full screen flash overlay */}
      <div 
        className={`absolute inset-0 bg-white transition-opacity duration-300 ${
          animationStage === 'flash' ? 'opacity-90' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default LoadingAnimation;
