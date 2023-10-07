"use client"
import Wrapper from "components/Wrapper"
import SkinCareRecommended from "components/product2/SkinCareRecommended"
import YouMayLike from "components/product2/YouMayLike"
import BranchStock from "components/products/BranchStock"
import { details } from "lib/productData/detailsData"
import { faq } from "lib/productData/faq"
import { products, promo } from "lib/productData/productdata"
import Image from "next/image"
import { useState } from "react"
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const ProductDetails = () => {
  
  const [branchStockIsOPen, setBranchStockIsOPen] = useState<boolean>(false);
  const [largeImage, setLargeImage] = useState<string>();
  const [detailsLabel, setDetailsLabel] = useState<string>('Product Details');
  const [productFAQ, setProductFAQ] = useState<string>('Can this product be used on all skin types?')
  const [showLess, setShowLess] = useState(true)
  
  const matchedDetails = details.filter((data) => data?.label.toLowerCase() === detailsLabel?.toLowerCase());
  const matchedFAQ = faq.filter((faq) => faq?.question.toLowerCase() === productFAQ?.toLowerCase());
      // Define responsive settings for the Carousel component
  const responsive = {

    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },

  };
  
  return (
    <Wrapper className="h-[3855px] overflow-y-auto pb-[52px] max-mobile-l:max-w-[360px] max-laptop:h-[5109px] overflow-hidden">

      {/* product images and detail page start*/}
      <div className='mt-[58px] flex gap-[24px] px-[20px] laptop:px-[108px] relative max-laptop:flex-col'>
        {/* product small images  */}
        <div className='flex flex-col gap-[12px] tablet:gap-[24px] max-laptop:flex-row max-laptop:absolute max-tablet:top-[330px] tablet:top-[620px] cursor-pointer'>
          { products[0]?.images.map((image, index) => (
 
              <div
                key={index} 
                onMouseEnter={() => setLargeImage(image)}
              >
                <Image 
                  src={image}
                  width={68}
                  height={68}
                  alt={''} 
                  className="w-[68px] tablet:w-20 h-[68px] tablet:h-[78px]" 
                    />
              </div>
    
            ))
          }
        </div>
        {/* product large image */}
        <div>
          <Image
            src={largeImage ? largeImage : '/productpage/p1.png'}
            width={704}
            height={605}
            alt={''}
            className="w-80 h-80 tablet:w-[704px] tablet:h-[605px]"
          />
        </div>
        {/* product details */}
        <div className="w-[392px] h-[282px] flex-col justify-start items-start gap-4 inline-flex max-tablet:mt-[60px] tablet:mt-[100px] laptop:mt-0">
          <div className="self-stretch text-pink-800 text-2xl tablet:text-[32px] font-bold capitalize leading-[33.60px] 
            tablet:leading-[44.80px] max-tablet:w-80">
            { products[0]?.title }
          </div>
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-[51px] flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-neutral-950 text-sm tablet:text-base font-semibold tablet:font-bold capitalize leading-tight tablet:leading-snug">Anti-aging face serum</div>
              <div className="self-stretch pr-2 justify-start items-center gap-2 inline-flex relative max-tablet:w-80 tablet:h-[17px]">
                <div className="text-zinc-600 text-xs tablet:text-sm font-normal capitalize leading-none tablet:leading-[25.20px]">all types of skin</div>
                <div className="opacity-[0.6]">|</div>
                <div className="text-zinc-600 text-xs tablet:text-sm font-normal capitalize leading-none tablet:leading-[25.20px]">am or pm</div>
                <div className=" opacity-[0.6]">|</div>
                <div className="text-zinc-600 text-xs tablet:text-sm font-normal capitalize leading-none tablet:leading-[25.20px]">brightening</div>
              </div>
            </div>
            <div className="self-stretch text-zinc-500 text-sm tablet:text-base font-semibold tablet:font-bold capitalize leading-tight tablet:leading-snug max-mobile-l:w-80">Formulated with 92% natural-origin ingredients</div>
          </div>

          <div className="self-stretch text-neutral-950 text-xl tablet:text-2xl font-semibold tablet:font-bold capitalize leading-7 tablet:leading-[33.60px]">
            $<span>{ products[0]?.price }</span>
          </div>
          
          <div className="w-64 tablet:w-[392px] h-[25px] tablet:h-14 px-4 py-2 justify-between items-center inline-flex border-b border-zinc-600">
            <div className="text-zinc-600 text-sm tablet:text-xl font-normal capitalize leading-[25.20px] tablet:leading-9 w-full">30 mL</div>
            <div className="w-[263px] text-right text-zinc-600 text-sm tablet:text-xl font-normal capitalize leading-[25.20px] tablet:leading-9">$520.00</div>
            <button className="w-6 h-6 max-mobile-l:pl-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="#606060"/>
              </svg>
            </button>
          </div>
          
          {/* check in branch stock button */}
          <button 
            onClick={() => setBranchStockIsOPen((prev) => !prev)}
            className="w-[330px] tablet:w-[392px] h-[45px] px-4 py-2 bg-pink-800 justify-center items-center gap-2 tablet:gap-2 inline-flex"
          >
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5C8.13 2.5 5 5.63 5 9.5C5 14.75 12 22.5 12 22.5C12 22.5 19 14.75 19 9.5C19 5.63 15.87 2.5 12 2.5ZM7 9.5C7 6.74 9.24 4.5 12 4.5C14.76 4.5 17 6.74 17 9.5C17 12.38 14.12 16.69 12 19.38C9.92 16.71 7 12.35 7 9.5Z" fill="white"/>
              <path d="M12 12C13.3807 12 14.5 10.8807 14.5 9.5C14.5 8.11929 13.3807 7 12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 12 12 12Z" fill="white"/>
            </svg>
            <h2 className="text-white text-xs tablet:text-base font-normal capitalize leading-normal tablet:leading-7">check in branches stock</h2>
              { branchStockIsOPen && <BranchStock setBranchStockIsOPen={setBranchStockIsOPen} branchStockIsOPen={branchStockIsOPen}/>}               
          </button>

          {/* offers */}
          <div className="w-80 tablet:w-[392px] h-[120px] tablet:h-[178px] p-4 bg-red-50 flex-col justify-center tablet:justify-start items-start gap-2 tablet:gap-4 inline-flex">

            <div className="self-stretch justify-start items-start gap-4 flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6.5H17.82C17.93 6.19 18 5.85 18 5.5C18 3.84 16.66 2.5 15 2.5C13.95 2.5 13.04 3.04 12.5 3.85L12 4.52L11.5 3.84C10.96 3.04 10.05 2.5 9 2.5C7.34 2.5 6 3.84 6 5.5C6 5.85 6.07 6.19 6.18 6.5H4C2.89 6.5 2.01 7.39 2.01 8.5L2 19.5C2 20.61 2.89 21.5 4 21.5H20C21.11 21.5 22 20.61 22 19.5V8.5C22 7.39 21.11 6.5 20 6.5ZM15 4.5C15.55 4.5 16 4.95 16 5.5C16 6.05 15.55 6.5 15 6.5C14.45 6.5 14 6.05 14 5.5C14 4.95 14.45 4.5 15 4.5ZM9 4.5C9.55 4.5 10 4.95 10 5.5C10 6.05 9.55 6.5 9 6.5C8.45 6.5 8 6.05 8 5.5C8 4.95 8.45 4.5 9 4.5ZM20 19.5H4V17.5H20V19.5ZM20 14.5H4V8.5H9.08L7 11.33L8.62 12.5L12 7.9L15.38 12.5L17 11.33L14.92 8.5H20V14.5Z" fill="#A10550"/>
              </svg>
              <div className="grow shrink basis-0 text-rose-900 text-xs tablet:text-sm font-normal capitalize leading-none tablet:leading-[25.20px] w-full">receive 2 free samples when you spend $100</div>
            </div>
              
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7871 21.5024L2.99707 11.7124V13.7124C2.99707 14.2424 3.20707 14.7524 3.58707 15.1224L11.3771 22.9124C12.1571 23.6924 13.4271 23.6924 14.2071 22.9124L20.4171 16.7024C21.1971 15.9224 21.1971 14.6524 20.4171 13.8724L12.7871 21.5024Z" fill="#A10550"/>
                <path d="M11.3771 17.9124C11.7671 18.3024 12.2771 18.5024 12.7871 18.5024C13.2971 18.5024 13.8071 18.3024 14.1971 17.9124L20.4071 11.7024C21.1871 10.9224 21.1871 9.65244 20.4071 8.87244L12.6171 1.08244C12.2471 0.712441 11.7371 0.502441 11.2071 0.502441H4.99707C3.89707 0.502441 2.99707 1.40244 2.99707 2.50244V8.71244C2.99707 9.24244 3.20707 9.75244 3.58707 10.1224L11.3771 17.9124ZM4.99707 2.50244H11.2071L18.9971 10.2924L12.7871 16.5024L4.99707 8.71244V2.50244Z" fill="#A10550"/>
                <path d="M7.24707 6.00244C7.93743 6.00244 8.49707 5.4428 8.49707 4.75244C8.49707 4.06209 7.93743 3.50244 7.24707 3.50244C6.55671 3.50244 5.99707 4.06209 5.99707 4.75244C5.99707 5.4428 6.55671 6.00244 7.24707 6.00244Z" fill="#A10550"/>
              </svg>
              <div className="grow shrink basis-0 text-rose-900 text-xs tablet:text-sm font-normal capitalize leading-none tablet:leading-[25.20px] w-full">receive $2 when you return 5 empty containers</div>
            </div>

            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4V11H5.17L4 12.17V4H15ZM16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12V3C17 2.45 16.55 2 16 2ZM21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6Z" fill="#A10550"/>
              </svg>
              <div className="w-[317px] self-stretch justify-start items-center gap-2 flex">
              <div className="grow shrink basis-0 text-rose-900 text-xs tablet:text-sm font-normal capitalize leading-none tablet:leading-[25.20px] w-full">receive free 1-2-1 expert advice in branches</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* product images and detail page end*/}

      {/* product details and information Desktop start*/}
      <div className='flex flex-col px-[108px] max-tablet:hidden'>
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
        { matchedDetails.map((item, index) => (
            <div
              key={index} 
              className='flec flex-col gap-0 p-[24px]'
            >
              <h2 className="w-[1192px] text-pink-800 text-xl font-bold leading-7 mb-[16px]">{item.label}</h2>
              { showLess ?  (
                  <p className="w-[1192px] text-neutral-950 text-lg font-normal capitalize leading-loose mb-2">{item.short}</p>
                ):(  
                  <p className="w-[1192px] text-neutral-950 text-lg font-normal capitalize leading-loose mb-2">{item.long}</p>
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
      {/* product details and information Desktop end*/}

      {/* product details and information Mobile start*/}
      <div className="w-80 h-[450px] flex-col justify-start items-start inline-flex mt-[250px] px-[20px] mb-[32px] tablet:hidden">
        <div className="w-80 px-2 py-4 bg-white border-t border-b border-stone-300 justify-start items-center gap-1 inline-flex ">
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight">Product Details</div>
            <div >
              <GrFormAdd 
                className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                onClick={() => setDetailsLabel('Product Details')}
              />
            </div>
        </div>
        { matchedDetails.map((item) => (
            <div className={`${detailsLabel === 'Product Details' ? 'visible':'hidden'} w-80  h-full px-2 py-4 bg-white border-t border-b border-stone-300 flex-col justify-start items-start gap-2 flex`}>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-pink-800 text-sm font-semibold leading-tight">{item.label}</div>
                <div >
                  <GrFormSubtract 
                    className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                    onClick={() => setDetailsLabel('')}
                  />
                </div>
              </div>
              
              <div className={`self-stretch px-2 justify-start items-start gap-2 inline-flex`}>
                <div className="grow shrink basis-0">
                  <span className="text-neutral-950 text-sm font-semibold leading-tight">step 1:</span>
                  <span className="text-neutral-950 text-xs font-normal leading-none"> 
                    Dispense two to three pumps into the palm of your hand. Then, using the pads of the fingers, apply the serum to the entire face from the centre outwards.<br/></span><span className="text-neutral-950 text-sm font-semibold leading-tight">step 2:</span><span className="text-neutral-950 text-xs font-normal leading-none"> Use gentle pressure to make the serum penetrate deeply.<br/></span>
                  <span className="text-neutral-950 text-sm font-semibold leading-tight">step 3:</span>
                  <span className="text-neutral-950 text-xs font-normal leading-none"> 
                    Finally, to enhance contours, hold the chin between the index and middle fingers and move up the jawline.
                  </span>
                </div>
              </div>
              
            </div>  
          ))
        }
        
        <div className="w-80 px-2 py-4 bg-white border-b border-stone-300 justify-start items-center gap-1 inline-flex">
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight">Ingredient</div>
          <div >
              <GrFormAdd 
                className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                onClick={() => setDetailsLabel('Ingredient')}
              />
            </div>
        </div>
        { matchedDetails.map((item) => (
            <div className={`${detailsLabel === 'Ingredient' ? 'visible':'hidden'} w-80  h-full px-2 py-4 bg-white border-t border-b border-stone-300 flex-col justify-start items-start gap-2 flex`}>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-pink-800 text-sm font-semibold leading-tight">{item.label}</div>
                <div >
                  <GrFormSubtract 
                    className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                    onClick={() => setDetailsLabel('')}
                  />
                </div>
              </div>
              
              <div className={`self-stretch px-2 justify-start items-start gap-2 inline-flex`}>
                <div className="grow shrink basis-0">
                  <span className="text-neutral-950 text-sm font-semibold leading-tight">step 1:</span>
                  <span className="text-neutral-950 text-xs font-normal leading-none"> 
                    Dispense two to three pumps into the palm of your hand. Then, using the pads of the fingers, apply the serum to the entire face from the centre outwards.<br/></span><span className="text-neutral-950 text-sm font-semibold leading-tight">step 2:</span><span className="text-neutral-950 text-xs font-normal leading-none"> Use gentle pressure to make the serum penetrate deeply.<br/></span>
                  <span className="text-neutral-950 text-sm font-semibold leading-tight">step 3:</span>
                  <span className="text-neutral-950 text-xs font-normal leading-none"> 
                    Finally, to enhance contours, hold the chin between the index and middle fingers and move up the jawline.
                  </span>
                </div>
              </div>
              
            </div>  

          ))
        }

        <div className="w-80 px-2 py-4 bg-white border-b border-stone-300 justify-start items-center gap-1 inline-flex">
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight">What Makes It Advance</div>
          <div >
            <GrFormAdd 
              className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
              onClick={() => setDetailsLabel('What Makes It Advance')}
            />
          </div>
        </div>
        { matchedDetails.map((item) => (
            <div className={`${detailsLabel === 'What Makes It Advance' ? 'visible':'hidden'} w-80  h-full px-2 py-4 bg-white border-t border-b border-stone-300 flex-col justify-start items-start gap-2 flex`}>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-pink-800 text-sm font-semibold leading-tight">{item.label}</div>
                <div >
                  <GrFormSubtract 
                    className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                    onClick={() => setDetailsLabel('')}
                  />
                </div>
              </div>
              
              <div className={`self-stretch px-2 justify-start items-start gap-2 inline-flex`}>
                <div className="grow shrink basis-0">
                  <span className="text-neutral-950 text-sm font-semibold leading-tight">step 1:</span>
                  <span className="text-neutral-950 text-xs font-normal leading-none"> 
                    Dispense two to three pumps into the palm of your hand. Then, using the pads of the fingers, apply the serum to the entire face from the centre outwards.<br/></span><span className="text-neutral-950 text-sm font-semibold leading-tight">step 2:</span><span className="text-neutral-950 text-xs font-normal leading-none"> Use gentle pressure to make the serum penetrate deeply.<br/></span>
                  <span className="text-neutral-950 text-sm font-semibold leading-tight">step 3:</span>
                  <span className="text-neutral-950 text-xs font-normal leading-none"> 
                    Finally, to enhance contours, hold the chin between the index and middle fingers and move up the jawline.
                  </span>
                </div>
              </div>
              
            </div>  
          ))
        }

        <div className="w-80 px-2 py-4 bg-white border-b border-stone-300 justify-start items-center gap-1 inline-flex">
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight">Product Specification</div>
          <div >
            <GrFormAdd 
              className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
              onClick={() => setDetailsLabel('Product Specification')}
            />
          </div>
        </div>
        { matchedDetails.map((item) => (
            <div className={`${detailsLabel === 'Product Specification' ? 'visible':'hidden'} w-80  h-full px-2 py-4 bg-white border-t border-b border-stone-300 flex-col justify-start items-start gap-2 flex`}>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-pink-800 text-sm font-semibold leading-tight">{item.label}</div>
                <div >
                  <GrFormSubtract 
                    className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                    onClick={() => setDetailsLabel('')}
                  />
                </div>
              </div>
              
              <div className={`self-stretch px-2 justify-start items-start gap-2 inline-flex`}>
                <div className="grow shrink basis-0">
                  <span className="text-neutral-950 text-sm font-semibold leading-tight">step 1:</span>
                  <span className="text-neutral-950 text-xs font-normal leading-none"> 
                    Dispense two to three pumps into the palm of your hand. Then, using the pads of the fingers, apply the serum to the entire face from the centre outwards.<br/></span><span className="text-neutral-950 text-sm font-semibold leading-tight">step 2:</span><span className="text-neutral-950 text-xs font-normal leading-none"> Use gentle pressure to make the serum penetrate deeply.<br/></span>
                  <span className="text-neutral-950 text-sm font-semibold leading-tight">step 3:</span>
                  <span className="text-neutral-950 text-xs font-normal leading-none"> 
                    Finally, to enhance contours, hold the chin between the index and middle fingers and move up the jawline.
                  </span>
                </div>
              </div>
              
            </div>  

          ))
        }

      </div>
      {/* product details and information Mobile end*/}

      {/* promo 4 images of 288 x 288  Desktop start*/}
      <div className="w-[1440px] h-[488px] px-[108px] py-10 bg-pink-950 flex-col justify-center items-center gap-6 tablet:inline-flex hidden">
        
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
      </div>
      {/* promo 4 images of 288 x 288  Desktop end*/}

      {/* promo 4 images of 288 x 288  Mobile start*/}
      <div className="w-[360px] h-[500px] relative bg-pink-950 mt-[32px] tablet:hidden">
          { promo.slice(0,1).map((image, index) => (
            <Image
              key={index}
              src={image}
              width={320}
              height={320}
              alt=""
              className="w-80 h-80 relative"
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
      {/* promo 4 images of 288 x 288  Mobile end*/}
      
      {/* Frequently Asked Questions FAQ start */}
      <div className="px-[20px] tablet:px-[108px] mt-[32px] tablet:mt-[56px]">
        <div className="text-neutral-950 text-xl tablet:text-2xl font-bold capitalize leading-7 tablet:leading-[33.60px] text-center max-tablet:w-80 py-[32px]">
          <span>{products[0]?.title}</span> frequently asked questions
        </div>
        <div className="w-80 tablet:w-[1224px] h-[778px] tablet:h-[812px] flex-col justify-start items-start inline-flex">
        <div className="self-stretch px-2 tablet:px-4 py-4 tablet:py-[22px] bg-white border-t border-b border-stone-300 justify-start items-center gap-1 tablet:gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
              What is the best way to use this product?
            </div>
            <button className="cursor-pointer" >
              <GrFormAdd
                onClick={() => setProductFAQ('What is the best way to use this product?')} 
                className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
              />
            </button>
          </div>
          { matchedFAQ.map((faq) => (
              <div className={`${productFAQ === 'What is the best way to use this product?' ? 'visible':'hidden' } self-stretch h-[250px] tablet:h-[236px] px-2 tablet:px-4 py-4 tablet:py-6 bg-white border-t border-b border-stone-300 flex-col justify-start tablet:justify-center items-start gap-2 tablet:gap-4 flex`}>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 text-pink-800 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
                    {productFAQ}
                  </div>
                  <div className="cursor-pointer" >
                    <GrFormSubtract 
                      onClick={() => setProductFAQ('')} 
                      className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                    />
                  </div>
                </div>
                
                <div className="self-stretch px-2 tablet:px-4 py-2 h-[500px] justify-start items-start gap-2 inline-flex">
                  <div className="w-72 tablet:w-[1160px] text-neutral-950 text-xs tablet:text-lg font-normal capitalize leading-4 tablet:leading-loose"> 
                    {faq.answer}  
                  </div>
                </div>
              </div>
            ))
          }

          <div className="self-stretch px-2 tablet:px-4 py-4 tablet:py-[22px] bg-white border-t border-b border-stone-300 justify-start items-center gap-1 tablet:gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
              Can this product be used on all skin types?
            </div>
            <button className="cursor-pointer" >
              <GrFormAdd
                onClick={() => setProductFAQ('Can this product be used on all skin types?')} 
                className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
              />
            </button>
          </div>
          { matchedFAQ.map((faq) => (
              <div className={`${productFAQ === 'Can this product be used on all skin types?' ? 'visible':'hidden' } self-stretch h-[250px] tablet:h-[236px] px-2 tablet:px-4 py-4 tablet:py-6 bg-white border-t border-b border-stone-300 flex-col justify-start tablet:justify-center items-start gap-2 tablet:gap-4 flex`}>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 text-pink-800 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
                    {productFAQ}
                  </div>
                  <div className="cursor-pointer" >
                    <GrFormSubtract 
                      onClick={() => setProductFAQ('')} 
                      className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                    />
                  </div>
                </div>
                
                <div className="self-stretch px-2 tablet:px-4 py-2 h-[500px] justify-start items-start gap-2 inline-flex">
                  <div className="w-72 tablet:w-[1160px] text-neutral-950 text-xs tablet:text-lg font-normal capitalize leading-4 tablet:leading-loose"> 
                    {faq.answer}  
                  </div>
                </div>
              </div>
            ))
          }
          <div className="self-stretch px-2 tablet:px-4 py-4 tablet:py-[22px] bg-white border-t border-b border-stone-300 justify-start items-center gap-1 tablet:gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
              How often should I use this product?
            </div>
            <button className="cursor-pointer" >
              <GrFormAdd
                onClick={() => setProductFAQ('How often should I use this product?')} 
                className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
              />
            </button>
          </div>
          { matchedFAQ.map((faq) => (
                <div className={`${productFAQ === 'How often should I use this product?' ? 'visible':'hidden' } self-stretch h-[250px] tablet:h-[236px] px-2 tablet:px-4 py-4 tablet:py-6 bg-white border-t border-b border-stone-300 flex-col justify-start tablet:justify-center items-start gap-2 tablet:gap-4 flex`}>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-pink-800 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
                      {productFAQ}
                    </div>
                    <div className="cursor-pointer" >
                      <GrFormSubtract 
                        onClick={() => setProductFAQ('')} 
                        className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                      />
                    </div>
                  </div>
                  
                  <div className="self-stretch px-2 tablet:px-4 py-2 h-[500px] justify-start items-start gap-2 inline-flex">
                    <div className="w-72 tablet:w-[1160px] text-neutral-950 text-xs tablet:text-lg font-normal capitalize leading-4 tablet:leading-loose"> 
                      {faq.answer}  
                    </div>
                  </div>
                </div>
              ))
            }

          <div className="self-stretch px-2 tablet:px-4 py-4 tablet:py-[22px] bg-white border-t border-b border-stone-300 justify-start items-center gap-1 tablet:gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
              Can this product be used during pregnancy?
            </div>
            <button className="cursor-pointer" >
              <GrFormAdd
                onClick={() => setProductFAQ('Can this product be used during pregnancy?')} 
                className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
              />
            </button>
          </div>
          { matchedFAQ.map((faq) => (
                <div className={`${productFAQ === 'Can this product be used during pregnancy?' ? 'visible':'hidden' } self-stretch h-[250px] tablet:h-[236px] px-2 tablet:px-4 py-4 tablet:py-6 bg-white border-t border-b border-stone-300 flex-col justify-start tablet:justify-center items-start gap-2 tablet:gap-4 flex`}>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-pink-800 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
                      {productFAQ}
                    </div>
                    <div className="cursor-pointer" >
                      <GrFormSubtract 
                        onClick={() => setProductFAQ('')} 
                        className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                      />
                    </div>
                  </div>
                  
                  <div className="self-stretch px-2 tablet:px-4 py-2 h-[500px] justify-start items-start gap-2 inline-flex">
                    <div className="w-72 tablet:w-[1160px] text-neutral-950 text-xs tablet:text-lg font-normal capitalize leading-4 tablet:leading-loose"> 
                      {faq.answer}  
                    </div>
                  </div>
                </div>
              ))
            }

          <div className="self-stretch px-2 tablet:px-4 py-4 tablet:py-[22px] bg-white border-t border-b border-stone-300 justify-start items-center gap-1 tablet:gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
            How should I store this product?
            </div>
            <button className="cursor-pointer" >
              <GrFormAdd
                onClick={() => setProductFAQ('How should I store this product?')} 
                className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
              />
            </button>
          </div>
          { matchedFAQ.map((faq) => (
                <div className={`${productFAQ === 'How should I store this product?' ? 'visible':'hidden' } self-stretch h-[250px] tablet:h-[236px] px-2 tablet:px-4 py-4 tablet:py-6 bg-white border-t border-b border-stone-300 flex-col justify-start tablet:justify-center items-start gap-2 tablet:gap-4 flex`}>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-pink-800 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
                      {productFAQ}
                    </div>
                    <div className="cursor-pointer" >
                      <GrFormSubtract 
                        onClick={() => setProductFAQ('')} 
                        className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                      />
                    </div>
                  </div>
                  
                  <div className="self-stretch px-2 tablet:px-4 py-2 h-[500px] justify-start items-start gap-2 inline-flex">
                    <div className="w-72 tablet:w-[1160px] text-neutral-950 text-xs tablet:text-lg font-normal capitalize leading-4 tablet:leading-loose"> 
                      {faq.answer}  
                    </div>
                  </div>
                </div>
              ))
            }

          <div className="self-stretch px-2 tablet:px-4 py-4 tablet:py-[22px] bg-white border-t border-b border-stone-300 justify-start items-center gap-1 tablet:gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
              How long will it take to see results from using this product?
            </div>
            <button className="cursor-pointer" >
              <GrFormAdd
                onClick={() => setProductFAQ('How long will it take to see results from using this product?')} 
                className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
              />
            </button>
          </div>
          { matchedFAQ.map((faq) => (
                <div className={`${productFAQ === 'How long will it take to see results from using this product?' ? 'visible':'hidden' } self-stretch h-[250px] tablet:h-[236px] px-2 tablet:px-4 py-4 tablet:py-6 bg-white border-t border-b border-stone-300 flex-col justify-start tablet:justify-center items-start gap-2 tablet:gap-4 flex`}>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-pink-800 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
                      {productFAQ}
                    </div>
                    <div className="cursor-pointer" >
                      <GrFormSubtract 
                        onClick={() => setProductFAQ('')} 
                        className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                      />
                    </div>
                  </div>
                  
                  <div className="self-stretch px-2 tablet:px-4 py-2 h-[500px] justify-start items-start gap-2 inline-flex">
                    <div className="w-72 tablet:w-[1160px] text-neutral-950 text-xs tablet:text-lg font-normal capitalize leading-4 tablet:leading-loose"> 
                      {faq.answer}  
                    </div>
                  </div>
                </div>
              ))
            }

          <div className="self-stretch px-2 tablet:px-4 py-4 tablet:py-[22px] bg-white border-t border-b border-stone-300 justify-start items-center gap-1 tablet:gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
              Can this product be used in conjunction with other skincare products?
            </div>
            <button className="cursor-pointer" >
              <GrFormAdd
                onClick={() => setProductFAQ('Can this product be used in conjunction with other skincare products?')} 
                className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
              />
            </button>
          </div>
          { matchedFAQ.map((faq) => (
                <div className={`${productFAQ === 'Can this product be used in conjunction with other skincare products?' ? 'visible':'hidden' } self-stretch h-[250px] tablet:h-[236px] px-2 tablet:px-4 py-4 tablet:py-6 bg-white border-t border-b border-stone-300 flex-col justify-start tablet:justify-center items-start gap-2 tablet:gap-4 flex`}>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-pink-800 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
                      {productFAQ}
                    </div>
                    <div className="cursor-pointer" >
                      <GrFormSubtract 
                        onClick={() => setProductFAQ('')} 
                        className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                      />
                    </div>
                  </div>
                  
                  <div className="self-stretch px-2 tablet:px-4 py-2 h-[500px] justify-start items-start gap-2 inline-flex">
                    <div className="w-72 tablet:w-[1160px] text-neutral-950 text-xs tablet:text-lg font-normal capitalize leading-4 tablet:leading-loose"> 
                      {faq.answer}  
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
      {/* Frequently Asked Questions end */}

      {/* Recommended skincare routine DESKTOP start */}
      <SkinCareRecommended/>
      {/* recommended skincare routine DESKTOP end */}

      {/* recommended skincare routine MOBILE end */}
      <div className="tablet:hidden w-80 mx-auto h-[55px] text-center text-neutral-950 text-xl font-bold leading-7">Recommended Skincare Routine</div>
        {/* <div className="w-80 mx-auto h-[345px] justify-start items-start gap-4 inline-flex tablet:hidden"> */}
        <Carousel
          responsive={responsive}
          containerClass=""
          itemClass="px-[10px]"
          arrows={false}
        >

          { products.map((item) => (
            <div
            key={item.id} 
              className="w-[152px] pb-2 bg-white border border-neutral-200 flex-col justify-start items-center gap-2 inline-flex"
            >
              <Image 
                src={item.thumbnail}
                width={152}
                height={202}
                alt={item.title} 
                className="self-stretch h-[202px]" 
              />
              <div className="self-stretch h-[127px] px-2 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-10 text-pink-800 text-sm font-semibold leading-tight">{ item.title }</div>
                  <div className="self-stretch h-[51px] text-neutral-950 text-xs font-normal leading-none">{ item.smallDescription }</div>
                  <div className="self-stretch text-neutral-950 text-sm font-semibold leading-tight">$<span>{ item.price }</span></div>
                </div>
              </div>

          ))
          }
        </Carousel>
        {/* </div> */}
        {/* recommended skincare routine MOBILE end */}
          
      {/* video of product start */}

        <div className="w-[320px] mx-auto tablet:w-[1223.11px] h-[202px] tablet:h-[688px] relative mt-[32px]">
          <img
            src="/productpage/video.png" 
            className="w-[359.81px] tablet:w-[1223.11px] h-[202.39px] tablet:h-[688px] left-0 top-0 absolute bg-black bg-opacity-25 backdrop-blur-[17px] tablet:backdrop-blur-[60px]"
          />
          <div className="w-[120px] h-[120px] left-[552px] top-[284px] absolute">
              <div className="w-[120px] h-[120px] left-0 top-0 absolute rounded-full border-8 border-neutral-200"></div>
          </div>
        </div>

      {/* video of product end */}
      
      {/* you may also like DESKTOP start*/}
      <YouMayLike/>
      {/* you may also like DESKTOP end*/}

      {/* you may also like MOBILE start*/}
      <div className="w-[360px] h-[445px] relative bg-red-50 mt-[32px] tablet:hidden">
      <div className="tablet:hidden w-80 mx-auto h-[55px] text-center text-neutral-950 text-xl font-bold leading-7 mb-[16px] mt-[32px]">You May Also Like</div>
        {/* <div className="w-80 mx-auto h-[345px] justify-start items-start gap-4 inline-flex tablet:hidden"> */}
        <Carousel
          responsive={responsive}
          containerClass=""
          itemClass="px-[20px]"
          arrows={false}
        >

          { products.map((item) => (
            <div
            key={item.id} 
              className="w-[152px] pb-2 bg-white border border-neutral-200 flex-col justify-start items-center gap-2 inline-flex"
            >
              <Image 
                src={item.thumbnail}
                width={152}
                height={202}
                alt={item.title} 
                className="self-stretch h-[202px]" 
              />
              <div className="self-stretch h-[127px] px-2 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-10 text-pink-800 text-sm font-semibold leading-tight">{ item.title }</div>
                  <div className="self-stretch h-[51px] text-neutral-950 text-xs font-normal leading-none">{ item.smallDescription }</div>
                  <div className="self-stretch text-neutral-950 text-sm font-semibold leading-tight">$<span>{ item.price }</span></div>
                </div>
              </div>

          ))
          }
        </Carousel>
      </div>
        {/* you may also like MOBILE end*/}


    </Wrapper>
  )
}

export default ProductDetails