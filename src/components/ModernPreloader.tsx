
import { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';

const ModernPreloader = ({ onComplete }: { onComplete: () => void }) => {
  const [loadProgress, setLoadProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCamera, setShowCamera] = useState(true);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;
    let animationFrameId: number;
    
    // Track actual loading progress
    let actualProgress = 0;
    let targetProgress = 0;
    let resourcesLoaded = 0;
    let totalResources = 1; // Start with 1 to avoid division by zero

    // Smooth progress animation
    const animateProgress = () => {
      actualProgress += (targetProgress - actualProgress) * 0.08;
      const roundedProgress = Math.floor(actualProgress);
      
      setLoadProgress(roundedProgress);
      
      if (Math.abs(targetProgress - actualProgress) > 0.5) {
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    };

    // Update target progress
    const updateProgress = () => {
      const newProgress = Math.min((resourcesLoaded / totalResources) * 90, 90); // Cap at 90% until everything is done
      targetProgress = newProgress;
      animateProgress();
    };

    // Track resource loading
    const trackResourceLoad = () => {
      resourcesLoaded++;
      console.log(`Resource loaded: ${resourcesLoaded}/${totalResources}`);
      updateProgress();
    };

    // Calculate and track all resources
    const initializeTracking = () => {
      // Reset counters
      resourcesLoaded = 0;
      totalResources = 0;

      // Count and track images
      const images = document.querySelectorAll('img');
      totalResources += images.length;
      
      images.forEach(img => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.complete && imageElement.naturalWidth > 0) {
          resourcesLoaded++;
        } else {
          const onLoad = () => {
            trackResourceLoad();
            imageElement.removeEventListener('load', onLoad);
            imageElement.removeEventListener('error', onLoad);
          };
          imageElement.addEventListener('load', onLoad);
          imageElement.addEventListener('error', onLoad);
        }
      });

      // Count and track stylesheets
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      totalResources += stylesheets.length;
      
      stylesheets.forEach(link => {
        const linkElement = link as HTMLLinkElement;
        try {
          if (linkElement.sheet && linkElement.sheet.cssRules) {
            resourcesLoaded++;
          } else {
            const onLoad = () => {
              trackResourceLoad();
              linkElement.removeEventListener('load', onLoad);
              linkElement.removeEventListener('error', onLoad);
            };
            linkElement.addEventListener('load', onLoad);
            linkElement.addEventListener('error', onLoad);
          }
        } catch (e) {
          // If we can't access cssRules, assume it's loaded
          resourcesLoaded++;
        }
      });

      // Track fonts
      if (document.fonts) {
        totalResources += 1;
        document.fonts.ready.then(() => {
          trackResourceLoad();
        });
      }

      // Track scripts
      const scripts = document.querySelectorAll('script[src]');
      totalResources += scripts.length;
      scripts.forEach(() => {
        resourcesLoaded++; // Assume scripts are loaded if we're here
      });

      // DOM ready
      totalResources += 1;
      if (document.readyState === 'complete') {
        resourcesLoaded++;
      } else {
        const onLoad = () => {
          trackResourceLoad();
          window.removeEventListener('load', onLoad);
        };
        window.addEventListener('load', onLoad);
      }

      console.log(`Total resources to track: ${totalResources}`);
      
      // Initial progress update
      updateProgress();

      // Fallback: ensure we reach 100% after a reasonable time
      timeoutId = setTimeout(() => {
        targetProgress = 100;
        animateProgress();
      }, 3000);
    };

    // Start tracking after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeTracking);
    } else {
      setTimeout(initializeTracking, 100);
    }

    // Smooth progress updates
    progressInterval = setInterval(() => {
      // Gradually increase progress even if resources aren't loading
      if (targetProgress < 90 && Date.now() % 500 === 0) {
        targetProgress = Math.min(targetProgress + 2, 90);
        animateProgress();
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(progressInterval);
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('DOMContentLoaded', initializeTracking);
    };
  }, []);

  useEffect(() => {
    if (loadProgress >= 100 && !isComplete) {
      setIsComplete(true);
      
      // Camera click animation and sound
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkE=');
      audio.volume = 0.3;
      audio.play().catch(() => console.log('Camera shutter sound'));

      // Transition to main site after animation
      setTimeout(() => {
        setShowCamera(false);
        setTimeout(onComplete, 800);
      }, 600);
    }
  }, [loadProgress, isComplete, onComplete]);

  // Ensure we reach 100% after a maximum time
  useEffect(() => {
    const maxLoadTime = setTimeout(() => {
      if (!isComplete) {
        setLoadProgress(100);
      }
    }, 5000);

    return () => clearTimeout(maxLoadTime);
  }, [isComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-1000 ${
      showCamera ? 'bg-[#fff503]' : 'bg-[#10100f]'
    }`}>
      {/* Camera Icon */}
      <div className="relative mb-16">
        <div 
          className={`transition-all duration-500 ${
            isComplete ? 'scale-110 rotate-12' : 'scale-100'
          }`}
        >
          <div 
            className={`w-32 h-24 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 ${
              isComplete ? 'shadow-white/30' : 'shadow-black/30'
            }`}
          >
            {/* Camera lens */}
            <div 
              className={`w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-full border-4 transition-all duration-300 flex items-center justify-center ${
                isComplete ? 'border-white scale-90' : 'border-gray-600'
              }`}
              style={{
                boxShadow: 'inset 0 -6px 12px rgba(0, 0, 0, 0.8)'
              }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center">
                <Camera 
                  className={`w-5 h-5 transition-all duration-300 ${
                    isComplete ? 'text-white scale-125' : 'text-[#fff503]'
                  }`} 
                />
              </div>
            </div>

            {/* Camera flash */}
            <div 
              className={`absolute -top-2 left-6 w-6 h-4 rounded-sm transition-all duration-200 ${
                isComplete ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'bg-gray-200'
              }`}
            />

            {/* Camera details */}
            <div className="absolute top-2 right-4 w-3 h-3 bg-gray-300 rounded-full" />
            <div className="absolute bottom-2 left-4 w-4 h-1.5 bg-gray-600 rounded" />
            <div className="absolute bottom-2 right-4 w-3 h-1.5 bg-gray-600 rounded" />
          </div>

          {/* Click effect rings */}
          {isComplete && (
            <>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white rounded-full animate-ping opacity-75" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-white rounded-full animate-ping opacity-50" style={{ animationDelay: '0.2s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 border-2 border-white rounded-full animate-ping opacity-25" style={{ animationDelay: '0.4s' }} />
            </>
          )}
        </div>
      </div>

      {/* Loading Bar */}
      <div className="w-80 max-w-[80vw]">
        {/* Progress Bar */}
        <div className="w-full h-2 bg-[#10100f]/20 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-[#10100f] transition-all duration-300 ease-out rounded-full"
            style={{ width: `${loadProgress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="text-center">
          <span className="text-2xl font-bold text-[#10100f] tabular-nums">
            {loadProgress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModernPreloader;
