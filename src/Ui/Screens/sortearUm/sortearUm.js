import "./style.css";
import { SideBar } from "../../Components/sideBar/sideBar";
import { BotaoAdd } from "../../Components/botaoAdd/botaoAdd";
import { Card } from "../../Components/card/card";
import React, { useState } from "react";
import { BotaoGeral } from "../../Components/botaoGeral/botao";

export function SortearUm(){
    const [names, setNames] = useState([]);
    const [resultado, setResultado] = useState();

    const textoSubmit = "Sortear!";
    const textoSubmitAgain = "Sortear novamente";

    function handleSubmit(){
        const tamanhoArray = names.length;
        const indiceSorteado = Math.floor(Math.random() * (tamanhoArray));
        setResultado (names.find( (nome, indice) => indice === indiceSorteado));
    }

    function handleAdd(text){
        if(text != "" && names.length < 16){
            setNames([...names, text]);
        }
    }

    function handleRemove(nome){
        const nomes = names.filter( name => name !== nome);
        setNames(nomes);
    }

    return(
        <div className = "homeStyle">
            <SideBar></SideBar>
            <div className = "screenGeralSortearUm">
                {!!(names.length === 0) && (
                    <div className = "estadoInicialSortearUm">
                        <BotaoAdd func = {handleAdd}/>
                        <BotaoGeral texto = {textoSubmit} func = {handleSubmit}/>
                    </div>
                )}
                {!(names.length === 0) && (
                    <div>
                        <div className = "screenAddSortearUm">
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
                        <div className = "screenSortearUm">
                            {!!resultado && (resultado !== "") && 
                                <div className = "cardResultado">
                                    <h3>Parabéns "{resultado}"! Você foi sorteado!</h3>
                                    <BotaoGeral texto = {textoSubmitAgain} func = {handleSubmit}/>
                                </div>
                            } 
                            {!resultado && <BotaoGeral texto = {textoSubmit} func = {handleSubmit}/>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}