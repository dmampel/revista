import React from "react";
import '../styles/index.css'
import bg from '../assets/img/shapes.svg';
import cover from '../assets/img/character.svg'



export default function Home(){
    return(
        <div className="relative bg-contain bg-no-repeat bg-center mt-10 ">
            <h1 className="absolute font-serif font-extrabold text-[180px] top-32 left-10">Rolling <strong className="text-[#CD1BB5] pl-10">Stones</strong></h1>
            <img className='absolute -top-10 left-[30rem]' src={cover} alt="" />
            <img className='absolute' src={bg} alt="" />
            <small className="font-mono text-xs absolute font-extrabold top-64 left-12 text-gray-800"> pequeño homenaje a una gran revista</small>
        </div>
    )
}