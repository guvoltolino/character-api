import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Modal from '../components/Modal';
import './Home.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    description: '',
    level: ''
  });

  const getCharacters = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get/');
      const data = response.data;
      setCharacters(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCharacter({
      ...newCharacter,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharacters([
      ...characters,
      { id: characters.length + 1, ...newCharacter }
    ]);
    setIsModalOpen(false);
    setNewCharacter({ name: '', description: '', level: '' });
  };

  return (
    <div className="app">
      <h1 className='title'>Lista de Personagens</h1>
      <div className="character-list">
        {characters.length === 0 ? (
          <p>Loading...</p>
        ) : (
          characters.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              description={character.description}
              level={character.level}
            />
          ))
        )}
      </div>
      <button className="add-button" onClick={() => setIsModalOpen(true)}>+</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        newCharacter={newCharacter}
        handleInputChange={handleInputChange}
      />
      <div>
    </div>
    </div>
  );
};

export default Home;
