function Jogo({jogar, fim, forca, secret}){

    return(
    <div className="app-forca">
        <img className="forca-img" src={forca} />
        <button onClick={jogar} className="botao"><p className="text">Escolher palavra!</p></button>
        <p className={`palavraSecretaLetraPorLetra ${fim}`}>{secret}</p>
    </div>
    )
}

export default Jogo;