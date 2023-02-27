import palavras from "../palavras";
import React, { useState } from 'react';


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letras({desativa, setDesativa}){
    let letras = alfabeto.map((a, i) => <button disabled={desativa} key={i} className="letra"><p className="pLetra">{a.toUpperCase()}</p></button>)
    return(
        <div className="letraContainer">
               {letras}
        </div>
    )
}



export default Letras;