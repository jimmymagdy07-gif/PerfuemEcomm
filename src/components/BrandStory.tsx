import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useApp } from '../context/AppContext';
import StarField from './StarField';

export default function BrandStory() {
  const { t } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textRef = useRef<HTMLDivElement>(null);
  const inView = useInView(textRef, { once: true, margin: '-80px' });

  const pillars = [
    {
      icon: (
        <svg viewBox="0 0 44 44" className="w-9 h-9" fill="none">
          <circle cx="22" cy="22" r="20" stroke="rgba(123,158,255,0.25)" strokeWidth="0.8"/>
          <path d="M22 8C22 8 32 15 32 23C32 28.5 27.5 33 22 33C16.5 33 12 28.5 12 23C12 15 22 8 22 8Z"
            stroke="#7B9EFF" strokeWidth="1.2" fill="none"/>
          <path d="M22 14C22 14 27 18 27 23C27 25.8 24.8 28 22 28C19.2 28 17 25.8 17 23C17 18 22 14 22 14Z"
            fill="rgba(123,158,255,0.15)" stroke="#A8BEFF" strokeWidth="0.8"/>
          <circle cx="22" cy="23" r="3" fill="#7B9EFF" opacity="0.6"/>
        </svg>
      ),
      title: t.story.pillar1, desc: t.story.pillar1Desc,
    },
    {
      icon: (
        <svg viewBox="0 0 44 44" className="w-9 h-9" fill="none">
          <circle cx="22" cy="22" r="20" stroke="rgba(196,155,216,0.25)" strokeWidth="0.8"/>
          <circle cx="22" cy="16" r="5.5" stroke="#C49BD8" strokeWidth="1.2" fill="none"/>
          <path d="M12 34C12 28 16.5 25 22 25C27.5 25 32 28 32 34"
            stroke="#C49BD8" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M17 16 Q22 12 27 16" stroke="#C49BD8" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
        </svg>
      ),
      title: t.story.pillar2, desc: t.story.pillar2Desc,
    },
    {
      icon: (
        <svg viewBox="0 0 44 44" className="w-9 h-9" fill="none">
          <circle cx="22" cy="22" r="20" stroke="rgba(232,213,163,0.25)" strokeWidth="0.8"/>
          <path d="M15 13 L29 13 L31 17 L31 33Q31 35 22 35Q13 35 13 33L13 17Z"
            stroke="#E8D5A3" strokeWidth="1.2" fill="rgba(232,213,163,0.08)"/>
          <path d="M18 13 L18 10Q18 8 22 8Q26 8 26 10L26 13"
            stroke="#E8D5A3" strokeWidth="1"/>
          <line x1="17" y1="22" x2="27" y2="22" stroke="#E8D5A3" strokeWidth="0.8" opacity="0.5"/>
          <line x1="17" y1="27" x2="27" y2="27" stroke="#E8D5A3" strokeWidth="0.8" opacity="0.5"/>
        </svg>
      ),
      title: t.story.pillar3, desc: t.story.pillar3Desc,
    },
  ];

  const PILLAR_COLORS = ['rgba(123,158,255,', 'rgba(196,155,216,', 'rgba(232,213,163,'];

  return (
    <section id="story" ref={containerRef} className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B0E1F 0%, #09111F 50%, #0B0E1F 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"><StarField count={60} /></div>

      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1440 900" className="w-full h-full opacity-[0.06]" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="sg" cx="25%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3D5ACC" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#0B0E1F" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#sg)"/>
          {Array.from({length:8}).map((_,i)=>Array.from({length:6}).map((_,j)=>(
            <circle key={`${i}${j}`} cx={i*200+100} cy={j*160+80} r="55"
              stroke="rgba(123,158,255,1)" strokeWidth="0.5" fill="none"/>
          )))}
        </svg>
      </motion.div>

      <div ref={textRef} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #7B9EFF)' }} />
            <span className="text-[10px] tracking-[0.45em] uppercase font-sans" style={{ color: '#A8BEFF' }}>
              {t.story.preheading}
            </span>
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #7B9EFF, transparent)' }} />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }} className="section-heading text-ivory mb-8 whitespace-pre-line">
            {t.story.heading}
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }} className="text-sm font-sans leading-relaxed max-w-2xl mx-auto mb-16"
            style={{ color: 'rgba(240,237,232,0.4)' }}>
            {t.story.subheading}
          </motion.p>

          {/* Quote */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }} className="relative max-w-2xl mx-auto">
            <div className="absolute -top-6 left-0 font-display text-9xl select-none leading-none"
              style={{ color: 'rgba(123,158,255,0.06)' }}>"</div>
            <blockquote className="font-display text-xl md:text-2xl font-light italic leading-relaxed px-8"
              style={{ color: 'rgba(240,237,232,0.7)' }}>
              {t.story.quote}
            </blockquote>
            <div className="mt-4 text-[10px] tracking-[0.3em] uppercase font-sans" style={{ color: 'rgba(123,158,255,0.5)' }}>
              {t.story.quoteAuthor}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-20 py-10"
          style={{ borderTop: '1px solid rgba(123,158,255,0.1)', borderBottom: '1px solid rgba(123,158,255,0.1)' }}>
          {[
            { v: t.story.stat1Value, l: t.story.stat1Label, c: '#A8BEFF' },
            { v: t.story.stat2Value, l: t.story.stat2Label, c: '#C49BD8' },
            { v: t.story.stat3Value, l: t.story.stat3Label, c: '#E8D5A3' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-light mb-2"
                style={{ background: `linear-gradient(135deg, ${s.c}80, ${s.c})`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {s.v}
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase font-sans" style={{ color: 'rgba(240,237,232,0.3)' }}>
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pillars.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group text-center p-8 relative overflow-hidden transition-all duration-500"
              style={{ border: `1px solid ${PILLAR_COLORS[i]}0.08)` }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${PILLAR_COLORS[i]}0.3)`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = `${PILLAR_COLORS[i]}0.08)`)}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${PILLAR_COLORS[i]}0.05) 0%, transparent 70%)` }} />
              <div className="flex justify-center mb-5">{p.icon}</div>
              <h3 className="font-display text-lg font-light text-ivory mb-3">{p.title}</h3>
              <p className="text-xs font-sans leading-relaxed" style={{ color: 'rgba(240,237,232,0.35)' }}>{p.desc}</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: PILLAR_COLORS[i] + '0.4)' }} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center">
          <button className="btn-champ">{t.story.cta}</button>
        </motion.div>
      </div>
    </section>
  );
}
