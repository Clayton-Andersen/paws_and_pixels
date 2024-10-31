import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './PhotoGallery.css';

const images = [
  { src: 'images/Groovy_(2).jpg', alt: 'Pet Photo 1' },
  { src: 'images/Groovy_(7).jpg', alt: 'Pet Photo 2' },
  { src: 'images/Norman_5.jpg', alt: 'Pet Photo 3' },
  { src: 'images/Norman_14.jpg', alt: 'Pet Photo 4' },
];

const PhotoGallery = () => {
  return (
    <Carousel 
      showArrows={true} 
      infiniteLoop={true} 
      useKeyboardArrows
      renderArrowPrev={(onClickHandler, hasPrev) => 
        hasPrev && (
          <button className="custom-arrow left-arrow" onClick={onClickHandler}>
            &#10094; {/* Left arrow symbol */}
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) => 
        hasNext && (
          <button className="custom-arrow right-arrow" onClick={onClickHandler}>
            &#10095; {/* Right arrow symbol */}
          </button>
        )
      }
    >
      {images.map((image, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src={`${process.env.PUBLIC_URL}/${image.src}`} 
            alt={image.alt} 
            style={{ width: '40%', height: 'auto', maxWidth: '600px' }} 
          />
        </div>
      ))}
    </Carousel>
  );
};

export default PhotoGallery;
