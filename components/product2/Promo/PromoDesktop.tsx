import { promo } from 'lib/productData/productdata'
import Image from 'next/image'
import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PromoDesktop = () => {

  const responsive = {
    laptopLarge: {
        breakpoint: { max: 3000, min: 1440 },
        items: 4,
        partialVisibilityGutter: 40,
    },
    laptop: {
        breakpoint: { max: 1439, min: 1024 },
        items: 3,
        partialVisibilityGutter: 40,
    },
    tablet: {
        breakpoint: { max: 1023, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
    },
  };

  return (
    <section className="w-screen h-auto relative bg-pink-950 mt-[32px] p-[20px] mobile-l:p-[24px] tablet:px-[54px] laptop-lg:px-[108px] ">
        
        <Carousel
        responsive={responsive}
        arrows={true}
        renderButtonGroupOutside={true}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >

        { promo.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={320}
            height={320}
            alt=""
            className="w-screen h-80 relative"
          />
          ))
        }
      </Carousel>

      
      <div className="text-center mt-[16px]">
        <span className="text-white text-xs tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">In just 1 week:</span>
        <span className="text-white text-xs tablet:text-lg font-normal capitalize leading-none tablet:leading-loose">
          it appears firmer, stronger and smoother.<br/>
        </span>
        <span className="text-white text-xs tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">In 3 weeks:</span>
        <span className="text-white text-xs tablet:text-lg font-normal capitalize leading-none tablet:leading-loose"> 2x improvement in the look or feel of skin elasticity<br/></span>
        <span className="text-white text-xs tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">After 1 month:</span>
        <span className="text-white text-xs tablet:text-lg font-normal capitalize leading-none tablet:leading-loose"> The skin looks firmer+60% </span>
        <span className="text-white text-xs tablet:text-base font-semibold tablet:font-bold capitalize leading-tight tablet:leading-snug">|</span>
        <span className="text-white text-xs tablet:text-lg font-normal capitalize leading-none tablet:leading-loose"> The skin looks denser +56% </span>
      </div>
      
    </section>
  )
}

export default PromoDesktop