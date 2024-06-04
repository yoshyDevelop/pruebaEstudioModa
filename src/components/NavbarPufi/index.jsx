import React, { useState,useEffect, useRef, useMemo } from 'react';
import { motion } from "framer-motion"
// import { pathOr } from 'ramda';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {
//   Link,
// } from "react-router-dom";
import "./style.scss"

const NavbarPufi = () => {
  const [backgroundNav, setBackgroundNav] = useState("box-shadow")
  const buttonCollapse = useRef(null)

  const handleCollapsed = () => {
    buttonCollapse.current.click()
  }
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
          setBackgroundNav("black");
      } else {
          setBackgroundNav("box-shadow");
      }
  });
  }, [])
  return (
    <>
      <Navbar expand="xl" className={`w-100 position-fixed navbar-desktop `} bg={backgroundNav} data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className='mx-5'>
        <motion.div 
                style={{display: 'block', position: 'relative', width: '-webkit-fill-available', padding:0}}
                whileHover={{ scale: 1.1 }}
                whileTap={{
                    scale: 1,
                    rotate: -1,
                    borderRadius: "100%"
                }}
                >
            <img
              alt=""
              src={require("../../assets/header/8827e70d1632dd5ad297e6cfd87d103e915554bf.png")}
              width="100"
              className="d-inline-block align-top"
            />{' '}
            </motion.div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto ">
          
<Nav.Link href="#PUFF" className='border-right border-margin'>
              <motion.div 
                style={{display: 'block', position: 'relative', width: '-webkit-fill-available', padding:0}}
                whileHover={{ scale: 1.1 }}
                whileTap={{
                    scale: 1,
                    rotate: -1,
                    borderRadius: "100%"
                }}
                >
              <div className='icon-nav'>
                <img
                    loading="lazy"
                    src={require("../../assets/header/b05895566dec94fd75b12dcdc753d62f19b77917.png")}
                    className="img-icon-nav"
                   
                  />
                  
                <div className="div-6">PUFI PUFF</div>
              </div>
              </motion.div>
            </Nav.Link>
       
            
            <Nav.Link href="#RAIN" className='border-right border-margin'>
            <motion.div 
                style={{display: 'block', position: 'relative', width: '-webkit-fill-available', padding:0}}
                whileHover={{ scale: 1.1 }}
                whileTap={{
                    scale: 1,
                    rotate: -1,
                    borderRadius: "100%"
                }}
                >
            <div className='icon-nav'>
            <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a3896102aa6e7fea27c60940e6316de1c2f98139b176d1e9eedf428bf400b4e1?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3896102aa6e7fea27c60940e6316de1c2f98139b176d1e9eedf428bf400b4e1?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3896102aa6e7fea27c60940e6316de1c2f98139b176d1e9eedf428bf400b4e1?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3896102aa6e7fea27c60940e6316de1c2f98139b176d1e9eedf428bf400b4e1?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3896102aa6e7fea27c60940e6316de1c2f98139b176d1e9eedf428bf400b4e1?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3896102aa6e7fea27c60940e6316de1c2f98139b176d1e9eedf428bf400b4e1?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3896102aa6e7fea27c60940e6316de1c2f98139b176d1e9eedf428bf400b4e1?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3896102aa6e7fea27c60940e6316de1c2f98139b176d1e9eedf428bf400b4e1?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&"
                  className="img-icon-nav"
                  
                />
                <div className="div-8">PUFI RAIN</div>
              </div>
              </motion.div>
            </Nav.Link>
            <Nav.Link href="#CART" className='border-right border-margin'>
            <motion.div 
                style={{display: 'block', position: 'relative', width: '-webkit-fill-available', padding:0}}
                whileHover={{ scale: 1.1 }}
                whileTap={{
                    scale: 1,
                    rotate: -1,
                    borderRadius: "100%"
                }}
                >
              <div className='icon-nav'>
            <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eca759db674184aa97b97004c4f417c4beb75fc2a5b92748e4f4656e39f6e6a0?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eca759db674184aa97b97004c4f417c4beb75fc2a5b92748e4f4656e39f6e6a0?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eca759db674184aa97b97004c4f417c4beb75fc2a5b92748e4f4656e39f6e6a0?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eca759db674184aa97b97004c4f417c4beb75fc2a5b92748e4f4656e39f6e6a0?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eca759db674184aa97b97004c4f417c4beb75fc2a5b92748e4f4656e39f6e6a0?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eca759db674184aa97b97004c4f417c4beb75fc2a5b92748e4f4656e39f6e6a0?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eca759db674184aa97b97004c4f417c4beb75fc2a5b92748e4f4656e39f6e6a0?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eca759db674184aa97b97004c4f417c4beb75fc2a5b92748e4f4656e39f6e6a0?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&"
                  className="img-icon-nav"
                 
                />
                <div className="div-10">PUFI CART</div>
              </div>
              </motion.div>
            </Nav.Link>
            <Nav.Link href="#NAP" className='border-margin'>
            <motion.div 
                style={{display: 'block', position: 'relative', width: '-webkit-fill-available', padding:0}}
                whileHover={{ scale: 1.1 }}
                whileTap={{
                    scale: 1,
                    rotate: -1,
                    borderRadius: "100%"
                }}
                >
            <div className='icon-nav'>
            <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86a8f37ae51e36b1266b1d443e7d814b3afeede2f93b1790e8e9a1cd1595b681?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a8f37ae51e36b1266b1d443e7d814b3afeede2f93b1790e8e9a1cd1595b681?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a8f37ae51e36b1266b1d443e7d814b3afeede2f93b1790e8e9a1cd1595b681?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a8f37ae51e36b1266b1d443e7d814b3afeede2f93b1790e8e9a1cd1595b681?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a8f37ae51e36b1266b1d443e7d814b3afeede2f93b1790e8e9a1cd1595b681?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a8f37ae51e36b1266b1d443e7d814b3afeede2f93b1790e8e9a1cd1595b681?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a8f37ae51e36b1266b1d443e7d814b3afeede2f93b1790e8e9a1cd1595b681?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86a8f37ae51e36b1266b1d443e7d814b3afeede2f93b1790e8e9a1cd1595b681?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&"
                  className="img-icon-nav"
                  
                />
                <div className="div-12">PUFI NAP</div>
              </div>
              </motion.div>
            </Nav.Link>
          </Nav>
          <Nav className="section-account">
            <NavDropdown title="MI CUENTA" id="basic-nav-dropdown" className='border-right border-margin'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MI COMPRA" id="basic-nav-dropdown" className='border-margin'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavbarPufi