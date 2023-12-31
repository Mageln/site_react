import React,{Component} from "react"
import {Navbar, Nav, FormControl,Form,Container,Button,} from "react-bootstrap"
import logo from "./logo192.png"
import {
  BrowserRouter, Routes, Route,Link,} from "react-router-dom";

  import Home from "../Pages/Home"
  import Contacts from "../Pages/Contacts"
  import About from "../Pages/About"
  import Blog from "../Pages/Blog"

export default class Header extends Component {
    render (){
        return(
          <>
          <Navbar static="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                    src={logo}
                    height = "30"
                    width = "30"
                    className= "d-inline-block align-top"
                    alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About us</Nav.Link>
                  <Nav.Link href="/contacts">Contacts</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl 
                  type="text"
                  placeholder = "Search"
                  className="me-sm-2"
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/contacts' element={<Contacts/>}/>  
              <Route exact path='/blog' element={<Blog/>}/>
            </Routes>
          </BrowserRouter>
            
          </>
        )
    }
}

