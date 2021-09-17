import "./style.css"

export function BotaoGeral({texto, func}){
    return(
        <button className="botaoGeral" onClick={func}>{texto}</button>
    )
}