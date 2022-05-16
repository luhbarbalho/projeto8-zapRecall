import React from 'react';


const botoes = ["Não lembrei", "Quase não lembrei", "Zap!"]


export default function Botoes() {

    function BotaoRender() {
        return (
            <div className="buttons">
                {botoes.map((botao, index) => <button onClick={() => choose(index)} key={index}>{botao}</button>)}
            </div>
        );
    
        function choose (clicaresposta) {
            if (clicaresposta === 0){
                setAnswer(respostaNeg());
            } if (clicaresposta === 1) {
                setAnswer(respostaMed());
            } if (clicaresposta === 2) {
                setAnswer(respostaPos());
            }
        }
    }


    const [answer, setAnswer] = React.useState(BotaoRender());

    return (
        <>
            {answer}
        </>
    );

}

function respostaNeg() {
    return (
        <div className="cardScreen">
            <div className="cardQuestion">
                <p>Pergunta {/* {index + 1} */}</p>
                <ion-icon className="errada" name="close-circle" style={{color: "#FF3030"}}></ion-icon>
            </div>
        </div>
    );
}

function respostaMed() {
    return (
        <div className="cardScreen">
            <div className="cardQuestion">
                <p>Pergunta {/* {index + 1} */}</p>
                <ion-icon className="errada" name="help-circle" style={{color: "#FF922E"}}></ion-icon>
            </div>
        </div>
    );
}

function respostaPos() {
    return (
        <div className="cardScreen">
            <div className="cardQuestion">
                <p>Pergunta {/* {index + 1} */}</p>
                <ion-icon className="errada" name="checkmark-circle" style={{color: "#2FBE34"}}></ion-icon>
            </div>
        </div>
    );
}