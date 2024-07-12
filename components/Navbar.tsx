import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <ul className="flex space-x-4">
        <li><a href="#" className="text-white hover:text-gold">Home</a></li>
        <li><a href="#" className="text-white hover:text-gold">Events</a></li>
        <li><a href="#" className="text-white hover:text-gold">Artists</a></li>
        <li><a href="#" className="text-white hover:text-gold">News</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
