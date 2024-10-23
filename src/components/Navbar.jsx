import React from "react";

export default function Navbar(){

    return(
        <div className="px-10 py-5 bg-transparent sticky top-0">
            <ul className="flex flex-row justify-start gap-5 text-sm font-mono">
                <li className="hover:cursor-pointer hover:underline decoration-yellow-500 transition-colors ease-in-out">Home</li>
                <li className="hover:cursor-pointer hover:underline decoration-purple-500 transition-colors ease-in-out">About</li>
                <li className="hover:cursor-pointer hover:underline decoration-pink-500 transition-colors ease-in-out">Archive</li>
                <li className="hover:cursor-pointer hover:underline decoration-lime-500 transition-colors ease-in-out">Bazaar</li>
            </ul>
        </div>
    )
    
}