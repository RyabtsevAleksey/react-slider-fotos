import "..//src/carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";

export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="main">
        <Carousel responsive={responsive}>
          
          <div>
            <img className="carousel-image" src="https://img.huffingtonpost.com/asset/5ab409ee200000d30ceb2b66.jpeg?cache=IH7OfX6lPT&amp;ops=1778_1000" alt="bali1" />
          </div>

          <div>
            <img className="carousel-image" src="https://static.tildacdn.com/tild6263-3431-4334-a235-383963643831/3_1.jpeg" alt="bali2" />
          </div>

          <div>
            <img className="carousel-image" src="https://static.thehoneycombers.com/wp-content/uploads/sites/4/2020/10/Intercontinental-Bali-Jimbaran.jpeg" alt="bali3" />
          </div>

          <div>
            <img className="carousel-image" src="https://exoticluxurycat.ru/wp-content/uploads/8/0/4/804d29316425f7b38a3c4894999b69ef.jpeg" alt="bali4" />
          </div>

          <div>
            <img className="carousel-image" src="https://images.myguide-cdn.com/bali/companies/east-lempuyang-gates-tenganan-water-palaces-tour/large/east-lempuyang-gates-tenganan-water-palaces-tour-731197.jpg" alt="bali5" />
          </div>

          <div>
            <img className="carousel-image" src="https://avatars.mds.yandex.net/get-altay/1637232/2a0000016b096a2fc10193e9692ac05f3a5b/XXL" alt="bali6" />
          </div>

          <div>
            <img className="carousel-image" src="https://www.sunhome.ru/i/wallpapers/207/skulptura-buddi.xxl.jpg" alt="bali7" />
          </div>

          <div>
            <img className="carousel-image" src="https://i.pinimg.com/originals/1b/bd/ad/1bbdad1b5556825577eccf969f41c2e1.jpg" alt="bali8" />
          </div>

         
        </Carousel>
        
      </div>
    </>
  );
}
