import React from 'react'

function FeatureItem({ imgSrc, imgAlt, iconSrc, iconAlt, title }) {
  return (
    <div className="feature-item">
      <img loading="lazy" src={imgSrc} alt={imgAlt} className="feature-img" />
      <div className="feature-title">
        <img loading="lazy" src={iconSrc} alt={iconAlt} className="feature-icon" />
        <span>{title}</span>
      </div>
    </div>
  );
}

function Test() {
  const features = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/41802ea32468d462ff8df49c3b1a88bf2f1d3ebbd15a18c5cb8e5564c1090ec4?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&",
      imgAlt: "Feature Image 1",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3896102aa6e7fea27c60940e6316de1c2f98139b176d1e9eedf428bf400b4e1?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&",
      iconAlt: "Icon 1",
      title: "PUFI PUFF"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3896102aa6e7fea27c60940e6316de1c2f98139b176d1e9eedf428bf400b4e1?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&",
      imgAlt: "Feature Image 2",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe9770da27a688723f039b71d59221a9c2387f67a2152f06d4ebae53e523c6bd?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&",
      iconAlt: "Icon 2",
      title: "PUFI RAIN"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eca759db674184aa97b97004c4f417c4beb75fc2a5b92748e4f4656e39f6e6a0?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&",
      imgAlt: "Feature Image 3",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/41802ea32468d462ff8df49c3b1a88bf2f1d3ebbd15a18c5cb8e5564c1090ec4?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&",
      iconAlt: "Icon 3",
      title: "PUFI CART"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/86a8f37ae51e36b1266b1d443e7d814b3afeede2f93b1790e8e9a1cd1595b681?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&",
      imgAlt: "Feature Image 4",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/32f479d4e119c18b0f2e7f64ed038d267c751c46162bf76d4333d34fa3896a07?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&",
      iconAlt: "Icon 4",
      title: "PUFI NAP"
    },
  ];

  return (
    <>
      <header className="main-header">
        <div className="container">
          <section className="content">
            <div className="image-wrapper">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1a7a772a55b4227407ac529afc9469f0b9f0b80fe56dc874ad6cad3863e5ee6?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&" alt="Main Background" />
              <nav className="features-nav">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    imgSrc={feature.imgSrc}
                    imgAlt={feature.imgAlt}
                    iconSrc={feature.iconSrc}
                    iconAlt={feature.iconAlt}
                    title={feature.title}
                  />
                ))}
              </nav>
              <div className="login-container">
                <span>MI CUENTA</span>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67df354496ac48c4fa7990661932d39cb6eb10205776e4d3802aa9fb7bcb80c5?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&" alt="Account Icon" />
                <span>MI COMPRA</span>
              </div>
            </div>
            <div className="main-container">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0171c564bdd3a55e20c5d46aea6d863a8942c2c0ad71b834dc08ec8a6bf6dbd?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&" alt="Icon" />
              <h1 className="main-heading">
                ESTAR COMODO <br /> NUNCA FUE TAN FACIL
              </h1>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8ff69d399f720853905bf33916d5495c0f530969dfefcdb47d67e0bc2dc63cb?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&" alt="Image 2" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6777a824f896c10f5b6c6db8521da15f9e8b23d262f5ccbd1dce15a76b98494?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&" alt="Image 3" />
            </div>
          </section>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/37e9469448ef1c311068507c9f3a3252ae0723b52a68d0125e289e8995f0697f?apiKey=1fc5dad0e7ad47fb82e51a40a6eebc59&" alt="Footer Image" />
        </div>
      </header>

      <style jsx>{`
        .container {
          max-width: 100%;
          margin: 0 auto;
        }
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 37px 40px 20px;
        }
        @media (max-width: 991px) {
          .content {
            padding: 0 20px;
          }
        }
        .image-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .image-wrapper img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .features-nav {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 20px 0;
        }
        @media (max-width: 991px) {
          .features-nav {
            flex-wrap: wrap;
          }
        }
        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .feature-img {
          width: 45px;
        }
        .feature-icon {
          width: 28px;
        }
        .feature-title {
          color: #dcedf7;
          text-align: center;
        }
        .login-container {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #c4d5ea;
          width: 100%;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .login-container {
            white-space: initial;
          }
        }
        .main-container {
          color: #f7f8fb;
          text-align: center;
          margin-top: 65px;
          font-size: 47px;
          font-family: Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .main-container {
            margin-top: 40px;
            font-size: 40px;
          }
        }
        .main-heading {
          margin-top: 65px;
        }
        .main-header img {
          max-width: 100%;
        }
      `}</style>
    </>
  );
}

export default Test;


