import React from "react";
import "./style.css"
import Carousel from 'react-bootstrap/Carousel'
import image from "../../assets/images/Stargazing.jpg"
import image2 from "../../assets/images/Hiking.jpg"
import image3 from "../../assets/images/Ski Trip.jpg"
import image4 from "../../assets/images/Beach.jpg"
import { PromiseProvider } from "mongoose";



function Carousels(props) {
    return (
        <div className="container">
        <Carousel>
            <Carousel.Item>
                <img
                    className=" d-block w-100"
                    src={props.newImage ? props.newImage.image : image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Hiking Expedition</h3>
                    <p>Create new memories in the great outdoors.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image4}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Beach Trip</h3>
                    <p>Enjoy a beach trip you'll never forget.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Ski Trip</h3>
                    <p>Enjoy the view from the slopes, and shred some powder.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                <h3>Stargazing</h3>
                    <p>Take out your telescope and do a night of staring at the stars.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       </div>
    )
}

export default Carousels;