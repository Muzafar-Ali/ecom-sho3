import { promo } from 'lib/productData/productdata'
import Image from 'next/image'
import React from 'react'

const PromoMobile = () => {
  return (
    <div className="w-screen h-[500px] relative bg-pink-950 mt-[32px] px-[20px] pt-[20px] tablet:hidden">
      
      { promo.slice(0,1).map((image, index) => (
        <Image
          key={index}
          src={image}
          width={320}
          height={320}
          alt=""
          className="w-screen h-80 relative"
        />
      ))}

    <div className="w-[321px] left-[19px] top-[376px] absolute">
      <span className="text-white text-xs font-semibold tracking-tight">In just 1 week:</span>
      <span className="text-white text-[10.84px] font-normal capitalize leading-tight"> </span>
      <span className="text-white text-xs font-normal leading-none">it appears firmer, stronger and smoother.<br/></span>
      <span className="text-white text-xs font-semibold tracking-tight">In 3 weeks:</span>
      <span className="text-white text-xs font-normal leading-none"> 2x improvement in the look or feel of skin elasticity<br/></span>
      <span className="text-white text-xs font-semibold tracking-tight">After 1 month: </span>
      <span className="text-white text-xs font-normal leading-none">The skin looks firmer+60% | The skin looks denser +56% </span>
    </div>

    <div className="left-[126px] top-[356px] absolute justify-center items-center gap-1 inline-flex">
      <div className="w-6 h-1 relative">
        <div className="w-6 h-1 left-0 top-0 absolute bg-pink-800 border border-pink-500"></div>
      </div>
      <div className="w-6 h-1 relative">
        <div className="w-6 h-1 left-0 top-0 absolute bg-stone-300"></div>
      </div>
      <div className="w-6 h-1 relative">
        <div className="w-6 h-1 left-0 top-0 absolute bg-stone-300"></div>
      </div>
      <div className="w-6 h-1 relative">
        <div className="w-6 h-1 left-0 top-0 absolute bg-stone-300"></div>
      </div>
    </div>

  </div>
  )
}

export default PromoMobile