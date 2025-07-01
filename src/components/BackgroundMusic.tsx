
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = 0.15;

    // Auto-play music after a short delay to allow page to load
    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        console.log('Background music started automatically');
      } catch (error) {
        console.log('Auto-play failed, waiting for user interaction:', error);
        
        // If auto-play fails, wait for any user interaction
        const handleUserInteraction = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            console.log('Background music started after user interaction');
          } catch (e) {
            console.log('Music play failed:', e);
          }
          
          // Remove event listeners after first interaction
          document.removeEventListener('click', handleUserInteraction);
          document.removeEventListener('touchstart', handleUserInteraction);
          document.removeEventListener('keydown', handleUserInteraction);
        };

        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);
      }
    };

    // Start music after a short delay
    const timer = setTimeout(startMusic, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      setIsMuted(false);
      audio.volume = 0.15;
      if (!isPlaying) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(console.log);
      }
    } else {
      setIsMuted(true);
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Audio element with looping ambient music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* Using a simple sine wave for ambient background music */}
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHnfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkEHXfH8N2QQAoUXrTp66hVFApGn+DvxnkpBSuN0fPTgCkE=" type="audio/wav" />
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
