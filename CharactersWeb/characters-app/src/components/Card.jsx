/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import defaultImage from '../assets/default.jpg';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
import { useState } from 'react';
import DeleteCharacterModal from './DeleteCharacter';
import axios from 'axios';

const Card = ({ id, name, description, picture }) => {
  const apiUrl = "http://127.0.0.1:8000";  
  const imageUrl = picture ? `${apiUrl}${picture}` : defaultImage;

  const [open, setOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`);
      if (response.status === 204) {
        setOpen(false);
        getCharacters();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="bg-white shadow-md rounded-lg p-4 relative">
      <img src={imageUrl} alt={name} className="h-32 mx-auto" />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <div className="absolute top-0 right-0 m-2">
        <button
         
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mr-2"
        >
          <FaEdit/>
        </button>
        <button
          onClick={() => setOpen(true)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-4 rounded"
        >
          <FaTrash/>
        </button>
        <DeleteCharacterModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onSubmit={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};


export default Card;
