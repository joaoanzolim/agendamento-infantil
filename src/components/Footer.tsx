import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-text" style={{ color: 'var(--color-green-dark)' }}>vovó - infância com afeto</div>
          <p>Uma casa de brincar! A sua rede de apoio em Bauru para crianças de 0 a 5 anos.</p>
          
          <div className="social-links">
            <a href="#"><Instagram size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Plataforma</h4>
            <a href="#">Agendar</a>
            <a href="#">Área da Família</a>
            <a href="#">Painel Admin</a>
          </div>
          
          <div className="link-group">
            <h4>Contato</h4>
            <a href="#"><Phone size={16}/> (11) 99999-9999</a>
            <a href="#"><Mail size={16}/> ola@pequenospassos.com</a>
            <a href="#"><MapPin size={16}/> Rua Exemplo, 123 - Jardins</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Vovó - Infância com Afeto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
