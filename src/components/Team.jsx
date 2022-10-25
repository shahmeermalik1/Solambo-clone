import Image from 'next/image'
import React from 'react'
import Button from './Button'


function Team() {
  return (
    <>
    <div className="md:container mx-auto bg-slate-500 bg-opacity-40 my-24 rounded-3xl min-h-fit h-96">
    <div className=" grid grid-cols-1 md:grid-cols-2 ">
        <div className="hidden md:col-span-1 md:block">
        <img src="/wolfie.png" alt="" className='object-none h-96 object-top mx-auto '/>
        </div>
        <div className="col-span-1 h-96 min-h-fit text-center md:text-left">
            <div className="title text-white font-font2 text-6xl font-bold mt-20">
                Meet The Team
            </div>
            <div className="para text-lg  md:mr-10 text-secondary text-opacity-70 font-font2 my-8 mx-8 md:mx-auto">Meet our amazing team of 32 members. Read about their story and how they made an impact in creating Solambo.</div>
            <div className="btn">
            <Button text={"Our Team"}/>
            </div>
            
        </div>
    </div>
    </div>
    </>
  )
}

export default Team