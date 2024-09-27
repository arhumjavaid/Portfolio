/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


const Scene = () => {
  let tex1 = useTexture("src/assets/ochi.png");
  let tex2 = useTexture("src/assets/bubble.png");


  return (
    <mesh>
      <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
      <meshStandardMaterial map={tex1}  side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Scene;
