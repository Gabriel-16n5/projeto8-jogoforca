
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
import palavras from "../palavras";
import App from "./App";
import Letras from "./Letras";
import React from "react";

function Jogo({desativa, setDesativa}){
    return(
        <>
        <div className="topo">
            <img className="forca" src={forca0} alt="forca" />
            <div onClick={PalavraSecreta}>
                <button onClick={() => setDesativa(!desativa)} className="botao"><p className="text">Escolher palavra!</p></button>
                <div className="palavraSecreta">{desativa ? "" : <PalavraSecreta />}</div>
            </div>
        </div>
        </>
    )
}

let pRandom = "";

function PalavraSecreta(){
    if(pRandom === ""){
        pRandom = palavras[Math.floor(Math.random() * palavras.length)];
    }
        let DistrinchaPRandom = pRandom.split('');
        let letraPorLetra = DistrinchaPRandom.map((d, i) => <p key={i} className="pLetraLetraPorLetra">{d}</p> )
        let letraPorLetraSecreta = DistrinchaPRandom.map((d, i) => <p key={i} className="pLetraLetraPorLetra">{"_"}</p> )
        console.log(DistrinchaPRandom)
    return(
        <div className="palavraSecretaLetraPorLetra">{letraPorLetraSecreta}</div>
    )
}

export default Jogo;