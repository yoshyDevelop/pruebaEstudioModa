import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import './styles.css'
const Footer = () => {
  return (
    <div className='border-top mb-1' style={{
        marginTop: '47px',
        zIndex:'2',
        // position: "absolute", 
        top: "-21%", 
        width:"100%"}}>
        <Row className="justify-content-md-center " style={{
                marginTop: '55px',
                fontWeight: '700',
                fontSize: 'medium',
            }}>
            <Col xl={1} className='d-flex justify-content-center mb-5' style={{
                paddingLeft: '27px',
            }}>
                <Image height={20} src={'http://localhost:3000/static/media/22476a16b0d49833f21a95f861ece4be541f3465.46a834ef53258fe555ef.png'}></Image>
            </Col>
            <Col  xl={3} md={6} sm={6} xs={6} className='border-right mb-3 d-flex justify-content-center'>
                <div>
                    <Row>
                        <span className='pufi-rain2'>PUFI RAIN</span>
                    </Row>
                    <Row>
                        <span className='pufi-puff2'>PUFI PUFF</span>
                    </Row>
                    <Row>
                        <span className='pufi-cart2'>PUFI CART</span>
                    </Row>
                    <Row>
                        <span className='pufi-nap2'>PUFI NAP</span>
                    </Row>
                </div>
            </Col>
            <Col xl={2} md={6} sm={6} xs={6} className='border-right mb-3 d-flex justify-content-center'>
                <div>
                    <Row>
                        <span className='como-comprar2'>CONTACTO</span>
                    </Row>
                    <Row>
                        <span className='como-comprar2'>AYUDA</span>
                    </Row>
                    <Row>
                        <span className='como-comprar2'>COMO COMPRAR</span>
                    </Row>
                    <Row>
                        <span className='tyc'>TERMINOS Y CONDICIONES</span>
                    </Row>
                </div>
            </Col>
            <Col xl={2} md={6} sm={12} xs={12} className='mb-4 border-right'>
                <div>
                    <Row className='d-flex justify-content-center mb-4'>
                        <span className='compra-segura'>COMPRA 100% SEGURA</span>
                    </Row>
                    <Row className='d-flex compra-garantia-images'>
                        <Col sm={4} className='d-flex justify-content-center w-auto'>
                            <Image height={41} src={'http://localhost:3000/static/media/4f6f8fd3628f393b6f2210b006c09b3988b54953.616bb967b23dd6373222.png'}></Image>   
                        </Col>
                        <Col sm={6} className='d-flex justify-content-center w-auto'>
                            <Image height={36} src={'http://localhost:3000/static/media/6c439e125e7072871ed9b1ad56c4d3421983930e.d91f83584b7374bd2cf5.png'}></Image>   
                            <span className='compra-garantia'>COMPRA CON LA GARANTIA DE PUFFI</span>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xl={2} md={6} sm={12} xs={12}>
                <Row className='d-flex justify-content-center mb-3'>
                    
                    <Col sm={6} className='contenedor-seguinos'>
                        <span className='seguinos'>SEGUINOS EN</span>
                    </Col>
                    {/* <div className='d-flex justify-content-center'> */}
                        <Col className='d-flex justify-content-center'>
                            <div className='image-d' />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                        <div className='image-e' />
            
                        </Col>
                        <Col className='d-flex justify-content-center'>
                        <div className='image-f' /> 
                        </Col>
                    {/* </div> */}
                    
                </Row>
            </Col>
        </Row>
        <Row className="justify-content-md-center mt-5 border-top">
            <Col className='m-3 footerB section-instagram-2' style={{
                
            }}>
                <span>PUFI Copyright 2017-Todos los derechos reservados</span></Col>
            <Col className='m-3 footerB2'>
             <Image height={20} src={require('../../assets/section4/BRANDLIVE2.png')}></Image>
            </Col>
        </Row>
    </div>
  )
}

export default Footer