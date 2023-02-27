import React from "react";
import palavras from "../palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  const [desativa, setDesativa] = React.useState(true)
  return (
    <div className="App">
      <Jogo desativa={desativa} setDesativa={setDesativa} />
      <Letras desativa={desativa} setDesativa={setDesativa}/>
    </div>
  );
}

export default App;