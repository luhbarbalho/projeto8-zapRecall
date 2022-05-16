import React from 'react';



export default function Footer({cont}) {

    const [list, setList] = React.useState([]);
    function addResults (simbolo){
        let newList = [...list];
        newList.push(simbolo)
        setList(newList);
    }


    return (
        <div className="points">
            <p>
                0/8 CONCLUÍDOS
                {list}
            </p>
        </div>
    );

}
