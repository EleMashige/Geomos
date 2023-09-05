import React from 'react';
import Footer from './Footer';
import Clients from './Clients';
import './About.css'; // Import your CSS file

// Import the image you want to use
import geomosImage from './photo_2023-01-21_00-02-37.jpg'; // Replace with the actual path

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
		<h1>About Geomos</h1>
          <p>
		  Geomos Films, founded in 2017 by the dynamic duo of Clarance and Richard Kingombe, has firmly established its presence in the media industry. With strategically located offices in the picturesque settings of Cape Town and the vibrant landscape of Limpopo, our company has blossomed into a multifaceted powerhouse.
          </p>
          <p>
		  Our unwavering dedication centers on the art of cinematography, encompassing the creation and production of captivating movies, the orchestration of memorable events, and the crafting of compelling adverts. In the scenic heart of Limpopo, we've lent our creative expertise to the production of an impressive portfolio of 10 movies, all part of the remarkable Tsonga Chronicles series. In the bustling urban backdrop of Cape Town, we've lent our talents to an extensive array of corporate advertisements, serving as the creative force behind more than 200 successful campaigns.
		  </p>
		  <p>
		  But our creative prowess extends far beyond the silver screen and advertising boardrooms. At Geomos Films, we are passionate about capturing life's most cherished moments. We specialize in wedding cinematography, ensuring that every love story is immortalized with the artistry it deserves. We thrive in the lively ambiance of parties, translating the vibrancy of celebrations into memorable videos. Our music videos are a harmonious fusion of visuals and sound, adding a new dimension to the world of music. For corporate events, we bring our expertise in capturing the essence of your brand's vision, making each event a monumental success.
		  </p>
		  <p>
		  In the realm of fashion and talent, Geomos Films has played a pivotal role in shaping the careers of over 100 actors and models across the diverse landscapes of Cape Town and Limpopo. Our photography and videography services have created stunning profiles and portfolios that have opened doors to countless opportunities.
		  </p>
		  <p>
		  At Geomos Films, we are more than a media company; we are storytellers, visionaries, and creators. With a wealth of experience, a relentless pursuit of excellence, and an unyielding commitment to our craft, we continue to redefine the art of visual storytelling in South Africa and beyond. Join us on this captivating journey through the lens of Geomos Films, where every frame tells a unique and unforgettable story.
		  </p>
        </div>
        <img
          src={geomosImage}
          alt="Geomos Films"
          className="about-image"
        />
      </div>

      <Clients />
      <Footer />
    </div>
  );
}

export default About;
