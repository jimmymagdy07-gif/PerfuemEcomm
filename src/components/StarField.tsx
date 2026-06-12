import { useMemo } from 'react';

interface StarFieldProps {
  count?: number;
  shooting?: boolean;
}

export default function StarField({ count = 30, shooting = false }: StarFieldProps) {
  const stars = useMemo(() => Array.from({ length: Math.min(count, 40) }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: i % 12 === 0 ? 3 : i % 7 === 0 ? 2.5 : 1.5,
    opacity: Math.random() * 0.5 + 0.15,
    glow: i % 15 === 0,
  })), [count]);

  const shooters = useMemo(() => shooting ? Array.from({ length: 2 }, (_, i) => ({
    id: i,
    x: 15 + i * 35,
    y: 10 + i * 15,
    delay: i * 5,
  })) : [], [shooting]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map(s => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.glow ? '#A8BEFF' : 'white',
            opacity: s.opacity,
            boxShadow: s.glow ? `0 0 4px 1px rgba(123,158,255,0.4)` : 'none',
          }}
        />
      ))}
      {shooters.map(s => (
        <div
          key={s.id}
          className="absolute h-px"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: '60px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.6), transparent)',
            transform: 'rotate(-35deg)',
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
}
