import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import GroupCollection from "./GroupCollection";

export default function SceneCollection() {
  return (
    <Canvas >
      <ScrollControls pages={2} >
        <Scroll>
          <GroupCollection meshes={4} name="bunny" x={-5.6} y={-.5} />
          <GroupCollection meshes={4} name="celinalea" x={-3.6} y={-3}/>
          <GroupCollection meshes={4} name="rayn" x={1} y={-5.5}/>
          <GroupCollection meshes={3} name="theloveofgold" x={-4.3} y={-8}/>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
