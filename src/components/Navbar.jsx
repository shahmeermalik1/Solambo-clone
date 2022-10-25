import React from 'react'

function Navbar() {
  return (
    <>
    <div className="sm:container mx-auto hidden md:block" >
    <div className="flex h-24    gap-12 px-5">
        <div className="hover:text-primary  text-white  my-auto font-font1 text-2xl font-bold " style={{cursor: 'pointer'}}>SOLAMBO</div>
        <div className="hover:text-[#40AB82]  text-white  my-auto font-font2 text-lg ml-auto font-bold" style={{cursor: 'pointer'}}>Papers</div>
        <div className="hover:text-[#40AB82]  text-white font-font2 my-auto text-lg font-bold" style={{cursor: 'pointer'}}>Partners</div>
        <div className="hover:text-[#40AB82]  text-[#40AB82] font-font2 my-auto text-lg font-bold" style={{cursor: 'pointer'}}>Home</div>
        <div className="hover:text-[#40AB82]  text-white font-font2 my-auto text-lg font-bold" style={{cursor: 'pointer'}}>Our Team</div>
        <div className="hover:text-[#40AB82]  text-white font-font2 my-auto text-lg font-bold" style={{cursor: 'pointer'}}>Contact Us</div>
        <div className="hover:text-[#40AB82]  text-white font-font2 my-auto text-lg font-bold border-[0.1rem] border-white rounded-3xl py-2 px-5" style={{cursor: 'pointer'}}>Play Now</div>


    </div>
    </div>
    </>
  )
}

export default Navbar