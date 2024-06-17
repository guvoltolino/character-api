/* eslint-disable react/prop-types */
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit, newCharacter, handleInputChange }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Adicionar Novo Personagem</h2>
        <form onSubmit={onSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={newCharacter.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Descrição:
            <textarea
              name="description"
              value={newCharacter.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Nível:
            <input
              type="number"
              name="level"
              value={newCharacter.level}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
