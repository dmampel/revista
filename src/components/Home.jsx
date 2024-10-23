import React from "react";
import '../styles/index.css'
import bg from '../assets/img/shapes.svg';
import cover from '../assets/img/character.svg'



export default function Home(){
    return(
        <div className="relative bg-contain bg-no-repeat bg-center lg:mt-24">
            <h1 className="absolute font-serif font-extrabold text-5xl md:text-[6em] xl:text-[9em] 2xl:text-[12em] top-72 left-5 lg:top-32 lg:left-10">Rolling <strong className="text-[#CD1BB5] md:pl-[2.9rem]">Stone</strong></h1>

            <img className='absolute w-[30%] md:w-[25%] top-36 left-[9em] md:top-10 md:left-[17em] lg:left-[19em] lg:-top-[10em] xl:left-[30em] xl:-top-[10em] 2xl:-top-10 2xl:left-[30rem]' src={cover} alt="" />
            <img className='absolute top-56 lg:top-8 lg:left-[5em] lg:w-[70%]' src={bg} alt="" />
            <small className="font-mono text-xs absolute font-extrabold top-[27.5em] left-6 md:top-52 md:left-12 text-gray-800"> pequeño homenaje a una gran revista</small>
        </div>
    )
}