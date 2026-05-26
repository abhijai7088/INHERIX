"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/media/audio/inherix-background.m4a";

export function AmbientAudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blockedRef = useRef(false);
  const [enabled, setEnabled] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = "none";
    audio.volume = 0.18;
    audioRef.current = audio;
    setEnabled(false);
    setReady(true);

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !ready) return;

    if (enabled) {
      audio.play().then(() => {
        blockedRef.current = false;
      }).catch(() => {
        blockedRef.current = true;
      });
    } else {
      blockedRef.current = false;
      audio.pause();
    }
  }, [enabled, ready]);

  const toggleAudio = () => {
    setEnabled((current) => !current);
  };

  return (
    <button
      type="button"
      aria-label={enabled ? "Pause INHERIX background audio" : "Play INHERIX background audio"}
      aria-pressed={enabled}
      onClick={toggleAudio}
      className="fixed bottom-5 left-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/16 bg-[#06111f] text-[#d8c99b] shadow-[0_16px_40px_rgba(3,7,18,0.34),0_0_0_1px_rgba(255,255,255,0.05)] transition hover:-translate-y-0.5 hover:border-[#c8b88a]/45 hover:bg-[#0a1b35] sm:bottom-6 sm:left-6 sm:h-12 sm:w-12"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#12375f]">
        {enabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
      </span>
    </button>
  );
}
