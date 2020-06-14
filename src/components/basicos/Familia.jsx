import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default () => {
    return (
        <div>
            <FamiliaMembro nome="André" sobrenome="Silva"/>
            <FamiliaMembro nome="Ana" sobrenome="Silva"/>
            <FamiliaMembro nome="Alisson" sobrenome="Silva"/>
        </div>
    );
}