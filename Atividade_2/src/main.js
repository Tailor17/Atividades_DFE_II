import '../public/css/style.css';
import Produtos_do_banco from './modules/produtos.json';
import { renderizarVitrine } from './modules/render.js';
import { iniciarCarrinho } from './modules/carrinho.js';

renderizarVitrine(Produtos_do_banco, 'vitrine');

iniciarCarrinho();

