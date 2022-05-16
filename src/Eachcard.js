import React from 'react';
import Botoes from './Botoes';




export default function Eachcard ({pergunta, resposta, index, clicaresposta, setClicaresposta, cont, setCont}) {

    

    const [cartao, setCartao] = React.useState(numero());

    return (
        <div className="cardScreen">
            {cartao}
        </div>
    );

    function numero() {
        return (
            <div className="cardScreen">
                <div onClick={() => turncard(index)} className="cardQuestion">
                    <p>Pergunta {index + 1}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
        );
    }

    function perguntaRender() {
        return (
            <div className="questionRender">
                <p>{pergunta}</p>
                <ion-icon onClick={() => turnanswer(index)} name="refresh-outline"></ion-icon>
            </div>
        );
    }


    function respostaRender(){

        return (
            <div className="answerRender">
                <p>{resposta}</p>
                <Botoes setCartao={setCartao} index={index} clicaresposta={clicaresposta} setClicaresposta={setClicaresposta} cont={cont} setCont={setCont}/> 
            </div>

        );
    }


    function turncard (escolhida) {
        
        if (escolhida === index){
            setCartao(perguntaRender());
        }
    }

    function turnanswer (clicasetinha) {

        if (clicasetinha === index){
            setCartao(respostaRender());
        }
    }
}