/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

import '../style/Header.css'

export default function Header() {
    return (
        <header>
            <img src="./Logo.svg" alt="Logo Kasa"></img>
            <nav>
                <a id="toHomepage">Accueil</a>
                <a id="toInfos">À Propos</a>
            </nav>
        </header>
    )
}