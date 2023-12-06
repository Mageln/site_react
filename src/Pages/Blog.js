import React, { Component} from 'react';
import { Container,Row,Col, Figure, ListGroup, Card, CardGroup } from 'react-bootstrap';

export default class Blog extends Component {
    render(){
        return (
            <>
            <Container>
                <Row>
                    <Col md="9">
                    <Figure className='m-5'>
                        <img
                        width="150px"
                        height="150px"
                        className='mr-3'
                        src="https://i.pinimg.com/564x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg" 
                        />
                        <Figure.Caption>
                            <h5>Blog post</h5>
                            <p>
                            turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique
                            </p>
                        </Figure.Caption>
                    </Figure>
                    <Figure className='m-5'>
                        <img
                        width="150px"
                        height="150px"
                        className='mr-3'
                        src="https://i.pinimg.com/564x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg" 
                        />
                        <Figure.Caption>
                            <h5>Blog post</h5>
                            <p>
                            turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique
                            </p>
                        </Figure.Caption>
                    </Figure>
                    <Figure className='m-5'>
                        <img
                        width="150px"
                        height="150px"
                        className='mr-3'
                        src="https://i.pinimg.com/564x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg" 
                        />
                        <Figure.Caption>
                            <h5>Blog post</h5>
                            <p>
                            turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique
                            </p>
                        </Figure.Caption>
                    </Figure>
                    <Figure className='m-5'>
                        <img
                        width="150px"
                        height="150px"
                        className='mr-3'
                        src="https://i.pinimg.com/564x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg" 
                        />
                        <Figure.Caption>
                            <h5>Blog post</h5>
                            <p>
                            turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique
                            </p>
                        </Figure.Caption>
                    </Figure>
                    </Col>
                    <Col md="3">
                        <h5 className='text-centre mt-5'>Categories</h5>
                        <CardGroup>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    HTML/CSS
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    JavaScript
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Python
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    C++
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        </CardGroup>

                        <CardGroup >
                            <Card className='mt-5' bg="light">
                                <Card.Body>
                                    <Card.Title>
                                        Side widget
                                    </Card.Title>
                                    <Card.Text>
                                    turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                        
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}