import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='flex justify-between items-center h-25 max-w-[1240pp] mx-auto p-4  font-bold '>
      <h1 className='w-full text-3xl font-bold  hover:bg-orange-300 rounded-full hover:font-bold text-green-500 animate-bounce px-20'>Hospital-Web</h1>
      <ul className='hidden md:flex'>
        <Link to="/" className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold text-2xl  '>Home</Link>
        <Link to="/about" className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold text-2xl '>About</Link>
        <Link to="/Services"  className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold  text-2xl'>Services</Link>
        <Link to="/blogs"  className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold text-2xl '>Blogs</Link>
        <Link to="/footer"   className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold text-2xl'>Footer</Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000400]  text-white ease-in-out duration-500' : 
           'ease-in-out duration-300 fixed left-[-100%]'}>
        <h1 className='w-full tept-3xl font-bold text-[#000300] m-4  hover:font-bold  animate-bounce'>Hospital-Web</h1>
        <Link  to="/" className='p-3 border-b border-gray-600 hover:bg-orange-300 rounded-3xl hover:font-bold text-2xl '>Home</Link>
        <Link  to="/about"  className='p-3 border-b border-gray-600 hover:bg-orange-300 rounded-3xl hover:font-bold text-2xl '>About</Link>
        <Link  to="/services"    className='p-3 border-b border-gray-600 hover:bg-orange-300 rounded-3xl hover:font-bold text-2xl '>Services</Link>
        <Link  to="/ blogs"    className='p-3 border-b border-gray-600 hover:bg-orange-300 rounded-3xl hover:font-bold text-2xl '>Blogs</Link>
        <Link  to="/footer"     className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold text-2xl'>Footer</Link>
      </ul>
    </div>
  )
}
export default Navbar;