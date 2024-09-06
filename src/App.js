import './App.css';
import cat from "../src/img/images.jpeg";
import Buttons from './components/buttons';
import { useState } from 'react';

function App() {

  const [isTrue, setTrue] = useState(false);

  return (
    <div className="container">
      {isTrue ? <img src={cat} alt="cat" /> : null}

      <h1>Sairia comigo?</h1>

      <Buttons setTrue={setTrue} />
    </div>
  );
}

export default App;
