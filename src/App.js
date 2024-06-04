import logo from './logo.svg';
import './App.css';
import imagen1 from './assets/header/77b3ff5e5b75fbcf5f8517077917ecaa72946b49.png';
import imagen2 from './assets/section2/2d9d136d2f78bc4ca1cfb69b0b77847700ce47ce.png';
import imagen3 from './assets/section2/1106e676c7093edb34da75d387fea87654557a23.png';
import imagen4 from './assets/section3/c526d66bdc9dfc9b1c19416ef5f547007cc8ee37.png';
import imageSection1 from './assets/header/02c46baf91ac9b1b29a30ab6dd0676533a74c0b8.png';
import imagenSection2 from './assets/section2/b5a5b3f00e2d9f7d44b449e2680eb54860da4503.png';
import imagenSection3 from './assets/section2/4ba400abdf451a0c30a5277e286b24e4e655277d.png';
import imagenSection4 from './assets/section3/35e53a8e4fb3475a265235fbd8a9bd87c5956bb5.jpg';
/* The following line can be included in your src/index.js or App.js file */
import './App.scss';
import NavbarPufi from './components/NavbarPufi';
import Header from './components/Header';

import Section from './components/Section';

import SectionInstagram from './components/SectionInstagram';
import Newsletter from './components/Newsletter';

import Footer from './components/Footer';

function App() {
  let cards = [
    {
      imagen: imagen1,
      titulo: "Pufi RAIN",
      descripcion: "Descripción del producto. Este es un texto simulado",
      imagesection: imageSection1,
      sectionbutton: true
    },
    {
      imagen: imagen2,
      titulo: "Pufi PUFF",
      descripcion: "Descripción del producto. Este es un texto simulado",
      imagesection: imagenSection2,
      sectionbutton: false
    },
    {
      imagen: imagen3,
      titulo: "Pufi cart",
      descripcion: "Descripción del producto. Este es un texto simulado",
      imagesection: imagenSection3,
      sectionbutton: false
    },
    {
      imagen: imagen4,
      titulo: "Pufi NAP",
      descripcion: "Descripción del producto. Este es un texto simulado ",
      imagesection: imagenSection4,
      sectionbutton: false
    }
  ];
  return (
  <>
  <NavbarPufi/>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <Header />
<div id="RAIN">
<Section id="" option={1} background={''} card={cards[0]}/>
</div>

<div id="PUFF">
<Section option={2} background={'white'} card={cards[1]}/>
  </div>
<div id="CART">
<Section option={1} background={'white'} card={cards[2]}/>
  </div>
  <div id="NAP">
  <Section option={2} background={'white'} card={cards[3]}/>
    </div>
  
  <SectionInstagram />
  <Newsletter />
  </div>
  
  {/* <Section4 /> */}

  <Footer />
  {/* <Header2 /> */}
   {/* <Header />
   <Header2 /> */}
  </>
    
  );
}

export default App;
