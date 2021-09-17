import "./style.css"

export function GroupCard({nome, grupo}){
    return(
        <div className = {"generalCardGroup" + grupo  + ' ' + "cardGroup"}>
            <h3 className = "cardGroupText">{nome}</h3>
        </div>
    )
}