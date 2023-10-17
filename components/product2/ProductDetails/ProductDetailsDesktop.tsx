import { DetailsData } from 'lib/productData/detailsData';
import React, { Dispatch, SetStateAction } from 'react';

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
    <div className='flex flex-col mt-[32px] mb-[56px] px-[108px] max-tablet:hidden'>
      <div className="w-[1224px] h-11 border-b border-zinc-600 justify-between items-start inline-flex mt-[32px]">
        
        <div className={`${detailsLabel === 'Product Details' ? 'border-b-2 border-pink-800' : '' } w-[154px] py-2 justify-start items-center gap-2 flex`}>
          <button 
            className="text-pink-800 text-xl font-bold leading-7 cursor-pointer" 
            onClick={() => setDetailsLabel('Product Details')}
          >
            Product Details
          </button>
        </div>
        
        <div className={`${ detailsLabel === 'How To Apply' ? 'border-b-2 border-pink-800' : '' } w-[136px] py-2 justify-start items-center gap-2 flex`}>
          <button 
            className={`${ detailsLabel === 'How To Apply' ? 'text-pink-800' : 'text-zinc-600'} text-xl font-bold leading-7 cursor-pointer`}
            onClick={() => setDetailsLabel('How To Apply')}
          >
            How To Apply
          </button>
        </div>
        
        <div className={`${ detailsLabel === 'Ingredient' ? 'border-b-2 border-pink-800' : ''} w-[105px] py-2 justify-start items-center gap-2 flex`}>
          <div 
            className={`${ detailsLabel === 'Ingredient' ? 'text-pink-800' : 'text-zinc-600'} text-xl font-bold leading-7 cursor-pointer`}
            onClick={() => setDetailsLabel('Ingredient')}
          >
            Ingredient
          </div>
        </div>

        <div className={`${ detailsLabel === 'What Makes It Advance' ? 'border-b-2 border-pink-800' : ''} w-[235px] py-2 justify-start items-center gap-2 flex`} >
          <div 
            className={`${ detailsLabel === 'What Makes It Advance' ? 'text-pink-800' : 'text-zinc-600'} text-xl font-bold leading-7 cursor-pointer`} 
            onClick={() => setDetailsLabel('What Makes It Advance')}
          >
            What Makes It Advance
          </div>
        </div>

        <div className={`${detailsLabel === 'Product Specification' ? 'border-b-2 border-pink-800' : ''} w-[235px] py-2 justify-start items-center gap-2 flex`}>
          <div 
            className={`${detailsLabel === 'Product Specification' ? 'text-pink-800' : 'text-zinc-600'} text-xl font-bold leading-7 cursor-pointer`}
            onClick={() => setDetailsLabel('Product Specification')}
          >
            Product Specification
          </div>
        </div>

      </div>

      <div className='w-[1224px]'>
        { matchedDetails.map((item, index) => (
          <div
          key={index} 
          className='flec flex-col gap-0 p-[24px] w-[1192px]'
          >
              <h2 className=" text-pink-800 text-xl font-bold leading-7 mb-[16px]">{item.label}</h2>
              { showLess ?  (
                <p className=" text-neutral-950 text-lg font-normal capitalize leading-loose mb-2">{item.short}</p>
                ):(  
                  <p className=" text-neutral-950 text-lg font-normal capitalize leading-loose mb-2">{item.long}</p>
                  )
                }
              
              { !showLess && (
                <button 
                className="w-[150px] h-12 px-4 py-2 justify-center items-center gap-2 inline-flex cursor-pointer"
                onClick={() => setShowLess(!showLess)}
                >
                    <div className="text-pink-800 text-base font-normal capitalize leading-7">Read Less</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.8852 3.77L16.1152 2L6.11523 12L16.1152 22L17.8852 20.23L9.65523 12L17.8852 3.77Z" fill="#A10550"/>
                    </svg>
                  </button>  
                )
              }
              
              { showLess && (
                <button 
                className="w-[150px] h-12 px-4 py-2 justify-center items-center gap-2 inline-flex cursor-pointer"
                onClick={() => setShowLess(!showLess)}
                >
                  <div className="text-pink-800 text-base font-normal capitalize leading-7">Read More</div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.11523 20.23L7.88523 22L17.8852 12L7.88523 2L6.11523 3.77L14.3452 12L6.11523 20.23Z" fill="#A10550"/>
                  </svg>
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