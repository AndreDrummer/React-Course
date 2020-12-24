import React, { useState } from 'react';
import FilhoIndireta from './FilhoIndireta';

export default props => {
    const [paiInfo, setPaiInfo] = useState({
        nome: "?",
        idade: 0,
        nerd: false
    })

    return (
        <div>
            <div>Pai</div>
            <span>{paiInfo.nome} <strong>{paiInfo.idade}</strong> {paiInfo.nerd ? 'Veradeiro' : 'False'}</span>
            <FilhoIndireta callback={setPaiInfo} />
        </div>
    );
}