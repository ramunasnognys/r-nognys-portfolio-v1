"use client";

import React, { useState, useRef, useEffect } from 'react';
import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio.webm');
    audioRef.current.loop = true;
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlayPause}
      className="bg-black text-white p-2 rounded-full z-50 text-xs"
    >
      {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
    </button>
  );
};

export default AudioPlayer;