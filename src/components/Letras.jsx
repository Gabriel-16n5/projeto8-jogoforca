import palavras from "../palavras";
import React, { useState } from 'react';


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letras({desativa, usada, setUsada, setAlfabetoState, alfabetoState, palavra, setPalavra, secret, setSecret}){
    setAlfabetoState(alfabeto);
    function letraClicada(a){
        const novo = [...usada, a];
        setUsada(novo);
        console.log(novo);
        console.log(palavra);
        console.log(secret);
            for(let i = 0; i<palavra.length;i++){
                if(novo.includes(palavra[i])){
                console.log(palavra[i])
                let pipoca = secret
                pipoca[i] = palavra[i]
                console.log(pipoca)
                setSecret(pipoca)
                }             
            }
    }


    return(
        <div className="letraContainer">
            {alfabetoState.map((a, i) => <button onClick={() => letraClicada(a)} disabled={desativa} key={i} className="letra"><p className="pLetra">{a}</p></button>)}        
        </div>
    )
}



export default Letras;