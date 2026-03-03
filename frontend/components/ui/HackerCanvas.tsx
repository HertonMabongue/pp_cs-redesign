"use client";

import { useRef, useEffect } from "react";

const WORDS = [
  "Maties",
  "Neelsie",
  "Stellenbosch",
  "Quicksort",
  "Binary Search",
  "Hashmaps",
  "Dijkstra",
  "Recursion",
  "O(n)",
  "O(log n)",
  "Algorithms",
  "Data Structures",
  "Python",
  "AI",
  "Machine Learning",
  "DDoS",
  "C++",
  "Java",
  "Git",
  "GitHub",
  "Linux",
  "Ubuntu",
  "APIs",
  "JSON",
  "ReactJS",
  "FastAPI",
  "MongoDB",
  "Graph",
  "Big O",
  "Heap",
  "Stack",
  "Queue",
  "Marcel Dunaiski",
  "Eikestad",
  "Computer Vision",
  "Hackathon",
  "Coding",
  "Debugging",
  "Cloud Computing",
  "Neelsie",
  "Maties",
  "Lynette van Zijl",
  "Trienko Grobler",
  "echo",
  "sudo",
  "rm -rf /",
  "Hello World",
  "Automata",
  "0xDEADBEEF",
  "NaN",
  "undefined",
  "null",
  "segfault",
  "kernel panic",
  "overflow",
  "chmod +x",
  "mkdir",
  "vim",
  "nano",
  "fortran",
  "assembly",
  "bash",
  "ifconfig",
  "overfitting",
  "NumPy",
  "404 Not Found",
  "200 OK",
  "TCP/IP",
  "RSA",
  "AES-256",
  "SHA-256",
  "int main()",
  "return 0;",
  "while(true)",
  "try { } catch",
  "#include",
  "import os",
  "Neural Net",
  "Gradient",
  "Backprop",
  "Epoch",
  "Tensor",
  "Matrix",
  "Compiler",
  "Linker",
  "Jan Marais",
  "Victoria St",
  "Coetzenburg",
  "Van der Sterr",
  "Banghoek Rd",
  "Ryneveld",
  "RW244",
  "Narga E",
  "Endler",
  "Bergzicht",
  "Willem Bester",
  "Helshoogte",
  "Springboks",
  "Lekker",
  "Admin A",
  "Narga H",
  "Narga B",
  "Narga",
  "Narga A",
];

