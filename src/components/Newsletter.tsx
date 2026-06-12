import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send } from 'lucide-react';
import { useApp } from '../context/AppContext';
import StarField from './StarField';

export default function Newsletter() {
  const { t, isRTL, language } = useApp();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #08091A 0%, #0C1020 50%, #08091A 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"><StarField count={70} shooting /></div>

      {/* Aurora gradient */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(61,90,204,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(196,155,216,0.08) 0%, transparent 50%)' }} />

      {/* Decorative border frames */}
      <div className="absolute inset-5 border pointer-events-none"
        style={{ borderColor: 'rgba(123,158,255,0.06)' }} />
      <div className="absolute inset-9 border pointer-events-none"
        style={{ borderColor: 'rgba(123,158,255,0.03)' }} />

      {/* Corner ornaments */}
      {['top-5 left-5', 'top-5 right-5 rotate-90', 'bottom-5 right-5 rotate-180', 'bottom-5 left-5 -rotate-90'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8 pointer-events-none`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <path d="M2 2 L2 12 M2 2 L12 2" stroke="#7B9EFF" strokeWidth="1" opacity="0.3"/>
          </svg>
        </div>
      ))}

      {/* Crescent moon */}
      <div className="absolute top-8 right-12 w-16 h-16 rounded-full pointer-events-none opacity-[0.07]"
        style={{ boxShadow: 'inset -6px 0 0 2px #E8D5A3' }} />

      <div ref={ref} className="max-w-xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          className="flex items-center justify-center gap-4 mb-6">
          <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #7B9EFF)' }} />
          <span className="text-[10px] tracking-[0.45em] uppercase font-sans" style={{ color: '#A8BEFF' }}>
            {t.newsletter.preheading}
          </span>
          <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #7B9EFF, transparent)' }} />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }} className="section-heading text-ivory mb-4 whitespace-pre-line">
          {t.newsletter.heading}
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }} className="text-sm font-sans leading-relaxed mb-12"
          style={{ color: 'rgba(240,237,232,0.38)' }}>
          {t.newsletter.subheading}
        </motion.p>

        {!submitted ? (
          <motion.form initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }} onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-md mx-auto border transition-colors duration-300"
            style={{ borderColor: 'rgba(123,158,255,0.2)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(123,158,255,0.45)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(123,158,255,0.2)')}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder} required dir={isRTL ? 'rtl' : 'ltr'}
              className="flex-1 bg-transparent px-5 py-4 text-sm font-sans outline-none"
              style={{ color: 'rgba(240,237,232,0.75)' }}
            />
            <button type="submit" className="btn-champ flex items-center justify-center gap-2 whitespace-nowrap">
              <span>{language === 'ar' ? 'انضم' : 'Join'}</span>
              <Send size={12} />
            </button>
          </motion.form>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-6">
            <div className="font-display text-xl mb-2" style={{ color: '#A8BEFF' }}>{t.newsletter.success}</div>
          </motion.div>
        )}

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }} className="text-xs font-sans mt-4"
          style={{ color: 'rgba(240,237,232,0.18)' }}>
          {t.newsletter.privacy}
        </motion.p>
      </div>
    </section>
  );
}
