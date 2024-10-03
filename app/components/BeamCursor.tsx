'use client'

import React from 'react';
import { useBeamCursor } from '../hooks/useBeamCursor';

const BeamCursor: React.FC = () => {
  const { position, visible } = useBeamCursor();

  return (
    <div
      className="beam-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: visible ? 1 : 0,
      }}
    />
  );
};

export default BeamCursor;