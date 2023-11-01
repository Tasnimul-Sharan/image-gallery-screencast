
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-sky-600 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="font-semibold">
            <Link to="/">
            {/* <img src={logo} className='w-52' alt='logo' /> */}
            </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/about" className="block md:inline-block mt-4 md:mt-0">About</Link>
          {/* <Link to="/login" className="block md:inline-block mt-4 md:mt-0">Login</Link> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
