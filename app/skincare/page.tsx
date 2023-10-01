import Wrapper from 'components/Wrapper'
import ProductCard from 'components/products/ProductCard'
import { products } from 'lib/productData/productdata'
import Image from 'next/image'


const Products = () => {
  return (
    <Wrapper className='h-[3855px] overflow-y-auto'>
  
     {/* header tags start */}
      <div>
        <div className="left-[20px] md:left-[108px] top-0 absolute justify-start items-center inline-flex w-[249px] h-[33px]">
          <div className="md:w-[46px] py-2 justify-start items-start md:items-center gap-2 flex">
            <div className="text-zinc-600 text-xs md:text-base font-normal capitalize leading-none md:leading-7">Home</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.07617 13.9866L5.25617 15.1666L11.9228 8.49992L5.25617 1.83325L4.07617 3.01325L9.56284 8.49992L4.07617 13.9866Z" fill="#868686"/>
          </svg>
          <div className="md:w-[134px] py-2 justify-start items-start md:items-center gap-2 flex">
            <div className="text-neutral-950 text-xs md:text-base font-semibold md:font-bold capitalize tracking-tight leading-snug">women skincare</div>
          </div>
        </div>
        {/* header tags end*/}


        {/* sort filter on right side start */}
        <div className="w-72 left-[1094px] top-[124px] absolute bg-white border border-neutral-200 justify-start items-start inline-flex max-laptop:hidden">
          <div className="grow shrink basis-0 h-10 px-4 py-2 justify-start items-center gap-2 flex">
            <div className="w-56 h-[25px] justify-center items-center flex">
              <div className="grow shrink basis-0">
                <span className="text-neutral-950 text-base font-bold capitalize leading-snug">sort</span>
                <span className="text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">: </span>
                <span className="text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">recommended</span></div>
            </div>
            <img
              src='productpage/arrow_drop_down-balck.svg'  
              className="w-6 h-6 relative" 
              />
          </div>
        </div>
        
        <div className="left-[20px] md:left-[108px] top-[53px] absolute justify-start items-baseline gap-1 md:gap-2 inline-flex w-[238px] md:w-[330px] h-[34px]">
          <div className="text-neutral-950 md:text-[32px] font-semibold md:font-bold capitalize leading-[33.60px] md:leading-[44.80px]">Women skincare </div>
          <div className="text-zinc-600 text-sm md:text-xl font-semibold md:font-bold leading-tight md:leading-7">(216)</div>
        </div>
      </div>
      {/* sort filter on right side end */}

      {/* sort and filter small screen start */}
      <div className="w-80 h-10 justify-start items-start gap-4 inline-flex absolute top-20 left-[20px] laptop:hidden">
        <div className="w-[152px] h-10 px-4 py-2 bg-white border border-neutral-200 justify-center items-center gap-2 flex">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 11.3333V12.6667H6.5V11.3333H2.5ZM2.5 3.33333V4.66667H9.16667V3.33333H2.5ZM9.16667 14V12.6667H14.5V11.3333H9.16667V10H7.83333V14H9.16667ZM5.16667 6V7.33333H2.5V8.66667H5.16667V10H6.5V6H5.16667ZM14.5 8.66667V7.33333H7.83333V8.66667H14.5ZM10.5 6H11.8333V4.66667H14.5V3.33333H11.8333V2H10.5V6Z" fill="#0C0C0C"/>
        </svg>
          <div className="text-neutral-950 text-xs font-semibold font-['Open Sans'] tracking-tight">Filter</div>
        </div>
        <div className="h-10 bg-white border border-neutral-200 justify-start items-start flex">
          <div className="grow shrink basis-0 h-10 p-2 justify-start items-center gap-2 flex">
            <div className="w-[104px] h-[25px] justify-center items-center flex">
              <div className="grow shrink basis-0">
                <span className="text-neutral-950 text-xs font-semibold font-['Open Sans'] tracking-tight">sort</span>
                <span className="text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">: </span>
                <span className="text-neutral-700 text-[10px] font-semibold font-['Open Sans'] leading-[14px]">recommended</span>
              </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="#606060"/>
            </svg>

          </div>
        </div>
      </div>
      {/* sort and filter small screen start */}

      {/* left side filter options starts */}
      <div className="left-[108px] top-[122px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] max-laptop:hidden">filter</div>
        {/* applied filters div start */}
        <div className="w-72 h-[190px] px-4 pt-4 pb-2 bg-white border-t border-neutral-200 flex-col justify-center items-start gap-4 inline-flex max-laptop:hidden">
          <div className="w-[161px] text-neutral-950 text-base font-bold capitalize leading-snug">Applied filters</div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="h-8 pl-3 pr-2 py-1 border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">cleansers</div>
              <div className="w-[18px] h-[18px] relative"></div>
            </div>
            <div className="h-8 pl-3 pr-2 py-1 border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">peels and masques</div>
              <div className="w-[18px] h-[18px] relative"></div>
            </div>
            <div className="h-12 py-2 justify-center items-center gap-2 inline-flex">
              <div className="text-pink-800 text-base font-normal capitalize leading-7">clear all filters</div>
            </div>
          </div>
        </div>
        {/* applied filters div end */}

        {/* left side filter selection div start */}
        <div className="flex-col justify-start items-start flex max-laptop:hidden">
          {/* out of stock button start */}
          <div className="w-72 h-14 p-4 bg-white border-t border-neutral-200 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-950 text-base font-bold capitalize leading-snug">out of stock items</div>
            <div className="w-12 h-6 relative">
              <div className="w-12 h-6 left-0 top-0 absolute bg-pink-800"></div>
              <div className="w-4 h-4 left-[28px] top-[4px] absolute bg-white shadow"></div>
            </div>
          </div>
          {/* out of stock button end */}

          {/* filter category selection start */}
          <div className="w-72 h-[394px] p-4 bg-white border-b border-neutral-200 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-64 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-pink-800 text-base font-bold capitalize leading-snug">
                category
              </div>
              <img src='productpage/arrow_drop_up.svg' />
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-64 justify-start items-center gap-2 inline-flex">
                <div className="w-4 h-4 relative">
                  <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  <div className="w-[10.67px] h-[10.67px] left-[2.67px] top-[2.67px] absolute bg-neutral-950"></div>
                </div>
                <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">cleansers</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">exfoliators</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">toners</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">retinols</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                    <div className="w-[10.67px] h-[10.67px] left-[2.67px] top-[2.67px] absolute bg-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">peels and masques</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">moisturiser</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">night cream</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">facial oil</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">sunscreen</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">eye care</div>
                </div>
              </div>
            </div>
            {/* filter category selection end */}

            {/* filter Skin Condition selection start */}
            <div className="w-72 h-[295px] p-4 bg-white border-b border-neutral-200 flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-64 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-pink-800 text-base font-bold capitalize leading-snug">
                  skin condition
                </div>
                <img src='productpage/arrow_drop_up.svg' />
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">brightening</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">hydration</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">acne</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">anti-ageing</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">redness</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">sensitive skin</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">sun protection</div>
                </div>
              </div>
            </div>
            {/* filter Skin Condition selection end */}

            {/* filter Featured selection start */}
            <div className="w-72 h-[229px] p-4 bg-white border-b border-neutral-200 flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-64 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-pink-800 text-base font-bold capitalize leading-snug">
                  featured
                </div>
                <img src='productpage/arrow_drop_up.svg' />
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">new</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">best sellers</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">travel size</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">professional treatments</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">daily defense</div>
                </div>
              </div>
            </div>
            {/* filter Featured selection end */}
            
            {/* filter Price selection start */}
            <div className="w-72 h-[229px] p-4 bg-white border-b border-neutral-200 flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-64 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-pink-800 text-base font-bold capitalize leading-snug">
                  price
                </div>
                <img src='productpage/arrow_drop_up.svg' />
              </div>

              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">$50.00 - $150.00</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">$150.00 - $250.00</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">$250.00 - $350.00</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">$350.00 - $450.00</div>
                </div>
                <div className="w-64 justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute rounded-sm border-2 border-neutral-950"></div>
                  </div>
                  <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">$450.00 - $550.00</div>
                </div>
              </div>
          </div>
          {/* filter Price selection end */}
        </div>
      </div>
      {/* left side filter options end */}
      
      {/* Right side product dispaly start */}
      <div className="left-[420px] top-[172px] absolute flex-col justify-center items-center gap-6 inline-flex flex-wrap">
        <div className="justify-center items-center gap-6 inline-flex">

          {/* fisrt div two product and promotion display start */}
          { products.slice(0, 2).map((product) => (
            <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            smallDescription={product.smallDescription}
            image={product.thumbnail}
            price={product.price}
            />
            ))
          }
          {/* promotion help expert advise end */}
            <div className="w-72 h-[560px] relative bg-rose-950">
              <div className="w-[255px] h-[254px] left-[32px] top-[187px] absolute border border-white  bg-rose-900 rounded-full blur-[50px] "></div>
              <Image 
                src="productpage/expertadvice.svg"
                width={353}
                height={311}
                alt='' 
                className="w-[353.28px] h-[311px] top-[249px] absolute" 
              />
              <h2 className="left-[16px] top-[24px] absolute text-white text-xl font-bold leading-7">1-2-1 expert advice</h2>
              <p className="w-64 left-[16px] top-[60px] absolute text-white text-sm font-normal capitalize leading-[25.20px]">take some time to feel uplifted with a complimentary, bespoke beauty service. our team of experts are here to help in person.</p>
            </div>
          </div>
          {/* promotion help expert advise start */}
          {/* fisrt div two product and promotion display start */}

          {/* second div to display 3 products start */}
          <div className="justify-start items-start gap-6 inline-flex">
          { products.slice(2, 5) .map((product) => (
            <ProductCard
            id={product.id}
            title={product.title}
            smallDescription={product.smallDescription}
            image={product.thumbnail}
            price={product.price}
            />
            ))
          }
          </div>

          {/* third div promotion and one product display start */}
          <div className="justify-center items-start gap-6 inline-flex">
            <div className="justify-center items-center gap-6 flex">
              <div className="w-[600px] h-[560px] relative">
                <img className="w-[600px] h-[560px] left-0 top-0 absolute" src="productpage/award.svg" />
                <div className="left-[16px] top-[24px] absolute flex-col justify-start items-start gap-3 inline-flex">
                  <div className="self-stretch text-white text-xl font-bold leading-7">#AWARDED</div>
                  <div className="h-[105px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-white text-base font-bold capitalize leading-snug">capture totale super potent rich cream</div>
                    <div className="self-stretch text-white text-sm font-normal capitalize leading-[25.20px]">Global age-defying rich cream - intense nourishment & revitalisation<br/>Formulated with 88% natural-origin ingredients</div>
                  </div>
                </div>
              </div>
            </div>
            { products.slice(5, 6) .map((product) => (
                <ProductCard
                  id={product.id}
                  title={product.title}
                  smallDescription={product.smallDescription}
                  image={product.thumbnail}
                  price={product.price}
                />
              ))
           }
          </div>
          {/* third div promotion and one product display start */}

          {/* fourth div displays three products start */}
          <div className="justify-start items-start gap-6 inline-flex">
            { products.slice(6, 9) .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                smallDescription={product.smallDescription}
                image={product.thumbnail}
                price={product.price}
              />
              ))
            }
          </div>
          {/* fourth div displays three products end */}

          {/* fifth div promotion and two product display start */}
          <div className="justify-start items-start gap-6 inline-flex">
            { products.slice(6, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  smallDescription={product.smallDescription}
                  image={product.thumbnail}
                  price={product.price}
                />
              ))
            }
            <div className="w-72 h-[560px] relative bg-rose-950">
              <div className="w-[255px] h-[254px] left-[32px] top-[187px] absolute z-[1] border border-white  bg-rose-900 rounded-full blur-[50px] "></div>
              <Image 
                src="/productpage/facial.png"
                width={353}
                height={311}
                alt='' 
                className="w-[353.28px] h-[311px] top-[249px] absolute object-cover" 
              />
              <div className='px-[16px] py-[24px] flex flex-col gap-2 absolute '>
                <h2 className="w-64 text-white text-xl font-bold leading-7">NEW Virtual Skincare Analysis</h2>
                <p className="w-64 text-white text-sm font-normal capitalize leading-[25.20px]">
                  Looking for a full skincare routine? Our NEW Virtual Skincare Analysis Tool evaluates your skin and provides the most personalized recommendations. 
                </p>
                <h3 className="w-64 text-white text-sm font-semibold leading-[25.20px]">Available exclusively for mobile</h3>
              </div>
              <div className="w-[163px] text-neutral-950 text-base font-bold capitalize leading-snug absolute top-[507px] left-[16px]">
                Scan To Get Started
              </div>
              <img className="w-[68px] h-[68px] absolute top-[484px] left-[207px]" src="productpage/scan.svg" />
            </div>
          </div>
          {/* <div className="justify-center items-start gap-6 inline-flex flex-wrap "> */}
          <div className="flex flex-wrap justify-center items-start gap-6">
            { products.slice(8) .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                smallDescription={product.smallDescription}
                image={product.thumbnail}
                price={product.price}
              />
              ))
            }

          </div>
      </div>
              
    </Wrapper>

  )
}

export default Products