import Image from 'next/image'
import { FC } from 'react'

interface ProductCardProps {
  id: number,
  title: string,
  smallDescription: string,
  thumbnail: string,
  images?: string[],
  price: number 
  outofstock: boolean
}

const ProductCard: FC<ProductCardProps> = ({ id, title, smallDescription, thumbnail, price, outofstock,images}) => {
  return (
    <div className="w-[152px] tablet:w-[288px] pb-2 tablet:pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-2 tablet:gap-4 inline-flex relative">
      <Image 
        src={ thumbnail }
        width={288}
        height={384}
        alt="" 
        className="self-stretch max-tablet:h-[202px] h-384" 
      />
      <div className="self-stretch h-[127px] tablet:h-[136px] px-2 tablet:px-4 flex-col justify-start tablet:justify-center items-start gap-2 flex">
        <div className="self-stretch w-[136px] tablet:w-64 h-10 tablet:h-11 text-pink-800 text-sm tablet:text-base font-semibold tablet:font-bold capitalize leading-tight tablet:leading-snug">{ title }</div>
        <div className="self-stretch w-[136px] tablet:w-64 tablet:h-11 text-neutral-950 text-xs font-normal capitalize leading-none tablet:leading-snug">{ smallDescription }</div>
        <div className="self-stretch w-[136px] tablet:w-64  text-neutral-950 text-sm tablet:text-lg font-semibold tablet:font-normal capitalize leading-tight tablet:leading-loose"> <span>$</span>{ price }</div>
      </div>
      {/* out of stock  */}
      { outofstock && 
          <h2 className='border border-red-500 py-2 px-4 capitalize texred absolute top-2 left-2'>out of stock</h2>
      }
      
    </div>
  )
}

export default ProductCard
