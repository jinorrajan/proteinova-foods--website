import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Egg3DCanvasProps {
  eggVariety?: 'brown' | 'white' | 'country' | 'duck' | 'quail';
  interactive?: boolean;
  className?: string;
}

const EGG_CONFIGS = {
  brown: {
    color: new THREE.Color(0xb56a38),
    roughness: 0.58,
    metalness: 0.04,
    scale: new THREE.Vector3(0.92, 1.22, 0.92),
  },
  white: {
    color: new THREE.Color(0xf6f0e7),
    roughness: 0.48,
    metalness: 0.02,
    scale: new THREE.Vector3(0.90, 1.20, 0.90),
  },
  country: {
    color: new THREE.Color(0x8a4022),
    roughness: 0.72,
    metalness: 0.05,
    scale: new THREE.Vector3(0.88, 1.18, 0.88),
  },
  duck: {
    color: new THREE.Color(0xc4d7c8),
    roughness: 0.42,
    metalness: 0.08,
    scale: new THREE.Vector3(1.02, 1.34, 1.02),
  },
  quail: {
    color: new THREE.Color(0xa89988),
    roughness: 0.82,
    metalness: 0.02,
    scale: new THREE.Vector3(0.68, 0.88, 0.68),
  },
};

export const Egg3DCanvas: React.FC<Egg3DCanvasProps> = ({
  eggVariety = 'brown',
  interactive = true,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const targetRotation = useRef({ x: 0.12, y: 0.35 });
  const currentRotation = useRef({ x: 0.12, y: 0.35 });

  // Refs for smooth morphing without re-mounting Three.js context
  const currentVarietyRef = useRef(eggVariety);
  currentVarietyRef.current = eggVariety;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
    camera.position.set(0, 0.1, 5.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.5);
    keyLight.position.set(4, 6, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffedd5, 1.8);
    rimLight.position.set(-4, -1, -3);
    scene.add(rimLight);

    const topFill = new THREE.DirectionalLight(0xffffff, 1.2);
    topFill.position.set(0, 8, 0);
    scene.add(topFill);

    const ambient = new THREE.AmbientLight(0xfdf8f0, 0.9);
    scene.add(ambient);

    // Natural Ovoid (Egg) Geometry
    const geometry = new THREE.SphereGeometry(1, 96, 96);
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const factor = 1.0 - 0.28 * y - 0.05 * y * y;
      pos.setX(i, x * factor);
      pos.setZ(i, z * factor);
    }
    geometry.computeVertexNormals();

    const initialConfig = EGG_CONFIGS[eggVariety];
    const material = new THREE.MeshStandardMaterial({
      color: initialConfig.color.clone(),
      roughness: initialConfig.roughness,
      metalness: initialConfig.metalness,
    });

    const eggMesh = new THREE.Mesh(geometry, material);
    eggMesh.scale.copy(initialConfig.scale);
    eggMesh.position.y = 0.05;
    scene.add(eggMesh);

    // Contact Shadow on Floor
    const shadowGeo = new THREE.PlaneGeometry(2.6, 2.6);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 10, 128, 128, 110);
      gradient.addColorStop(0, 'rgba(38, 54, 44, 0.35)');
      gradient.addColorStop(0.4, 'rgba(38, 54, 44, 0.12)');
      gradient.addColorStop(0.8, 'rgba(38, 54, 44, 0.03)');
      gradient.addColorStop(1, 'rgba(38, 54, 44, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.45;
    scene.add(shadowMesh);

    // Mouse Tracking / Gyro
    let isHovering = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotation.current.x = mouseY * 0.4 + 0.12;
      targetRotation.current.y = mouseX * 0.6 + 0.35;
    };

    const handleMouseEnter = () => { isHovering = true; };
    const handleMouseLeave = () => {
      isHovering = false;
      targetRotation.current.x = 0.12;
      targetRotation.current.y = 0.35;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop with Smooth Material & Scale Morphing
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      const idleBob = Math.sin(elapsedTime * 1.4) * 0.04;
      const idleSway = Math.cos(elapsedTime * 1.1) * 0.02;

      if (!isHovering) {
        targetRotation.current.y = 0.35 + Math.sin(elapsedTime * 0.7) * 0.12;
      }

      // Smooth Spring Gyro Interpolation
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.06;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.06;

      // Real-time Material & Scale Morphing (Color Lerp & Vector3 Lerp)
      const targetConfig = EGG_CONFIGS[currentVarietyRef.current];
      material.color.lerp(targetConfig.color, 0.08);
      material.roughness = THREE.MathUtils.lerp(material.roughness, targetConfig.roughness, 0.08);
      eggMesh.scale.lerp(targetConfig.scale, 0.08);

      eggMesh.rotation.x = currentRotation.current.x;
      eggMesh.rotation.y = currentRotation.current.y;
      eggMesh.position.y = 0.05 + idleBob;
      eggMesh.rotation.z = idleSway * 0.2;

      if (shadowMesh) {
        shadowMesh.scale.setScalar(1.0 - idleBob * 0.3);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTex.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ touchAction: 'none' }}
    />
  );
};
