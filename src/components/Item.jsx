import React from "react";


export default function Item({src, top, left, right, index}){
    return(
        
                <li>
                    <a href="http://"><img className={`${top, left, right, index} relative max-w-12`} src={src} alt={src} /></a>
                </li>
            
        
    )
}