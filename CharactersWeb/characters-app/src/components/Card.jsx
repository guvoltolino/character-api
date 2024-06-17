import './Card.css';
import PropTypes from 'prop-types';

function Card({ name, description, level }) {
  return (
    <div className="character-card">
      <div className="character-details">
        <h2>Nome: {name}</h2>
        <p>Descrição: {description}</p>
        <p>Nível: {level}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default Card;
