import React from 'react';

export default (props) => {
    const num = Math.floor(Math.random() * (props.max - props.min));
    return (
        <>
            <p>Parabéns</p>
            <h1>{num}</h1>
        </>
    );
}