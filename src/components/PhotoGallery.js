import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './PhotoGallery.css';

const images = [
  { src: 'images/Groovy_(5).jpg', alt: 'Pet Photo 6' },
  { src: 'images/Luna_and_Joey_(24).jpg', alt: 'Pet Photo 13' },
  { src: 'images/Groovy_(2).jpg', alt: 'Pet Photo 1' },  
  { src: 'images/Norman_14.jpg', alt: 'Pet Photo 4' },
  { src: 'images/Luna_and_Joey_(16).jpg', alt: 'Pet Photo 19' },
  { src: 'images/Groovy_(7).jpg', alt: 'Pet Photo 2' },
  { src: 'images/Norman_5.jpg', alt: 'Pet Photo 3' },
  { src: 'images/Groovy_(9).jpg', alt: 'Pet Photo 9' },
  { src: 'images/Luna_and_Joey_(19).jpg', alt: 'Pet Photo 21' },
  { src: 'images/Groovy_(15).jpg', alt: 'Pet Photo 12' },
  { src: 'images/Luna_and_Joey_(15).jpg', alt: 'Pet Photo 17' },
  { src: 'images/Groovy_(1).jpg', alt: 'Pet Photo 5' },
  { src: 'images/Luna_and_Joey_(14).jpg', alt: 'Pet Photo 16' },
  { src: 'images/Groovy_(6).jpg', alt: 'Pet Photo 7' },
  { src: 'images/Luna_and_Joey_(6).jpg', alt: 'Pet Photo 15' },
  { src: 'images/Groovy_(8).jpg', alt: 'Pet Photo 8' },
  { src: 'images/Luna_and_Joey_(5).jpg', alt: 'Pet Photo 14' },
  { src: 'images/Groovy_(11).jpg', alt: 'Pet Photo 10' },
  { src: 'images/Luna_and_Joey_(18).jpg', alt: 'Pet Photo 20' },
  { src: 'images/Groovy_(13).jpg', alt: 'Pet Photo 11' },
  { src: 'images/Luna_and_Joey_(11).jpg', alt: 'Pet Photo 18' },
  { src: 'images/Luna_and_Joey_(2).jpg', alt: 'Pet Photo 22' }
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
            style={{ width: '100%', height: 'auto', maxWidth: '600px' }} 
          />
        </div>
      ))}
    </Carousel>
  );
};

export default PhotoGallery;
