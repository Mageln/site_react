import React, { Component} from 'react';
import{Container,Tab,Nav,Row,Col} from "react-bootstrap"


export default class About extends Component {
    render() {
        
        return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-colum mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    Design
                                </Nav.Link>
                                <Nav.Link eventKey="second">
                                    Team
                                </Nav.Link>
                                <Nav.Link eventKey="third">
                                    Programming
                                </Nav.Link>
                                <Nav.Link eventKey="fourth">
                                   Frameworks
                                </Nav.Link>
                                <Nav.Link eventKey="fifth">
                                    Libraries
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className='mt-3'>
                            <Tab.Pane eventKey="first">
                                <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/606db868078701.5b50406f035c9.png"
                                width="625px"
                                />
                                <p>congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra</p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <img
                                src="https://system-itc.ru/wp-content/uploads/2022/03/курсы-и-тренинги-для-лидеров.jpg"
                                width="625px"
                                />
                                <p>congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra</p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="third">
                                <img
                                src="https://i.pinimg.com/originals/41/8f/72/418f723b4d7cc422e6dc6452ab7278cf.jpg"
                                />
                                <p>congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra</p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="fourth">
                                <img
                                src="https://abi-tech.in/assets/img/web-software-development-pondicherry.jpg"
                                width="625px"
                                />
                                <p>congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra</p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="fifth">
                                <img
                                src="https://avatars.mds.yandex.net/i?id=a30e3db9c31f56959fb4f9e0ec5b95221dd9d961-3308358-images-thumbs&n=13"
                                />
                                <p>congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </Container>
        )
    }
}