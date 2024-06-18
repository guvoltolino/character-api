import PropTypes from 'prop-types';
import defaultImage from '../assets/default.jpg'; 

const Card = ({ name, description, picture }) => {
  const apiUrl = "http://127.0.0.1:8000";  

  const imageUrl = picture ? `${apiUrl}${picture}` : defaultImage;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={imageUrl} alt={name} className="h-32 mx-auto" />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired, 
};

export default Card;
