/* eslint-disable jsx-a11y/img-redundant-alt */
import '../../style/Pages/Places/Place.css'
import { useState } from 'react'

import fullStar from '../../datas/assets/Full_star.svg'
import emptyStar from '../../datas/assets/Empty_star.svg'
import arrow from '../../datas/assets/dropArrow.svg'
import Dropdown from '../Dropdown'


const Place = ({ datas }) => {

    let starsTable = []
    const stars = parseInt(datas.rating)

    let emptyStarsTable = []
    const emptyStart = 5 - stars
    for (let i = 0; i < stars; i++) {
        starsTable.push("star")
    }
    for (let i = 0; i < emptyStart; i++) {
        emptyStarsTable.push("star")
    }

  
    const [currentIndex, setCurrentIndex] = useState(0);
    const pics = datas.pictures;

    const handleNext = () => {
        setCurrentIndex((nextIndex) => (nextIndex + 1) % pics.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pics.length) % pics.length);
    };

    let infosTable = []
    infosTable.push(
        {key: 'Description', value: datas.description},
        {key: 'Équipements', value: datas.equipments}
    )

    return (
        <main id='place'>
            <div id='place-gallery'>
                <img 
                    key={currentIndex} 
                    src={pics[currentIndex]} 
                    alt="Pas de photo pour ce logement" 
                    id='displayed-image'
                />
                {datas.pictures.length > 1 ?  (
                    <>
                        <i id='picture-count'>{currentIndex+1}/{datas.pictures.length}</i>
                        <img src={arrow} alt="left arrow" onClick={handlePrev} id='left-arrow'/>
                        <img src={arrow} alt="right arrow" onClick={handleNext} id='right-arrow'/>
                    </>
                  
                ) : null}
                
            </div>

            <section id='infos-banner'>
                <div id='place-infos'>
                    <h1>{datas.title ? datas.title : "Sans titre"}</h1> 
                    <h2>{datas.location ? datas.location : "Localisation inconnue"}</h2>
                    <ul>
                        {datas.tags ? datas.tags.map((tag, key) => 
                            <li key={key}>{tag}</li>
                        ) : ""}
                    </ul>
                </div>
                <div id='host-infos'>
                    <div id='profil'>
                        <h3>{datas.host ? datas.host.name : "Anonyme"} </h3>     
                        <img src={datas.host ? datas.host.picture : ""} alt="Pas de photo de profil" />
                    </div>
                    
                    <p id='host-rating'>
                        {starsTable.map((star, index) => 
                            <img key={index} className="star" src={fullStar} alt='Rating Star'></img>
                        )}
                        {emptyStarsTable.map((star, index) => 
                            <img key={index} className="star" src={emptyStar} alt='Rating Star'></img>
                        )}
                    </p>
                </div>
            </section>
            <section id='infos-dropdown'>
                <ul>
                    <Dropdown table={infosTable} />
                </ul>                
            </section>
        </main>
    )
}

export default Place