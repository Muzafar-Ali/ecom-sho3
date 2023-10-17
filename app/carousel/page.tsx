
'use client'
import Wrapper from 'components/Wrapper'
import { products } from 'lib/productData/productdata'
import Image from 'next/image'
import React, { useState } from 'react'

const SkinCareRecommended = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  // left side
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const nextIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    console.log('nexIndex', nextIndex)
    setCurrentIndex(nextIndex);
  };
  // right side
  const nextSlide = () => {
                                // 19     ====      20 - 1
    const isFinalSlide = currentIndex === products.length - 1;
    const prevIndex = isFinalSlide ? 0 : currentIndex + 1;
    console.log('prevIndex', prevIndex)
    setCurrentIndex(prevIndex);
  };


  return (
    <Wrapper>
      <div className="px-[108px] pt-[56px] max-tablet:hidden">
        <h2 className="text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] mb-[32px] text-center">recommended skincare routine</h2>
        <div className="w-[1224px] h-[560px] justify-center items-center gap-6 inline-flex">
          left side
          <div className="flex items-center justify-center w-10 h-10 p-1 pt-2 pb-5 mb-5 leading-3 bg-white border border-collapse"
            onClick={prevSlide}
          >
            {/* Arrow Left */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.333 9.33329L12.6663 16L19.333 22.6666L19.333 9.33329Z" fill="#0C0C0C"/>
            </svg>
          </div>

  
          {/* { products.map((item) => ( */}
            <div
              // key={products[currentIndex]} 
              className="inline-flex flex-col items-center justify-start gap-4 pb-6 bg-white border grow shrink basis-0 border-neutral-200"
            >
              <Image
                src={products[currentIndex]?.thumbnail}
                alt={products[currentIndex]?.title}
                width={288}
                height={384}
                className="self-stretch w-[288px] h-[384px]"
              />
              <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
                <div className="self-stretch text-base font-bold leading-snug text-pink-800 capitalize h-11">{products[currentIndex]?.title}</div>
                <div className="self-stretch text-xs font-normal leading-snug capitalize h-11 text-neutral-950">{products[currentIndex]?.smallDescription}</div>
                <div className="self-stretch text-lg font-normal leading-loose capitalize text-neutral-950">${products[currentIndex]?.price}</div>
              </div>
              </div>
            {/* ))
          }
           */}
          <div className="flex items-center justify-center w-10 h-10 p-1 bg-white border border-stone-300"
            onClick={nextSlide}
          >
            {/* Arrow Right */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6663 22.6667L19.333 16.0001L12.6663 9.33342L12.6663 22.6667Z" fill="#0C0C0C"/>
            </svg>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SkinCareRecommended















// 'use client'
// import { products } from 'lib/productData/productdata';
// import React, { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
 

// interface Product {
//   id: number;
//   title: string;
//   smallDescription: string;
//   thumbnail: string;
//   images: string[];
//   price: number;
// }

// const CustomCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === products.length - 4 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - 4 : prevIndex - 1
//     );
//   };

//   const visibleProducts = products.slice(currentIndex, currentIndex + 4);

//   return (
//     <div className="relative max-w-screen-md mx-auto">
//       <div className="relative">
//         <button
//           className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full shadow-md top-1/2 left-2"
//           onClick={handlePrev}
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full shadow-md top-1/2 right-2"
//           onClick={handleNext}
//         >
//           <FaArrowRight />
//         </button>
//         <div className="flex space-x-2 overflow-hidden">
//           {visibleProducts.map((product: Product) => (
//             <div key={product.id} className="w-1/4">
//               <img
//                 src={product.images[0]}
//                 alt={product.title}
//                 className="w-full h-auto"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomCarousel;