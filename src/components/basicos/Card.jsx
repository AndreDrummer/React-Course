import React from 'react';
import '../layout/Card.css'

export default props => (
    <div className="Card">
        <div className="Titulo">{props.titulo}</div>
        <div className="Conteudo">{props.children}</div>
    </div>
);
