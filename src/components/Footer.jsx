import React from "react";
const covers = [
    'davegrohl.svg', 'bowie.svg', 'red.svg', 'lana.svg', 'amy.svg', 'oasis.svg',
    'billiejoe.svg', 'marilyn.svg', 'harry.svg', 'riri.svg', 'badbunny.svg',
    'billieilish.svg', 'kanye.svg', 'michael.svg', 'youngblud.png', 'nirvana.png',
    'eltonlana.png', 'charly.png', 'metallica.png', 'eminem.png', 'miloj.png',
    'pity.png', 'roger.png', 'dave.png', 'thecure.png'
    ];


export default function Footer(){
    return(
        

        <div className="fixed bottom-0">
            <ul className="flex flex-row items-baseline">
                {covers.map((cover, index) => (
                <li key={index}>
                    <a href="http://"><img className='max-w-11 hover:-translate-y-3 transition' src={`/covers/${cover}`} alt={cover.replace('.svg', '').replace('.png', '')} /></a>
                </li>
                ))}
            </ul>
        </div>
            
        
    )
}