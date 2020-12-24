import React from 'react';
import './Card.css'

export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Titulo">{props.titulo}</div>
            <div className="Conteudo">{props.children}</div>
        </div>
    );
};
