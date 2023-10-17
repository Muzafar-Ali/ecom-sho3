import Wrapper from 'components/Wrapper';
import { products } from 'lib/productData/productdata'
import Image from 'next/image'
import React, { useState } from 'react'

const YouMayLike = () => {
  const numVisibleProducts = 4;
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        // If we are at the beginning, stop at the beginning
        return 0;
      }
    });
  };
  const nextSlide = () => {
    setStartIndex((prevIndex) => {
      const remainingProducts = products.length - prevIndex - 1;
      if (remainingProducts >= numVisibleProducts) {
        return prevIndex + 1;
      } else {
        // If there are less than 4 remaining products, stop at the end
        return prevIndex;
      }
    });
    
  };

  return (
    <Wrapper>
      <div className="w-[1440px] h-[704px] pt-[38px] pb-14 mt-[32px] bg-red-50 flex-col justify-start items-center gap-4 inline-flex max-tablet:hidden">
        <div className="px-[108px]">
          <div className="px-[108px] pt-[56px] max-tablet:hidden">
          <h2 className="text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] text-center mb-[16px]">you may also like</h2>
            <div className="w-[1224px] h-[560px] justify-center items-center gap-6 inline-flex">
              <div
                className="w-10 h-10 p-1 bg-white border border-stone-300 justify-center items-center flex transition-transform duration-600 dela cursor-pointer"
                onClick={prevSlide}
              >
                {/* Arrow Left */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.333 9.33329L12.6663 16L19.333 22.6666L19.333 9.33329Z" fill="#0C0C0C" />
                </svg>
              </div>

              

              {products.slice(startIndex, startIndex + numVisibleProducts).map((item, index) => (
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
              ))}

              <div
                className="w-10 h-10 p-1 bg-white border border-stone-300 justify-center items-center flex transition-transform duration-600 delay-200 cursor-pointer" // Apply transition here
                onClick={nextSlide}
              >
                {/* Arrow Right */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.6663 22.6667L19.333 16.0001L12.6663 9.33342L12.6663 22.6667Z" fill="#0C0C0C" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default YouMayLike






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