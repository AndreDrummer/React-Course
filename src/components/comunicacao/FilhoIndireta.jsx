import React from 'react';

export default props => {
    const paiInfo = {
        nome: "Marcílio Jorge",
        idade: 49,
        nerd: false
    }

    return (
        <div>
            <div>
                <strong>Filho</strong>
            </div>
            <button onClick={() => props.callback(paiInfo)}>Passar informações</button>
        </div>
    )
};