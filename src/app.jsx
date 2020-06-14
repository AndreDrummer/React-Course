import React from 'react';
import RandomNumber from './components/basicos/RandomNumber';
import Card from './components/basicos/Card';
import Familia from './components/basicos/Familia'
import Familia2 from './components/basicos/Familia2'
import './App.css';
import FamiliaMembro2 from './components/basicos/FamiliaMembro2';
import Table from './components/repeticao/Table';
import PaiIndireta from './components/comunicacao/PaiIndireta';
import Mega from './components/mega/mega';

export default function App() {
    return (
        <div className="App">
            <div className="Cards">
                <Card titulo="MEGA-SENA">
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