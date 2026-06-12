import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const HUES: Record<string, string> = {
  oriental: '#E8D5A3', floral: '#C49BD8', woody: '#A8BEFF', exclusive: '#E8D5A3',
};

export default function CartSidebar() {
  const { t, language, isRTL, cart, removeFromCart, cartTotal, isCartOpen, setIsCartOpen } = useApp();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[70]" style={{ background: 'rgba(4,5,15,0.75)', backdropFilter: 'blur(8px)' }} />

          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }} exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className={`fixed top-0 bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-full max-w-md z-[80] flex flex-col`}
            style={{ background: 'linear-gradient(180deg, #0E1228, #0B0E1F)' }}>

            {/* Top aurora line */}
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #7B9EFF, #C49BD8, #7B9EFF, transparent)' }} />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: '1px solid rgba(123,158,255,0.08)' }}>
              <div className="flex items-center gap-3">
                <ShoppingBag size={16} style={{ color: '#A8BEFF' }} />
                <span className="font-display text-lg font-light text-ivory">{t.cart.title}</span>
              </div>
              <button onClick={() => setIsCartOpen(false)}
                className="transition-colors duration-300"
                style={{ color: 'rgba(240,237,232,0.3)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#A8BEFF')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.3)')}>
                <X size={19} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <ShoppingBag size={40} style={{ color: 'rgba(123,158,255,0.15)' }} />
                  <div>
                    <p className="font-display text-lg" style={{ color: 'rgba(240,237,232,0.4)' }}>{t.cart.empty}</p>
                    <p className="text-sm font-sans mt-1" style={{ color: 'rgba(240,237,232,0.2)' }}>{t.cart.emptySubtext}</p>
                  </div>
                  <button onClick={() => setIsCartOpen(false)} className="btn-outline-star mt-4 text-xs">
                    {t.nav.collections}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(({ product, quantity }) => {
                    const name = language === 'ar' ? product.nameAr : product.name;
                    const hue = HUES[product.category] || '#A8BEFF';
                    return (
                      <motion.div key={product.id} layout initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 py-4"
                        style={{ borderBottom: '1px solid rgba(123,158,255,0.06)' }}>
                        <div className="w-16 h-20 flex items-center justify-center flex-shrink-0"
                          style={{ background: `linear-gradient(135deg, #0C0F22, #111528)`, border: `1px solid ${hue}20` }}>
                          <div className="text-center">
                            <div className="text-[10px] tracking-wider font-sans" style={{ color: hue }}>{product.volume}</div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-sm text-ivory font-light">{name}</h4>
                          <p className="text-xs font-sans mt-0.5" style={{ color: 'rgba(240,237,232,0.3)' }}>{product.volume}</p>
                          <div className="flex items-center justify-between mt-3">
                            <div className="font-sans text-sm" style={{ color: hue }}>
                              ${product.price * quantity}
                              {quantity > 1 && <span className="text-xs ml-1" style={{ color: 'rgba(240,237,232,0.25)' }}>×{quantity}</span>}
                            </div>
                            <button onClick={() => removeFromCart(product.id)}
                              className="transition-colors duration-300"
                              style={{ color: 'rgba(240,237,232,0.2)' }}
                              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#C49BD8')}
                              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.2)')}>
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-6 py-6 space-y-4" style={{ borderTop: '1px solid rgba(123,158,255,0.08)' }}>
                <div className="text-center text-[10px] tracking-widest uppercase font-sans"
                  style={{ color: 'rgba(123,158,255,0.35)' }}>
                  ✦ {t.cart.shipping}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans"
                    style={{ color: 'rgba(240,237,232,0.35)' }}>{t.cart.total}</span>
                  <span className="font-display text-2xl font-light text-ivory">${cartTotal}</span>
                </div>
                <button className="btn-champ w-full flex items-center justify-center gap-3">
                  {t.cart.checkout}
                  <ArrowRight size={14} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
