import { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-section">
          <div className="logo-icon" style={{ backgroundColor: 'var(--color-yellow)', color: 'var(--color-pink-dark)' }}><Heart size={24} fill="currentColor" /></div>
          <span className="logo-text" style={{ color: 'var(--color-green-dark)', lineHeight: '1.2', display: 'flex', flexDirection: 'column' }}>
            <span>vovó</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>infância com afeto</span>
          </span>
        </div>
        
        <div className="nav-links desktop-only">
          <a href="#quem-somos">Quem somos</a>
          <a href="#agendamentos">Agendamentos</a>
          <a href="#eventos">Eventos</a>
        </div>
        
        <div className="nav-actions desktop-only">
          <button className="btn-ghost">Login Admin</button>
          <button className="btn-primary">Área da Família</button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#quem-somos" onClick={() => setMobileOpen(false)}>Quem somos</a>
          <a href="#agendamentos" onClick={() => setMobileOpen(false)}>Agendamentos</a>
          <a href="#eventos" onClick={() => setMobileOpen(false)}>Eventos</a>
          <button className="btn-ghost">Login Admin</button>
          <button className="btn-primary">Área da Família</button>
        </div>
      )}
    </nav>
  );
}
