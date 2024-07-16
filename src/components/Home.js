import React from 'react';
import bg from '../Assets/home.png';

function Home() {
  return (
    <div className="min-h-screen justify-center items-center lg:px-32 text-white bg-cover bg-center opacity-90"
      style={{ backgroundImage: `url(${bg})` }} >
      
      <div className="w-full lg:space-y-5 mt-10">
        <h1 className="text-4xl font-bold leading-tight text-blue-600 animate-bounce">
          Empowering health choices for a vibrant life your trusted.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam omnis natus accusantium quos. Reprehenderit incidunt expedita molestiae impedit at sequi dolorem iste sit culpa, optio voluptates fugiat vero consequatur?
        </p>
      </div>
    </div>
  );
}

export default Home;