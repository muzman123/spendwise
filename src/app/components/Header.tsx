// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import Logo from './logo.png'

const Header = () => {
  return (
    <header className="bg-secondary p-4 flex items-center z-50">
        <div className="flex items-center">
          <Image src={Logo} alt='logo' width={40} height={40}/>
          <span className="ml-2 font-bold">RateXpose</span>
        </div>
        <div className="flex-grow mx-4">
          <input type="text" className="p-2 border border-black rounded w-full" placeholder="Search the community..." />
        </div>
        <nav className="flex flex-row gap-3 space-x-12">
          <a href="/landing" className="text-black text-sm font-bold">Home</a>
          <a href="/about" className="text-black text-sm font-bold">About</a>
          <a href="/blog" className="text-black text-sm font-bold">Blog</a>
          <a href="/post-bill" className="text-black text-sm font-bold">Post Bill</a>
          <a href="/login" className="inline-block text-sm">
            <button className="text-text border-2 bg-primary rounded-md">Login/Signup</button>
          </a>
        </nav>
      </header>
  );
};

export default Header;
