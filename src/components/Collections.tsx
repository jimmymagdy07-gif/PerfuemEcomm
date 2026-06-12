import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { collections } from '../data/products';
import StarField from './StarField';

const ARTWORKS = [
  // Oriental — constellation of oud/amber nodes
  <svg key="o" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
    <defs>
      <radialGradient id="og-n" cx="50%" cy="55%" r="55%">
        <stop offset="0%" stopColor="#3D5ACC" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#0B0E1F" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="400" height="500" fill="#0E1128"/>
    <ellipse cx="200" cy="280" rx="180" ry="180" fill="url(#og-n)"/>
    {/* Constellation lines */}
    {[[120,180,200,140],[200,140,280,200],[280,200,240,310],[240,310,150,300],[150,300,120,180]].map(([x1,y1,x2,y2],i)=>(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(123,158,255,0.15)" strokeWidth="0.8"/>
    ))}
    {[[120,180],[200,140],[280,200],[240,310],[150,300],[185,240]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r={i===2?4:i===0?3:2} fill="#A8BEFF" opacity={i===2?0.8:0.5}/>
    ))}
    {/* Bottle silhouette */}
    <path d="M170 200 L170 185 L183 176 L217 176 L230 185 L230 200 L238 216 L238 380 Q238 390 200 390 Q162 390 162 380 L162 216 Z"
      fill="rgba(6,8,16,0.7)" stroke="rgba(123,158,255,0.3)" strokeWidth="0.8"/>
    {/* Champagne ring at collar */}
    <rect x="165" y="197" width="70" height="4" rx="1" fill="rgba(232,213,163,0.3)"/>
    {/* Aurora lines */}
    <path d="M0 430 Q100 410 200 430 Q300 450 400 430" stroke="rgba(123,158,255,0.15)" strokeWidth="1" fill="none"/>
    <path d="M0 450 Q150 430 250 455 Q350 470 400 450" stroke="rgba(196,155,216,0.1)" strokeWidth="0.5" fill="none"/>
    {/* Stars */}
    {[[40,40],[360,80],[20,300],[380,350],[200,460]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r="1.5" fill="white" opacity={Math.random()*0.4+0.3}/>
    ))}
  </svg>,

  // Floral — celestial rose, lunar petals
  <svg key="f" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
    <defs>
      <radialGradient id="fg-n" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#C49BD8" stopOpacity="0.35"/>
        <stop offset="100%" stopColor="#0B0E1F" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="400" height="500" fill="#0D0B1A"/>
    <ellipse cx="200" cy="250" rx="190" ry="190" fill="url(#fg-n)"/>
    {/* Lunar petals */}
    {[0,45,90,135,180,225,270,315].map((angle,i)=>(
      <ellipse key={i}
        cx={200+Math.cos(angle*Math.PI/180)*85} cy={250+Math.sin(angle*Math.PI/180)*85}
        rx="28" ry="50" fill="rgba(196,155,216,0.08)" stroke="rgba(196,155,216,0.2)" strokeWidth="0.5"
        transform={`rotate(${angle},${200+Math.cos(angle*Math.PI/180)*85},${250+Math.sin(angle*Math.PI/180)*85})`}
      />
    ))}
    {/* Moon center */}
    <circle cx="200" cy="250" r="35" stroke="rgba(196,155,216,0.3)" strokeWidth="1" fill="rgba(13,11,26,0.8)"/>
    <circle cx="200" cy="250" r="20" stroke="rgba(196,155,216,0.2)" strokeWidth="0.5" fill="rgba(196,155,216,0.1)"/>
    {/* Crescent inside */}
    <circle cx="208" cy="250" r="14" fill="rgba(13,11,26,0.9)" />
    {/* Stars around */}
    {[[60,60],[340,90],[80,420],[340,410],[120,30],[280,30]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r="1.5" fill="white" opacity="0.5"/>
    ))}
    <path d="M0 460 Q200 440 400 460" stroke="rgba(196,155,216,0.12)" strokeWidth="1" fill="none"/>
  </svg>,

  // Exclusive — crystal/gem facets, moonlight
  <svg key="e" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
    <defs>
      <radialGradient id="eg-n" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#E8D5A3" stopOpacity="0.2"/>
        <stop offset="50%" stopColor="#3D5ACC" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#0B0E1F" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="400" height="500" fill="#0C0F1E"/>
    <ellipse cx="200" cy="220" rx="200" ry="200" fill="url(#eg-n)"/>
    {/* Diamond/gem */}
    <polygon points="200,80 290,220 200,360 110,220" fill="rgba(232,213,163,0.05)" stroke="rgba(232,213,163,0.3)" strokeWidth="1"/>
    <polygon points="200,80 290,220 200,220" fill="rgba(232,213,163,0.04)" stroke="rgba(232,213,163,0.15)" strokeWidth="0.5"/>
    <polygon points="200,80 110,220 200,220" fill="rgba(123,158,255,0.04)" stroke="rgba(123,158,255,0.12)" strokeWidth="0.5"/>
    <polygon points="200,360 290,220 200,220" fill="rgba(196,155,216,0.04)" stroke="rgba(196,155,216,0.12)" strokeWidth="0.5"/>
    <polygon points="200,360 110,220 200,220" fill="rgba(123,158,255,0.03)" stroke="rgba(123,158,255,0.1)" strokeWidth="0.5"/>
    {/* Center sparkle */}
    <circle cx="200" cy="220" r="6" fill="rgba(232,213,163,0.7)" filter="blur(1px)"/>
    <line x1="200" y1="205" x2="200" y2="235" stroke="rgba(232,213,163,0.5)" strokeWidth="0.8"/>
    <line x1="185" y1="220" x2="215" y2="220" stroke="rgba(232,213,163,0.5)" strokeWidth="0.8"/>
    {/* Floating gem stars */}
    {[[60,60],[340,100],[50,380],[350,370],[200,440],[100,200],[300,200]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r={i<2?2:1.5} fill={i%2===0?"#E8D5A3":"#A8BEFF"} opacity={0.5+i*0.05}/>
    ))}
    <path d="M0 460 Q200 445 400 460" stroke="rgba(232,213,163,0.1)" strokeWidth="1" fill="none"/>
  </svg>,
];

