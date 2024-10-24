import React from "react";
import Footer from './Footer.jsx';
import hand from '../assets/img/rockers-hand.svg';
import { Fade, Slide } from "react-awesome-reveal";

export default function About(){
    return(
        <div>
            
            <div className="flex flex-col items-center mx-auto mt-10 gap-10 lg:flex-row lg:w-1/2">
                
                <img className='max-w-[50%] md:max-w-[30%]' src={hand} alt="rockers hand" />
                <p className=" w-full md:w-[40%] text-justify font-mono ">
                    The best entertainment magazine that has been highly regarded in pop culture circles for its music and movie reviews, hard-hitting articles and interviews with favorite musicians, AND the <strong className="italic underline decoration-pink-600">always-iconic</strong> cover images touting popular bands, TV personalities and public figures.

                </p>
            </div>
            
            <h1 className="font-mouse-memoirs text-3xl absolute -right-[2.3rem] top-11 -rotate-90">
                Rolling 
                <strong className="text-[#EF26BD] font-normal"> Stone</strong>
            </h1>
            
            
            

            <Footer />
            
            
        </div>
    )
}