import { Canvas } from '@react-three/fiber';
import React from 'react';
import Model from './Model';

const Scene = () => {
  return (
    <Canvas>
      <Model />
    </Canvas>
  );
};

export default Scene;
