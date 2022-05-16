import React from 'react';
import Cards from './Cards'
import logo from './assets/logo.png'

export default function Begining() {

    const [comeco, setComeco] = React.useState(Start());

    function mostrarDeck(){
        setComeco(<Cards />)
    };

    return (
        <>
            {comeco}
        </>
    );

    function Start() {
        return (
            <div className="startScreen">
                <div className="logoStart">
                    <img src={logo} alt="logo"/>
                    <h1>ZapRecall</h1>
                </div>
                <button className="btnStart" onClick={() => mostrarDeck()}>Iniciar Recall!</button>
            </div>
        );
    }
}


