import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import StarField from './StarField';

export default function Footer() {
  const { t } = useApp();

  const footerLinks = [
    { title: t.footer.columns.shop, links: t.footer.columns.links },
    { title: t.footer.columns.maison, links: t.footer.columns.maisonLinks },
    { title: t.footer.columns.service, links: t.footer.columns.serviceLinks },
  ];

  const socials = [
    {
      label: 'Instagram',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[15px] h-[15px]"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
    },
    {
      label: 'X',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    },
    {
      label: 'YouTube',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
    },
  ];

  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B0E1F 0%, #060810 100%)',
        borderTop: '1px solid rgba(123,158,255,0.08)' }}>

      <div className="absolute inset-0 pointer-events-none opacity-40"><StarField count={30} /></div>

      {/* Aurora line */}
      <div className="h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(123,158,255,0.3), rgba(232,213,163,0.15), rgba(123,158,255,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl tracking-widest champ-text-animate mb-1 uppercase">
              Maison Lumière
            </div>
            <div className="text-[9px] tracking-[0.4em] uppercase font-sans mb-5"
              style={{ color: 'rgba(123,158,255,0.4)' }}>
              {t.footer.tagline}
            </div>
            <p className="text-xs font-sans leading-relaxed max-w-48"
              style={{ color: 'rgba(240,237,232,0.25)' }}>
              Grasse · Paris · Dubai · New York · Tokyo
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-7">
              {socials.map(s => (
                <button key={s.label} aria-label={s.label}
                  className="w-8 h-8 border flex items-center justify-center transition-all duration-300"
                  style={{ borderColor: 'rgba(123,158,255,0.15)', color: 'rgba(240,237,232,0.3)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,158,255,0.45)'; (e.currentTarget as HTMLElement).style.color = '#A8BEFF'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,158,255,0.15)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.3)'; }}>
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map(col => (
            <div key={col.title}>
              <h4 className="text-[10px] tracking-[0.35em] uppercase font-sans font-medium mb-5"
                style={{ color: 'rgba(123,158,255,0.6)' }}>
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-xs font-sans transition-colors duration-300"
                      style={{ color: 'rgba(240,237,232,0.35)' }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#A8BEFF')}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.35)')}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(123,158,255,0.15))' }} />
          <svg viewBox="0 0 20 20" className="w-3 h-3 opacity-30 fill-starlight">
            <path d="M10 0 L11.5 7 L18 8.5 L11.5 10 L10 17 L8.5 10 L2 8.5 L8.5 7 Z"/>
          </svg>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(123,158,255,0.15), transparent)' }} />
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-sans" style={{ color: 'rgba(240,237,232,0.18)' }}>{t.footer.rights}</p>
          <div className="flex gap-5">
            {[t.footer.privacy, t.footer.terms].map(l => (
              <a key={l} href="#" className="text-[11px] font-sans transition-colors duration-300"
                style={{ color: 'rgba(240,237,232,0.18)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.5)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.18)')}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