export default function HackerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: false })!;

    let animId: number;
    let destroyed = false;

    const resize = () => {
      // Use device pixel ratio for crisp rendering but cap at 1.5x for perf
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();

    const W = () => window.innerWidth;
    const H = () => window.innerHeight;

    // ── Word particles ──
    class WordParticle {
      text = "";
      x = 0;
      y = 0;
      z = 0;
      speed = 0;
      baseSize = 0;
      opacity = 0;
      constructor() {
        this.reset(true);
      }
      reset(init = false) {
        this.text = WORDS[Math.floor(Math.random() * WORDS.length)];
        this.x = (Math.random() - 0.5) * W();
        this.y = (Math.random() - 0.5) * H();
        this.z = init ? Math.random() : Math.random() * 0.3;
        this.speed = 0.001 + Math.random() * 0.002;
        this.baseSize = 6 + Math.random() * 3;
        this.opacity = 0;
      }
      update() {
        this.z += this.speed;
        if (this.z < 0.4) this.opacity = (this.z / 0.4) * 0.55;
        else if (this.z < 0.75) this.opacity = 0.55;
        else this.opacity = ((1 - this.z) / 0.25) * 0.55;
        if (this.z >= 1) this.reset();
      }
      draw() {
        const scale = 1 + this.z * 5;
        const size = this.baseSize * scale;
        ctx.font = `${size}px "Courier New",monospace`;
        ctx.fillStyle = `rgba(0,255,70,${this.opacity})`;
        ctx.fillText(
          this.text,
          W() / 2 + this.x * scale,
          H() / 2 + this.y * scale
        );
      }
    }

    // ── Hacker boxes ──
    const LABELS = [
      "SCANNING...",
      "ACCESS GRANTED",
      "DECRYPTING",
      "SYS MONITOR",
      "NET TRACE",
      "FIREWALL",
      "AUTH OK",
      "PROCESS",
    ];
    type Box = {
      x: number;
      y: number;
      w: number;
      h: number;
      z: number;
      speed: number;
      label: string;
      pulse: number;
    };
    const boxes: Box[] = Array.from({ length: 7 }, () => ({
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 400,
      w: 120 + Math.random() * 80,
      h: 36 + Math.random() * 24,
      z: Math.random(),
      speed: 0.0008 + Math.random() * 0.0015,
      label: LABELS[Math.floor(Math.random() * LABELS.length)],
      pulse: Math.random() * Math.PI * 2,
    }));

    // ── Hexagons ──
    type Hex = { x: number; y: number; r: number; z: number; speed: number };
    const hexagons: Hex[] = Array.from({ length: 5 }, () => ({
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 400,
      r: 18 + Math.random() * 22,
      z: Math.random(),
      speed: 0.0008 + Math.random() * 0.0012,
    }));

    const drawHex = (x: number, y: number, r: number, op: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        i === 0
          ? ctx.moveTo(x + r * Math.cos(a), y + r * Math.sin(a))
          : ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a));
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(0,255,80,${op})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const particles = Array.from({ length: 105 }, () => new WordParticle());
    let frame = 0;

    // Throttle to ~30fps for perf — smooth enough for a background
    let last = 0;
    const TARGET_MS = 1000 / 30;

    const animate = (ts: number) => {
      if (destroyed) return;
      animId = requestAnimationFrame(animate);
      if (ts - last < TARGET_MS) return;
      last = ts;
      frame++;

      ctx.fillStyle = "rgba(0,8,4,0.2)";
      ctx.fillRect(0, 0, W(), H());

      // Words
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Boxes
      boxes.forEach((b) => {
        b.z += b.speed;
        if (b.z >= 1) {
          b.z = Math.random() * 0.25;
          b.x = (Math.random() - 0.5) * 600;
          b.y = (Math.random() - 0.5) * 400;
          b.label = LABELS[Math.floor(Math.random() * LABELS.length)];
        }
        b.pulse += 0.04;
        const sc = 1 + b.z * 5;
        const bx = W() / 2 + b.x * sc,
          by = H() / 2 + b.y * sc;
        const bw = b.w * sc,
          bh = b.h * sc;
        let op =
          b.z < 0.3
            ? (b.z / 0.3) * 0.22
            : b.z < 0.7
              ? 0.22
              : ((1 - b.z) / 0.3) * 0.22;
        const pulse = op * (0.7 + 0.3 * Math.sin(b.pulse));
        ctx.strokeStyle = `rgba(0,255,80,${pulse})`;
        ctx.lineWidth = 0.8;
        ctx.strokeRect(bx, by, bw, bh);
        const cs = 6 * sc;
        ctx.strokeStyle = `rgba(0,255,80,${pulse * 1.4})`;
        ctx.lineWidth = 1;
        [
          [bx, by],
          [bx + bw, by],
          [bx, by + bh],
          [bx + bw, by + bh],
        ].forEach(([cx, cy], i) => {
          ctx.beginPath();
          ctx.moveTo((cx as number) + (i % 2 === 0 ? cs : -cs), cy as number);
          ctx.lineTo(cx as number, cy as number);
          ctx.lineTo(cx as number, (cy as number) + (i < 2 ? cs : -cs));
          ctx.stroke();
        });
        const ls = Math.max(6, 6 * sc);
        ctx.font = `${ls}px "Courier New",monospace`;
        ctx.fillStyle = `rgba(0,255,80,${pulse * 0.9})`;
        ctx.fillText(b.label, bx + 4, by + ls + 3);
        const barW = (bw - 8) * (Math.sin(b.pulse * 0.7) * 0.5 + 0.5);
        ctx.fillStyle = `rgba(0,255,80,${pulse * 0.45})`;
        ctx.fillRect(bx + 4, by + bh - 7, barW, 2.5 * sc);
      });

      // Hexagons
      hexagons.forEach((h) => {
        h.z += h.speed;
        if (h.z >= 1) {
          h.z = Math.random() * 0.25;
          h.x = (Math.random() - 0.5) * 500;
          h.y = (Math.random() - 0.5) * 400;
        }
        const sc = 1 + h.z * 5;
        const hx = W() / 2 + h.x * sc,
          hy = H() / 2 + h.y * sc,
          hr = h.r * sc;
        let op =
          h.z < 0.3
            ? (h.z / 0.3) * 0.13
            : h.z < 0.7
              ? 0.13
              : ((1 - h.z) / 0.3) * 0.13;
        drawHex(hx, hy, hr, op);
        drawHex(hx, hy, hr * 0.6, op * 0.5);
      });

      // Scanlines (every 6 frames for perf)
      if (frame % 6 === 0) {
        ctx.fillStyle = "rgba(0,0,0,0.025)";
        for (let y = 0; y < H(); y += 4) ctx.fillRect(0, y, W(), 1);
      }

      // Vignette
      const vig = ctx.createRadialGradient(
        W() / 2,
        H() / 2,
        H() * 0.3,
        W() / 2,
        H() / 2,
        H() * 0.85
      );
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(0,4,2,0.5)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W(), H());
    };

    animId = requestAnimationFrame(animate);

    const onResize = () => {
      resize();
    };
    window.addEventListener("resize", onResize);

    // Pause when tab not visible — saves CPU
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        last = 0;
        animId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      destroyed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#000804",
        display: "block",
      }}
    />
  );
}
