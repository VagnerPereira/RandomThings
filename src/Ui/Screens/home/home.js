import "./style.css"
import { SideBar } from "../../Components/sideBar/sideBar";
import React from "react";

export function HomeScreen(){

    return(
        <div className = "homeStyle">
            <SideBar></SideBar>
            <h2 className = "homeText">Por favor, escolha uma opção à esquerda.</h2>
        </div>
    )
}