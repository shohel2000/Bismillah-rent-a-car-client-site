import React from 'react';
import car1 from '../../../image/01.jpg'
import car2 from '../../../image/06.jpg';
import car3 from '../../../image/07.jpg';
import car4 from '../../../image/08.jpg';
import car5 from '../../../image/02.jpg'
import car6 from '../../../image/03.jpg';
import car7 from '../../../image/04.jpg';
import car8 from '../../../image/05.jpg'
import './Tour.css'
import TourSpot from '../TourSpot/TourSpot';
const images = [
    {
        id : 1,
        img : car1,
    },
    {
        id : 2,
        img : car2,
    },{
        id : 3,
        img : car3,
    },{
        id : 4,
        img : car4,
    },{
        id : 5,
        img : car5,
    },{
        id : 6,
        img : car6,
    },{
        id : 7,
        img : car7,
    },{
        id : 8,
        img : car8,
    },
]
const TourImage = () => {
    const containerStyle = {
        backgroundColor: '#D1BFDC',
        padding: '30px 10px',
        borderRadius: '10px'
    }
    return (
        <section className="blogs my-5 " >
           <div className="container" style={containerStyle}>
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">Choose Your</h5>
                    <h1>Perfect Journey by Car</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo <br/>  ligula eget dolor. Aenean massa. Cum sociis the</p>
               </div>
               <div className="row mt-5">
                    {
                        images.map(data => <TourSpot data = {data} key = {data.id}></TourSpot>)
                    }
               </div>
           </div>
       </section>
    );
};

export default TourImage;