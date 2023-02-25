import palavras from "../palavras";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letras(){
    let letras = alfabeto.map((a, i) => <button key={i} className="letra"><p className="pLetra">{a.toUpperCase()}</p></button>)
    return(
        <div className="letraContainer">
               {letras}
        </div>
    )
}



export default Letras;