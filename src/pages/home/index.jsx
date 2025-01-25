import cat from "../../assets/img/images.jpeg";
import Buttons from "../../components/button";
import { useState } from 'react';
import Title from "../../components/title";


export default function Home() {
    const [isTrue, setTrue] = useState(false);

    const [title, setTitle] = useState([
        "Sairia comigo?",
        "Tem certeza? 🤨",
        "Tem tanta certeza assim? 🤔",
        "Me odeia? 😭",
        "Por favor, aceite! 🥺",
        "Nop, aqui vc não clica! 😡",
        "Sério, não clica! 😠",
        "Para de clicar! 😡",
        "Obrigado por aceitar! 😍"
    ])

    const [title_cont, setTitleCont] = useState(0);

    return (
        <div className="container">
            {isTrue ? <img src={cat} alt="cat" /> : null}

            <Title title={`${title[title_cont]}`} />

            {isTrue ? null : <Buttons setTrue={setTrue} setTitleCont={setTitleCont} />}

            {/* {isTrue ? <Form /> : null} */}
        </div>
    )
}
