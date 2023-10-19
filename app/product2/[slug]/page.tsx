"use client"
import Wrapper from "components/Wrapper"
import BranchStock from "components/product2/BranchStock"
import ProductDetailsDesktop from "components/product2/ProductDetails/ProductDetailsDesktop"
import ProductDetailsMobile from "components/product2/ProductDetails/ProductDetailsMobile"
import PromoDesktop from "components/product2/Promo/PromoDesktop"
import PromoMobile from "components/product2/Promo/PromoMobile"
import SkinCareRecommended from "components/product2/SkinCareRecommended/SkinCareRecommendedDesktop"
import SkinCareRecommendedMobile from "components/product2/SkinCareRecommended/SkinCareRecommendedMobile"
import YouMayLikeDesktop from "components/product2/YouMayLike/YouMayLikeDesktop"
import YouMayLikeMobile from "components/product2/YouMayLike/YouMayLikeMobile"
import { detailsData } from "lib/productData/detailsData"
import { faq } from "lib/productData/faq"
import { products } from "lib/productData/productdata"
import Image from "next/image"
import { useState } from "react"
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'
import { MdOutlineLocationOn } from 'react-icons/md'

import "react-multi-carousel/lib/styles.css"

const ProductDetails = () => {
  
  const [branchStockIsOPen, setBranchStockIsOPen] = useState<boolean>(false);
  const [largeImage, setLargeImage] = useState<string>();
  const [detailsLabel, setDetailsLabel] = useState<string>('Product Details');
  const [productFAQ, setProductFAQ] = useState<string>('Can this product be used on all skin types?')
  const [showLess, setShowLess] = useState(true)
  const [isSelected, setIsSelected] = useState<string>();
  
  const matchedDetails = detailsData.filter((data) => data?.label.toLowerCase() === detailsLabel?.toLowerCase());
  const matchedFAQ = faq.filter((faq) => faq?.question.toLowerCase() === productFAQ?.toLowerCase());
      // Define responsive settings for the Carousel component
  const responsive = {

    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },

  };
  
  return (
    <Wrapper className="h-auto pb-[52px] overflow-y-auto ">

      {/* product images and detail page start*/}
      <section className='mt-[58px] flex flex-row max-laptop:flex-col gap-[24px] px-[20px] tablet:px-[54px] laptop-lg:px-[108px] relative w-full'>

        {/* product small images  */}
        <section className="flex flex-col laptop:flex-row gap-2 tablet:gap-3 laptop:gap-6">
          <div className='inline-flex flex-row laptop:flex-col justify-start items-start gap-2 tablet:gap-6 w-full laptop:w-[120px] laptop-lg:w-[80px] h-auto cursor-pointer max-laptop:flex-nowrap'>
            { products[0]?.images.map((image, index) => (
                <div
                  key={index} 
                  onMouseEnter={() => {
                    setLargeImage(image)
                    setIsSelected(image)
                  }}
                  className={`${isSelected === image ? 'border-[3px] border-pink-300': ''}`}
                >
                  <Image 
                    src={image}
                    width={68}
                    height={78}
                    alt={''} 
                    className="w-[68px] tablet:w-[80px] h-[68px] tablet:h-[78px]" 
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
              className="w-80 mobile-l:w-full laptop:w-[704px] h-80 tablet:h-[605px]"
            />
          </div>

        </section>
        
        {/* product details on right side start */}
        <section className="inline-flex flex-col w-full laptop:w-[392px]">
          {/* product title, product description, price start  */}
          <div className="inline-flex flex-col gap-[16px]">
            {/* product title */}
            <div className="self-stretch text-pink-800 text-2xl tablet:text-[32px] font-bold capitalize leading-[33.60px]">
              { products[0]?.title }
            </div>
            {/* description */}
            
            <div className="inline-flex flex-col gap-2">
              <div className="self-stretch text-neutral-950 text-sm tablet:text-base font-semibold tablet:font-bold capitalize leading-tight tablet:leading-snug">Anti-aging face serum</div>

              <div className="self-stretch pr-2 text-xs font-normal tablet:text-sm capitalize justify-start items-center gap-2 inline-flex relative">
                <div className="text-zinc-600 leading-[25.20px]">all types of skin</div>
                <div className="opacity-[0.6]">|</div>
                <div className="text-zinc-600 leading-[25.20px]">am or pm</div>
                <div className=" opacity-[0.6]">|</div>
                <div className="text-zinc-600 leading-[25.20px]">brightening</div>
              </div>

              <div className="self-stretch text-zinc-500 text-sm tablet:text-base font-semibold tablet:font-bold capitalize leading-tight tablet:leading-snug ">Formulated with 92% natural-origin ingredients</div>
            </div>

            {/* price */}
            <div className="self-stretch text-neutral-950 text-xl tablet:text-2xl font-bold capitalize leading-7 tablet:leading-[33.60px]">
              $<span>{ products[0]?.price }</span>
            </div>

            {/* price select start */}
            <div className=" w-full laptop:w-[392px] h-auto tablet:h-14 px-4 py-2 justify-between items-center inline-flex border-b border-zinc-600">
              <div className="text-zinc-600 text-xs mobile-m:text-sm tablet:text-xl font-normal capitalize leading-[25.20px] tablet:leading-9 w-[57px] h-auto tablet:h-[36px]">30 mL</div>
              <div className=" inline-flex items-center justify-between gap-2 tablet:gap-3">
                <div className="laptop:w-[263px] h-auto tablet:h-[36px] text-right text-zinc-600 text-sm tablet:text-xl font-normal capitalize leading-[25.20px] tablet:leading-9">$520.00</div>
                <button className="w-6 h-6 max-mobile-l:pl-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="#606060"/>
                  </svg>
                </button>
              </div>
            </div>
            {/* price select end */}
            
            {/* check in branch stock button */}
            <button 
              onClick={() => setBranchStockIsOPen((prev) => !prev)}
              className="h-[45px] px-4 py-2 bg-pink-800 justify-center items-center gap-2 inline-flex mt-[6px]"
            >
              <MdOutlineLocationOn className="w-4 tablet:w-6 h-4 tablet:h-6 text-white"/>
              <h2 className="text-white text-sm tablet:text-base font-normal capitalize leading-normal tablet:leading-7">check in branches stock</h2>
                { branchStockIsOPen && <BranchStock setBranchStockIsOPen={setBranchStockIsOPen} branchStockIsOPen={branchStockIsOPen}/>}               
            </button>

            {/* value proposition start */}
            <div className="h-autow w-full p-4 mt-[16px] bg-red-50 flex-col justify-start items-start gap-4 inline-flex">

              <div className="self-stretch justify-start items-center gap-4 flex">
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
            {/* value proposition end */}

          </div>
          {/* name, product description, price end */}
        </section>
        {/* product details on right side end */}
      </section>
      {/* product images and detail page end*/}

      {/* product details and information Desktop */}
      <ProductDetailsDesktop
        detailsLabel={detailsLabel}
        setDetailsLabel={setDetailsLabel}
        matchedDetails={matchedDetails}
        showLess={showLess}
        setShowLess={setShowLess}
      />

      {/* product details and information Mobile */}
      <div className="w-full">
        <ProductDetailsMobile
          detailsLabel={detailsLabel}
          setDetailsLabel={setDetailsLabel}
          matchedDetails={matchedDetails}
          showLess={showLess}
          setShowLess={setShowLess}
        />
      </div>

      {/* promo 4 images of 288 x 288  Desktop */}
      <PromoDesktop/>

      {/* promo 4 images of 288 x 288  Mobile */}
      {/* <PromoMobile/> */}

      {/* Frequently Asked Questions FAQ start */}
      <section className="w-full px-[20px] tablet:px-[54px] laptop-lg:px-[108px] mt-[56px] inline-flex flex-col">
        
        <div className="text-neutral-950 text-xl tablet:text-2xl font-bold capitalize leading-7 tablet:leading-[33.60px] text-center w-full pb-[16px]">
          <span>{products[0]?.title}</span> frequently asked questions
        </div>
        
        { faq.map((item, index) => (
          <div className="w-full h-auto flex-col justify-start items-start inline-flex"> 

            <div className={`${productFAQ === item.question ? 'hidden':'visible' } w-full self-stretch px-2 tablet:px-4 py-4 tablet:py-[22px] border-t border-b border-stone-300 justify-start items-center gap-1 tablet:gap-2 inline-flex`}>
              <div className="w-full grow shrink basis-0 text-neutral-950 text-sm tablet:text-xl font-semibold tablet:font-bold leading-tight tablet:leading-7">
                {item.question}
              </div>
              <button className="cursor-pointer" >
                <GrFormAdd
                onClick={() => setProductFAQ(item.question)} 
                className="w-4 tablet:w-6 h-4 tablet:h-6 relative"
                />
              </button>
            </div>

            <div className="w-full">
              <div className={`${productFAQ === item.question ? 'visible':'hidden' } w-full self-stretch h-auto tablet:h-[236px] px-2 tablet:px-4 py-4 tablet:py-6 bg-white border-t border-b border-stone-300 flex-col justify-start tablet:justify-center items-start gap-2 tablet:gap-4 flex`}>
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
                
                <div className="self-stretch px-2 tablet:px-4 py-2 h-auto justify-start items-start gap-2 inline-flex">
                  <div className=" text-neutral-950 text-xs tablet:text-base font-normal capitalize leading-4 tablet:leading-7 "> 
                    {item.answer}  
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* Frequently Asked Questions end */}

      {/* Recommended skincare routine DESKTOP */}
      <SkinCareRecommended/>

      {/* recommended skincare routine MOBILE */}
      <SkinCareRecommendedMobile
        products={products}
      />
          
      {/* video of product start */}
      <div className="w-screen laptop:w-[1223.11px] mx-auto h-auto tablet:h-[688px] relative mt-[32px]">
        <img
          src="/productpage/video.png" 
          className=" w-screen laptop:w-[1223.11px] h-auto tablet:h-[688px] bg-black bg-opacity-25 backdrop-blur-[60px] object-cover"
        />
        {/* this tag will be removed  */}
        <div className="absolute top-20 left-20 tablet:top-[200px] tablet:left-[200px] text-green-500 z-10 text-2xl tablet:text-6xl">This is video</div>
      
      </div>
      {/* video of product end */}
        
      {/* you may also like DESKTOP */}
      <YouMayLikeDesktop/>

      {/* you may also like MOBILE start*/}
      < YouMayLikeMobile
        products={products}
      />

    </Wrapper>
  )
}

export default ProductDetails