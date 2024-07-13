import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='flex justify-between items-center h-25 max-w-[1240pp] mx-auto p-4  font-bold '>
      <h1 className='w-full text-3xl font-bold  hover:bg-orange-300 rounded-full hover:font-bold text-green-500 animate-bounce'>Hospital-Web</h1>
      <ul className='hidden md:flex'>
        <li className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold  '>Home</li>
        <li className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold '>About</li>
        <li className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold '>Services</li>
        <li className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold  '>Blogs</li>
        <li className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold '>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000400]  text-white ease-in-out duration-500' : 
           'ease-in-out duration-300 fixed left-[-100%]'}>
        <h1 className='w-full tept-3xl font-bold text-[#000300] m-4  hover:font-bold  animate-bounce'>Hospital-Web</h1>
        <li className='p-3 border-b border-gray-600 hover:bg-orange-300 rounded-3xl hover:font-bold '>Home</li>
        <li className='p-3 border-b border-gray-600 hover:bg-orange-300 rounded-3xl hover:font-bold '>About</li>
        <li className='p-3 border-b border-gray-600 hover:bg-orange-300 rounded-3xl hover:font-bold '>Services</li>
        <li className='p-3 border-b border-gray-600 hover:bg-orange-300 rounded-3xl hover:font-bold '>Blogs</li>
        <li className='p-3 hover:bg-orange-300 rounded-3xl hover:font-bold'>Contact</li>
      </ul>
    </div>
  )
}
export default Navbar;