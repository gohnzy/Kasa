import React from "react";
import { useLocation } from "react-router-dom";

import HomePhoto from '../datas/assets/HomePhoto.png'
import AboutPhoto from '../datas/assets/AboutPhoto.png'

import '../style/Bases/Banner.css'

export default function Banner() {
    let picture
    const location = useLocation().pathname
    location === "/" ? picture = HomePhoto : picture = AboutPhoto
    return (
        <section id="banner">
            <img src={picture} alt="Landscape"></img>
            <h1>{location === "/" && `Chez vous, partout et ailleurs`}</h1>
        </section>
    )
}