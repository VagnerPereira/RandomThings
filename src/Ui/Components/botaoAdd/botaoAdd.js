import "./style.css"
import React, { useState } from "react"

export function BotaoAdd({func}){
    const [inputText, setInputText] = useState("");

    function handleChange(event){
        const valor = event.target.value;
        setInputText(valor);
    }

    function handleClick(){
        func(inputText);
        setInputText("");
    }

    return(
        <div className = "botaoAdd">
            <input 
                type = "text" 
                className = "textInputBotaoAdd" 
                placeholder = "Nome.." 
                value = {inputText} 
                onChange = {handleChange}
            />
            <button className = "plusBotaoAdd" onClick = {handleClick}>+</button>
        </div>
    )

}

