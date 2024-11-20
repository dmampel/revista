import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar(){

    return(
        <div className="px-10 py-5 bg-transparent sticky top-0 z-10">
            <ul className="flex flex-row justify-start gap-5 text-lg font-mono">
                <li>
                    <Link to='/' className="hover:cursor-pointer hover:underline decoration-yellow-500 transition-colors ease-in-out">Home</Link>
                </li>
                <li>
                    <Link to='/about' className="hover:cursor-pointer hover:underline decoration-purple-500 transition-colors ease-in-out">About</Link>
                </li>
                <li>
                    <Link to='/archive' className="hover:cursor-pointer hover:underline decoration-pink-500 transition-colors ease-in-out">Archive</Link>
                </li>
                <li>
                    <Link to='/bazaar' className="hover:cursor-pointer hover:underline decoration-lime-500 transition-colors ease-in-out">Bazaar</Link>
                </li>
            </ul>
        </div>
    )
    
}