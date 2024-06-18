import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { PlusIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);

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
        onClick={() => setModalOpen(true)}
      >
        <PlusIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <Modal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
};

export default Home;
