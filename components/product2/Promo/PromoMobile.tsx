import { promo } from 'lib/productData/productdata'
import Image from 'next/image'
import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PromoMobile = () => {

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
    <div className="w-screen h-auto relative bg-pink-950 mt-[32px] px-[20px] tablet:px-[54px] laptop-lg:px-[108px] pt-[20px]">
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


      <div className="w-full mt-[16px]">
        <span className="text-white text-xs font-semibold tracking-tight">In just 1 week:</span>
        <span className="text-white text-[10.84px] font-normal capitalize leading-tight"> </span>
        <span className="text-white text-xs font-normal leading-none">it appears firmer, stronger and smoother.<br/></span>
        <span className="text-white text-xs font-semibold tracking-tight">In 3 weeks:</span>
        <span className="text-white text-xs font-normal leading-none"> 2x improvement in the look or feel of skin elasticity<br/></span>
        <span className="text-white text-xs font-semibold tracking-tight">After 1 month: </span>
        <span className="text-white text-xs font-normal leading-none">The skin looks firmer+60% | The skin looks denser +56% </span>
      </div>

    </div>
  )
}

export default PromoMobile