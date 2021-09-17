import React, { useState } from "react";
import { BotaoAdd } from "../../../Components/botaoAdd/botaoAdd";
import { Card } from "../../../Components/card/card";
import "./style.css";
import { SideBar } from "../../../Components/sideBar/sideBar";
import { Group } from "../../../Components/group/group";
import { BotaoGeral } from "../../../Components/botaoGeral/botao";
import { DropDown } from "../../../Components/dropDown/dropDown";

export function SortearGrupo(){

    const [names, setNames] = useState([]);
    const [resultado, setResultado] = useState([]);
    const [numGrupos, setNumGrupos] = useState(2);

    const textoSubmit = "Sortear!";
    const textoSubmitAgain = "Sortear novamente";

    function handleAdd(text){
        if(text != "" && names.length < 16){
            setNames([...names, text]);
        }
    }
    
    function handleRemove(nome){
        const nomes = names.filter( name => name != nome);
        setNames(nomes);
    }

    function handleSubmit(){
        const numPessoasGrupo = Math.floor((names.length) / numGrupos);
        let novoArrayNomes = names.map(personName => personName);
        let resultadoGeral = [];
        let resultadoParcial = [];
        let indiceSorteado;
        while(resultadoGeral.length < numGrupos){
            resultadoParcial = [];
            while(resultadoParcial.length < numPessoasGrupo){
                indiceSorteado = Math.floor(Math.random() * (novoArrayNomes.length));
                resultadoParcial.push(novoArrayNomes[indiceSorteado]);
                novoArrayNomes = novoArrayNomes.filter( nome => nome !== novoArrayNomes[indiceSorteado]);
            }
            resultadoGeral.push(resultadoParcial);
        }
        setResultado(alocaResto(resultadoGeral, novoArrayNomes));
    }


    function handleChangeDropDown(evento){
        console.log(evento.value);
        setNumGrupos(evento.value);
    }


    function alocaResto(arraysNomes, resto){
        let novoArraysNomes = arraysNomes.map(nomesArray => nomesArray);
        let novoResto = resto.map(restoArray => restoArray);

        let resultadoNovo = novoArraysNomes.map( nomesArray => {
            if(novoResto.length > 0){
                nomesArray.push(novoResto.pop());
            }
            return(nomesArray);
        })
        return resultadoNovo;
    }
    
    return(
        <div className = "homeStyle">
            <SideBar></SideBar>
            <div className = "screenGeralSortearGrupo">
                <div className = "cardsAreaGroupScreen">
                    {(names.length < 16) && <BotaoAdd func = {handleAdd}/>}
                    {!!names && names.map((name) => {
                        return (
                            <Card 
                                nome = {name} 
                                func = {handleRemove}
                            />
                        )
                    })}
                </div>
                {!resultado && <BotaoGeral texto = {textoSubmit} func = {handleSubmit}/>}
                {!!resultado && (resultado !== "") && 
                    <div className = "cardResultado">
                        {resultado.map( (nomes, numIndice) => {
                            return (
                                <Group array = {nomes} indice = {numIndice}/>
                            )
                        })}
                        <BotaoGeral texto = {textoSubmitAgain} func = {handleSubmit}/>
                    </div>
                }
                <DropDown func = {handleChangeDropDown}/> 
            </div>
        </div>
    )
}