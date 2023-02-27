import React from "react";
import palavras from "../palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";
import forca0 from "../assets/forca0.png";

function App() {
  const [desativa, setDesativa] = React.useState(true);
  const [usada, setUsada] = React.useState([]);
  const [alfabetoState, setAlfabetoState] = React.useState([]);
  const [palavra, setPalavra] = React.useState([]);
  const [secret, setSecret] = React.useState([])
  const [forca, setForca] = React.useState(forca0)
  return (
    <div className="App">
      <Jogo forca={forca} setForca={setForca} desativa={desativa} setDesativa={setDesativa} palavra={palavra} setPalavra={setPalavra} secret={secret} setSecret={setSecret}/>
      <Letras forca={forca} setForca={setForca} desativa={desativa} setDesativa={setDesativa} usada={usada} setUsada={setUsada} alfabetoState={alfabetoState} setAlfabetoState={setAlfabetoState} palavra={palavra} setPalavra={setPalavra} secret={secret} setSecret={setSecret}/>
    </div>
  );
}

export default App;