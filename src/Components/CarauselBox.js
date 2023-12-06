import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import LakeImg from "../assets/1.jpeg";
import mountainImg from "../assets/2.jpeg";
import OceanImg from "../assets/3.jpeg";

export default class CarouselBox extends Component {
    render(){
        return(
            <Carousel> 
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={LakeImg}
                    alt="Lake"
                    />
                    <Carousel.Caption>
                        <h3>Lake image</h3>
                        <p>LOREM pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={mountainImg}
                    alt="Mountain"
                    />
                    <Carousel.Caption>
                        <h3>Mountain image</h3>
                        <p>LOREM pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={OceanImg}
                    alt="Ocean"
                    />
                    <Carousel.Caption>
                        <h3>Ocean image</h3>
                        <p>LOREM pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}