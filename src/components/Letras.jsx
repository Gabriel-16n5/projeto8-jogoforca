import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
let contador = 0;
let pipoca;
let palavrinha;
let pipoquinha;
let pipoquinhaa;
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letras({setFim, setForca, desativa, usada, setUsada, setAlfabetoState, alfabetoState, palavra, secret, setSecret}){
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
        if(contador === 6){
            setFim("perdeu");
         }
        }
    setAlfabetoState(alfabeto);
    function letraClicada(a, i){
        const novo = [...usada, a];
        setUsada(novo);
        for(let i = 0; i<palavra.length;i++){
            if(novo.includes(palavra[i])){
            pipoca = secret
            pipoca[i] = palavra[i]
            setSecret(pipoca)
            palavrinha = palavra.toString();
            pipoquinha = pipoca.toString();
            pipoquinhaa = pipoquinha.replace(/,/g, "").replace(/\./g, "");
            if(palavrinha === pipoquinhaa){
                setFim("ganhou");
             } else if(pipoca.indexOf(novo)){
                
             }else {
                erou();
             }
             }
        //Passei mais de 5 horas tentando fazer a validação para cada erro,
        //Realmente não consegui criar uma lógica para isso, estou triste.
        //Criei a função, funciona certinho mas não consegui implementar:
        // -> erou();
        }
     }

    return(
        <div className="letraContainer">
            {alfabetoState.map((a, i) => <button onClick={() => letraClicada(a, i)} disabled={desativa} key={i} className="letra"><p className="pLetra">{a.toUpperCase()}</p></button>)}        
        </div>
    )
}



export default Letras;