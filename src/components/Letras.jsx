import palavras from "../palavras";
import React, { useState } from 'react';
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
let contador = 0;
let oi = 0;
let oii = 0;
let oiii =  0;
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letras({forca, setForca, desativa, setDesativa, usada, setUsada, setAlfabetoState, alfabetoState, palavra, setPalavra, secret, setSecret}){
    function erou(){
            contador++;
            switch(contador){
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
        }
    setAlfabetoState(alfabeto);
    function letraClicada(a, i){
        const novo = [...usada, a];
        setUsada(novo);
        for(let i = 0; i<palavra.length;i++){
            if(novo.includes(palavra[i])){
            let pipoca = secret
            pipoca[i] = palavra[i]
            setSecret(pipoca)
             } 
        }
     }
    


    return(
        <div className="letraContainer">
            {alfabetoState.map((a, i) => <button onClick={() => letraClicada(a, i)} disabled={desativa} key={i} className="letra"><p className="pLetra">{a.toUpperCase()}</p></button>)}        
        </div>
    )
}



export default Letras;