import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const images = [
  'https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.webp?b=1&s=612x612&w=0&k=20&c=Fk9qQ_WIO_SzqRZOQhvbmf0qdVIHO9_le66XYibmlRc=',
  'https://cdn.pixabay.com/photo/2016/12/30/23/07/manali-1941787_640.jpg',
  'https://media.istockphoto.com/id/1368909948/photo/canacona-goa-india-canoe-kayak-for-rent-parked-on-famous-palolem-beach-on-background-tall.webp?b=1&s=612x612&w=0&k=20&c=GYKtSCZvWcnf7i00KWoLmLPLxA82qFJTiXf8NYD46C0=',
  'https://cdn.pixabay.com/photo/2020/01/22/12/11/rishikesh-4785189_640.jpg',
  'https://cdn.pixabay.com/photo/2017/09/27/13/50/chandra-tal-2792123_640.jpg',
  'https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.webp?b=1&s=612x612&w=0&k=20&c=Fk9qQ_WIO_SzqRZOQhvbmf0qdVIHO9_le66XYibmlRc=',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  return (
    <div className="carousel-container">
      <AliceCarousel
        mouseTracking
        items={images.map((imageUrl, index) => (
          <div key={index} className="slide">
            <img src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
        activeIndex={currentIndex}
        onSlideChanged={handleSlideChange}
      />
    </div>
  );
};

function NewSliderComponent() {
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel />
    </div>
  );
}

export default NewSliderComponent;
