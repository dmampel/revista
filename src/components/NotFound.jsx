import React from 'react';
import img from '../assets/img/notfound.svg'
import img2 from '../assets/img/notfoundclick.svg'
export default function NotFound(){

    return(
        <div>
            
            <div className='flex flex-col items-center mt-[5%] w-[80%] m-auto'>
                <h1 className="font-mouse-memoirs text-[10rem] m-auto flex flex-row items-center justify-center gap-5">Error 4<img src={img} className='w-[25%] animate-slowSpin'/>4</h1>
                <p className="font-mono font-semibold">Page not found.</p>
            </div>
            {/* <div className='flex flex-row items-center'>
                <p>Por favor, click aquí.</p>
                <img src={img2} alt="" className='w-[10%]' />
            </div> */}
        </div>
        
    );
}