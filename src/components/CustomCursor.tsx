import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const grow = () => { if (ringRef.current) { ringRef.current.style.width = '56px'; ringRef.current.style.height = '56px'; ringRef.current.style.opacity = '0.4'; ringRef.current.style.borderColor = 'rgba(232,213,163,0.6)'; }};
    const shrink = () => { if (ringRef.current) { ringRef.current.style.width = '34px'; ringRef.current.style.height = '34px'; ringRef.current.style.opacity = '1'; ringRef.current.style.borderColor = 'rgba(123,158,255,0.5)'; }};

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x - 3.5}px`;
        dotRef.current.style.top = `${pos.current.y - 3.5}px`;
      }
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x - 17}px`;
        ringRef.current.style.top = `${ring.current.y - 17}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
