import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer';
import Img1 from './photo_2018-07-10_14-44-18.jpg';
import Img2 from './photo_2018-07-10_14-40-52.jpg';
import './Home.css';

const imageArray = [Img1, Img2];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <Carousel
        autoPlay={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        selectedItem={currentImageIndex}
        onChange={(index) => setCurrentImageIndex(index)}
      >
        {imageArray.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Photograph ${index + 1}`} />
            {/* <p className="legend">{`Photograph ${index + 1}`}</p> */}
          </div>
        ))}
      </Carousel>

      <Footer />
    </div>
  );
};

export default Home;

