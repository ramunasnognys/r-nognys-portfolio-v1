'use client'

import React, { useState, useRef, useEffect } from 'react';
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio.webp');
    audioRef.current.addEventListener('loadedmetadata', () => {
      console.log('Audio loaded successfully');
    });
    audioRef.current.addEventListener('error', (e) => {
      console.error('Error loading audio:', e);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        console.log('Audio paused');
      } else {
        audioRef.current.play().catch(e => {
          console.error('Error playing audio:', e);
        });
        console.log('Audio playing');
      }
      setIsPlaying(!isPlaying);
    } else {
      console.error('Audio element not initialized');
    }
  };

  return (
    <button
      onClick={togglePlayPause}
      className="fixed bottom-4 right-4 bg-black text-white p-2 rounded-full z-50"
    >
      {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
    </button>
  );
};

export default AudioPlayer;
