import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
import { palavras, alfabeto } from "../palavras";
import Letras from "./Letras";
import Jogo from "./Jogo";
import React from "react";
let contador = 0;

function App() {
  const [forca, setForca] = React.useState(forca0);
  const [palavra, setPalavra] = React.useState([]);
  const [secret, setSecret] = React.useState([]);
  const [usada, setUsada] = React.useState(alfabeto);
  const [fim, setFim] = React.useState("");

  function jogar() {
    setForca(forca0);
    palavraSecreta();
    setUsada([]);
    setFim("");
    contador = 0;
  }

  function palavraSecreta() {
    const pRandom = palavras[Math.floor(Math.random() * palavras.length)];
    const DistrinchaPRandom = pRandom.split('');
    setPalavra(pRandom);
    DistrinchaPRandom.map((d, i) => <p key={i} className="pLetraLetraPorLetra">{d}</p>)
    const letraPorLetraSecreta = DistrinchaPRandom.map((d, i) => <p key={i} className="pLetraLetraPorLetra">{"_"}</p>)
    setSecret(letraPorLetraSecreta);
    console.log(DistrinchaPRandom)
  }

  function letraClicada(a, i) {
    const novo = [...usada, a];
    setUsada(novo);
    if (palavra.includes(a)) {
      const pipoca = secret
      for (let i = 0; i < palavra.length; i++) {
        if (novo.includes(palavra[i])) {
          pipoca[i] = palavra[i]
          setSecret(pipoca)
          const palavrinha = palavra.toString();
          const pipoquinha = pipoca.toString();
          const pipoquinhaa = pipoquinha.replace(/,/g, "").replace(/\./g, "");
          if (palavrinha === pipoquinhaa) {
            setFim("ganhou");
            acabou(a)
          }
        }
      }
    } else {
      erou(a)
    }
  }

  function acabou(a) {
    setSecret(palavra);
    setUsada(alfabeto)
  }

  function erou(a) {
    contador++;
    switch (contador) {
      case 1:
        setForca(forca1)
        break;
      case 2:
        setForca(forca2)
        break;
      case 3:
        setForca(forca3)
        break;
      case 4:
        setForca(forca4)
        break;
      case 5:
        setForca(forca5)
        break;
      case 6:
        setForca(forca6)
        break;
      default:
        break;
    }
    if (contador === 6) {
      setFim("perdeu");
      acabou(a)
    }
  }

  return (
    <div className="app">
      <Jogo jogar={jogar} forca={forca} fim={fim} secret={secret} />
      <Letras alfabeto={alfabeto} letraClicada={letraClicada} usada={usada} />
    </div>
  );
}

export default App;