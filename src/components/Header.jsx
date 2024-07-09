/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { useState } from "react"

import { Link, useParams } from "react-router-dom"

import '../style/Bases/Header.css'
import logo from '../datas/assets/Logo.svg'

export default function Header() {

    const [currentPage, setCurrentPage] = useState('/') 

    return (
        <header>
            <Link to='/'> <img src={logo}alt="Logo Kasa"></img></Link>
            <nav>
                <Link to="/" className={currentPage === '/' ? 'active' : ''} onClick={() => setCurrentPage("/")}>Accueil</Link>
                <Link to="/about" className={currentPage === '/about' ? 'active' : '' } onClick={() => setCurrentPage("/about")}>À Propos</Link>
            </nav>
        </header>
    )
}
