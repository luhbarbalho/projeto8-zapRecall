import React from 'react';


const botoes = [
    "Não lembrei",
    "Quase não lembrei",
    "Zap!",
]


function respostaNeg() {
    return (
    <div className="cardScreen">
        <div className="cardQuestion">
            <p>Pergunta {index + 1}</p>
            <ion-icon name="close-circle" style={{color: "#FF3030"}}></ion-icon>
        </div>
    </div>
    );
}

function respostaMed() {
    return (
        <div className="cardScreen">
            <div className="cardQuestion">
                <p>Pergunta {index + 1}</p>
                <ion-icon name="help-circle" style={{color: "#FF922E"}}></ion-icon>
            </div>
        </div>
    );
}

function respostaPos() {
    return (
        <div className="cardScreen">
            <div className="cardQuestion">
                <p>Pergunta {index + 1}</p>
                <ion-icon name="checkmark-circle" style={{color: "#2FBE34"}}></ion-icon>
            </div>
        </div>
    );
}

function choose (clicaresposta) {
    if (clicaresposta === 0){
        setAnswer(respostaNeg());
    } if (clicaresposta === 1) {
        setAnswer(respostaMed());
    } if (clicaresposta === 2) {
        setAnswer(respostaPos());
    }
    if ((clicaresposta === 0) || (clicaresposta === 1) || (clicaresposta === 2)) {
        console.log("oioi")
    }
}



export default function Botoes({cartao, setCartao}) {

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

