
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = 0.1; // 10% volume

    // Handle user interaction to start audio
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (!isMuted) {
          audio.play().catch(console.log);
        }
      }
    };

    // Handle scroll/click to fade out music
    const handleUserActivity = () => {
      if (audio && !audio.paused) {
        // Fade out the music
        const fadeOut = setInterval(() => {
          if (audio.volume > 0.01) {
            audio.volume = Math.max(0, audio.volume - 0.01);
          } else {
            audio.pause();
            clearInterval(fadeOut);
          }
        }, 100);
      }
    };

    // Add event listeners
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('scroll', handleUserActivity, { once: true });
    document.addEventListener('click', handleUserActivity);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleUserActivity);
      document.removeEventListener('click', handleUserActivity);
    };
  }, [hasInteracted, isMuted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      setIsMuted(false);
      audio.volume = 0.1;
      if (hasInteracted) {
        audio.play().catch(console.log);
      }
    } else {
      setIsMuted(true);
      audio.pause();
    }
  };

  return (
    <>
      {/* Audio element with ambient music */}
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        preload="auto"
      >
        {/* Using a data URL for a simple ambient tone */}
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHnfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkE==" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="fixed top-6 right-6 bg-[#10100f]/80 text-[#fff503] hover:bg-[#10100f] rounded-full p-3 shadow-lg transition-all duration-300 z-40 backdrop-blur-sm"
        title={isMuted ? 'Unmute background music' : 'Mute background music'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
