import "./style.css"

export function BotaoRemover({func}){
    return(
        <button className = "removeButton" onClick = {func}>x</button>
    )
}