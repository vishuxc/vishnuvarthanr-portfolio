import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Workspace3D() {
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let width = container.clientWidth || 600;
    let height = container.clientHeight || 450;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    keyLight.position.set(4, 6, 4);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xa855f7, 3, 10);
    fillLight.position.set(-4, 3, 2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x06b6d4, 2, 8);
    rimLight.position.set(0, -2, -3);
    scene.add(rimLight);

    // --- Main Developer Workstation Group ---
    const workstationGroup = new THREE.Group();
    scene.add(workstationGroup);

    // 1. Laptop Base
    const baseGeo = new THREE.BoxGeometry(2.4, 0.08, 1.7);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.25,
    });
    const laptopBase = new THREE.Mesh(baseGeo, metalMat);
    laptopBase.position.y = -0.2;
    workstationGroup.add(laptopBase);

    // Keyboard Deck & Glowing Trackpad
    const kbGeo = new THREE.PlaneGeometry(2.1, 0.9);
    const kbMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.7,
      metalness: 0.3,
    });
    const keyboard = new THREE.Mesh(kbGeo, kbMat);
    keyboard.rotation.x = -Math.PI / 2;
    keyboard.position.set(0, -0.15, -0.15);
    workstationGroup.add(keyboard);

    // Glowing Keyboard Grid Emissive Mesh
    const gridHelper = new THREE.GridHelper(1.8, 14, 0x38bdf8, 0x1e293b);
    gridHelper.position.set(0, -0.14, -0.15);
    gridHelper.scale.set(1.1, 1, 0.5);
    workstationGroup.add(gridHelper);

    // Trackpad
    const tpGeo = new THREE.PlaneGeometry(0.7, 0.45);
    const tpMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.4,
      metalness: 0.8,
    });
    const trackpad = new THREE.Mesh(tpGeo, tpMat);
    trackpad.rotation.x = -Math.PI / 2;
    trackpad.position.set(0, -0.15, 0.55);
    workstationGroup.add(trackpad);

    // 2. Laptop Lid & Screen (Angled open)
    const screenHinge = new THREE.Group();
    screenHinge.position.set(0, -0.16, -0.85);
    workstationGroup.add(screenHinge);

    const lidGeo = new THREE.BoxGeometry(2.4, 1.6, 0.05);
    const lid = new THREE.Mesh(lidGeo, metalMat);
    lid.position.set(0, 0.8, 0);
    screenHinge.add(lid);

    // Dynamic Canvas for Live Animated Code Screen
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 680;
    const ctx = screenCanvas.getContext('2d');

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.generateMipmaps = true;

    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });
    const screenInnerGeo = new THREE.PlaneGeometry(2.28, 1.48);
    const screenMesh = new THREE.Mesh(screenInnerGeo, screenMat);
    screenMesh.position.set(0, 0.8, 0.03);
    screenHinge.add(screenMesh);

    // Angle screen open comfortably
    screenHinge.rotation.x = 0.22;

    // 3. Holographic Orbital Ring Platform
    const ringGeo1 = new THREE.RingGeometry(2.3, 2.36, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.45 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = -0.55;
    scene.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(2.8, 2.84, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xa855f7, side: THREE.DoubleSide, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 2;
    ring2.position.y = -0.6;
    scene.add(ring2);

    // 4. Floating Holographic Tech Polyhedrons (Laravel, PHP, React, Node, MySQL, Python)
    const techColors = [
      { color: 0x38bdf8, label: 'React', radius: 2.1, speed: 0.9, yOffset: 0.3 },
      { color: 0xa855f7, label: 'PHP', radius: 2.5, speed: 0.65, yOffset: 0.8 },
      { color: 0xf43f5e, label: 'Laravel', radius: 2.2, speed: 0.75, yOffset: -0.2 },
      { color: 0x10b981, label: 'Node', radius: 2.6, speed: 0.55, yOffset: 0.5 },
      { color: 0x6366f1, label: 'MySQL', radius: 2.0, speed: 0.85, yOffset: 0.1 },
      { color: 0xf59e0b, label: 'Python', radius: 2.4, speed: 0.7, yOffset: 0.7 },
    ];

    const techNodes = techColors.map((t, idx) => {
      const geo = new THREE.OctahedronGeometry(0.18, 0);
      const mat = new THREE.MeshStandardMaterial({
        color: t.color,
        emissive: t.color,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8,
      });
      const mesh = new THREE.Mesh(geo, mat);

      // Outer wireframe shell
      const wireGeo = new THREE.OctahedronGeometry(0.24, 0);
      const wireMat = new THREE.MeshBasicMaterial({ color: t.color, wireframe: true, transparent: true, opacity: 0.5 });
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      mesh.add(wireMesh);

      scene.add(mesh);
      return { mesh, config: t, initialAngle: (idx / techColors.length) * Math.PI * 2 };
    });

    // 5. Floating Ambient Particle Dust
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8;
      particlePos[i + 1] = Math.random() * 4 - 1;
      particlePos[i + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x818cf8,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- Dynamic Code Drawing Routine on Screen Canvas ---
    let frameCount = 0;
    const codeLines = [
      { text: '// Vishnuvarthan Raja - Full Stack Engineer', color: '#64748b' },
      { text: "import { useState, useEffect } from 'react';", color: '#38bdf8' },
      { text: "import { Laravel, MySQL, NodeAPI } from '@stack/core';", color: '#818cf8' },
      { text: '', color: '#fff' },
      { text: "Route::prefix('v1')->group(function () {", color: '#f43f5e' },
      { text: "    Route::get('/developer', [SoptiAI::class, 'profile']);", color: '#a855f7' },
      { text: "    Route::post('/rag-pipeline', [VectorSearch::class, 'query']);", color: '#10b981' },
      { text: '});', color: '#f43f5e' },
      { text: '', color: '#fff' },
      { text: 'const impact = { effortSaved: "55%", sprintDelivery: "Active" };', color: '#f59e0b' },
      { text: 'console.log("⚡ Production Build: Ready for Deployment");', color: '#38bdf8' },
    ];

    const renderScreenCode = (time) => {
      ctx.fillStyle = '#0a0f1d';
      ctx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);

      // Terminal Header bar
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 0, screenCanvas.width, 42);

      // Window dots
      ctx.fillStyle = '#ef4444';
      ctx.beginPath(); ctx.arc(30, 21, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath(); ctx.arc(52, 21, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#10b981';
      ctx.beginPath(); ctx.arc(74, 21, 7, 0, Math.PI * 2); ctx.fill();

      // Title
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 18px "Space Grotesk", monospace';
      ctx.fillText('bash - vishnuvarthan@dev: ~/portfolio-fullstack (main)', 110, 27);

      // Code line by line
      ctx.font = '22px "Fira Code", "Courier New", monospace';
      let y = 88;
      const visibleLines = Math.floor((time * 2.5) % (codeLines.length + 4));

      for (let i = 0; i < Math.min(codeLines.length, visibleLines); i++) {
        ctx.fillStyle = codeLines[i].color;
        ctx.fillText(codeLines[i].text, 40, y);
        y += 44;
      }

      // Blinking Cursor
      if (Math.sin(time * 5) > 0 && visibleLines <= codeLines.length) {
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(40 + (visibleLines > 0 ? 300 : 0), Math.min(y - 20, 580), 14, 26);
      }

      screenTexture.needsUpdate = true;
    };

    // --- Interactive Mouse Movement Dynamics ---
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotY = normX * 0.45;
      targetRotX = normY * 0.25;
    };

    const handlePointerLeave = () => {
      targetRotY = 0;
      targetRotX = 0;
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);

    // --- Window Resize Handling ---
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 600;
      height = container.clientHeight || 450;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia rotation towards mouse
      currentRotY += (targetRotY - currentRotY) * 0.06;
      currentRotX += (targetRotX - currentRotX) * 0.06;

      workstationGroup.rotation.y = currentRotY + Math.sin(elapsedTime * 0.8) * 0.06;
      workstationGroup.rotation.x = currentRotX + Math.cos(elapsedTime * 0.6) * 0.04;
      workstationGroup.position.y = Math.sin(elapsedTime * 1.4) * 0.08;

      // Update screen texture
      frameCount++;
      if (frameCount % 2 === 0) {
        renderScreenCode(elapsedTime);
      }

      // Rotate ground rings
      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.1;

      // Orbit tech crystals
      techNodes.forEach((node) => {
        const angle = node.initialAngle + elapsedTime * node.config.speed;
        node.mesh.position.x = Math.cos(angle) * node.config.radius;
        node.mesh.position.z = Math.sin(angle) * node.config.radius;
        node.mesh.position.y = node.config.yOffset + Math.sin(elapsedTime * 2 + angle) * 0.15;
        node.mesh.rotation.x = elapsedTime * 1.5;
        node.mesh.rotation.y = elapsedTime * 1.2;
      });

      // Drift particles
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Geometries and Materials
      baseGeo.dispose();
      metalMat.dispose();
      kbGeo.dispose();
      kbMat.dispose();
      tpGeo.dispose();
      tpMat.dispose();
      lidGeo.dispose();
      screenInnerGeo.dispose();
      screenMat.dispose();
      screenTexture.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      title="Interactive 3D Developer Workstation - Move mouse to tilt and orbit"
    >
      {/* Floating Interactive Badge Indicator */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 text-[11px] font-bold text-indigo-300 pointer-events-none shadow-lg">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Three.js 3D Workstation</span>
      </div>

      {/* Subtle Bottom Instruction */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-medium text-slate-300 pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-60'
        }`}
      >
        ✦ Move cursor to rotate & interact in 3D
      </div>
    </div>
  );
}
