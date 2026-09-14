import { useState, useEffect, useRef } from 'react';
import CardTarefa from '../CardTarefa/CardTarefa';
import './TodoList.css';

export default function TodoList() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem('tarefas_app');
    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas);
    }
    return [];
  });

  const tituloInputRef = useRef(null);
  
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novoTitulo, setNovoTitulo] = useState('');

  useEffect(() => {
    localStorage.setItem('tarefas_app', JSON.stringify(tarefas));
  }, [tarefas]);

  const handleAdicionarTarefa = () => {
    if (novaDescricao.trim() === '') return; // Proteção para não criar tarefa vazia

    const novaTarefa = {
      id: Date.now(), 
      titulo: novoTitulo,
      descricao: novaDescricao,
      etapas: [],
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]); 
    setNovaDescricao(''); // Limpa a textarea
    setNovoTitulo('');

    // 👈 NOVO: Após limpar os campos, devolvemos o foco do teclado para o input de Título
    if (tituloInputRef.current) {
      tituloInputRef.current.focus();
    }
  };

  const deletarTarefa = (idParaDeletar) => {
      const novaLista = tarefas.filter(tarefa => tarefa.id !== idParaDeletar);
      setTarefas(novaLista);
  };

  const adicionarEtapa = (idDaTarefa, textoDaEtapa) => {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === idDaTarefa) {
        return {
          ...tarefa, // Copia tudo que a tarefa já tem
          etapas: [...tarefa.etapas, { id: Date.now(), texto: textoDaEtapa, concluida: false }],
          concluida: false
        };
      }
      return tarefa;
    });
    
    setTarefas(novasTarefas);
  };

  const deletarEtapa = (idTarefa, idEtapa) => {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === idTarefa) {
        const etapasRestantes = tarefa.etapas.filter(etapa => etapa.id !== idEtapa);
        
        const todasConcluidas = etapasRestantes.length > 0 && etapasRestantes.every(e => e.concluida);

        return {
          ...tarefa,
          etapas: etapasRestantes,
          concluida: todasConcluidas
        };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  const alternarStatusEtapa = (idTarefa, idEtapa) => {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === idTarefa) {
        // Altera o status apenas da etapa clicada
        const novasEtapas = tarefa.etapas.map(etapa => {
          if (etapa.id === idEtapa) {
            return { ...etapa, concluida: !etapa.concluida };
          }
          return etapa;
        });

        const todasConcluidas = novasEtapas.length > 0 && novasEtapas.every(e => e.concluida);

        return {
          ...tarefa,
          etapas: novasEtapas,
          concluida: todasConcluidas
        };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  const editarTarefa = (idDaTarefa, novoTitulo, novaDescricao) => {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === idDaTarefa) {
        return { 
          ...tarefa, 
          titulo: novoTitulo, 
          descricao: novaDescricao 
        };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  return (
    <div className="todo-container">
      <h1>Titulo</h1>
      <input 
        ref={tituloInputRef} /* 👈 NOVO: Conectando a referência ao input */
        type="text"
        value={novoTitulo}
        onChange={(e) => setNovoTitulo(e.target.value)}
        placeholder="Título da tarefa..."
        style={{ width: '100%', maxWidth: '400px', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <h1>Tarefa</h1>
      <textarea 
        value={novaDescricao}
        onChange={(e) => setNovaDescricao(e.target.value)}
        placeholder="Texto da nova tarefa..."
      />
      <button onClick={handleAdicionarTarefa}>+ Nova Tarefa</button>

      <h2>Lista de Tarefas:</h2>
      <div className="lista" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {tarefas.map((tarefa, index) => (
          <CardTarefa 
            key={tarefa.id} 
            tarefa={tarefa} 
            index={index} 
            aoDeletar={deletarTarefa}
            aoAdicionarEtapa={adicionarEtapa}
            aoDeletarEtapa={deletarEtapa}
            aoAlternarStatusEtapa={alternarStatusEtapa}
            aoEditar={editarTarefa}
          />
        ))}
      </div>
    </div>
  );
}