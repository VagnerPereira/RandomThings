import "./style.css"
import { BotaoGeral } from "../botaoGeral/botao"
import { useHistory } from "react-router-dom";

export function SideBar(){
    let history = useHistory();

    function handleClickSortearUm(){
        history.push("/sortear-um");
    }

    function handleClickSortearGrupos(){
        history.push("/sortear-grupo");
    }

    return(
        <div className="sideBar">
            <BotaoGeral texto = {"Sortear um"} func = {handleClickSortearUm}></BotaoGeral>
            <BotaoGeral texto = {"Sortear Grupos"} func = {handleClickSortearGrupos}></BotaoGeral>
        </div>
    )
}