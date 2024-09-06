import { useState } from "react";

export default function Buttons({setTrue}) {

    const [positionX, setPositionX] = useState(Math.floor(Math.random() * window.innerWidth));
    const [positionY, setPositionY] = useState(Math.floor(Math.random() * window.innerHeight));

    function randomPositionButton() {
        setPositionX(Math.floor(Math.random() * window.innerWidth));
        setPositionY(Math.floor(Math.random() * window.innerHeight));

        const button = document.querySelector('.btn-n');
        button.style.position = 'absolute';
        button.style.left = `${positionX}px`;
        button.style.top = `${positionY}px`;

    }

    console.log(setTrue);
    
    return (
        <div className='button-container'>
            <button className='btn-s' onClick={() => { setTrue(true) }}>Sim.</button>
            <button className='btn-n' onClick={() => { randomPositionButton() }}>Não!!</button>
        </div>
    )
}