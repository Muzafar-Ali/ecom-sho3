import React from 'react'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'
import { ProductDetailsDesktopProps } from './ProductDetailsDesktop'
import { detailsData } from 'lib/productData/detailsData'


const ProductDetailsMobile:React.FC<ProductDetailsDesktopProps>  = ({
  detailsLabel,
  setDetailsLabel,
  matchedDetails,
  showLess,
  setShowLess
})=> {
  return (
    <section className="w-screen h-auto flex-col justify-start items-center inline-flex mt-[32px] laptop:hidden">
      <div className='w-screen px-[20px] tablet:px-[54px]'>
        {
          detailsData.map((item, index) =>(
            <div key={index}>
              <div className={`${detailsLabel === item.label ? 'hidden':'visible'} w-full px-2 py-4 bg-white border-t border-b border-stone-300 justify-start items-center gap-1 inline-flex`}>
                <div className="grow shrink basis-0 text-neutral-950 text-sm font-semibold leading-tight">{item.label}</div>
                  <div >
                    <GrFormAdd 
                      className="w-4 h-4 relative"
                      onClick={() => setDetailsLabel(item.label)}
                      />
                  </div>
              </div>

                <div className={`${detailsLabel === item.label ? 'visible' : 'hidden'} h-auto px-2 py-4 bg-white border-t border-b border-stone-300 flex-col justify-start items-start gap-2 flex`}>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-pink-800 text-sm font-semibold leading-tight">{item.label}</div>
                    <div>
                      <GrFormSubtract 
                        className="w-4 h-4 relative"
                        onClick={() => setDetailsLabel('')}
                      />
                    </div>
                  </div>
                  
                  <div className={`self-stretch  justify-start py-4 px-2 items-start gap-2 inline-flex`}>
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
            </div>))
        }
      </div>      
    </section>
  )
}

export default ProductDetailsMobile