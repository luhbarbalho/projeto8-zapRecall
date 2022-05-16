import React from 'react';
import logo from './assets/logo.png';
import Footer from './Footer';
import Eachcard from './Eachcard';


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


export default function Cards() {

    let [cont, setCont] = React.useState(0);

    const [clicaresposta, setClicaresposta] = React.useState(null);

    return (
        <>
            <div className="nextScreen">
                <div className="logoCards">
                    <img src={logo} alt="logo"/>
                    <h1>ZapRecall</h1>
                </div>
                {/* <div className="cardScreen"></div> */}
                {cards.map((card, index) => <Eachcard key={index} index={index} numeroP={card.numeroP} pergunta={card.pergunta} resposta={card.resposta} clicaresposta={clicaresposta} setClicaresposta={setClicaresposta} cont={cont} setCont={setCont}/>)}

                <Footer cont={cont} />
            </div>
        </>
    );
}

