// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-purple-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src='eye.png' alt="Girl in a jacket" width="10" height="10"/>
          <span className="ml-2">RateXpose</span>
        </div>
        <div className="flex-grow mx-4">
          <input type="text" className="p-2 border border-black rounded w-full" placeholder="Search the community..." />
        </div>
        <nav className="flex space-x-4">
          <a href="/landing" className="text-black">Home</a>
          <a href="/about" className="text-black">About</a>
          <a href="/blog" className="text-black">Blog</a>
          <a href="/post-bill" className="text-black">Post Bill</a>
          <a href="/login" className="text-black">Login/Signup</a>
        </nav>
      </header>
  );
};

export default Header;
