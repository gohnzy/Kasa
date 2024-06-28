import React from 'react';
import datas from '../../datas/datas.json';
import '../../style/Pages/Home/Gallery.css';
import Article from './Article';

const Gallery = () => {
    return (
        <section id="gallery">
            {datas.map((d, index) => (
                <Article key={index} datas={d} />
            ))}
        </section>
    );
}

export default Gallery;
