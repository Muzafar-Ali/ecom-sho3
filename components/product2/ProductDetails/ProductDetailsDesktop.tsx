import { DetailsData, detailsData } from 'lib/productData/detailsData';
import React, { Dispatch, SetStateAction } from 'react';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export interface ProductDetailsDesktopProps {
  matchedDetails: DetailsData[];
  detailsLabel: string;
  setDetailsLabel: Dispatch<SetStateAction<string>>; 
  showLess: boolean;
  setShowLess: Dispatch<SetStateAction<boolean>>;
}

const ProductDetailsDesktop:React.FC<ProductDetailsDesktopProps> = ({
  detailsLabel,
  setDetailsLabel,
  matchedDetails,
  showLess,
  setShowLess
}) => {
  return (
    <div className='hidden laptop:flex flex-col mt-[32px] mb-[56px] tablet:px-[54px] laptop-lg:px-[108px] '>
      <div className="w-full h-11 border-b border-zinc-600 justify-between items-start inline-flex mt-[32px]">

        
        { detailsData.map((item, index) => (
          <div className={`${detailsLabel === item.label ? 'border-b-2 border-pink-800' : '' } w-auto py-2 justify-start items-center gap-2 flex`}>
            <button 
              className="text-pink-800 text-lg laptop-lg:text-xl font-bold leading-7 cursor-pointer" 
              onClick={() => setDetailsLabel(item.label)}
            >
              {item.label}
            </button>
          </div>

        ))}

      </div>

      <div className='w-full'>
        { matchedDetails.map((item, index) => (
          <div
            key={index} 
            className='flec flex-col gap-0 p-[24px] w-full'
          >
            <h2 className=" text-pink-800 text-lg laptop-lg:text-xl font-bold leading-7 mb-[16px]">{item.label}</h2>
            { showLess ?  (
              <p className=" text-neutral-950 text-base laptop-lg:text-lg font-normal capitalize leading-loose mb-2">{item.short}</p>
              ):(  
                <p className=" text-neutral-950 text-base laptop-lg:text-lg font-normal capitalize leading-loose mb-2">{item.long}</p>
                )
              }
            
            { !showLess && (
              <button 
                className="w-[150px] h-12 px-4 py-2 justify-center items-center gap-2 inline-flex cursor-pointer"
                onClick={() => setShowLess(!showLess)}
              >
                  <div className="text-pink-800 text-sm laptop-lg:text-base font-normal capitalize leading-7">Read Less</div>
                  <AiOutlineLeft className='text-pink-800 laptop:h-[18px] laptop-lg:h-[22px] laptop:w-[22px] laptop-lg:w-[22px]'/>
                </button>  
              )
            }
            
            { showLess && (
              <button 
              className="w-[150px] h-12 px-4 py-2 justify-center items-center gap-2 inline-flex cursor-pointer"
              onClick={() => setShowLess(!showLess)}
              >
                <div className="text-pink-800 text-sm laptop-lg:text-base font-normal capitalize leading-7">Read More</div>
                <AiOutlineRight className='text-pink-800 laptop:h-[18px] laptop-lg:h-[22px] laptop:w-[22px] laptop-lg:w-[22px]'/>
              </button>  
              )
            }

            </div>
          ))
        }
      </div>

  </div>
  )
}

export default ProductDetailsDesktop