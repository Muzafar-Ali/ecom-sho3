import {productsType } from 'lib/productData/productdata'
import Image from 'next/image'
import React from 'react'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export interface SkinCareProduct {
  products: productsType[];
}

const SkinCareRecommendedMobile:React.FC<SkinCareProduct> = ({products}) => {
  const responsive = {

    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },

  };

  return (
    <section>
      <div className="tablet:hidden w-80 mx-auto h-[55px] text-center text-neutral-950 text-xl font-bold leading-7">Recommended Skincare Routine</div>
      {/* <div className="w-80 mx-auto h-[345px] justify-start items-start gap-4 inline-flex tablet:hidden"> */}
      <Carousel
        responsive={responsive}
        containerClass=""
        itemClass="px-[10px]"
        arrows={false}
      >

        { products.map((item) => (
          <div
          key={item.id} 
            className="w-[152px] pb-2 bg-white border border-neutral-200 flex-col justify-start items-center gap-2 inline-flex"
          >
            <Image 
              src={item.thumbnail}
              width={152}
              height={202}
              alt={item.title} 
              className="self-stretch h-[202px]" 
            />
            <div className="self-stretch h-[127px] px-2 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-10 text-pink-800 text-sm font-semibold leading-tight">{ item.title }</div>
                <div className="self-stretch h-[51px] text-neutral-950 text-xs font-normal leading-none">{ item.smallDescription }</div>
                <div className="self-stretch text-neutral-950 text-sm font-semibold leading-tight">$<span>{ item.price }</span></div>
              </div>
            </div>

        ))
        }
      </Carousel>
    </section>
  )
}

export default SkinCareRecommendedMobile