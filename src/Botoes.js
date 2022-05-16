import React from 'react';


export default function Botoes({setCartao, index, clicaresposta, setClicaresposta}) {

    const botoes = [
        "Não lembrei",
        "Quase não lembrei",
        "Zap!",
    ]

    function respostaNeg() {
        return (
        <div className="cardScreen">
            <div className="cardQuestion scratchedred">
                <p>Pergunta {index + 1}</p>
                <ion-icon name="close-circle" style={{color: "#FF3030"}}></ion-icon>
            </div>
        </div>
        );
    }
    
    function respostaMed() {
        return (
            <div className="cardScreen">
                <div className="cardQuestion scratchedyellow">
                    <p>Pergunta {index + 1}</p>
                    <ion-icon name="help-circle" style={{color: "#FF922E"}}></ion-icon>
                </div>
            </div>
        );
    }
    
    function respostaPos() {
        return (
            <div className="cardScreen">
                <div className="cardQuestion scratchedgreen">
                    <p>Pergunta {index + 1}</p>
                    <ion-icon name="checkmark-circle" style={{color: "#2FBE34"}}></ion-icon>
                </div>
            </div>
        );
    }
    console.log(clicaresposta);
    function choose (clicaresposta) {
        if (clicaresposta === 0){
            setCartao(respostaNeg());
            setClicaresposta(0);
        } if (clicaresposta === 1) {
            setCartao(respostaMed());
            setClicaresposta(1);
        } if (clicaresposta === 2) {
            setCartao(respostaPos());
            setClicaresposta(2);
        }
        console.log(clicaresposta)
        // if ((clicaresposta === 0) || (clicaresposta === 1) || (clicaresposta === 2)) {
        //     console.log("oioi")
        // }
    }


    function BotaoRender() {
        return (
            <div className="buttons">
                {botoes.map((botao, index) => <button onClick={() => choose(index)} key={index}>{botao}</button>)}
            </div>
        );
    }

    return (
        <>
            {BotaoRender()}
        </>
    );
}

