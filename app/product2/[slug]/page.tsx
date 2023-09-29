"use client"
import Wrapper from "components/Wrapper"
import BranchStock from "components/products/BranchStock"
import { useState } from "react"

const ProductDetails = () => {
  
  const [branchStockIsOPen, setBranchStockIsOPen] = useState<boolean>(false)
  
  return (
    <Wrapper className="h-[3855px] overflow-y-auto pb-[52px]">
      <div className="justify-start items-center inline-flex px-[108px]">
        <div className="w-[46px] py-2 justify-start items-center gap-2 flex">
          <div className="text-zinc-600 text-base font-normal capitalize leading-7">Home</div>
        </div>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.07617 13.9866L5.25617 15.1666L11.9228 8.49992L5.25617 1.83325L4.07617 3.01325L9.56284 8.49992L4.07617 13.9866Z" fill="#868686"/>
        </svg>
        <div className="w-[134px] py-2 justify-start items-center gap-2 flex flex-row">
          <div className="text-neutral-950 text-base font-bold capitalize leading-snug">women skincare</div>
        </div>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.07617 13.9866L5.25617 15.1666L11.9228 8.49992L5.25617 1.83325L4.07617 3.01325L9.56284 8.49992L4.07617 13.9866Z" fill="#868686"/>
        </svg>
        <div className="w-[234px] py-2 justify-start items-center gap-2 flex">
          <div className="text-neutral-950 text-base font-bold capitalize leading-snug">Breadcrumbs elements</div>
        </div>
      </div>

      {/* product images and detail page start*/}
      <div className='mt-8px flex gap-[24px] px-[108px] relative'>
        {/* product small images  */}
        <div className='flex flex-col gap-[24px]'>
          <img className="w-20 h-[78px]" src="https://via.placeholder.com/80x78" />
          <img className="w-20 h-[78px]" src="https://via.placeholder.com/80x78" />
          <img className="w-20 h-[78px]" src="https://via.placeholder.com/80x78" />
          <img className="w-20 h-[78px]" src="https://via.placeholder.com/80x78" />
          <img className="w-20 h-[78px]" src="https://via.placeholder.com/80x78" />
          <img className="w-20 h-[78px]" src="https://via.placeholder.com/80x78" />
        </div>
        {/* product large image */}
        <div>
          <img className="w-[704px] h-[605px]" src="https://via.placeholder.com/704x605" />
        </div>
        {/* product details */}
        <div className="w-[392px] h-[282px] flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch text-pink-800 text-[32px] font-bold capitalize leading-[44.80px]">beautya prestige lA micro-huile de rose advanced serum</div>
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-[51px] flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-neutral-950 text-base font-bold capitalize leading-snug">Anti-aging face serum</div>
              <div className="self-stretch pr-2 justify-start items-center gap-2 inline-flex relative">
                <div className="text-zinc-600 text-sm font-normal capitalize leading-[25.20px]">all types of skin</div>
                <div className="opacity-[0.6]">|</div>
                <div className="text-zinc-600 text-sm font-normal capitalize leading-[25.20px]">am or pm</div>
                <div className=" opacity-[0.6]">|</div>
                <div className="text-zinc-600 text-sm font-normal capitalize leading-[25.20px]">brightening</div>
              </div>
            </div>
            <div className="self-stretch text-zinc-500 text-base font-bold capitalize leading-snug">Formulated with 92% natural-origin ingredients</div>
          </div>
          <div className="self-stretch text-neutral-950 text-2xl font-bold capitalize leading-[33.60px]">$520.00</div>
          
          <div className="w-[392px] h-14 px-4 py-2 justify-between items-center inline-flex border-b border-zinc-600">
            <div className="text-zinc-600 text-xl font-normal capitalize leading-9">30 mL</div>
            <div className="w-[263px] text-right text-zinc-600 text-xl font-normal capitalize leading-9">$520.00</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="#606060"/>
            </svg>
           </div>
          
            {/* check in branch stock button */}
            <button 
              onClick={() => setBranchStockIsOPen((prev) => !prev)}
              className="w-[392px] h-[45px] px-4 py-2 bg-pink-800 justify-center items-center gap-2 inline-flex"
            >
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.5C8.13 2.5 5 5.63 5 9.5C5 14.75 12 22.5 12 22.5C12 22.5 19 14.75 19 9.5C19 5.63 15.87 2.5 12 2.5ZM7 9.5C7 6.74 9.24 4.5 12 4.5C14.76 4.5 17 6.74 17 9.5C17 12.38 14.12 16.69 12 19.38C9.92 16.71 7 12.35 7 9.5Z" fill="white"/>
                <path d="M12 12C13.3807 12 14.5 10.8807 14.5 9.5C14.5 8.11929 13.3807 7 12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 12 12 12Z" fill="white"/>
              </svg>
              <h2 className="text-white text-base font-normal capitalize leading-7">check in branches stock</h2>
               { branchStockIsOPen && <BranchStock setBranchStockIsOPen={setBranchStockIsOPen} branchStockIsOPen={branchStockIsOPen}/>}               
            </button>

            {/* offers */}
            <div className="w-[392px] h-[178px] p-4 bg-red-50 flex-col justify-start items-start gap-4 inline-flex">

                <div className="self-stretch justify-start items-start gap-4 flex">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6.5H17.82C17.93 6.19 18 5.85 18 5.5C18 3.84 16.66 2.5 15 2.5C13.95 2.5 13.04 3.04 12.5 3.85L12 4.52L11.5 3.84C10.96 3.04 10.05 2.5 9 2.5C7.34 2.5 6 3.84 6 5.5C6 5.85 6.07 6.19 6.18 6.5H4C2.89 6.5 2.01 7.39 2.01 8.5L2 19.5C2 20.61 2.89 21.5 4 21.5H20C21.11 21.5 22 20.61 22 19.5V8.5C22 7.39 21.11 6.5 20 6.5ZM15 4.5C15.55 4.5 16 4.95 16 5.5C16 6.05 15.55 6.5 15 6.5C14.45 6.5 14 6.05 14 5.5C14 4.95 14.45 4.5 15 4.5ZM9 4.5C9.55 4.5 10 4.95 10 5.5C10 6.05 9.55 6.5 9 6.5C8.45 6.5 8 6.05 8 5.5C8 4.95 8.45 4.5 9 4.5ZM20 19.5H4V17.5H20V19.5ZM20 14.5H4V8.5H9.08L7 11.33L8.62 12.5L12 7.9L15.38 12.5L17 11.33L14.92 8.5H20V14.5Z" fill="#A10550"/>
                  </svg>
                  <div className="text-rose-900 text-sm font-normal capitalize leading-[25.20px] w-full">receive 2 free samples when you spend $100</div>
                </div>

                
              <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.7871 21.5024L2.99707 11.7124V13.7124C2.99707 14.2424 3.20707 14.7524 3.58707 15.1224L11.3771 22.9124C12.1571 23.6924 13.4271 23.6924 14.2071 22.9124L20.4171 16.7024C21.1971 15.9224 21.1971 14.6524 20.4171 13.8724L12.7871 21.5024Z" fill="#A10550"/>
                  <path d="M11.3771 17.9124C11.7671 18.3024 12.2771 18.5024 12.7871 18.5024C13.2971 18.5024 13.8071 18.3024 14.1971 17.9124L20.4071 11.7024C21.1871 10.9224 21.1871 9.65244 20.4071 8.87244L12.6171 1.08244C12.2471 0.712441 11.7371 0.502441 11.2071 0.502441H4.99707C3.89707 0.502441 2.99707 1.40244 2.99707 2.50244V8.71244C2.99707 9.24244 3.20707 9.75244 3.58707 10.1224L11.3771 17.9124ZM4.99707 2.50244H11.2071L18.9971 10.2924L12.7871 16.5024L4.99707 8.71244V2.50244Z" fill="#A10550"/>
                  <path d="M7.24707 6.00244C7.93743 6.00244 8.49707 5.4428 8.49707 4.75244C8.49707 4.06209 7.93743 3.50244 7.24707 3.50244C6.55671 3.50244 5.99707 4.06209 5.99707 4.75244C5.99707 5.4428 6.55671 6.00244 7.24707 6.00244Z" fill="#A10550"/>
                </svg>
                <div className="grow shrink basis-0 text-rose-900 text-sm font-normal capitalize leading-[25.20px]">receive $2 when you return 5 empty containers</div>
              </div>

              <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 4V11H5.17L4 12.17V4H15ZM16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12V3C17 2.45 16.55 2 16 2ZM21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6Z" fill="#A10550"/>
                </svg>
                <div className="w-[317px] self-stretch justify-start items-center gap-2 flex">
                  <div className="text-rose-900 text-sm font-normal capitalize leading-[25.20px]">receive free 1-2-1 expert advice in branches</div>
                </div>
              </div>

            </div>
        </div>
      </div>
      {/* product images and detail page end*/}

      {/* product details and information */}
      <div className='flex flex-col px-[108px]'>
        <div className="w-[1224px] h-11 border-b border-zinc-600 justify-between items-start inline-flex mt-[32px]">
          <div className="w-[154px] py-2 border-b-2 border-pink-800 justify-start items-center gap-2 flex">
            <div className="text-pink-800 text-xl font-bold leading-7">Product Details</div>
          </div>
          <div className="w-[136px] py-2 justify-start items-center gap-2 flex">
            <div className="text-zinc-600 text-xl font-bold leading-7">How To Apply</div>
          </div>
          <div className="w-[105px] py-2 justify-start items-center gap-2 flex">
            <div className="text-zinc-600 text-xl font-bold leading-7">Ingredient</div>
          </div>
          <div className="w-[235px] py-2 justify-start items-center gap-2 flex">
            <div className="text-zinc-600 text-xl font-bold leading-7">What Makes It Advance</div>
          </div>
          <div className="w-[213px] py-2 justify-start items-center gap-2 flex">
            <div className="text-zinc-600 text-xl font-bold leading-7">Product Specification</div>
          </div>
        </div>

        <div className='flec flex-col gap-0 p-[24px]'>
          <h2 className="w-[1192px] text-pink-800 text-xl font-bold leading-7 mb-[16px]">Product Details</h2>
          <p className="w-[1192px] text-neutral-950 text-lg font-normal capitalize leading-loose mb-2">Beautya's 1st revitalizing serum that concentrates the double power of the Rose de Granville from the stem to the flower to revitalize the skin twice as fast (1) and visibly rejuvenate.<br/>Created after 20 years of research, the 10,000 (2) micro-pearls rich in revitalizing rose micro-nutrients are now completed by the power of the Rose sap. The next-generation, 92% natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum is twice as concentrated,(4) combining the nourishing richness of an oil with the deep penetration of a serum.<br/><br/>From the first application of the serum, the skin appears plumped. In 3 weeks, 2x improvement in the look or feel of skin elasticity.(5) With regular use, skin looks and feels transformed.<br/><br/>As if replenished from within, the skin seems denser and firmer, and wrinkles appear noticeably reduced. As if lifted, facial contours appear enhanced.<br/><br/>Reveal your extraordinary beauty with Beautya Prestige.<br/><br/>(1) Instrumental test, 32 panelists, after 30 min.<br/>(2) In a 30 ml bottle.<br/>(3) Amount calculated based on the ISO 16128-1 and ISO 16128-2 standard. Water percentage included. The remaining 8% of ingredients contribute to the formula’s performance, sensory appeal and stability.<br/>(4) In Rose de Granville micro-nutrients compared to the previous formula.<br/>(5) Clinical assessment by a dermatologist on the evolution of the product’s performance on the skin elasticity, comparison between the effect after 7 days and 28 days on 34 women.</p>
          <div className="w-[150px] h-12 px-4 py-2 justify-center items-center gap-2 inline-flex">
            <div className="text-pink-800 text-base font-normal capitalize leading-7">Read Less</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8852 3.77L16.1152 2L6.11523 12L16.1152 22L17.8852 20.23L9.65523 12L17.8852 3.77Z" fill="#A10550"/>
            </svg>
          </div>          
        </div>

        <div className='flec flex-col gap-0 p-[24px]'>
          <h2 className="w-[1192px] text-pink-800 text-xl font-bold leading-7 mb-[16px]">How To Apply</h2>
          <p className="w-[1192px] text-neutral-950 text-lg font-normal capitalize leading-loose mb-2">step 1: Dispense two to three pumps into the palm of your hand. Then, using the pads of the fingers, apply the serum to the entire face from the centre outwards.step 2: Use gentle pressure to make the serum penetrate deeply..</p>
          <div className="w-[150px] h-12 px-4 py-2 justify-center items-center gap-2 inline-flex">
            <div className="text-pink-800 text-base font-normal capitalize leading-7">Read Less</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.11523 20.23L7.88523 22L17.8852 12L7.88523 2L6.11523 3.77L14.3452 12L6.11523 20.23Z" fill="#A10550"/>
            </svg>
          </div>          
        </div>
        
        <div className='flec flex-col gap-0 p-[24px]'>
          <h2 className="w-[1192px] text-pink-800 text-xl font-bold leading-7 mb-[16px]">Ingredient</h2>
          <p className="w-[1192px] text-neutral-950 text-lg font-normal capitalize leading-loose mb-2">AQUA/WATER/EAU, C12-15 ALKYL BENZOATE, GLYCERYL STEARATE SE, BUTYLENE GLYCOL, GLYCERIN, OLUS OIL/VEGETABLE OIL/HUILE VÉGÉTALE, ISONONYL ISONONANOATE, CETYL ALCOHOL, ETHYLHEXYL PALMITATE, CYCLOPENTASILOXANE, DIMETHICONE, POLYESTER-7, PHENOXYETHANOL, NEOPENTYL GLYCOL DIHEPTANOATE, BUTYROSPERMUM PARKII (SHEA) BUTTER, STEARETH-21, AVENA SATIVA (OAT)... </p>
          <div className="w-[150px] h-12 px-4 py-2 justify-center items-center gap-2 inline-flex">
            <div className="text-pink-800 text-base font-normal capitalize leading-7">Read Less</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.11523 20.23L7.88523 22L17.8852 12L7.88523 2L6.11523 3.77L14.3452 12L6.11523 20.23Z" fill="#A10550"/>
            </svg>
          </div>          
        </div>
        
        <div className='flec flex-col gap-0 p-[24px]'>
          <h2 className="w-[1192px] text-pink-800 text-xl font-bold leading-7 mb-[16px]">What Makes It Advance</h2>
          <p className="w-[1192px] text-neutral-950 text-lg font-normal capitalize leading-loose mb-2">OVER 11 AWARDS WON! BIONYMPH PEPTIDE: peptide blend that helps to condition for smoother, plumper looking skin VITAMINS C & E: work in harmony to BRIGHTEN the look of your complexion and EVEN the appearance of the skin tone...</p>
          <div className="w-[150px] h-12 px-4 py-2 justify-center items-center gap-2 inline-flex">
            <div className="text-pink-800 text-base font-normal capitalize leading-7">Read Less</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.11523 20.23L7.88523 22L17.8852 12L7.88523 2L6.11523 3.77L14.3452 12L6.11523 20.23Z" fill="#A10550"/>
            </svg>
          </div>          
        </div>

        <div className='flec flex-col gap-0 p-[24px]'>
          <h2 className="w-[1192px] text-pink-800 text-xl font-bold leading-7 mb-[16px]">Product Specification</h2>
          <p className="w-[1192px] text-neutral-950 text-lg font-normal capitalize leading-loose mb-2">Product Code-46000701 Key Ingredients-Hyaluronic Acid, Vitamin C Beauty Effect-Brightening...</p>
          <div className="w-[150px] h-12 px-4 py-2 justify-center items-center gap-2 inline-flex">
            <div className="text-pink-800 text-base font-normal capitalize leading-7">Read Less</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.11523 20.23L7.88523 22L17.8852 12L7.88523 2L6.11523 3.77L14.3452 12L6.11523 20.23Z" fill="#A10550"/>
            </svg>
          </div>          
        </div>
      </div>

      {/* promotion */}
      <div className="w-[1440px] h-[488px] px-[108px] py-10 bg-pink-950 flex-col justify-center items-center gap-6 inline-flex">
        <div className="self-stretch justify-start items-start gap-6 inline-flex">
            <img className="w-72 h-72 relative" src="https://via.placeholder.com/288x288" />
            <img className="w-72 h-72 relative" src="https://via.placeholder.com/288x288" />
            <img className="w-72 h-72 relative" src="https://via.placeholder.com/288x288" />
            <img className="w-72 h-72 relative" src="https://via.placeholder.com/288x288" />
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
     
      {/* Frequently Asked Questions start */}
      <div className="px-[108px] mt-[56px]">
        <h2 className="text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] mb-[32px] text-center">Prestige lA micro-huile serum frequently asked questions</h2>
        <div className="w-[1224px] h-[812px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch px-4 py-[22px] bg-white border-t border-b border-stone-300 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-xl font-bold leading-7">What is the best way to use this product?</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0C0C0C"/>
            </svg>
          </div>
          <div className="self-stretch px-4 py-[22px] bg-white border-b border-stone-300 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-xl font-bold leading-7">Can this product be used on all skin types?</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0C0C0C"/>
            </svg>
          </div>
          <div className="self-stretch h-[236px] px-4 py-6 bg-white border-t border-b border-stone-300 flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-pink-800 text-xl font-bold leading-7">Can this product be used on all skin types?</div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 11H18V13H6V11Z" fill="#A10550"/>
              </svg>
            </div>
            <div className="self-stretch px-4 py-2 justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-neutral-950 text-lg font-normal capitalize leading-loose"> Our product is suitable for most skin types, including normal, oily, dry, and combination skin. However, if you have sensitive skin or a skin condition, we recommend performing a patch test before using the product all over your face. Apply a small amount of the product to the inside of your elbow and wait 24 hours to make sure you do not have an allergic reaction or irritation. If you experience any discomfort, discontinue use of the product immediately.</div>
            </div>
          </div>
          <div className="self-stretch px-4 py-[22px] bg-white border-b border-stone-300 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-xl font-bold leading-7">How often should I use this product?</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0C0C0C"/>
            </svg>
          </div>
          <div className="self-stretch px-4 py-[22px] bg-white border-b border-stone-300 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-xl font-bold leading-7">Can this product be used during pregnancy?</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0C0C0C"/>
            </svg>
          </div>
          <div className="self-stretch px-4 py-[22px] bg-white border-b border-stone-300 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-xl font-bold leading-7">How often should I use this product?</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0C0C0C"/>
            </svg>
          </div>
          <div className="self-stretch px-4 py-[22px] bg-white border-b border-stone-300 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-xl font-bold leading-7">How should I store this product?</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0C0C0C"/>
            </svg>
          </div>
          <div className="self-stretch px-4 py-[22px] bg-white border-b border-stone-300 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-xl font-bold leading-7">How long will it take to see results from using this product?</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0C0C0C"/>
            </svg>
          </div>
          <div className="self-stretch px-4 py-[22px] bg-white border-b border-stone-300 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-xl font-bold leading-7">Can this product be used in conjunction with other skincare products?</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0C0C0C"/>
            </svg>
          </div>
        </div>
      </div>
      {/* Frequently Asked Questions end */}

      {/* Recommended skincare routine start */}
      <div className="px-[108px] pt-[56px]">
        <h2 className="text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] mb-[32px] text-center">recommended skincare routine</h2>
        <div className="w-[1224px] h-[560px] justify-center items-center gap-6 inline-flex">
          <div className="w-10 h-10 p-1 bg-white border border-stone-300 justify-center items-center flex">
            {/* Arrow Left */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.333 9.33329L12.6663 16L19.333 22.6666L19.333 9.33329Z" fill="#0C0C0C"/>
            </svg>
          </div>
          <div className="grow shrink basis-0 pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex">
            <img className="self-stretch h-96" src="https://via.placeholder.com/288x384" />
            <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch h-11 text-pink-800 text-base font-bold font-['Open Sans'] capitalize leading-snug">Beautya Capture Total Dreamskin Care & Perfect</div>
              <div className="self-stretch h-11 text-neutral-950 text-xs font-normal font-['Open Sans'] capitalize leading-snug">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</div>
              <div className="self-stretch text-neutral-950 text-lg font-normal font-['Open Sans'] capitalize leading-loose">$76.00</div>
            </div>
          </div>
          <div className="grow shrink basis-0 pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex">
            <img className="self-stretch h-96" src="https://via.placeholder.com/288x384" />
            <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch h-11 text-pink-800 text-base font-bold font-['Open Sans'] capitalize leading-snug">Beautya Capture Total Dreamskin Care & Perfect</div>
              <div className="self-stretch h-11 text-neutral-950 text-xs font-normal font-['Open Sans'] capitalize leading-snug">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</div>
              <div className="self-stretch text-neutral-950 text-lg font-normal font-['Open Sans'] capitalize leading-loose">$76.00</div>
            </div>
          </div>
          <div className="grow shrink basis-0 pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex">
            <img className="self-stretch h-96" src="https://via.placeholder.com/288x384" />
            <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch h-11 text-pink-800 text-base font-bold font-['Open Sans'] capitalize leading-snug">Beautya Capture Total Dreamskin Care & Perfect</div>
              <div className="self-stretch h-11 text-neutral-950 text-xs font-normal font-['Open Sans'] capitalize leading-snug">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</div>
              <div className="self-stretch text-neutral-950 text-lg font-normal font-['Open Sans'] capitalize leading-loose">$76.00</div>
            </div>
          </div>
          <div className="grow shrink basis-0 pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex">
            <img className="self-stretch h-96" src="https://via.placeholder.com/288x384" />
            <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch h-11 text-pink-800 text-base font-bold font-['Open Sans'] capitalize leading-snug">Beautya Capture Total Dreamskin Care & Perfect</div>
              <div className="self-stretch h-11 text-neutral-950 text-xs font-normal font-['Open Sans'] capitalize leading-snug">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</div>
              <div className="self-stretch text-neutral-950 text-lg font-normal font-['Open Sans'] capitalize leading-loose">$76.00</div>
            </div>
          </div>
          <div className="w-10 h-10 p-1 bg-white border border-stone-300 justify-center items-center flex">
            {/* Arrow Right */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6663 22.6667L19.333 16.0001L12.6663 9.33342L12.6663 22.6667Z" fill="#0C0C0C"/>
            </svg>
          </div>
      </div>
      {/* recommended skincare routine end */}

      {/* video of product start */}
      <div className="w-[1223.11px] h-[688px] relative my-[56px]">
        <div className="w-[1223.11px] h-[688px] left-0 top-0 absolute bg-black bg-opacity-25 backdrop-blur-[60px]"></div>
        <div className="w-[120px] h-[120px] left-[552px] top-[284px] absolute">
          <div className="w-[120px] h-[120px] left-0 top-0 absolute rounded-full border-8 border-neutral-200"></div>
        </div>
      </div>
      {/* video of product end */}

      

      </div>
      {/* you may also like start */}
      <div className="w-[1440px] h-[704px] pt-[38px] pb-14 bg-red-50 flex-col justify-start items-center gap-4 inline-flex">
        <div className="px-[108px]">
          <h2 className="text-neutral-950 text-2xl font-bold font-['Open Sans'] capitalize leading-[33.60px] text-center mb-[16px]">you may also like</h2>
          <div className="self-stretch justify-center items-center gap-6 inline-flex">
            <div className="w-10 h-10 p-1 bg-white border border-stone-300 justify-center items-center flex">
              {/* Arrow Left */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.333 9.33329L12.6663 16L19.333 22.6666L19.333 9.33329Z" fill="#0C0C0C"/>
              </svg>
            </div>
            <div className="w-72 pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex">
              <img className="self-stretch h-96" src="https://via.placeholder.com/288x384" />
              <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
                <div className="self-stretch h-11 text-pink-800 text-base font-bold font-['Open Sans'] capitalize leading-snug">Beautya Capture Total Dreamskin Care & Perfect</div>
                <div className="self-stretch h-11 text-neutral-950 text-xs font-normal font-['Open Sans'] capitalize leading-snug">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</div>
                <div className="self-stretch text-neutral-950 text-lg font-normal font-['Open Sans'] capitalize leading-loose">$76.00</div>
              </div>
            </div>
            <div className="w-72 pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex">
              <img className="self-stretch h-96" src="https://via.placeholder.com/288x384" />
              <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
                <div className="self-stretch h-11 text-pink-800 text-base font-bold font-['Open Sans'] capitalize leading-snug">Beautya Capture Total Dreamskin Care & Perfect</div>
                <div className="self-stretch h-11 text-neutral-950 text-xs font-normal font-['Open Sans'] capitalize leading-snug">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</div>
                <div className="self-stretch text-neutral-950 text-lg font-normal font-['Open Sans'] capitalize leading-loose">$76.00</div>
              </div>
            </div>
            <div className="w-72 pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex">
              <img className="self-stretch h-96" src="https://via.placeholder.com/288x384" />
              <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
                <div className="self-stretch h-11 text-pink-800 text-base font-bold font-['Open Sans'] capitalize leading-snug">Beautya Capture Total Dreamskin Care & Perfect</div>
                <div className="self-stretch h-11 text-neutral-950 text-xs font-normal font-['Open Sans'] capitalize leading-snug">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</div>
                <div className="self-stretch text-neutral-950 text-lg font-normal font-['Open Sans'] capitalize leading-loose">$76.00</div>
              </div>
            </div>
            <div className="w-72 h-[560px] pb-6 bg-white border border-neutral-200 flex-col justify-start items-center gap-4 inline-flex">
              <img className="self-stretch h-96" src="https://via.placeholder.com/288x384" />
              <div className="self-stretch h-[136px] px-4 flex-col justify-center items-start gap-2 flex">
                <div className="self-stretch h-11 text-pink-800 text-base font-bold font-['Open Sans'] capitalize leading-snug">Beautya Capture Total Dreamskin Care & Perfect</div>
                <div className="self-stretch h-11 text-neutral-950 text-xs font-normal font-['Open Sans'] capitalize leading-snug">Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration</div>
                <div className="self-stretch text-neutral-950 text-lg font-normal font-['Open Sans'] capitalize leading-loose">$76.00</div>
              </div>
            </div>
            <div className="w-10 h-10 p-1 bg-white border border-stone-300 justify-center items-center flex">
              {/* Arrow Right */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6663 22.6667L19.333 16.0001L12.6663 9.33342L12.6663 22.6667Z" fill="#0C0C0C"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* you may also like end */}
    </Wrapper>
  )
}

export default ProductDetails