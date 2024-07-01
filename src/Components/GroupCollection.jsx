import React, { useRef, useMemo, useState, useEffect } from "react";
import { useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { fragment, vertex } from "./shader";

export default function GroupCollection({ meshes, x, y }) {
  const meshRefs = useRef([]);
  const texture = useTexture("/src/assets/Img/landing/one.jpg");
  const scroll = useScroll();
  const [scrollDirection, setScrollDirection] = useState(0);
  const [lastScrollOffset, setLastScrollOffset] = useState(scroll.offset);

  useEffect(() => {
    const handleScroll = () => {
      const newOffset =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setLastScrollOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    meshRefs.current.forEach((mesh) => {
      if (mesh.material && mesh.material.uniforms) {
        let mappedValue = (scroll.offset - lastScrollOffset) * 80;

        if (mappedValue > 0) {
          setScrollDirection(1);
        } else if (mappedValue < 0) {
          setScrollDirection(-1);
        } else {
          setScrollDirection(0);
        }

        mesh.material.uniforms.uDelta.value = mappedValue;

        setLastScrollOffset(scroll.offset);
      }
    });
  });

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uDelta: { value: 0.0 },
    }),
    [texture]
  );

  const meshElements = [];
  for (let i = 0; i < meshes; i++) {
    meshElements.push(
      <mesh
        ref={(el) => (meshRefs.current[i] = el)}
        key={i}
        position={[i * 2.2, y, 0]}
      >
        <planeGeometry args={[2, 2, 15, 15]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          wireframe={false}
          uniforms={uniforms}
        />
      </mesh>
    );
  }

  return <group position={[x, 2, 0]}>{meshElements}</group>;
}
