'use client';

import React, { useEffect } from 'react';
import '@/styles/components/SummerCollection.scss';
import Button from './Button';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useMediaQuery } from 'react-responsive';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import image1 from '@/assets/images/image1.png';
import image2 from '@/assets/images/image2.png';
import image3 from '@/assets/images/image3.png';
import image4 from '@/assets/images/image4.png';
import image5 from '@/assets/images/image5.png';
import image6 from '@/assets/images/image6.png';

const products = [
  {
    key: '1',
    image:
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image1_od6wvu.png',
    name: 'Velour',
    price: '460',
  },
  {
    key: '2',
    image:
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image2_uyh8xg.png',
    name: 'Savanna',
    price: '860',
  },
  {
    key: '3',
    image:
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image3_yxs7v3.png',
    name: 'Acapulco',
    price: '340',
  },
  {
    key: '4',
    image:
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image4_mu33p6.png',
    name: 'Cambri',
    price: '570',
  },
  {
    key: '5',
    image:
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image5_pz1pca.png',
    name: 'Ember',
    price: '500',
  },
  {
    key: '6',
    image:
      'https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719806141/image6_qdm1mv.png',
    name: 'Aurora',
    price: '480',
  },
];

const SummerCollection = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 865px)' });

  return (
    <div className="collectionPage">
      <div className="shopInfo">
        <div className="shopInfo__top">
          <h2>Featured Products</h2>
          <div className="shopInfo__top__right">
            <Button color="brown" href="/contact">
              See all products
            </Button>
          </div>
        </div>

        <div>
          <Splide
            extensions={{ AutoScroll }}
            options={{
              type: 'loop',
              gap: '1.5rem',
              perPage: isTablet ? 2 : 4,
              // autoHeight: true,
              arrows: false,
              pagination: false,
              rewind: true,
              rewindByDrag: true,
              easingFunc: (t) =>
                t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
              autoScroll: {
                pauseOnHover: false,
              },
            }}
          >
            {products.map((product) => {
              return (
                <SplideSlide key={product.key}>
                  <div className="shopInfo__product">
                    <Image
                      src={product.image}
                      alt={`${product.name} image`}
                      className="shopInfo__product__image"
                      // height={500}
                      // width={500}
                      width={0}
                      height={0}
                      sizes="100vw"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8fv1oPQAINAMEp+xU5QAAAABJRU5ErkJggg=="
                    />
                    <div className="shopInfo__product__details">
                      <p className="shopInfo__product__details__name">
                        {product.name}
                      </p>
                      <p className="shopInfo__product__details__price">
                        ${Number(product.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <div className="collectionPage__bottom">
        <Button href="/contact" color="brown">
          Shop our products
        </Button>
      </div>
    </div>
  );
};

export default SummerCollection;
