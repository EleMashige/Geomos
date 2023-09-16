import React, { useState } from 'react';
import photos from '../PicturesArray'; // Assuming 'photos' is in the same directory
import './Pictures.css'; // Import the CSS file for styling
import GetImages from './GetImages';
import AddImage from './AddImages';
import Footer from './Footer'

function Pictures() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    if (selectedImage === index) {
      setSelectedImage(null); // Clicking on the zoomed image goes back to the gallery view
    } else {
      setSelectedImage(index); // Clicking on a thumbnail zooms it
    }
  };

  return (
    <div className="App">
    <GetImages />
    <AddImage />
      <h2 className="underlined-heading">Explore Our Images</h2>
      <div className="image-gallery">
        {photos.map((photo, index) => (
          <div
            className={`image-item ${selectedImage === index ? 'zoomed' : ''}`}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={photo.path}
              alt={photo.filename}
              className="image"
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Pictures;







