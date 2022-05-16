import React from 'react';
import logo from './assets/logo.png';
import Botoes from './Botoes';
import Footer from './Footer';


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

cards.sort(sorteador);

function sorteador() { 
    return Math.random() - 0.5; 
}


function Eachcard ({pergunta, resposta, index}) {

    const [clicaresposta, setClicaresposta] = React.useState(null);

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
                <Botoes setCartao={setCartao} index={index} clicaresposta={clicaresposta} setClicaresposta={setClicaresposta}/> 
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

export default function Cards({clicaresposta}) {


    return (
        <>
            <div className="nextScreen">
                <div className="logoCards">
                    <img src={logo} alt="logo"/>
                    <h1>ZapRecall</h1>
                </div>
                {/* <div className="cardScreen"></div> */}
                {cards.map((card, index) => <Eachcard key={index} index={index} numeroP={card.numeroP} pergunta={card.pergunta} resposta={card.resposta} />)}

                <Footer clicaresposta={clicaresposta}/>
            </div>
        </>
    );
}

