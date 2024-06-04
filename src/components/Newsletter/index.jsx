import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import "./styles.css"
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 
  const [show, setShow] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    // Verificar si el correo electrónico es válido
    const emailIsValid = /\S+@\S+\.\S+/.test(event.target.value);
    if (!emailIsValid) {
      setMessage('Por favor, ingresa un correo electrónico válido.');
    } else {
      setMessage('');

      // Determinar si la longitud del correo electrónico es par o impar
      const isEven = event.target.value.length % 2 === 0;
      setMessage(`La longitud del correo electrónico es ${isEven ? 'par' : 'impar'}.`);
    }
  };

  return (
    <div className='d-flex justify-content-center mt-2 mb-5' >
    <>
      <div className="newsletter" style={{width:"-webkit-fill-available"}}>
        <div className="newsletter-2">NEWSLETTER</div>
        <div className="newsletter-3">SUSCRIBITE</div>
        <div className="newsletter-4">Y enterate de todas las novedades</div>
        <div className="newsletter-5">
          <div className="d-flex">
            {/* <div className="newsletter-7">Ingresa tu email</div> */}
            {/* <Form className='d-flex w-100'> */}
              <Form.Control className='form newsletter-6 newsletter-7' type="email" placeholder="Ingresa tu email" value={email} onChange={handleEmailChange} />
              <Button className='btn btn-primary btn-newsletter' type='button' onClick={()=>{
                setShow(true)
              }}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
              </Button>
              
            {/* </Form> */}
            
           
            {/* <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/599077509e91fa69ab3173016be15d7c06a42b23463c18a2cb137a0a7420612f?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/599077509e91fa69ab3173016be15d7c06a42b23463c18a2cb137a0a7420612f?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/599077509e91fa69ab3173016be15d7c06a42b23463c18a2cb137a0a7420612f?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/599077509e91fa69ab3173016be15d7c06a42b23463c18a2cb137a0a7420612f?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/599077509e91fa69ab3173016be15d7c06a42b23463c18a2cb137a0a7420612f?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/599077509e91fa69ab3173016be15d7c06a42b23463c18a2cb137a0a7420612f?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/599077509e91fa69ab3173016be15d7c06a42b23463c18a2cb137a0a7420612f?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/599077509e91fa69ab3173016be15d7c06a42b23463c18a2cb137a0a7420612f?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&"
              className="img-newsletter"
            /> */}
          </div>
            {
              show &&
               <Alert variant="info" onClose={() => setShow(false)} dismissible>
               <Alert.Heading>Validacion de email</Alert.Heading>
               <p>
               {message && <p>{message}</p>}
               </p>
             </Alert>
            }
          {/* <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Mensaje</Alert.Heading>
            <p>
            {message && <p>{message}</p>}
            </p>
          </Alert> */}
    
  
          
        </div>
      </div>
      <style jsx>{`
        .newsletter {
          display: flex;
          max-width: 558px;
          flex-direction: column;
          align-items: center;
          font-size: 13px;
          font-weight: 400;
          padding: 0 20px;
        }
        .newsletter-2 {
          color: #b1b1b1;
          font-family: Inter, sans-serif;
        }
        .newsletter-3 {
          color: #303030;
          margin-top: 20px;
          font: 33px Inter, sans-serif;
        }
        .newsletter-4 {
          color: #474747;
          font-family: Inter, sans-serif;
          margin-top: 19px;
        }
        .newsletter-5 {
          background-color: rgba(0, 0, 0, 0);
          align-self: stretch;
          display: flex;
          margin-top: 16px;
          width: 100%;
          flex-direction: column;
          font-size: 11px;
          color: #5b5b5b;
          justify-content: center;
          padding: 6px;
        }
        @media (max-width: 991px) {
          .newsletter-5 {
            max-width: 100%;
          }
        }
        .newsletter-6 {
          border-color: rgba(116, 116, 116, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fefefe;
          display: flex;
          gap: 20px;
          justify-content: space-between;
          padding: 16px 17px;
        }
        @media (max-width: 991px) {
          .newsletter-6 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .newsletter-7 {
          font-family: Inter, sans-serif;
        }
        .img-newsletter {
          aspect-ratio: 1.3;
          object-fit: auto;
          object-position: center;
          width: 13px;
          align-self: start;
        }
      `}</style>
      </>
    </div>
  )
}

export default Newsletter