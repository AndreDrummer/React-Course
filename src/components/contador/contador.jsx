import React, { Component } from 'react';
import './contador.css'

class Contador extends Component {
    state = {
        numero: this.props.numero || 0,
        passo: this.props.passoInicial || 5
    }

    // Usar o construtor aqui serve para fazer o ´bind´  do ´this´ com a função inc
    constructor(props) {
        super(props)

        // this.inc = this.inc.bind(this);

    }

    // Sem usar função arrow preciso vincular o this no construtor ou chamar a função com arrow no onClick
    // inc() {
    //     this.setState({
    //         numero: this.state.numero + this.state.passo,
    //     })
    // }

    // Usar arrow function também faz o ´this´ sempre estar vinculado a função
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                {/* // Ou chamar a função no onClick usando arrow também funcionária */}
                {/* <button onClick={() => this.inc()}>+</button> */}
            </div>
        );
    }

}

export default Contador;