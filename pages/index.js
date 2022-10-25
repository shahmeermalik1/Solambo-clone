import Head from 'next/head'
import Image from 'next/image'
import Figures from '../src/components/Figures'
import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar'
import Team from '../src/components/Team'
import styles from '../styles/Home.module.css'
import SectionOne from '../src/components/SectionOne'
import SectionTwo from '../src/components/SectionTwo'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
   <>
    <div className="bg-[url('/hero.png')] bg-cover min-h-screen bg-center">
   <Navbar/>
   <Hero/>
   </div>
   <Figures/>
   <Team/>
   <div className="md:bg-[url('/bg3.png')] bg-cover min-h-screen bg-center">
    <SectionOne/>
   </div>
   <div className="md:bg-[url('/bgTwo.png')] bg-cover min-h-screen bg-top  ">
    <SectionTwo/>
   </div>
   <div className='bg-slate-500 bg-opacity-40'>
   <Footer/>
   </div>
   </>
  )
}
