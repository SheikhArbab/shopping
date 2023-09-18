import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  const images = [
    '//avatars.mds.yandex.net/i?id=ffb094e5eb354eff3a275793475e6c52c348571b-9657256-images-thumbs&n=13',
    'https://on-desktop.com/ru/images/wp.php?path=/wps/Sport_Nike_company_logo_079985_.jpg&wp=17',
    '//avatars.mds.yandex.net/i?id=61e7f1dc74b6de251a984f85163776fc_l-8271622-images-thumbs&ref=rim&n=13&w=1200&h=805',
    '//avatars.mds.yandex.net/i?id=bd8c94a2870619585a4aaf95e46a7145a0ae310b-5496540-images-thumbs&n=13',
    '//avatars.mds.yandex.net/i?id=3592d27dfadfc3f19c57a90f708a45f46866f8c0-8207729-images-thumbs&n=13',
    '//avatars.mds.yandex.net/i?id=314d6cb0257d5608cac84b6ae0374671d632f25b-8249766-images-thumbs&n=13'
  ];

  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        interval={2000}
        
      >
          {images.map((image, index) => (
        <div className='w-full h-80 md:h-96 overflow-hidden'  key={index} >
            <img className='w-full h-full object-cover object-center'src={image} />
        </div>
          ))}
      </Carousel>
    </>
  );
}

export default Slider;
