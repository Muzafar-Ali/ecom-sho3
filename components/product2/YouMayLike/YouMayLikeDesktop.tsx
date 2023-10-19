import Wrapper from 'components/Wrapper';
import { products } from 'lib/productData/productdata'
import Image from 'next/image'
import React, { useState } from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const YouMayLikeDesktop = () => {


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
      <div className="w-full px-[108px] pt-[56px] hidden tablet:inline-flex flex-col bg-red-50">
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
}

export default YouMayLikeDesktop






// <div className="w-[1440px] h-[704px] pt-[38px] pb-14 mt-[32px] bg-red-50 flex-col justify-start items-center gap-4 inline-flex max-tablet:hidden">
//         <div className="px-[108px]">
//           <h2 className="text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] text-center mb-[16px]">you may also like</h2>
//           <div className="self-stretch justify-center items-center gap-6 inline-flex">
//             <div className="w-10 h-10 p-1 bg-white border border-stone-300 justify-center items-center flex">
//               {/* Arrow Left */}
//               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M19.333 9.33329L12.6663 16L19.333 22.6666L19.333 9.33329Z" fill="#0C0C0C"/>
//               </svg>
//             </div>
//             { products.slice(4,8).map((item) => (
//                 <div className="w-72 pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex">
//                   <Image
//                     src={item.thumbnail}
//                     alt={item.title}
//                     width={288}
//                     height={384}
//                     className="self-stretch w-[288px] h-[384px]"
//                   />
//                   <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
//                     <div className="self-stretch h-11 text-pink-800 text-base font-bold capitalize leading-snug">{item.title}</div>
//                     <div className="self-stretch h-11 text-neutral-950 text-xs font-normal capitalize leading-snug">{item.smallDescription}</div>
//                     <div className="self-stretch text-neutral-950 text-lg font-normal capitalize leading-loose">$<span>{item.price}</span></div>
//                   </div>
//                 </div>
//               ))
//             }
  
//             <div className="w-10 h-10 p-1 bg-white border border-stone-300 justify-center items-center flex">
//               {/* Arrow Right */}
//               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12.6663 22.6667L19.333 16.0001L12.6663 9.33342L12.6663 22.6667Z" fill="#0C0C0C"/>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>