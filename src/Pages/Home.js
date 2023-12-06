import React, { Component} from 'react';
import CarouselBox from "../Components/CarauselBox"
import{Container,CardGroup,Card,Button} from "react-bootstrap"




export default class Home extends Component {
    render() {
        
        return (
            <>
            <CarouselBox/>
            <Container>
            <h2 className='text-center m-4'>Our team</h2>
            <CardGroup >
            <Card className='m-4' border='primary'>
                <Card.Img variant='top' 
                src='https://i.pinimg.com/736x/bf/a8/7d/bfa87d0ef2c67baea2fdf36151a8a9c8.jpg' />
                <Card.Body>
                <Card.Title>
                    Developers
                </Card.Title>
                <Card.Text>
                    lorem Ips   et dolor sit amet, consect   et n   consumed.
                </Card.Text>
                <Button variant ="primary">About team</Button>
            </Card.Body>
            </Card>

            <Card className='m-4'  border='primary'>
                
                <Card.Body>
                <Card.Title>
                    Developers
                </Card.Title>
                <Card.Text>
                    lorem Ips   et dolor sit amet, consect   et n   consumed.
                </Card.Text>
                <Button variant ="primary">About team</Button>
                <Card.Img variant='bottom' 
                src='https://i.pinimg.com/564x/25/30/04/25300440c5b32795f496a5f1e9425f7d.jpg' />
            </Card.Body>
            </Card>

            <Card className='m-4'  border='primary'>
                <Card.Img variant='top' 
                src='https://i.pinimg.com/564x/eb/4e/2c/eb4e2ccb8341b399de6856b4685fc9c9.jpg' />
                <Card.Body>
                <Card.Title>
                    Developers
                </Card.Title>
                <Card.Text>
                    lorem Ips   et dolor sit amet, consect   et n   consumed.
                </Card.Text>
                <Button variant ="primary">About team</Button>
            </Card.Body>
            </Card>
            
            </CardGroup>
         </Container>

            </>
        )
    }
}
