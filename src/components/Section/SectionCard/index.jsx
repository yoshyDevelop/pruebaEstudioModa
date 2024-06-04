import React from 'react'
import "./styles.scss"
const SectionCard = ({background, card}) => {
  return (
    <div className="section-card">
        <div className="section-card-2" style={{backgroundColor:background}}>
          <div className="section-card-3">
            <img
              loading="lazy"
              srcSet={card?.imagen}
              className={`img-section-card ${card?.class}`}
            />
            <div className='border-card mt-5' style={{width:'50px'}}></div>
            <div className="section-card-4">{card?.titulo}</div>
            <div className="section-card-5">{card?.descripcion}</div>
            <div className="section-card-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d6cceec26b35f0d0fee99ed6bf5fd5f4d95fa19efb4d1d6e0656064a5fe68f2c?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6cceec26b35f0d0fee99ed6bf5fd5f4d95fa19efb4d1d6e0656064a5fe68f2c?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6cceec26b35f0d0fee99ed6bf5fd5f4d95fa19efb4d1d6e0656064a5fe68f2c?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6cceec26b35f0d0fee99ed6bf5fd5f4d95fa19efb4d1d6e0656064a5fe68f2c?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6cceec26b35f0d0fee99ed6bf5fd5f4d95fa19efb4d1d6e0656064a5fe68f2c?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6cceec26b35f0d0fee99ed6bf5fd5f4d95fa19efb4d1d6e0656064a5fe68f2c?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6cceec26b35f0d0fee99ed6bf5fd5f4d95fa19efb4d1d6e0656064a5fe68f2c?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6cceec26b35f0d0fee99ed6bf5fd5f4d95fa19efb4d1d6e0656064a5fe68f2c?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&"
                className="img-section-card-2"
              />
              
              <div className="section-card-7">
                <a href='#'>VER MAS</a></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SectionCard