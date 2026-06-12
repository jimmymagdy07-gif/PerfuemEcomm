import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { t, language, toggleLanguage, cartCount, setIsCartOpen, isRTL } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.collections, href: '#collections' },
    { label: t.nav.bestsellers, href: '#products' },
    { label: t.nav.story, href: '#story' },
    { label: t.nav.exclusive, href: '#exclusive' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'glass-cosmos py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Left nav links */}
          <div className={`hidden lg:flex items-center gap-8 ${isRTL ? 'order-3' : 'order-1'}`}>
            {navLinks.slice(0, 2).map(link => (
              <a key={link.label} href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase text-ivory/50 hover:text-starlight-glow transition-colors duration-300 font-sans">
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center order-2">
            <a href="#" className="inline-block group">
              <div className="font-display text-2xl md:text-3xl font-light tracking-[0.35em] champ-text-animate uppercase">
                Maison Lumière
              </div>
              <div className="text-[9px] tracking-[0.6em] text-starlight/40 uppercase font-sans mt-0.5">
                Haute Parfumerie
              </div>
            </a>
          </div>

          {/* Right nav + icons */}
          <div className={`hidden lg:flex items-center gap-8 ${isRTL ? 'order-1' : 'order-3'}`}>
            {navLinks.slice(2).map(link => (
              <a key={link.label} href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase text-ivory/50 hover:text-starlight-glow transition-colors duration-300 font-sans">
                {link.label}
              </a>
            ))}

            <div className="w-px h-4 bg-starlight/20" />

            <button onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-ivory/40 hover:text-starlight-glow transition-colors">
              <Globe size={13} className="opacity-70" />
              <span className="font-sans">{t.lang}</span>
            </button>

            <button onClick={() => setSearchOpen(true)}
              className="text-ivory/40 hover:text-starlight-glow transition-colors">
              <Search size={16} />
            </button>

            <button onClick={() => setIsCartOpen(true)}
              className="relative text-ivory/40 hover:text-starlight-glow transition-colors">
              <ShoppingBag size={16} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
                  style={{ background: '#7B9EFF', color: '#0B0E1F' }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile icons */}
          <div className="flex lg:hidden items-center gap-4 order-3">
            <button onClick={toggleLanguage} className="text-ivory/40 hover:text-starlight-glow transition-colors">
              <Globe size={17} />
            </button>
            <button onClick={() => setIsCartOpen(true)} className="relative text-ivory/40 hover:text-starlight-glow transition-colors">
              <ShoppingBag size={17} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
                  style={{ background: '#7B9EFF', color: '#0B0E1F' }}>
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(true)} className="text-ivory/40 hover:text-starlight-glow transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Bottom glow line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(123,158,255,0.3), rgba(232,213,163,0.2), rgba(123,158,255,0.3), transparent)' }} />
        )}
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -80 : 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? -80 : 80 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] glass-cosmos flex flex-col items-center justify-center"
          >
            <button onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-ivory/40 hover:text-starlight-glow">
              <X size={22} />
            </button>
            <div className="font-display text-2xl tracking-widest champ-text mb-12">Maison Lumière</div>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                  className="text-lg tracking-[0.3em] uppercase text-ivory/70 hover:text-starlight-glow transition-colors font-sans">
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-6"
            style={{ background: 'rgba(6,8,16,0.96)' }}
          >
            <button onClick={() => setSearchOpen(false)}
              className="absolute top-6 right-6 text-ivory/40 hover:text-starlight-glow">
              <X size={22} />
            </button>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-xl"
            >
              <div className="flex items-center border-b pb-3"
                style={{ borderColor: 'rgba(123,158,255,0.3)' }}>
                <Search size={18} className="text-starlight mr-4" />
                <input autoFocus type="text"
                  placeholder={language === 'en' ? 'Search fragrances...' : 'ابحث عن العطور...'}
                  className="flex-1 bg-transparent text-ivory text-xl font-display font-light outline-none placeholder:text-ivory/20"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
