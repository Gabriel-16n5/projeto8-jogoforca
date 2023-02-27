
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
let pRandom = "";
let letraPorLetra;
let letraPorLetraSecreta;
let DistrinchaPRandom;

function Jogo({desativa, setDesativa, palavra, setPalavra, secret, setSecret}){
    function PalavraSecreta(){
        if(pRandom === ""){
            pRandom = palavras[Math.floor(Math.random() * palavras.length)];
        }
            DistrinchaPRandom = pRandom.split(''); //Esse é o array para comparar
            setPalavra(pRandom);
            letraPorLetra = DistrinchaPRandom.map((d, i) => <p key={i} className="pLetraLetraPorLetra">{d}</p> )
            letraPorLetraSecreta = DistrinchaPRandom.map((d, i) => <p key={i} className="pLetraLetraPorLetra">{"_"}</p> )
            setSecret(letraPorLetraSecreta);
        return(
            <>

            </>
            
        )
    }
    return(
        <>
        <div className="topo">
            <img className="forca" src={forca0} alt="forca" />
            <div onClick={PalavraSecreta}>
                <button onClick={() => setDesativa(!desativa)} className="botao"><p className="text">Escolher palavra!</p></button>
                <div className="palavraSecreta">{desativa ? "" : <div className="palavraSecretaLetraPorLetra">{secret}</div>}</div>
            </div>
        </div>
        </>
    )
}

export default Jogo;