import { useState , useEffect} from 'react';
import axios from 'axios';
import Card from '../components/Card.jsx';
import './Home.css';

const Home = () => {

    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/get/');
            
            const data = response.data;

            setCharacters(data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCharacters();
    }), [];

    return (
        <div className="app">
      <h1>Lista de Personagens</h1>
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
    </div>
    )
}

export default Home;