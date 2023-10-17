import React from 'react'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'
import { ProductDetailsDesktopProps } from './ProductDetailsDesktop'


const ProductDetailsMobile:React.FC<ProductDetailsDesktopProps>  = ({
  detailsLabel,
  setDetailsLabel,
  matchedDetails,
  showLess,
  setShowLess
})=> {
  return (
    <section className="w-80 h-[450px] flex-col justify-start items-start inline-flex mt-[250px] px-[20px] mb-[32px] tablet:hidden">
      <div>
        <div className={`${detailsLabel === 'Product Details' ? 'hidden':'visible'} w-80 px-2 py-4 bg-white border-t border-b border-stone-300 justify-start items-center gap-1 inline-flex`}>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight">Product Details</div>
            <div >
              <GrFormAdd 
                className="w-4 h-4 relative"
                onClick={() => setDetailsLabel('Product Details')}
              />
            </div>
        </div>
        { matchedDetails.map((item) => (
            <div className={`${detailsLabel === 'Product Details' ? 'visible':'hidden'} w-80  h-full px-2 py-4 bg-white border-t border-b border-stone-300 flex-col justify-start items-start gap-2 flex`}>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-pink-800 text-sm font-semibold leading-tight">{item.label}</div>
                <div>
                  <GrFormSubtract 
                    className="w-4 h-4 relative"
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

      <div>
        <div className={`${detailsLabel === 'How To Apply' ? 'hidden':'visible'} w-80 px-2 py-4 bg-white border-t border-b border-stone-300 justify-start items-center gap-1 inline-flex`}>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight">How To Apply</div>
            <div >
              <GrFormAdd 
                className="w-4 h-4 relative"
                onClick={() => setDetailsLabel('How To Apply')}
              />
            </div>
        </div>
        { matchedDetails.map((item) => (
            <div className={`${detailsLabel === 'How To Apply' ? 'visible':'hidden'} w-80  h-full px-2 py-4 bg-white border-t border-b border-stone-300 flex-col justify-start items-start gap-2 flex`}>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-pink-800 text-sm font-semibold leading-tight">{item.label}</div>
                <div >
                  <GrFormSubtract 
                    className="w-4 h-4 relative"
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

      <div>
        <div className={`${detailsLabel === 'Ingredient' ? 'hidden':'visible'} w-80 px-2 py-4 bg-white border-t border-b border-stone-300 justify-start items-center gap-1 inline-flex`}>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight">Ingredient</div>
            <div >
              <GrFormAdd 
                className="w-4 h-4 relative"
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
                    className="w-4 h-4 relative"
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
      
      <div>
        <div className={`${detailsLabel === 'What Makes It Advance' ? 'hidden':'visible'} w-80 px-2 py-4 bg-white border-t border-b border-stone-300 justify-start items-center gap-1 inline-flex`}>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight">What Makes It Advance</div>
            <div >
              <GrFormAdd 
                className="w-4 h-4 relative"
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
                    className="w-4 h-4 relative"
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

      <div>
        <div className={`${detailsLabel === 'Product Specification' ? 'hidden':'visible'} w-80 px-2 py-4 bg-white border-t border-b border-stone-300 justify-start items-center gap-1 inline-flex`}>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight">Product Specification</div>
            <div >
              <GrFormAdd 
                className="w-4 h-4 relative"
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
                    className="w-4 h-4 relative"
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
  </section>
  )
}

export default ProductDetailsMobile