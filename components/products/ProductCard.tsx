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
    <div className="w-72 pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex">
      <Image 
        className="self-stretch h-96" 
        src={ image }
        width={288}
        height={384}
        alt="" 
        />
      <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
        <div className="self-stretch h-11 text-pink-800 text-base font-bold font-['Open Sans'] capitalize leading-snug">{ title }</div>
        <div className="self-stretch h-11 text-neutral-950 text-xs font-normal font-['Open Sans'] capitalize leading-snug">{ smallDescription }</div>
        <div className="self-stretch text-neutral-950 text-lg font-normal font-['Open Sans'] capitalize leading-loose"> <span>$</span>{ price }</div>
      </div>
    </div>
  )
}

export default ProductCard