import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
    return (
        <div>
            <DiretaFilho nome="André" idade={22} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Bernardo" idade={20} nerd={false}></DiretaFilho>
        </div>
    );
}