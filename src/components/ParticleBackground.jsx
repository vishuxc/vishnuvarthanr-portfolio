import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - width / 2) / (width / 2);
      mouseY = (e.clientY - height / 2) / (height / 2);
      targetRotationY = mouseX * 0.4;
      targetRotationX = -mouseY * 0.4;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Particle Constants (Electric Blue, Cyan & Purple Accents)
    const FOV = 400;
    const NUM_PARTICLES = 85;
    const COLORS = ['#38bdf8', '#818cf8', '#a855f7', '#60a5fa', '#c084fc', '#06b6d4'];

    // Generate 3D Particles in a sphere/cube field
    const particles = Array.from({ length: NUM_PARTICLES }, () => {
      const radius = Math.random() * 450 + 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      return {
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.6,
        baseRadius: Math.random() * 2.5 + 1.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.6 + 0.3
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation dampening towards mouse target
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      // Projected 3D point list for constellation rendering
      const projectedPoints = [];

      // Update and calculate 3D projection for each particle
      particles.forEach((p) => {
        // Move in 3D space
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Boundary bounce in 3D cube
        if (Math.abs(p.x) > 550) p.vx *= -1;
        if (Math.abs(p.y) > 550) p.vy *= -1;
        if (Math.abs(p.z) > 550) p.vz *= -1;

        // Apply 3D Y-rotation
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Apply 3D X-rotation
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // 3D Perspective Projection
        const scale = FOV / (FOV + z2 + 500);
        const projX = width / 2 + x1 * scale;
        const projY = height / 2 + y1 * scale;
        const projRadius = Math.max(0.5, p.baseRadius * scale);

        projectedPoints.push({
          projX,
          projY,
          scale,
          z: z2,
          color: p.color,
          alpha: Math.min(1, p.alpha * scale)
        });
      });

      // Sort projected points by depth (Z-index back to front rendering)
      projectedPoints.sort((a, b) => b.z - a.z);

      // Draw 3D Constellation Connections
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];

          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120 && p1.scale > 0.4 && p2.scale > 0.4) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - dist / 120) * p1.scale})`;
            ctx.lineWidth = 0.8 * p1.scale;
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.stroke();
          }
        }
      }

      // Render 3D Glowing Particle Spheres
      projectedPoints.forEach((p) => {
        if (p.projX < -50 || p.projX > width + 50 || p.projY < -50 || p.projY > height + 50) return;

        ctx.beginPath();
        ctx.arc(p.projX, p.projY, p.projRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 12 * p.scale;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
