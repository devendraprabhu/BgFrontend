import React, { useEffect, useRef } from "react";

const RippleGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#9ca3af";
      ctx.lineWidth = 1;

      const step = 40;
      
      // Draw vertical lines with wave
      for (let x = 0; x <= canvas.width; x += step) {
        ctx.beginPath();
        for (let y = 0; y <= canvas.height; y += step) {
          const wave = Math.sin((x / 100) + (time * 0.02)) * 10;
          
          if (y === 0) {
            ctx.moveTo(x + wave, y);
          } else {
            ctx.lineTo(x + wave, y);
          }
        }
        ctx.stroke();
      }
      
      // Draw horizontal lines with wave
      for (let y = 0; y <= canvas.height; y += step) {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += step) {
          const wave = Math.sin((x / 100) + (time * 0.02)) * 10;
          
          if (x === 0) {
            ctx.moveTo(x, y + wave);
          } else {
            ctx.lineTo(x, y + wave);
          }
        }
        ctx.stroke();
      }

      time++;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block opacity-60" />;
};

export default RippleGrid;