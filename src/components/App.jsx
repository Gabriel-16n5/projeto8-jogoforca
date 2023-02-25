import React from "react";
import palavras from "../palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";
import PalavraSecreta from "./PalavraSecreta";

function App() {
  const [palavrinha, setPalavrinha] = React.useState([]);
  return (
    <div className="App">
      <Jogo />
      <Letras />
    </div>
  );
}

export default App;