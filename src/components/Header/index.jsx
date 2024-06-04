import React, { useState } from 'react'
import { Button, Carousel, Image } from 'react-bootstrap';
import "./style.scss"
const Header = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      <Carousel.Item>
        <img
            loading="lazy"
            srcSet={require('../../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=100 100w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=200 200w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=400 400w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=800 800w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1200 1200w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1600 1600w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=2000 2000w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&')}
            className="img img-header"
          />
        <Carousel.Caption>

          <h1 className='inter-header header-text'>
          ESTAR COMODO
NUNCA FUE TAN FACIL
          </h1>
          <Button className='button-header encode-sans-sc-button-header' variant="outline-light">SHOP</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            loading="lazy"
            srcSet={require('../../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=100 100w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=200 200w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=400 400w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=800 800w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1200 1200w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1600 1600w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=2000 2000w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&')}
            className="img img-header"
          />
        <Carousel.Caption>

          <h1 className='inter-header header-text'>
          ESTAR COMODO
NUNCA FUE TAN FACIL
          </h1>
          <Button className='button-header encode-sans-sc-button-header' variant="outline-light">SHOP</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            loading="lazy"
            srcSet={require('../../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=100 100w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=200 200w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=400 400w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=800 800w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1200 1200w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1600 1600w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=2000 2000w, ../assets/header/cff1e2bbc58e3d43e755dc75a647648609348edb.png?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&')}
            className="img img-header"
          />
        <Carousel.Caption>

          <h1 className='inter-header header-text'>
          ESTAR COMODO
NUNCA FUE TAN FACIL
          </h1>
          <Button className='button-header encode-sans-sc-button-header' variant="outline-light">SHOP</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Header