import React from 'react';
/** quando for referenciar o componente posso trocar o nome para qualquer outro pois isso não influencia no export */
import Primeiro from './components/basicos/Primeiro'; // 
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import './App.css';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAluno from './components/repeticao/ListaAluno';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import MegaSena from './components/megasena/MegaSena';

/**Primeiros Componentes*/
export default function App (){
    return(
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className='Cards'>
                
                
                <Card titulo="#13 - Desafio MegaSena" color="#ff0080">
                    <MegaSena qtde={0} />
                </Card>
                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={10} ></Contador>
                </Card>
                <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                    <Input/>
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="#618900">
                    <IndiretaPai/>
                </Card>
                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai/>
                </Card>
                <Card titulo="#08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={21}/>
                    <UsuarioInfo usuario={{nome:'Fernando'}}/>
                </Card>
                <Card titulo="#07 - Desafio repetição" color="#3A9AD9">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAluno></ListaAluno>
                </Card>

                <Card titulo="#05- Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Mendes de Almeida">
                    <FamiliaMembro nome="Daniel" />
                    <FamiliaMembro nome="Carolina"/>
                    <FamiliaMembro nome="Camila" />
                </Familia>
                </Card>
        
                <Card titulo="#04-Desafio Aleatório" color="#354D4F" >
                <Aleatorio min={1} max={60}/>
                </Card>

                <Card titulo="#03-Fragmento" color="#F00">
                    <Fragmento/>
                </Card>

                <Card titulo="#02-ComParametro" color="#051">
                <ComParametro titulo="Segundo Component" subtitulo="Teste de Parametros"/>
                </Card>

                <Card titulo="#01-Primeiro" color="#FA6900">
                <Primeiro></Primeiro>
                </Card>
            </div>

        </div>
    )
}