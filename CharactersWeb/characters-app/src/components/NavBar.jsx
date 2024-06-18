import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex items-center justify-center text-white" style={{ backgroundColor: '#0060ad' }}>
      <div>
        <img src="..\src\assets\image-001.jpg" alt="logo" className='px-2 h-20'/>
        <Link to={'/'}></Link>
      </div>
    </div>
  );
}

export default Navbar;
