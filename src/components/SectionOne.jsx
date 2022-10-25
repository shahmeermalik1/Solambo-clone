import React from 'react'
import Button from './Button'

function SectionOne() {
  return (
    <>
    <div className="md:container mx-auto my-16">
        <div className="grid lg:grid-cols-2 md:mx-40 py-10">
            <div className="col-span-1 lg:border-r-2 border-r-primary ">
                <img src="/goatiie.png" alt="" className='animate-bounce animation-delay-700 object-contain object-top h-52 mx-auto my-10'/>
                <img src="/groupie.png" alt="ss" className='object-contain  object-bottom h-96 ' />
            </div>
            <div className="col-span-1 lg:mx-16 text-center lg:text-left px-10 lg:px-0">
                <div className="tagline font-font2 text-xl text-[#40AB82] font-bold">
                    BASE CONCEPT
                </div>
                <div className="title text-white font-font2 text-5xl">
                    Why is this important ?
                </div>
                <div className="para text-primary text-lg my-10 text-opacity-70">
                It gives everyone the ability to earn an additional income stream by doing what they love most, playing games!

The first instalment of games to be released by Project Solambo is Solambo.
In this RPG, you play as Solambo our loveable hero who on one harrowing night had the lamb of his life kidnapped and stolen away from him. Solambo will stop at nothing to save Princess Shibaa. You must help Solambo by getting your grind on!
Battling through hordes of enemies, you can upgrade your characters abilities and along the way you will be faced with challenges including mini boss The Big Bad Wolf and when you reach the final stage, you need to defeat the evil Mr Wool Smith, save Princess Shibaa and reap the rewards!
Is that it? Are you done? Nope, you like playing, we like paying.
                </div>
                <Button text="Discover" />
            </div>
        </div>


    </div>
    
    </>
  )
}

export default SectionOne