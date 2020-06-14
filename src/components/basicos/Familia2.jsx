import React from 'react';

export default props => (
    <div>
        {/* {
            React.Children.map(props.children, (elementoFilho) => {
                return React.cloneElement(elementoFilho, props)
            })
        } */}
        {/* Ou também ...*/}
        {
            props.children.map((elementoFilho, index) => {
                return React.cloneElement(elementoFilho, {...props, key: index})
            })
        }
    </div>
);