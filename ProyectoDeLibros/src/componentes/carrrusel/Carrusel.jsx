import React from 'react'
import logo1 from '../body/img/FreeFire_01.png'
import logo2 from '../body/img/FreeFire_02.png'
import logo3 from '../body/img/FreeFire_03.png'
import logo4 from '../body/img/FreeFire_04.png/'
import logo5 from '../body/img/FreeFire_05.png/'
import logo6 from '../body/img/FreeFire_06.png/'
import logo7 from '../body/img/FreeFire_01.png/'
import './carrusel.css'
function Carrusel() {

    return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" arialabel="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner bg-secondary">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src={logo1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={logo2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src={logo3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src={logo4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src={logo5} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src={logo6} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src={logo7} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div >
    );
}
export default Carrusel