import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'

interface ProductCardProps {
  id: number,
  title: string,
  smallDescription: string,
  image: string,
  price: number 
}

const ProductCard: FC<ProductCardProps> = ({ id, title, smallDescription, image, price}) => {
  return (
    <div className="w-[152px] md:w-72 pb-2 md:pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-2 md:gap-4 inline-flex">
      <Image 
        src={ image }
        width={288}
        height={384}
        alt="" 
        className="self-stretch max-md:h-[202px] h-384" 
      />
      <div className="self-stretch h-[127px] md:h-[136px] px-2 md:px-4 flex-col justify-start md:justify-center items-start gap-2 flex">
        <div className="self-stretch w-[136px] md:w-64 h-10 md:h-11 text-pink-800 text-sm md:text-base font-semibold md:font-bold capitalize leading-tight md:leading-snug">{ title }</div>
        <div className="self-stretch w-[136px] md:w-64 md:h-11 text-neutral-950 text-xs font-normal capitalize leading-none md:leading-snug">{ smallDescription }</div>
        <div className="self-stretch w-[136px] md:w-64  text-neutral-950 text-sm md:text-lg font-semibold md:font-normal capitalize leading-tight md:leading-loose"> <span>$</span>{ price }</div>
      </div>
    </div>
  )
}

export default ProductCard
