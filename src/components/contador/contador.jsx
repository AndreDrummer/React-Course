import React, { Component } from 'react';
import './contador.css'
import Display from './display'
import Botoes from './botoes'
import Passo from './passo'

class Contador extends Component {
    state = {
        numero: this.props.numero || 0,
        passo: this.props.passoInicial || 5
    }

    // Usar o construtor aqui serve para fazer o ´bind´  do ´this´ com a função inc
    // constructor(props) {
    //     super(props)

    // this.inc = this.inc.bind(this);

    // }

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

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <Passo passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes inc={this.inc} dec={this.dec} />
            </div>
        );
    }

}

export default Contador;