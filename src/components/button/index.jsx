export default function Buttons({setTrue, setTitleCont}) {

    function randomPositionButton() {
        const newPositionX = Math.floor(Math.random() * window.innerWidth);
        const newPositionY = Math.floor(Math.random() * window.innerHeight);

        const button = document.querySelector('.btn-n');
        button.style.position = 'absolute';
        button.style.transition = 'all 0.5s';
        button.style.transform = 'translate(-50%, -50%)';
        button.style.left = `${newPositionX}px`;
        button.style.top = `${newPositionY}px`;

        if (newPositionX > window.innerWidth / 2) {
            button.style.left = `${newPositionX - 100}px`;
        } else {
            button.style.left = `${newPositionX + 100}px`;
        }

        setTitleCont((prev) => {
            if (prev === 7 || prev === 8) {
                return 0;
            } else {
                return prev + 1;
            }
        });
        
    }

    function clickYes() {
        setTrue(true);
        setTitleCont(8);
    
    }
    
    return (
        <div className='button-container'>
            <button className='btn-s' onClick={() => { clickYes() }}>Sim</button>
            <button className='btn-n' onClick={() => { randomPositionButton() }}>Não</button>
        </div>
    )
}