import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import type { Product } from '../data/products';

const HUES: Record<string, string> = {
  oriental: '#E8D5A3',
  floral: '#C49BD8',
  woody: '#A8BEFF',
  fresh: '#7BE8D8',
  exclusive: '#E8D5A3',
};

function CosmosBottle({ product }: { product: Product }) {
  const hue = HUES[product.category] || '#A8BEFF';
  return (
    <svg viewBox="0 0 100 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`pb-${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B0E1F"/>
          <stop offset="35%" stopColor={hue} stopOpacity="0.35"/>
          <stop offset="65%" stopColor="#1A1F3A"/>
          <stop offset="100%" stopColor="#0B0E1F"/>
        </linearGradient>
        <linearGradient id={`pc-${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D5A3"/>
          <stop offset="50%" stopColor="#F5EDCC"/>
          <stop offset="100%" stopColor="#C4A86A"/>
        </linearGradient>
        <linearGradient id={`ps-${product.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0"/>
          <stop offset="40%" stopColor="white" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <filter id={`pg-${product.id}`}>
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <ellipse cx="50" cy="182" rx="26" ry="4" fill={hue} opacity="0.12" filter={`url(#pg-${product.id})`}/>
      <rect x="37" y="7" width="26" height="20" rx="2" fill={`url(#pc-${product.id})`}/>
      <rect x="39" y="9" width="22" height="16" rx="1" fill={`url(#ps-${product.id})`} opacity="0.5"/>
      <rect x="43" y="27" width="14" height="13" rx="1" fill={`url(#pc-${product.id})`} opacity="0.8"/>
      <rect x="34" y="38" width="32" height="5" rx="1" fill={`url(#pc-${product.id})`} opacity="0.6"/>
      <rect x="12" y="43" width="76" height="132" rx="6" fill={`url(#pb-${product.id})`}/>
      <rect x="12" y="43" width="76" height="132" rx="6" fill={`url(#ps-${product.id})`}/>
      <rect x="18" y="65" width="64" height="76" rx="2" fill="rgba(6,8,16,0.55)"/>
      <rect x="18" y="65" width="64" height="76" rx="2" stroke={hue} strokeWidth="0.5" fill="none" opacity="0.3"/>
      <line x1="22" y1="81" x2="78" y2="81" stroke={hue} strokeWidth="0.4" opacity="0.35"/>
      <line x1="22" y1="128" x2="78" y2="128" stroke={hue} strokeWidth="0.4" opacity="0.35"/>
      {/* Star symbol */}
      <path d="M50 88 L51.4 93 L57 93 L52.3 96 L54 101 L50 98 L46 101 L47.7 96 L43 93 L48.6 93 Z"
        fill={hue} opacity="0.35"/>
      <rect x="30" y="106" width="40" height="2.5" rx="1" fill={hue} opacity="0.5"/>
      <rect x="33" y="112" width="34" height="2" rx="1" fill={hue} opacity="0.3"/>
      <rect x="36" y="117" width="28" height="1.5" rx="1" fill={hue} opacity="0.2"/>
      <circle cx="22" cy="69" r="1" fill={hue} opacity="0.5"/>
      <circle cx="78" cy="69" r="1" fill={hue} opacity="0.5"/>
      <circle cx="22" cy="137" r="1" fill={hue} opacity="0.5"/>
      <circle cx="78" cy="137" r="1" fill={hue} opacity="0.5"/>
      <rect x="12" y="167" width="76" height="8" rx="0 0 6 6" fill="rgba(4,5,15,0.7)"/>
    </svg>
  );
}

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const { t, language, addToCart } = useApp();
  const [showNotes, setShowNotes] = useState(false);
  const [added, setAdded] = useState(false);

  const hue = HUES[product.category] || '#A8BEFF';
  const name = language === 'ar' ? product.nameAr : product.name;
  const tagline = language === 'ar' ? product.taglineAr : product.tagline;
  const notes = language === 'ar' ? product.notesAr : product.notes;
  const categoryLabel = language === 'ar' ? product.categoryLabelAr : product.categoryLabel;

  const badge = product.isExclusive ? (language === 'ar' ? product.badgeAr : product.badge)
    : product.isBestseller ? (language === 'ar' ? product.badgeAr : product.badge)
    : product.isNew ? (language === 'ar' ? product.badgeAr : product.badge)
    : product.badge ? (language === 'ar' ? product.badgeAr : product.badge)
    : null;

  const badgeColor = product.isExclusive ? '#E8D5A3' : product.isBestseller ? '#A8BEFF'
    : product.isNew ? '#7BE8A8' : '#C49BD8';
  const badgeBg = product.isExclusive ? 'rgba(232,213,163,0.15)' : product.isBestseller ? 'rgba(123,158,255,0.15)'
    : product.isNew ? 'rgba(123,232,168,0.15)' : 'rgba(196,155,216,0.15)';

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08 }}
      className="card-cosmos group"
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10 px-2 py-1 text-[9px] tracking-[0.15em] uppercase font-sans font-medium border"
          style={{ color: badgeColor, borderColor: badgeColor, background: badgeBg }}>
          {badge}
        </div>
      )}
      {product.originalPrice && (
        <div className="absolute top-3 right-3 z-10 text-xs font-sans line-through"
          style={{ color: 'rgba(240,237,232,0.3)' }}>
          ${product.originalPrice}
        </div>
      )}

      {/* Bottle area */}
      <div className="relative h-60 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(145deg, #0C0F22, #111528, #0C0F22)` }}>

        {/* Ambient glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `radial-gradient(ellipse at 50% 75%, ${hue}18 0%, transparent 65%)` }} />

        {/* Bottle */}
        <motion.div
          whileHover={{ scale: 1.1, y: -8 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 180 }}
          className="w-[88px] h-[168px] relative"
          style={{ filter: `drop-shadow(0 18px 36px ${hue}40)` }}
        >
          <CosmosBottle product={product} />
        </motion.div>

        {/* Category */}
        <div className="absolute bottom-3 right-3 text-[9px] tracking-[0.2em] uppercase font-sans"
          style={{ color: `${hue}80` }}>
          {categoryLabel}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10}
              style={{ color: i < Math.floor(product.rating) ? hue : 'rgba(240,237,232,0.15)',
                fill: i < Math.floor(product.rating) ? hue : 'transparent' }} />
          ))}
          <span className="text-[10px] font-sans ml-1" style={{ color: 'rgba(240,237,232,0.25)' }}>
            ({product.reviews})
          </span>
        </div>

        <h3 className="font-display text-xl font-light text-ivory mb-1">{name}</h3>
        <p className="text-xs font-sans leading-relaxed mb-3 line-clamp-2"
          style={{ color: 'rgba(240,237,232,0.38)' }}>
          {tagline}
        </p>

        {/* Notes toggle */}
        <button onClick={() => setShowNotes(v => !v)}
          className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-sans mb-3 transition-colors duration-300"
          style={{ color: showNotes ? hue : `${hue}70` }}>
          {t.products.topNotes}
          <motion.div animate={{ rotate: showNotes ? 180 : 0 }}>
            <ChevronDown size={10} />
          </motion.div>
        </button>

        <AnimatePresence>
          {showNotes && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="space-y-2 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(123,158,255,0.08)' }}>
                {(['top', 'heart', 'base'] as const).map(layer => (
                  <div key={layer} className="flex gap-2">
                    <span className="text-[9px] tracking-widest uppercase font-sans w-16 shrink-0 pt-0.5"
                      style={{ color: `${hue}50` }}>
                      {layer === 'top' ? t.products.topNotes : layer === 'heart' ? t.products.heartNotes : t.products.baseNotes}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {notes[layer].map(note => (
                        <span key={note} className="text-[9px] font-sans px-1.5 py-0.5 border"
                          style={{ color: 'rgba(240,237,232,0.45)', borderColor: 'rgba(123,158,255,0.12)' }}>
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-1">
          <div>
            <span className="font-display text-2xl font-light text-ivory">${product.price}</span>
            <span className="text-xs font-sans ml-2" style={{ color: 'rgba(240,237,232,0.3)' }}>
              {product.volume}
            </span>
          </div>
          <motion.button whileTap={{ scale: 0.95 }} onClick={handleAdd}
            className="flex items-center gap-1.5 px-3.5 py-2 text-[10px] tracking-widest uppercase font-sans transition-all duration-300 border"
            style={{
              background: added ? hue : 'transparent',
              color: added ? '#0B0E1F' : hue,
              borderColor: hue + (added ? 'ff' : '70'),
            }}>
            <ShoppingBag size={11} />
            {added ? '✓' : t.products.addToCart}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
