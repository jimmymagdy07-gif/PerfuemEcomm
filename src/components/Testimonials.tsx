import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import StarField from './StarField';

const testimonials = [
  {
    id: 1, name: 'Sophia R.', nameAr: 'صوفيا ر.',
    role: 'Creative Director, Paris', roleAr: 'مديرة إبداعية، باريس',
    text: 'Oud Royale has changed my relationship with perfume entirely. I wear it like armor — it commands a room, it leaves a memory. There is nothing like it anywhere in the world.',
    textAr: 'غيّر عود ملكي علاقتي بالعطر كلياً. أرتديه كالدرع — يسيطر على أي مكان، ويترك ذكرى. لا يوجد شيء يشبهه في أي مكان بالعالم.',
    product: 'Oud Royale', accent: '#E8D5A3',
  },
  {
    id: 2, name: 'Alexander M.', nameAr: 'الكسندر م.',
    role: 'Collector, London', roleAr: 'مجمّع عطور، لندن',
    text: "I have owned hundreds of perfumes, but Velvet Iris transcends the category. The Florentine iris absolute is the purest, most precious material I've encountered. Maison Lumière is truly in a class apart.",
    textAr: 'امتلكت مئات العطور، لكن إيريس المخمل يتجاوز هذه الفئة. مطلق الإيريس الفلورنسي هو أنقى وأثمن مادة صادفتها. دار لوميير في مستوى لوحدها حقاً.',
    product: 'Velvet Iris', accent: '#C49BD8',
  },
  {
    id: 3, name: 'Layla A.', nameAr: 'ليلى أ.',
    role: 'Entrepreneur, Dubai', roleAr: 'رائدة أعمال، دبي',
    text: "Rose de Minuit is my signature. People stop me to ask what I'm wearing. The dark rose and patchouli combination is dangerously seductive — exactly what a luxury perfume should be.",
    textAr: 'وردة منتصف الليل هي عطري المميز. الناس يتوقفون ليسألوا عما أرتدي. مزيج الوردة الداكنة والباتشولي مغرٍ بشكل خطير — تماماً ما يجب أن يكون عليه العطر الفاخر.',
    product: 'Rose de Minuit', accent: '#A8BEFF',
  },
  {
    id: 4, name: 'James T.', nameAr: 'جيمس ت.',
    role: 'Architect, New York', roleAr: 'مهندس معماري، نيويورك',
    text: 'Santal Blanc is meditation in a bottle. I discovered it on a trip to Paris and it has been my daily companion for three years. Serene, warm, and impossibly sophisticated.',
    textAr: 'الصندل الأبيض تأمل في زجاجة. اكتشفته في رحلة إلى باريس وكان رفيقي اليومي لثلاث سنوات. هادئ، دافئ، وبالغ الرقي بشكل لا يُصدَّق.',
    product: 'Santal Blanc', accent: '#7BE8D8',
  },
];

export default function Testimonials() {
  const { t, language } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);
  const item = testimonials[current];

  return (
    <section className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #09111F 0%, #0B0E1F 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"><StarField count={50} /></div>
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(61,90,204,0.06) 0%, transparent 70%)' }} />

      <div ref={ref} className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          className="flex items-center justify-center gap-4 mb-6">
          <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #7B9EFF)' }} />
          <span className="text-[10px] tracking-[0.45em] uppercase font-sans" style={{ color: '#A8BEFF' }}>
            {t.testimonials.preheading}
          </span>
          <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #7B9EFF, transparent)' }} />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }} className="section-heading text-ivory mb-16 whitespace-pre-line">
          {t.testimonials.heading}
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="relative">

            {/* Stars */}
            <div className="flex justify-center gap-1.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} style={{ color: item.accent, fill: item.accent }} />
              ))}
            </div>

            {/* Big quote mark */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-9xl select-none leading-none"
              style={{ color: `${item.accent}0C` }}>"</div>

            <blockquote className="font-display text-xl md:text-2xl font-light italic leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ color: 'rgba(240,237,232,0.75)' }}>
              {language === 'ar' ? item.textAr : item.text}
            </blockquote>

            <div className="space-y-1">
              <div className="text-sm font-sans font-medium text-ivory">
                {language === 'ar' ? item.nameAr : item.name}
              </div>
              <div className="text-xs font-sans tracking-wider" style={{ color: 'rgba(240,237,232,0.35)' }}>
                {language === 'ar' ? item.roleAr : item.role}
              </div>
              <div className="inline-block mt-2 px-3 py-1 text-[10px] tracking-widest uppercase font-sans border"
                style={{ color: item.accent, borderColor: `${item.accent}30` }}>
                {item.product}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prev}
            className="w-10 h-10 border flex items-center justify-center transition-all duration-300"
            style={{ borderColor: 'rgba(123,158,255,0.2)', color: 'rgba(240,237,232,0.3)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,158,255,0.5)'; (e.currentTarget as HTMLElement).style.color = '#A8BEFF'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,158,255,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.3)'; }}>
            <ChevronLeft size={15} />
          </button>

          <div className="flex gap-2.5">
            {testimonials.map((item, i) => (
              <button key={i} onClick={() => setCurrent(i)}>
                <div className="h-px transition-all duration-400"
                  style={{ width: i === current ? 24 : 10,
                    background: i === current ? item.accent : 'rgba(240,237,232,0.15)' }} />
              </button>
            ))}
          </div>

          <button onClick={next}
            className="w-10 h-10 border flex items-center justify-center transition-all duration-300"
            style={{ borderColor: 'rgba(123,158,255,0.2)', color: 'rgba(240,237,232,0.3)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,158,255,0.5)'; (e.currentTarget as HTMLElement).style.color = '#A8BEFF'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,158,255,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.3)'; }}>
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
