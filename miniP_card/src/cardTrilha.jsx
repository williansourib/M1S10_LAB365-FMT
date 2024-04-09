import React from 'react';
import PropTypes from 'prop-types';


const CardTrilha = ({ 
  nome,
  cidadeEstado,
  duracao,
  trajeto,
  dificuldade,
  tipo,
  criador,
  imagemUrl 
}) => {
  return (
    <div className="card">
      <img src={imagemUrl} alt={nome} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text"><strong>Cidade e Estado:</strong> {cidadeEstado}</p>
        <p className="card-text"><strong>Duração:</strong> {duracao}</p>
        <p className="card-text"><strong>Trajeto:</strong> {trajeto}</p>
        <p className="card-text"><strong>Dificuldade:</strong> {dificuldade}</p>
        <p className="card-text"><strong>Tipo:</strong> {tipo}</p>
        <p className="card-text"><strong>Criador:</strong> {criador}</p>
      </div>
    </div>
  );
}

CardTrilha.propTypes = {
  nome: PropTypes.string.isRequired,
  cidadeEstado: PropTypes.string.isRequired,
  duracao: PropTypes.string.isRequired,
  trajeto: PropTypes.string.isRequired,
  dificuldade: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  criador: PropTypes.string.isRequired,
  imagemUrl: PropTypes.string.isRequired
};

export default CardTrilha;

