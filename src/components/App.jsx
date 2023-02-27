import React from "react";
import palavras from "../palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  const [desativa, setDesativa] = React.useState(true);
  const [usada, setUsada] = React.useState([]);
  const [alfabetoState, setAlfabetoState] = React.useState([]);
  const [palavra, setPalavra] = React.useState([]);
  const [secret, setSecret] = React.useState([])
  return (
    <div className="App">
      <Jogo desativa={desativa} setDesativa={setDesativa} palavra={palavra} setPalavra={setPalavra} secret={secret} setSecret={setSecret}/>
      <Letras desativa={desativa} usada={usada} setUsada={setUsada} alfabetoState={alfabetoState} setAlfabetoState={setAlfabetoState} palavra={palavra} setPalavra={setPalavra} secret={secret} setSecret={setSecret}/>
    </div>
  );
}

export default App;