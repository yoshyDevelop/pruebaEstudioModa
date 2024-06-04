import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import "./styles.scss"
import SectionCard from './SectionCard'
const Section = ({option, background, card}) => {

    if (option == 1) {
        return (
    
            <>
            <Container fluid>
              <Row className="justify-content-md-center">
                <Col className='p-0' md="6" style={{position:'relative'}}>
                    <Image
                        loading="lazy"
                        srcSet={card?.imagesection}
                        className="img img-section"
                        // fluid
                        // style={{minWidth:"400px"}}
                    />
                    {card?.sectionbutton && <Button className='button-section encode-sans-sc-button-section' variant="outline-light">SHOP</Button>}
                    {/* <Button className='button-section encode-sans-sc-button-section' variant="outline-light">SHOP</Button>{' '} */}
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
                  <Image
                        loading="lazy"
                        srcSet={card?.imagesection}
                        className="img img-section"
                        // fluid
                        // style={{minWidth:"400px"}}
                    />
                    {card?.sectionbutton && <Button className='button-section encode-sans-sc-button-section' variant="outline-light">SHOP</Button>}
                </Col>
              </Row>
            </Container>
            </>
          )
    }
  
}

export default Section