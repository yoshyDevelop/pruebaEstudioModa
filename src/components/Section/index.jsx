import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import "./styles.scss"
import { motion } from "framer-motion"
import SectionCard from './SectionCard'
const Section = ({option, background, card}) => {

    if (option == 1) {
        return (
    
            <>
            <Container fluid>
              <Row className="justify-content-md-center">
              
                <Col className='p-0' md="6" style={{position:'relative'}}>
                <motion.div 
                style={{display: 'block', position: 'relative', width: '-webkit-fill-available', padding:0}}
                whileHover={{  padding: 10}}
                whileTap={{
                    scale: 1,
                    rotate: -1,
                    borderRadius: "100%"
                }}
                > 
                    <Image
                        loading="lazy"
                        srcSet={card?.imagesection}
                        className={`img img-section`}
                        // fluid
                        // style={{minWidth:"400px"}}
                    />
                    {card?.sectionbutton && <Button className='button-section encode-sans-sc-button-section' variant="outline-light">SHOP</Button>}
                    {/* <Button className='button-section encode-sans-sc-button-section' variant="outline-light">SHOP</Button>{' '} */}
                </motion.div>
                </Col>
                
                <Col className='p-0' md="6">
                    <SectionCard background={background} card={card}/>
                </Col>
              </Row>
            </Container>
            </>
          )
    } else {
        return (
    
            <>
            <Container fluid>
              <Row className="justify-content-md-center mobile-order">
               
                <Col className='p-0' md="6">
                    <SectionCard background={background} card={card}/>
                </Col>
                <Col className='p-0' md="6" style={{position:'relative'}}>
                <motion.div 
                style={{display: 'block', position: 'relative', width: '-webkit-fill-available', padding:0}}
                whileHover={{  padding: 10}}
                whileTap={{
                    scale: 1,
                    rotate: -1,
                    borderRadius: "100%"
                }}
                > 
                  <Image
                        loading="lazy"
                        srcSet={card?.imagesection}
                        className={`img img-section`}
                        // fluid
                        // style={{minWidth:"400px"}}
                    />
                    {card?.sectionbutton && <Button className='button-section encode-sans-sc-button-section' variant="outline-light">SHOP</Button>}
                </motion.div>
                </Col>
              </Row>
            </Container>
            </>
          )
    }
  
}

export default Section