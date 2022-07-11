import { useEffect, useState } from "react";
import "./App.css";
import { frases } from "./Data";

function App() {
  const [frasess, setFrasess] = useState(frases);

  const getRandomFrase = () => {
    const randomFrase = Math.floor(Math.random() * frases.length);

    setFrasess(frasess[randomFrase]);

    console.log(frasess);
  };

  useEffect(() => {
    getRandomFrase();
  }, []);

  return (
    <div className="App">
      <div className="frase">
        <p className="frase-text">{frasess.frase}</p>
        <button onClick={getRandomFrase} className="button-5" role="button">
          😎 اللى بعده 👀
        </button>
      </div>
      <p className="copyright">&copy; Mohamed Khalifa</p>
    </div>
  );
}

export default App;
