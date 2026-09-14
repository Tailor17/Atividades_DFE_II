import { useState } from 'react';
import './CardTarefa.css';

export default function CardTarefa({ tarefa, index, aoDeletar, aoAdicionarEtapa, aoDeletarEtapa, aoAlternarStatusEtapa, aoEditar}) {
  // Controle de expansão
  const [expandido, setExpandido] = useState(false);
  const [etapasExpandidas, setEtapasExpandidas] = useState(true);
  
  // Controle da caixa de Nova Etapa
  const [mostrandoCaixaEtapa, setMostrandoCaixaEtapa] = useState(false);
  const [textoNovaEtapa, setTextoNovaEtapa] = useState('');

  // Controle da caixa de Edição
  const [editando, setEditando] = useState(false);
  const [tituloEditado, setTituloEditado] = useState(tarefa.titulo);
  const [descricaoEditada, setDescricaoEditada] = useState(tarefa.descricao);

  const salvarEdicao = () => {
    if (tituloEditado.trim() !== '' && descricaoEditada.trim() !== '') {
      aoEditar(tarefa.id, tituloEditado, descricaoEditada);
      setEditando(false);
    }
  };

  const toggleExpandir = () => setExpandido(!expandido);
  const toggleEtapas = () => setEtapasExpandidas(!etapasExpandidas);

  const salvarEtapa = () => {
    if (textoNovaEtapa.trim() !== '') {
      aoAdicionarEtapa(tarefa.id, textoNovaEtapa);
      setTextoNovaEtapa('');
      setMostrandoCaixaEtapa(false);
    }
  };


  return (
    <div className={`card-tarefa ${tarefa.concluida ? 'tarefa-concluida' : ''}`}>
      <h3>{index + 1}º - {tarefa.titulo}</h3>
      
      <div className="botoes-acao">
        <span className="btn-excluir" onClick={() => aoDeletar(tarefa.id)}>❌</span>
        <span onClick={() => setEditando(true)} style={{ cursor: 'pointer' }}>📝</span>
        <span onClick={() => setMostrandoCaixaEtapa(true)}>🧭</span>
      </div>

      {mostrandoCaixaEtapa && (
        <div className="caixa-nova-etapa">
          <div className="caixa-header">
            <span>Nova Etapa</span>
            <button className="btn-fechar" onClick={() => setMostrandoCaixaEtapa(false)}>x</button>
          </div>
          <div className="caixa-body">
            <input 
              type="text" 
              value={textoNovaEtapa}
              onChange={(e) => setTextoNovaEtapa(e.target.value)}
              placeholder="Nome da etapa"
            />
            <button className="btn-confirmar" onClick={salvarEtapa}>✔️</button>
          </div>
        </div>
      )}

      {editando && (
            <div className="caixa-nova-etapa" style={{ backgroundColor: '#ffeeba', borderColor: '#ffc107' }}>
              <div className="caixa-header">
                <span>Editar Tarefa</span>
                <button className="btn-fechar" onClick={() => setEditando(false)}>x</button>
              </div>
              <div className="caixa-body" style={{ flexDirection: 'column' }}>
                <input 
                  type="text" 
                  value={tituloEditado}
                  onChange={(e) => setTituloEditado(e.target.value)}
                  placeholder="Novo título"
                  style={{ marginBottom: '5px' }}
                />
                <textarea 
                  value={descricaoEditada}
                  onChange={(e) => setDescricaoEditada(e.target.value)}
                  placeholder="Nova descrição"
                  style={{ padding: '5px', borderRadius: '4px', border: '1px solid #333', resize: 'vertical' }}
                />
                <button className="btn-confirmar" onClick={salvarEdicao} style={{ marginTop: '5px', alignSelf: 'flex-end' }}>✔️ Salvar</button>
              </div>
            </div>
          )}
      <div className="btn-expandir" onClick={toggleExpandir}>
        {expandido ? '▼' : '▶'} Descrição | {tarefa.etapas.length} Etapa(s)
      </div>

      {expandido && (
        <div className="detalhes-tarefa">
          <p>{tarefa.descricao}</p>
          
          {/* Expandir Lista Interna de Etapas */}
          <h4 onClick={toggleEtapas} style={{ cursor: 'pointer', marginTop: '10px' }}>
            {etapasExpandidas ? '▼' : '▶'} Etapas
          </h4>
          
          {etapasExpandidas && (
            tarefa.etapas.length === 0 ? (
              <p className="texto-vazio">Nenhuma etapa cadastrada.</p>
            ) : (
              <ul className="lista-etapas">
                {tarefa.etapas.map((etapa, i) => (
                  <li 
                    key={etapa.id} 
                    style={{ 
                      textDecoration: etapa.concluida ? 'line-through' : 'none', 
                      color: etapa.concluida ? 'green' : 'inherit',
                      marginBottom: '5px'
                    }}
                  >
                    <span onClick={() => aoAlternarStatusEtapa(tarefa.id, etapa.id)} style={{ cursor: 'pointer' }}>
                      {etapa.concluida ? '✔️' : '⬜'} {i + 1}. {etapa.texto}
                    </span>
                    
                    <span 
                      style={{color: 'red', cursor: 'pointer', marginLeft: '10px', fontWeight: 'bold'}} 
                      onClick={() => aoDeletarEtapa(tarefa.id, etapa.id)}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      )}
    </div>
  );
}