import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import StarField from './StarField';

const FILTERS = ['all', 'oriental', 'floral', 'woody', 'exclusive'] as const;
type Filter = typeof FILTERS[number];

const filterLabels: Record<Filter, { en: string; ar: string }> = {
  all: { en: 'All', ar: 'الكل' },
  oriental: { en: 'Oriental', ar: 'شرقي' },
  floral: { en: 'Floral', ar: 'زهري' },
  woody: { en: 'Woody', ar: 'خشبي' },
  exclusive: { en: 'Exclusive', ar: 'حصري' },
};

export default function Products() {
  const { t, language } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = activeFilter === 'all' ? products : products.filter(p => p.category === activeFilter);

  return (
    <section id="products" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0E1228 0%, #0B0E1F 100%)' }}>

      <div className="absolute inset-0 pointer-events-none">
        <StarField count={50} />
      </div>

      {/* Side lines */}
      <div className="absolute left-6 top-1/4 bottom-1/4 w-px hidden xl:block"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(123,158,255,0.08), transparent)' }} />
      <div className="absolute right-6 top-1/4 bottom-1/4 w-px hidden xl:block"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(123,158,255,0.08), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="text-center mb-12">
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #7B9EFF)' }} />
            <span className="text-[10px] tracking-[0.45em] uppercase font-sans" style={{ color: '#A8BEFF' }}>
              {t.products.preheading}
            </span>
            <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #7B9EFF, transparent)' }} />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }} className="section-heading text-ivory mb-4">
            {t.products.heading}
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }} className="text-sm font-sans leading-relaxed max-w-lg mx-auto"
            style={{ color: 'rgba(240,237,232,0.35)' }}>
            {t.products.subheading}
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className="px-5 py-2 text-[10px] tracking-[0.2em] uppercase font-sans transition-all duration-300 border"
              style={activeFilter === f
                ? { background: 'rgba(123,158,255,0.15)', color: '#A8BEFF', borderColor: 'rgba(123,158,255,0.5)' }
                : { background: 'transparent', color: 'rgba(240,237,232,0.4)', borderColor: 'rgba(123,158,255,0.12)' }
              }>
              {filterLabels[f][language]}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product, i) => (
            <motion.div key={product.id} layout initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
              <ProductCard product={product} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }} className="text-center mt-12">
          <button className="btn-outline-star">{t.products.shopAll}</button>
        </motion.div>
      </div>
    </section>
  );
}
