import React from 'react';
import CardTrilha from './cardTrilha';
import './App.css'; // Importando o arquivo de estilos CSS


const App = () => {
  const trilhas = [
    {
      nome: 'Trilha Das Aranhas',
      cidadeEstado: 'Florianópolis, Santa Catarina',
      duracao: '30 Minutos',
      trajeto: '1 km',
      dificuldade: 'Média',
      tipo: 'Trilha na Mata',
      criador: 'Willian Ribeiro',
      imagemUrl: ''
    },
    {
      nome: 'Trilha Da Lagoinha',
      cidadeEstado: 'Florianópolis, Santa Catarina',
      duracao: '3 horas',
      trajeto: '2 km',
      dificuldade: 'Alta',
      tipo: 'Trilha de Montanha',
      criador: 'Willian Ribeiro',
      imagemUrl: ''
    },
    {
      nome: 'Trilha Praia Dos Naufragados',
      cidadeEstado: 'Florianópolis, Santa Catarina',
      duracao: '1 hora',
      trajeto: '2 km',
      dificuldade: 'Baixa',
      tipo: 'Trilha Costeira',
      criador: 'Willian Ribeiro',
      imagemUrl: ''
    },
    {
      nome: 'Trilha Morro Do Cambirela',
      cidadeEstado: 'Palhoça, Santa Catarina',
      duracao: '6 horas',
      trajeto: '6 km',
      dificuldade: 'Média',
      tipo: 'Trilha na Floresta',
      criador: 'Willian Ribeiro',
      imagemUrl: ''
    },
    {
      nome: 'Trilha Da Costa Da Lagoa',
      cidadeEstado: 'Florianópolis, Santa Catarina',
      duracao: '2 horas',
      trajeto: '2 km',
      dificuldade: 'Alta',
      tipo: 'Trilha de Aventura',
      criador: 'Willian Ribeiro',
      imagemUrl: ''
    },
    {
      nome: 'Trilha Ilha Do Campeche',
      cidadeEstado: 'Florianópolis, Santa Catarina',
      duracao: '25 Minutos',
      trajeto: '1 km',
      dificuldade: 'Média',
      tipo: 'Trilha na Montanha',
      criador: 'Willian Ribeiro',
      imagemUrl: ''
    }
  ];

  return (
    <div>
      {trilhas.map((trilha, index) => (
        <CardTrilha
          key={index}
          nome={trilha.nome}
          cidadeEstado={trilha.cidadeEstado}
          duracao={trilha.duracao}
          trajeto={trilha.trajeto}
          dificuldade={trilha.dificuldade}
          tipo={trilha.tipo}
          criador={trilha.criador}
          imagemUrl={trilha.imagemUrl}
        />
      ))}
    </div>
  );
}


export default App;

