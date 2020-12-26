import React from 'react';
import RandomNumber from './components/basicos/RandomNumber';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia'
import Familia2 from './components/basicos/Familia2'
import './App.css';
import FamiliaMembro2 from './components/basicos/FamiliaMembro2';
import Table from './components/repeticao/Table';
import PaiIndireta from './components/comunicacao/PaiIndireta';
import Mega from './components/mega/mega';
import If, { Else } from './components/condicional/condicional';
import DiretaPai from './components/comunicacao/DiretaPai';
import Contador from './components/contador/contador';

export default function App() {
    return (
        <div className="App">
            <div className="Cards">
                <Card titulo="Contador">
                    <Contador numero={0} />
                </Card>

                <Card titulo="Comunicação Direta">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="Renderização Condicional">
                    <If test={true}>
                        <RandomNumber min={1} max={40} />
                        <Else>
                            <div>Caiu no sinão!</div>
                        </Else>
                    </If>
                </Card>

                <Card titulo="MEGA-SENA" color="#CDEA44">
                    <Mega />
                </Card>

                <Card titulo="Comunicação Indireta">
                    <PaiIndireta />
                </Card>

                <Card titulo="Tabela de Produtos">
                    <Table />
                </Card>

                <Card titulo="Componente com filho 2">
                    <Familia2 sobrenome="Santos">
                        <FamiliaMembro2 nome="Jainne"></FamiliaMembro2>
                        <FamiliaMembro2 nome="Flávio"></FamiliaMembro2>
                        <FamiliaMembro2 nome="Kelly"></FamiliaMembro2>
                    </Familia2>
                </Card>

                <Card titulo="Componente com filho 1">
                    <Familia />
                </Card>

                <Card titulo="Aleatório">
                    <RandomNumber min={1} max={40} />
                </Card>
            </div>
        </div>
    );
}