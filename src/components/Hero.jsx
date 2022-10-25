import React from 'react'
import Button from './Button'
 
function Hero() {
  return (
    <>
    <div className="md:container  mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="col-span-1 md:m-32 my-24 bg-slate-50 bg-opacity-10 rounded-xl ">
                    <div className="sub-title text-[#40AB82] font-font2 mx-5 text-xl font-bold py-5">PLAY AND COLLECT NFT</div>
                    <div className="main-title text-4xl lg:text-6xl mx-5 text-white font-font2 font-semibold leading-normal">
                    Welcome To Project So lambo Where  gaming meets reality.
                    </div>
                    <div className="description font-font1 text-lg mx-5 text-secondary my-10 text-opacity-70">
                    Project Solambo is a community-driven metaverse and social gaming platform with a difference. Players can earn rewards by playing their favourite games using special upgradeable NFT characters that keep their progress recorded on the blockchain.
                    </div>
                    <div className="m-5 text-center flex">

                    <Button text="Discover"/>
                    </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Hero