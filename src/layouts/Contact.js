import React from 'react'

const Contact = () => {
    return (
        <div className='flex inset-0 items-center justify-center bg-slate-100 bg-opacity-50'>
            <div className='pop-up-from absolute mt-12 text-black'>
                <from className="w-96 md:  space-y-5 bg-white p-5 rounded-xl">
                    <h className="text-2xl font-semibold text-center bg-white"> Book Now</h>
                    <div className='flex flex-col'>
                        <input className='py-3 px-2 bg-white rounded-lg' type='text' name='UserFirstName' id='firstName'
                            placeholder='FirstName' />

                    </div>
                    <div className='flex flex-col'>
                        <input className='py-3 px-2 bg-white rounded-lg' type='text' name='UserLasttName' id='LastName'
                            placeholder='LastName' />

                    </div>
                    <div className='flex flex-col'>
                     <input className='py-3 px-2 bg-white rounded-lg' type='text' name='Email' id='Email'
                     placeholder='Email' />

                    </div>
                     <div className='flex flex-col'>
                      <input className='py-3 px-2 bg-white rounded-lg' type='text' name='UserFirstName' id='number'
                      placeholder='phone number' />
                    </div>
                    <div>
                        <div className='flex gap-5'>
                            <button title='book' Appointment />
                            <button className='bg-blue-500 text-white px-10 rounded active: ' onClick={closeForm}> close</button>


                        </div>

                    </div>

                </from>


            </div>

        </div>
    )
}
export default Contact;