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
      className="fixed bottom-4 left-4 z-40 grid h-9 w-9 place-items-center rounded-full border transition hover:-translate-y-0.5 sm:bottom-5 sm:left-5 sm:h-10 sm:w-10"
      style={{
        backgroundColor: "rgba(6, 17, 31, 0.94)",
        borderColor: "rgba(15, 23, 42, 0.22)",
        boxShadow: "0 8px 22px rgba(15, 23, 42, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        color: "#d8c99b"
      }}
    >
      <span
        className="grid h-6 w-6 place-items-center rounded-full"
        style={{ backgroundColor: "rgba(18, 55, 95, 0.92)" }}
      >
        {enabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
      </span>
    </button>
  );
}
