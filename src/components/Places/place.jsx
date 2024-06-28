/* eslint-disable jsx-a11y/img-redundant-alt */
import '../../style/Pages/Places/Place.css'

import fullStar from '../../datas/assets/Full_star.svg'
import emptyStar from '../../datas/assets/Empty_star.svg'
import arrow from '../../datas/assets/dropArrow.svg'
import handleClick from '../DropdownEvent'


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
    

    return (
        <main id='place'>
            <img src={datas.pictures[0]} alt="" />
            <section id='infos-banner'>
                <div id='place-infos'>
                    <h1>{datas.title}</h1> 
                    <h2>{datas.location}</h2>
                    <ul>
                        {datas.tags.map((tag, key) => 
                            <li key={key}>{tag}</li>
                        )}
                    </ul>
                </div>
                <div id='host-infos'>
                    <img src={datas.host.picture} alt="Host Picture" />
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
                <div id='description' onClick={(e) => handleClick(e)}>
                    <div>
                        Description
                        <img src={arrow} alt="dropdown-arrow-icon" />
                    </div>
                    <p>{datas.description}</p>
                </div>
                <div id='furnitures' onClick={(e) => handleClick(e)}>
                    <div>
                        Équipements
                        <img src={arrow} alt="dropdown-arrow-icon" />
                    </div>
                    <p>{datas.equipments}</p>
                </div>
            </section>
        </main>
    )
}

export default Place