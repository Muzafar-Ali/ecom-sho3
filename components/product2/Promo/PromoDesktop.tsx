import { promo } from 'lib/productData/productdata'
import Image from 'next/image'
import React from 'react'

const PromoDesktop = () => {
  return (
    <section className="w-[1440px] h-[488px] px-[108px] py-10 bg-pink-950 flex-col justify-center items-center gap-6 tablet:inline-flex hidden">
        
      <div className="self-stretch justify-start items-start gap-6 inline-flex">
        { promo.map((image, index) => (
            <Image
              src={image}
              alt=""
              width={288}
              height={288}
              className="w-72 h-72 relative"
            />
          ))
        }
      </div>
      
      <div className="text-center">
        <span className="text-white text-xl font-bold leading-7">In just 1 week:</span>
        <span className="text-white text-lg font-normal capitalize leading-loose">
          it appears firmer, stronger and smoother.<br/></span>
          <span className="text-white text-xl font-bold leading-7">In 3 weeks:</span>
          <span className="text-white text-lg font-normal capitalize leading-loose"> 2x improvement in the look or feel of skin elasticity<br/></span>
          <span className="text-white text-xl font-bold leading-7">After 1 month:</span>
          <span className="text-white text-lg font-normal capitalize leading-loose"> The skin looks firmer+60% </span>
          <span className="text-white text-base font-bold capitalize leading-snug">|</span>
          <span className="text-white text-lg font-normal capitalize leading-loose"> The skin looks denser +56% </span>
      </div>
      
  </section>
  )
}

export default PromoDesktop