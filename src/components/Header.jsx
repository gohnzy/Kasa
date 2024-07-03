/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

import { Link } from "react-router-dom"

import '../style/Bases/Header.css'
import logo from '../datas/assets/Logo.svg'

export default function Header() {

    return (
        <header>
            <Link to='/'> <img src={logo}alt="Logo Kasa"></img></Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À Propos</Link>
            </nav>
        </header>
    )
}
