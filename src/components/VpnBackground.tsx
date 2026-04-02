import { useEffect, useRef } from "react";

interface VpnBackgroundProps {
  hovering?: boolean;
}

export function VpnBackground({ hovering }: VpnBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const hoveringRef = useRef(hovering);

  useEffect(() => {
    hoveringRef.current = hovering;
  }, [hovering]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);

    // Particles
    const COUNT = 90;
    type Particle = { x: number; y: number; vx: number; vy: number; r: number; opacity: number; pulse: number };
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.6,
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Grid lines config
    const GRID_COLS = 10;
    const GRID_ROWS = 7;
    let t = 0;

    const draw = () => {
      t += 0.008;
      const hover = hoveringRef.current;

      ctx.clearRect(0, 0, W, H);

      // --- Background gradient ---
      const bg = ctx.createRadialGradient(W * 0.5, H * 0.4, 0, W * 0.5, H * 0.4, W * 0.75);
      bg.addColorStop(0, "hsl(222, 55%, 9%)");
      bg.addColorStop(1, "hsl(222, 60%, 3%)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // --- Grid lines (perspective-ish horizontal) ---
      ctx.save();
      for (let r = 0; r <= GRID_ROWS; r++) {
        const prog = r / GRID_ROWS;
        const y = H * 0.35 + prog * H * 0.65;
        const wave = Math.sin(t + prog * 2.5) * 3;
        const alpha = 0.04 + prog * 0.07;
        ctx.beginPath();
        ctx.moveTo(0, y + wave);
        ctx.lineTo(W, y + wave);
        ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      // Vertical grid lines
      for (let c = 0; c <= GRID_COLS; c++) {
        const prog = c / GRID_COLS;
        const x = prog * W;
        const wave = Math.sin(t * 0.7 + prog * 3) * 2;
        const alpha = 0.03 + Math.abs(Math.sin(t + prog * Math.PI)) * 0.04;
        ctx.beginPath();
        ctx.moveTo(x + wave, H * 0.35);
        ctx.lineTo(x + wave * 0.3, H);
        ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      ctx.restore();

      // --- Central glow orb ---
      const glowX = W * 0.5;
      const glowY = H * 0.45;
      const glowR = hover ? W * 0.38 : W * 0.28;
      const glow = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, glowR);
      glow.addColorStop(0, `rgba(37,99,235,${hover ? 0.18 : 0.12})`);
      glow.addColorStop(0.5, `rgba(29,78,216,${hover ? 0.08 : 0.05})`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      // --- Connection lines between close particles ---
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(96,165,250,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // --- Particles ---
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.025;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const brightness = 0.6 + Math.sin(p.pulse) * 0.4;
        const alpha = p.opacity * brightness;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
        grad.addColorStop(0, `rgba(147,197,253,${alpha})`);
        grad.addColorStop(1, "rgba(96,165,250,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // --- Bottom vignette ---
      const vig = ctx.createLinearGradient(0, H * 0.6, 0, H);
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(8,12,28,0.85)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, H * 0.6, W, H * 0.4);

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
