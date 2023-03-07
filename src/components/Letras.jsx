function Letras ({usada, letraClicada, alfabeto}){
    
    return(
        <div className="letraContainer">
             {alfabeto.map((a, i) => <button onClick={() => letraClicada(a, i)} disabled={usada.includes(a)} key={i} className="letra"><p className="pLetra">{a.toUpperCase()}</p></button>)}
        </div>
    )
}

export default Letras;