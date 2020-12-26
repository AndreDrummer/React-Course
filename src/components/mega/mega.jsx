import React, { useState } from 'react';
import Bolota from './Bolota';
import './mega.css';

export default props => {
    const [inputValue, setInputValue] = useState(6);
    const [arr, setArr] = useState([]);

    function onInputChange(event) {
        setInputValue(event.target.value);
        generateNumber(event.target.value)
    }

    function generateNumber(qtd) {
        let arr2 = [];
        let i = 0;
        while (i < qtd) {
            let newNumber = parseInt(Math.random() * 60 + 1);
            if (!arr2.includes(newNumber)) {
                arr2.push(newNumber);
                i++;
            }
            arr2.sort((a, b) => a - b)
        }
        setArr(arr2);
    }

    return (
        <div>
            <h1>SUPRESINHA</h1>

            <div>
                Escolha a quantidade de numeros <input min={6} max={15} value={inputValue} onChange={onInputChange} className="Input" type="number" />
            </div>

            <div>
                <button className="Button" onClick={() => generateNumber(inputValue)}>Gerar</button>
            </div>

            {
                arr.map((bol) => {
                    return (
                        <div style={{ display: 'inline-block' }}>
                            <Bolota num={bol} />
                        </div>
                    );
                })
            }
            {/* <span>
                <Bolota num={12} />
                <Bolota num={12} />
                <Bolota num={12} />
            </span> */}
        </div>
    );
}