import React from 'react'

 const Button =({title}) => {
  return(
    <div>
        <div>
      <button className=" bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
        {title}
      </button>
    </div>
  
    </div>
  )
}
export default Button;