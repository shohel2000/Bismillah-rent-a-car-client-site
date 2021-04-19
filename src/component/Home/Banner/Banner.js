import React from 'react';
import car6 from '../../../image/03.jpg';
import car3 from '../../../image/07.jpg';
import car4 from '../../../image/08.jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const imageStyling = {
        height: '400px',
    }
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car6}
                        alt="First slide"
                        style={imageStyling}
                    />
                    <Carousel.Caption>
                        <div style={{color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                            <h3>Private Car</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className="btn btn-success">Explore</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car3}
                        alt="Second slide"
                        style={imageStyling}
                    />

                    <Carousel.Caption>
                    <div style={{color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                            <h3>Bike</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className="btn btn-success">Explore</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car4}
                        alt="Third slide"
                        style={imageStyling}
                    />

                    <Carousel.Caption>
                    <div style={{color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                            <h3>Hiace</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className="btn btn-success">Explore</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;