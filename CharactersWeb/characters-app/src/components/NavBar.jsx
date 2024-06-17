
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <img src="..\src\assets\image-001.jpg" alt="logo" className='logo'/>
        <Link to={'/'}></Link>
      </div>
    </div>
  );
}

export default Navbar;
