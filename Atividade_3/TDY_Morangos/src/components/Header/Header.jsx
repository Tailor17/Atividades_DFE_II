import './Header.css';

export function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src="/images/morango_logo.png" alt="Logo TDY Morangos" className="logo-icone" />
        <span className="logo-texto">TDY Morangos</span>
      </div>

      <div className="acoes-usuario">
        <button className="btn-outline">Previsão de Disponibilidade</button>
        <span className="nome-cliente">Olá, Visitante</span>
        <button className="btn-login">Login</button>
        
        <div className="carrinho">
          🛒 <span id="contador-carrinho">0</span>
        </div>
      </div>
    </header>
  );
}