const ACCENT_COLORS = ['#7B9EFF', '#C49BD8', '#E8D5A3'];
const BORDER_COLORS = ['rgba(123,158,255,', 'rgba(196,155,216,', 'rgba(232,213,163,'];

function CollectionCard({ collection, index }: { collection: typeof collections[0]; index: number }) {
  const { t, language } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const name = language === 'ar' ? collection.nameAr : collection.name;
  const description = language === 'ar' ? collection.descriptionAr : collection.description;
  const accent = ACCENT_COLORS[index];
  const border = BORDER_COLORS[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15 }}
      className="group relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: '3/4' }}
    >
      {/* Background art */}
      <div className="absolute inset-0">{ARTWORKS[index]}</div>

      {/* Star overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <StarField count={25} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 transition-opacity duration-500"
        style={{ background: `linear-gradient(to top, rgba(6,8,16,0.95) 0%, rgba(11,14,31,0.5) 50%, transparent 100%)` }} />

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600"
        style={{ background: `radial-gradient(ellipse at 50% 80%, ${border}0.08) 0%, transparent 60%)` }} />

      {/* Border */}
      <div className="absolute inset-0 border transition-all duration-500"
        style={{ borderColor: `${border}0.1)`, boxShadow: '0 0 0 0 transparent' }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = `${border}0.4)`)}
        onMouseLeave={e => (e.currentTarget.style.borderColor = `${border}0.1)`)} />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-14 h-14 overflow-hidden opacity-50">
        <div className="absolute top-0 right-0 w-px h-10" style={{ background: accent }} />
        <div className="absolute top-0 right-0 h-px w-10" style={{ background: accent }} />
      </div>

      {/* Number */}
      <div className="absolute top-5 left-7 font-display text-7xl font-light select-none"
        style={{ color: 'rgba(255,255,255,0.03)' }}>
        0{index + 1}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-7">
        <div className="w-7 h-px mb-4 opacity-60" style={{ background: accent }} />
        <h3 className="font-display text-3xl font-light mb-3 text-ivory">{name}</h3>
        <p className="text-sm font-sans leading-relaxed mb-6 max-w-xs" style={{ color: 'rgba(240,237,232,0.45)' }}>
          {description}
        </p>
        <motion.button
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-sans font-medium transition-colors duration-300"
          style={{ color: accent }}
        >
          {t.collections.shopAll}
          <ArrowRight size={13} />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Collections() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="collections" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B0E1F 0%, #0E1228 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <StarField count={40} />
      </div>
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at top, rgba(61,90,204,0.06) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="text-center mb-14">
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #7B9EFF)' }} />
            <span className="text-[10px] tracking-[0.45em] uppercase font-sans" style={{ color: '#A8BEFF' }}>
              {t.collections.preheading}
            </span>
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #7B9EFF, transparent)' }} />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }} className="section-heading text-ivory mb-4">
            {t.collections.heading}
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }} className="text-sm font-sans leading-relaxed max-w-lg mx-auto"
            style={{ color: 'rgba(240,237,232,0.35)' }}>
            {t.collections.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((col, i) => <CollectionCard key={col.id} collection={col} index={i} />)}
        </div>
      </div>
    </section>
  );
}
