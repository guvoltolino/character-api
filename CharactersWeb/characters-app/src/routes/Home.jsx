import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { PlusIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [open, setOpen] = useState(false);
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    description: '',
    picture: null,
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
    setNewCharacter({ ...newCharacter, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewCharacter({ ...newCharacter, picture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newCharacter.name);
    formData.append('description', newCharacter.description);
    if (newCharacter.picture) {
      formData.append('picture', newCharacter.picture);
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/post/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        setCharacters([...characters, response.data]);
        setNewCharacter({ name: '', description: '', picture: null });
        setOpen(false);
        getCharacters();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <h1 className='text-red-500 text-center font-semibold mb-2 text-3xl uppercase'>Lista de Personagens</h1>
      <div className="grid lg:grid-cols-3 gap-5 mt-5">
        {characters.length === 0 ? (
          <p>Loading...</p>
        ) : (
          characters.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              description={character.description}
              picture={character.picture}
            />
          ))
        )}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full fixed bottom-4 right-5"
        onClick={() => setOpen(true)}
      >
        <PlusIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        newCharacter={newCharacter}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

export default Home;
