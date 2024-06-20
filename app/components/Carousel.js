import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        <div>
          <img src="./bnr.jpg" alt="Slide 1" className={styles.slideImage} />
        </div>
        <div>
          <img src="./bnr1.jpg" alt="Slide 2" className={styles.slideImage} />
        </div>
        {/* <div>
          <img src="/images/slide3.jpg" alt="Slide 3" className={styles.slideImage} />
        </div> */}
      </Slider>
    </div>
  );
};

export default Carousel;
