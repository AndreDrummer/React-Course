import React from 'react';

export default (props) => {
    return (
        <div>
            <h2>{props.nome} <strong>{props.sobrenome}</strong></h2>
        </div>
    );
}