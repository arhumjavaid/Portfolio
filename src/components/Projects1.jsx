/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
// import * as THREE from "three";

const Projects1 = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Scene />
    </Canvas>
  );
};

export default Projects1;
