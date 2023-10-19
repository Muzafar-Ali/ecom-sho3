import React, { useState } from 'react';
import Wrapper from 'components/Wrapper';
import { products } from 'lib/productData/productdata';
import Image from 'next/image';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const SkinCareRecommendedDesktop = () => {
    // using multi carousel 
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
    <Wrapper>
      <div className="tablet:px-[54px] laptop-lg:px-[108px] pt-[56px] hidden tablet:inline-flex flex-col items-center w-full">
        <h2 className="text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] mb-[32px] text-center">
          recommended skincare routine
        </h2>

        {/* Arrow Left */}
        <div className="w-[570px] laptop:w-[808px] laptop-lg:w-[1224px] h-[560px]">

          <Carousel
            responsive={responsive}
            arrows={true}
            renderButtonGroupOutside={true}
            containerClass="-mx-[10px]"
            itemClass="px-[10px]"
          >
            
            {products.map((item, index) => (
              <div
                key={item.id}
                className="grow shrink basis-0 pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex transition-transform duration-300 scroll-smooth" // Apply transition here
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={288}
                  height={384}
                  className="self-stretch w-[288px] h-[384px]"
                />
                <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch h-11 text-pink-800 text-base font-bold capitalize leading-snug">
                    {item.id}
                  </div>
                  <div className="self-stretch h-11 text-pink-800 text-base font-bold capitalize leading-snug">
                    {item.title}
                  </div>
                  <div className="self-stretch h-11 text-neutral-950 text-xs font-normal capitalize leading-snug">
                    {item.smallDescription}
                  </div>
                  <div className="self-stretch text-neutral-950 text-lg font-normal capitalize leading-loose">
                    ${item.price}
                  </div>
                </div>
              </div>
              ))
            }
          </Carousel>
          

        </div>
      </div>
    </Wrapper>
  );
};

export default SkinCareRecommendedDesktop;
