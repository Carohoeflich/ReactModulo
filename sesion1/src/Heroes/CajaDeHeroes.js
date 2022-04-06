import React from 'react';
import Heroes from './Heroes'
import ImgBatman from './../Assets/img/batmanimg.jpg'
import ImgSuperman from './../Assets/img/supermanimg.jpg'

function CajaDeHeroes() {
    return ( <div>
    <Heroes
    NombreSuper="Batman"
    Identidad="Bruce"
    ClassName="Batman"
    >

    <img src={ImgBatman}></img>
|   <p>Et magna qui velit magna veniam ea fugiat velit aliquip do   aliqua esse cillum. Est labore commodo sit commodo Lorem fugiat deserunt occaecat esse anim non. Laborum sint velit ex ipsum nulla nulla velit aliquip amet pariatur proident est et. Sint qui amet sit cillum officia dolore est fugiat exercitation est consequat laboris. Fugiat aliqua in eiusmod commodo aliquip quis commodo.</p>

<a href="">Batman</a>
    </Heroes>

    <Heroes
    NombreSuper="Superman"
    Identidad="Clark Kent"
    ClassName="Superman"
    >
        <img src={ImgSuperman}></img>

        <p>Magna occaecat laborum pariatur eiusmod pariatur reprehenderit reprehenderit id excepteur do magna laborum exercitation. Nisi aliqua qui incididunt ea sit exercitation occaecat excepteur laborum duis pariatur irure cupidatat aute. Do deserunt ipsum voluptate veniam magna est reprehenderit. Cillum et occaecat deserunt reprehenderit deserunt enim tempor occaecat irure aute irure voluptate eiusmod. Veniam fugiat deserunt nostrud veniam culpa consectetur laboris ea elit in. Enim commodo nulla occaecat elit ipsum Lorem qui aliquip laboris tempor veniam laborum.</p>
        <a href="">Superman</a>

    </Heroes>

    </div> );
}

export default CajaDeHeroes;