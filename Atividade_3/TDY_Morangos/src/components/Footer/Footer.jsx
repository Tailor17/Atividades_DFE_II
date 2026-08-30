import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3>TDY Morangos</h3>
          <p>Trazendo o melhor da natureza diretamente para a sua mesa, com qualidade e frescor.</p>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@tdymorangos.com.br</p>
          <p>Telefone: (53) 99999-9999</p>
        </div>

        <div className="footer-section">
          <h3>Nossas Redes</h3>
          <p>Instagram: @tdymorangos</p>
          <p>Facebook: /tdymorangos</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 TDY Morangos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}