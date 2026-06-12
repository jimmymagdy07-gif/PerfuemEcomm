import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import StarField from './StarField';

function CelestialBottle({ hue }: { hue: string }) {
  return (
    <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`cb-body-${hue}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B0E1F" />
          <stop offset="30%" stopColor={hue} stopOpacity="0.5" />
          <stop offset="60%" stopColor="#1A1F3A" />
          <stop offset="100%" stopColor="#0B0E1F" />
        </linearGradient>
        <linearGradient id={`cb-cap-${hue}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D5A3" />
          <stop offset="50%" stopColor="#F5EDCC" />
          <stop offset="100%" stopColor="#C4A86A" />
        </linearGradient>
        <linearGradient id={`cb-shine-${hue}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id={`cb-glow-${hue}`}>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id={`cb-label-${hue}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={hue} stopOpacity="0.1"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="50" cy="197" rx="28" ry="4" fill={hue} opacity="0.12" filter={`url(#cb-glow-${hue})`}/>

      {/* Cap */}
      <rect x="37" y="8" width="26" height="22" rx="2" fill={`url(#cb-cap-${hue})`}/>
      <rect x="39" y="10" width="22" height="18" rx="1" fill={`url(#cb-shine-${hue})`} opacity="0.6"/>

      {/* Neck */}
      <rect x="43" y="30" width="14" height="14" rx="1" fill={`url(#cb-cap-${hue})`} opacity="0.8"/>

      {/* Collar */}
      <rect x="34" y="42" width="32" height="5" rx="1" fill={`url(#cb-cap-${hue})`} opacity="0.7"/>

      {/* Body */}
      <rect x="12" y="47" width="76" height="138" rx="6" fill={`url(#cb-body-${hue})`}/>
      <rect x="12" y="47" width="76" height="138" rx="6" fill={`url(#cb-shine-${hue})`}/>

      {/* Inner glow */}
      <rect x="12" y="47" width="76" height="138" rx="6" fill={`url(#cb-label-${hue})`}/>

      {/* Label */}
      <rect x="18" y="72" width="64" height="78" rx="2" fill="rgba(6,8,16,0.5)"/>
      <rect x="18" y="72" width="64" height="78" rx="2" stroke={hue} strokeWidth="0.5" fill="none" opacity="0.4"/>

      {/* Label top/bottom lines */}
      <line x1="22" y1="88" x2="78" y2="88" stroke={hue} strokeWidth="0.4" opacity="0.4"/>
      <line x1="22" y1="136" x2="78" y2="136" stroke={hue} strokeWidth="0.4" opacity="0.4"/>

      {/* Star symbol on label */}
      <circle cx="50" cy="100" r="10" stroke={hue} strokeWidth="0.5" fill="none" opacity="0.3"/>
      <path d="M50 92 L51.5 97 L57 97 L52.5 100 L54 105 L50 102 L46 105 L47.5 100 L43 97 L48.5 97 Z"
        fill={hue} opacity="0.4"/>

      {/* Text lines */}
      <rect x="30" y="112" width="40" height="2.5" rx="1" fill={hue} opacity="0.5"/>
      <rect x="34" y="118" width="32" height="2" rx="1" fill={hue} opacity="0.3"/>
      <rect x="37" y="123" width="26" height="1.5" rx="1" fill={hue} opacity="0.25"/>

      {/* Corner dots */}
      <circle cx="22" cy="76" r="1" fill={hue} opacity="0.5"/>
      <circle cx="78" cy="76" r="1" fill={hue} opacity="0.5"/>
      <circle cx="22" cy="146" r="1" fill={hue} opacity="0.5"/>
      <circle cx="78" cy="146" r="1" fill={hue} opacity="0.5"/>

      {/* Bottom */}
      <rect x="12" y="177" width="76" height="8" rx="0 0 6 6" fill="rgba(4,5,15,0.7)"/>
    </svg>
  );
}

export default function Hero() {
  const { t } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 18;
      const y = (clientY / height - 0.5) * 18;
      containerRef.current.querySelectorAll('.hero-bottle').forEach((el, i) => {
        const factor = i === 1 ? 1 : 0.45;
        (el as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060810 0%, #0B0E1F 40%, #111630 70%, #0B0E1F 100%)' }}>

      {/* Star field */}
      <StarField count={100} shooting />

      {/* Atmospheric orbs */}
      <div className="orb-cosmos orb-indigo absolute top-1/4 -left-40 w-[500px] h-[500px] opacity-70" />
      <div className="orb-cosmos orb-starlight absolute top-1/3 right-0 w-[400px] h-[400px] opacity-50" />
      <div className="orb-cosmos orb-nebula absolute bottom-1/4 left-1/3 w-[300px] h-[300px] opacity-40" />
      <div className="orb-cosmos orb-champ absolute bottom-1/2 right-1/4 w-[250px] h-[250px] opacity-30" />

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" preserveAspectRatio="xMidYMid slice">
        <line x1="10%" y1="20%" x2="30%" y2="35%" stroke="#7B9EFF" strokeWidth="0.5"/>
        <line x1="30%" y1="35%" x2="55%" y2="25%" stroke="#7B9EFF" strokeWidth="0.5"/>
        <line x1="55%" y1="25%" x2="70%" y2="40%" stroke="#7B9EFF" strokeWidth="0.5"/>
        <line x1="70%" y1="40%" x2="90%" y2="30%" stroke="#7B9EFF" strokeWidth="0.5"/>
        <line x1="20%" y1="65%" x2="45%" y2="55%" stroke="#C49BD8" strokeWidth="0.5"/>
        <line x1="45%" y1="55%" x2="65%" y2="70%" stroke="#C49BD8" strokeWidth="0.5"/>
        <circle cx="10%" cy="20%" r="2" fill="#7B9EFF" opacity="0.6"/>
        <circle cx="30%" cy="35%" r="1.5" fill="#7B9EFF" opacity="0.5"/>
        <circle cx="55%" cy="25%" r="2.5" fill="#A8BEFF" opacity="0.7"/>
        <circle cx="70%" cy="40%" r="1.5" fill="#7B9EFF" opacity="0.5"/>
        <circle cx="90%" cy="30%" r="2" fill="#7B9EFF" opacity="0.6"/>
        <circle cx="20%" cy="65%" r="2" fill="#C49BD8" opacity="0.6"/>
        <circle cx="45%" cy="55%" r="1.5" fill="#C49BD8" opacity="0.5"/>
        <circle cx="65%" cy="70%" r="2" fill="#C49BD8" opacity="0.6"/>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[82vh]">

          {/* Text */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #7B9EFF, transparent)' }} />
              <span className="text-[10px] tracking-[0.45em] uppercase font-sans"
                style={{ color: '#A8BEFF' }}>
                {t.hero.preheading}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-display font-light leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
            >
              <span className="text-ivory/90">{t.hero.heading1}</span>
              <br />
              <span className="champ-text-animate">{t.hero.heading2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="font-sans font-light text-sm leading-relaxed max-w-md mb-10"
              style={{ color: 'rgba(240,237,232,0.45)' }}
            >
              {t.hero.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#products" className="btn-champ inline-block">{t.hero.cta}</a>
              <a href="#story" className="btn-outline-star inline-block">{t.hero.ctaSecondary}</a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex gap-8 mt-14 pt-8"
              style={{ borderTop: '1px solid rgba(123,158,255,0.1)' }}
            >
              {[
                { value: '100+', label: 'Years' },
                { value: '200+', label: 'Fragrances' },
                { value: '47', label: 'Countries' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-light champ-text">{s.value}</div>
                  <div className="text-[10px] tracking-widest uppercase font-sans mt-1"
                    style={{ color: 'rgba(123,158,255,0.4)' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottles */}
          <div className="relative flex items-center justify-center h-[480px] lg:h-auto">
            {/* Halo ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="w-72 h-72 rounded-full border border-dashed"
                style={{ borderColor: 'rgba(123,158,255,0.08)' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute w-52 h-52 rounded-full border"
                style={{ borderColor: 'rgba(232,213,163,0.05)' }}
              />
            </div>

            {/* Glow pool */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full animate-pulse-blue"
                style={{ background: 'radial-gradient(circle, rgba(61,90,204,0.12) 0%, transparent 70%)' }} />
            </div>

            {/* Left bottle */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -12 }}
              animate={{ opacity: 0.55, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hero-bottle absolute left-2 bottom-10 w-[90px] transition-transform duration-300"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(196,155,216,0.3))' }}
            >
              <CelestialBottle hue="#C49BD8" />
            </motion.div>

            {/* Center bottle — main */}
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.75 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.3, delay: 0.3, type: 'spring', stiffness: 70 }}
              className="hero-bottle relative w-44 md:w-52 z-10 animate-float transition-transform duration-300"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(123,158,255,0.45))' }}
            >
              <CelestialBottle hue="#7B9EFF" />

              {/* Floating tag */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -right-2 top-1/4 glass-cosmos px-3 py-2 text-xs"
              >
                <div className="text-[9px] tracking-widest uppercase font-sans mb-0.5"
                  style={{ color: '#A8BEFF' }}>Bestseller</div>
                <div className="text-ivory font-display text-sm">Oud Royale</div>
              </motion.div>
            </motion.div>

            {/* Right bottle */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 12 }}
              animate={{ opacity: 0.55, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="hero-bottle absolute right-2 bottom-10 w-[90px] transition-transform duration-300"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(232,213,163,0.25))' }}
            >
              <CelestialBottle hue="#E8D5A3" />
            </motion.div>

            {/* Moon crescent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.12, scale: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
              className="absolute top-4 right-4 w-20 h-20 rounded-full pointer-events-none"
              style={{
                background: 'transparent',
                boxShadow: 'inset -8px 0 0 2px rgba(232,213,163,0.6)',
              }}
            />
          </div>
        </div>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase font-sans"
            style={{ color: 'rgba(123,158,255,0.35)' }}>
            {t.hero.scrollLabel}
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={15} style={{ color: 'rgba(123,158,255,0.4)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
