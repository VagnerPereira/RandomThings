import "./style.css"
import { GroupCard } from "../groupCard/groupCard"


export function Group ({array, indice}){

    return(
        <div>
            {!!array &&
                array.map(nome => {
                    return (
                        <GroupCard nome = {nome} grupo = {indice}/>
                    )
                })
            }
        </div>
    )
}