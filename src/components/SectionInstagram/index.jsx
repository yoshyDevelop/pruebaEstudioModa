import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import image1 from '../../assets/section4/1bd7d3627260b36a34aa9acb82b9db44ffb593e5.png'
import image2 from '../../assets/section4/instagram2.png'
import image3 from '../../assets/section4/11445207cc4b1fc0433ff88d021e10fc02ef6189.png'
import image4 from '../../assets/section4/6f6f422814e79bd5d1febbcd3a81d13286a09af2.png' 
import image5 from '../../assets/section4/4e55c039b33879aac993826e70b5ac75d4976755.png'
import image6 from '../../assets/section4/a5ecbda9987405fcd45425c8c5588bf05cfbff08.png'
const SectionInstagram = () => {
  const [images, setImages] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
    // Agrega las rutas de las otras 4 imágenes aquí
  ]);

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * array.length);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Mezclar las imágenes cada vez que se renderiza el componente
  useEffect(() => {
    setImages(shuffle(images));
  });

  return (
    <div className='d-flex justify-content-center mb-5 mt-5'>
        <>
      <div className="section-instagram">
        <div className="section-instagram-2">INSTAGRAM</div>
        <div className="section-instagram-3 mb-5">#ESPUFI</div>
        <div>
            <Container fluid>
              <Row className="justify-content-md-center">
              {shuffle(images)?.map((image, index) => (
                <Col key={index} className='p-0' md="4">
                  <Image
                    loading="lazy"
                    srcSet={image}
                    className="img img-section img-section-instagram"
                  />
                </Col>
              ))}
              </Row>
            </Container>
        </div>
        
      </div>
      <style jsx>{`
        .section-instagram {
          background-color: rgba(0, 0, 0, 0);
          display: flex;
          max-width: 571px;
          flex-direction: column;
          align-items: center;
          font-weight: 400;
          white-space: nowrap;
          padding: 22px 0 0 9px;
        }
        @media (max-width: 991px) {
          .section-instagram {
            white-space: initial;
          }
        }
        .section-instagram-2 {
          color: #bebebe;
          font: 12px Inter, sans-serif;
        }
        .section-instagram-3 {
          color: #272727;
          margin-top: 18px;
          font: 34px Inter, sans-serif;
        }
        // .img-section-instagram {
        //   aspect-ratio: 1.49;
        //   object-fit: auto;
        //   object-position: center;
        //   width: 100%;
        //   align-self: stretch;
        //   margin-top: 69px;
        // }
        // @media (max-width: 991px) {
        //   .img-section-instagram {
        //     max-width: 100%;
        //     margin: 40px 4px 0 0;
            
        //   }
        // }
        @media (min-width: 991px) {
          .img-section-instagram {
            max-height: 185px;
          }
        }
      `}</style>
      </>
    </div>
  )
}

export default SectionInstagram