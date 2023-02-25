import palavras from "../palavras";

function PalavraSecreta(){
    let pRandom = palavras[Math.floor(Math.random() * palavras.length)];
    let DistrinchaPRandom = pRandom.split('');
    let letraPorLetra = DistrinchaPRandom.map((d, i) => <p key={i} className="pLetraLetraPorLetra">{d}</p> )
    let letraPorLetraSecreta = DistrinchaPRandom.map((d, i) => <p key={i} className="pLetraLetraPorLetra">{"_"}</p> )
    console.log(DistrinchaPRandom)
    return(
        <div className="palavraSecretaLetraPorLetra">{letraPorLetraSecreta}</div>
        
    )
}

export default PalavraSecreta;