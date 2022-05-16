import React from 'react';


export default function Footer({clicaresposta}) {
    console.log(clicaresposta)
    return (
        <div className="points">
        <p>
            0/4 CONCLUÍDOS
            {clicaresposta}
        </p>
    </div>
    );
}
