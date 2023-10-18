import { products } from 'lib/productData/productdata'
import React from 'react'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { SkinCareProduct } from '../SkinCareRecommendedMobile'
import Image from 'next/image'



const YouMayLikeMobile:React.FC<SkinCareProduct> = ({products}) => {
  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };

  return (
    <section className='px-[20px] mt-[32px] w-full h-[445px]  bg-red-50'>
      <div className=" text-center text-neutral-950 text-xl font-bold leading-7 pb-[16px]">You May Also Like</div>

      <Carousel
        responsive={responsive}
        containerClass=""
        itemClass="px-[5px]"
        arrows={false}
      >

        { products.map((item) => (
          <div
          key={item.id} 
            className="w-[135px] mobile-m:w-[160px] mobile-l:w-[180px] pb-2 bg-white border border-neutral-200 flex-col justify-start items-center gap-2 inline-flex"
          >
            <div>
              <Image 
                src={item.thumbnail}
                width={152}
                height={202}
                alt={item.title} 
                className="w-[135px] mobile-m:w-[160px] mobile-l:w-[180px] h-[180px] mobile-m:h-[202px] object-cover" 
              />

            </div>

            <div className="self-stretch h-auto px-2 mt-[8px] flex-col justify-start items-start gap-4 mobile-m:gap-2 flex">
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

export default YouMayLikeMobile