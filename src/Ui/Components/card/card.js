import "./style.css"
import { BotaoRemover } from "../botaoRemover/botaoRemover"

export function Card({nome, func}){
    return(
        <div className = "card">
            <h3 className = "cardText">{nome}</h3>
            <BotaoRemover func = {() => func(nome)}/>
        </div>
    )
}