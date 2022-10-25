import React from 'react'

function Button({text}) {
  return (
    <>
    <div className="flex justify-center md:justify-start ">
    <div className="relative">
        <div className="absolute -inset-0.5  bg-gradient-to-r from-purple-400 via-pink-500 to-red-400  blur "></div>
    <button className='relative bg-gradient-to-r  from-purple-400 via-pink-500 to-red-400 px-16 py-3 rounded-xl text-lg font-font2 font-bold'>{text}</button>
    </div>
    </div>
    </>
  )
}

export default Button