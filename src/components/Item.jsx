import React from "react";


export default function Item({src}){
    return(
        
        <li>
            <a href="http://"><img className='max-w-11 hover:-translate-y-3 transition' src={src} alt={src} /></a>
        </li>
            
        
    )
}