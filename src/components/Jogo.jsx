import palavras from "../palavras";
import React from "react";
let pRandom = "";
let letraPorLetraSecreta;
let DistrinchaPRandom;

function Jogo({fim, desativa, setDesativa, setPalavra, secret, setSecret, forca}){
    function PalavraSecreta(){
        if(pRandom === ""){
            pRandom = palavras[Math.floor(Math.random() * palavras.length)];
        }
            DistrinchaPRandom = pRandom.split('');
            setPalavra(pRandom);
            DistrinchaPRandom.map((d, i) => <p key={i} className="pLetraLetraPorLetra">{d}</p> )
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
            <img className="forca" src={forca} alt="forca" />
            <div onClick={PalavraSecreta}>
                <button onClick={() => setDesativa(!desativa)} className="botao"><p className="text">Escolher palavra!</p></button>
                <div className="palavraSecreta">{desativa ? "" : <div className={`palavraSecretaLetraPorLetra ${fim}`}>{secret}</div>}</div>
            </div>
        </div>
        </>
    )
}

export default Jogo;