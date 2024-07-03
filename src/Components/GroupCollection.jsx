import React, { useRef, useMemo, useState, useEffect } from "react";
import { useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { fragment, vertex } from "./shader";
import { useNavigate } from "react-router-dom";

export default function GroupCollection({ name, meshes, x, y }) {
  const meshRefs = useRef([]);
  const scroll = useScroll();
  const navigate = useNavigate();

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
        let mappedValue = (scroll.offset - lastScrollOffset) * 20;

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

  const texturePaths = [
    `/src/assets/Img/${name}/one.jpg`,
    `/src/assets/Img/${name}/two.jpg`,
    `/src/assets/Img/${name}/three.jpg`,
    `/src/assets/Img/${name}/four.jpg`
  ].slice(0, meshes); 

  const textures = useTexture(texturePaths);

  const meshElements = [];
  for (let i = 0; i < meshes; i++) {
    const uniforms = useMemo(
      () => ({
        uTexture: { value: textures[i % textures.length] },
        uDelta: { value: 0.0 },
      }),
      [textures, i]
    );

    meshElements.push(
      <mesh
      onClick={() => navigate(`/Pages/ProductPage/${name}`)}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
    onPointerOut={() => (document.body.style.cursor = 'default')}
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
