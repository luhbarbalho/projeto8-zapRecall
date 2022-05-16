import React from 'react';
import logo from './assets/logo.png'

const cards = [
    {
    pergunta: 'O que é JSX?',
    resposta: 'Uma extensão de linguagem do JavaScript'
    },
    {
    pergunta: 'O React é __',
    resposta: 'uma biblioteca JavaScript para construção de interfaces'
    },
    {
    pergunta: 'Componentes devem iniciar com __',
    resposta: 'letra maiúscula'
    },
    {
    pergunta: 'Podemos colocar __ dentro do JSX',
    resposta: 'expressões'
    },
    {
    pergunta: 'O ReactDOM nos ajuda __',
    resposta: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
    pergunta: 'Usamos o npm para __',
    resposta: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
    pergunta: 'Usamos props para __',
    resposta: 'passar diferentes informações para componentes '
    },
    {
    pergunta: 'Usamos estado (state) para __',
    resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    },
];

// ===================================== BOTOES =====================================



cards.sort(sorteador);

function sorteador() { 
    return Math.random() - 0.5; 
}


function Eachcard ({pergunta, resposta, index}) {

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
                <Botoes /> 
            </div>

        );
    }

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

    function choose (clicaresposta) {
        if (clicaresposta === 0){
            setCartao(respostaNeg());
        } if (clicaresposta === 1) {
            setCartao(respostaMed());
        } if (clicaresposta === 2) {
            setCartao(respostaPos());
        }
        if ((clicaresposta === 0) || (clicaresposta === 1) || (clicaresposta === 2)) {
            console.log("oioi")
        }
    }

//==================== BOTOES ====================







function Botoes() {
    
    const botoes = [
        "Não lembrei",
        "Quase não lembrei",
        "Zap!",
    ];

    function BotaoRender() {
        return (
            <div className="buttons">
                {botoes.map((botao, index) => <button onClick={() => choose(index)} key={index} >{botao}</button>)}
            </div>
        );
    }

    return (
        <>
            {BotaoRender()}
        </>
    );

}

}



export default function Cards() {


    return (
        <>
            <div className="nextScreen hideScreen">
                <div className="logoCards">
                    <img src={logo} alt="logo"/>
                    <h1>ZapRecall</h1>
                </div>
                {/* <div className="cardScreen"></div> */}
                {cards.map((card, index) => <Eachcard key={index} index={index} numeroP={card.numeroP} pergunta={card.pergunta} resposta={card.resposta} />)}

                <div className="points">
                    <p>
                        0/4 CONCLUÍDOS
                    </p>
                </div>
            </div>
        </>
    );
}
