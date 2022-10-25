import React from 'react'

function Footer() {
  return (
    <>
    <div className="md:container mx-auto mt-10 ">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left px-20 md:px-0">
            <div className="col-span-1 my-10">
                <div className="line-one text-white">
                <div className="hover:text-primary  text-white   font-font1 text-2xl font-bold my-5" style={{cursor: 'pointer'}}>SOLAMBO</div>
                <div className="sub text-primary">Play the new P2E blockbuster game on the market. Save the princess.</div>
                </div>
            </div>
            <div className="col-span-1 my-10">
                <div className="line-one text-white">
                <div className=" text-white  my-5 font-font2 text-2xl font-bold " >Contact Us</div>
                </div>
                <div className="sub text-primary my-2">7 Clarence House, Clarence St, Leamington Spa, Warwickshire, CV31 2AD</div>
                <div className="sub text-primary my-2">Call Us: <strong> 1926 504014 </strong></div>
                <div className="sub text-primary my-2">hello@Solambo.io</div>

            </div>
            <div className="col-span-1 my-10">
                <div className="lineone text-white   font-font1 text-2xl my-5 ">SIGN UP FOR EMAIL UPDATES</div>
                <form action="submit">
                    <input type="text" placeholder=' Enter Your Email Here' className='py-3 rounded-3xl bg-opacity-50 bg-primary my-3 placeholder-white pl-[14px]' />
                    <button type="submit" className='bg-primary text-white mx-5 py-3 px-8 rounded-3xl font-font2 font-semibold'>Submit</button>
                </form>
                <div className="sub text-primary my-4">Sign up with your Email to recieve news and updates.</div>

            
            
            </div>
        </div>
        
    </div>
    <div className="copyright text-center py-5 bg-primary bg-opacity-90 text-white font-font2 font-bold">
        Copyright ©2022 Solambo. All rights reserved.
        </div>
    </>
  )
}

export default Footer