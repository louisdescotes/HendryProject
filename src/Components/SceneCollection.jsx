import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import GroupCollection from "./GroupCollection";

export default function SceneCollection() {
  return (
    <Canvas >
      <ScrollControls pages={3} >
        <Scroll>
          <GroupCollection meshes={5} x={-5.6} y={-.5} />
          <GroupCollection meshes={5} x={-3.6} y={-3}/>
          <GroupCollection meshes={3} x={1} y={-5.5}/>
          <GroupCollection meshes={1} x={-4.3} y={-8}/>
          <GroupCollection meshes={2} x={-3} y={-10.5}/>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
