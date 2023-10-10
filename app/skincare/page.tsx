'use client'
import Wrapper from 'components/Wrapper'
import ProductCard from 'components/products/ProductCard'
import SortFilter from 'components/skincare/SortFilter'
import CategoryFilter from 'components/skincare/filterOptions/CategoryFilter'
import FeaturedFilter from 'components/skincare/filterOptions/FeaturedFilter'
import FilterOptions from 'components/skincare/filterOptions/FilterOptions'
import PriceFilter from 'components/skincare/filterOptions/PriceFilter'
import SkinFilter from 'components/skincare/filterOptions/SkinFilter'
import FilterOptionsMobile from 'components/skincare/mobile/FilterOptionsMobile'
import FilterAndSortSmallScreen from 'components/skincare/mobile/FilterOptionsMobile'

import { filterProducts } from 'lib/filterProducts'
import { products } from 'lib/productData/productdata'
import Image from 'next/image'
import { useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'


const Products = () => {

  // state used for filters
  const [categoryFilters, setCategoryFilters] = useState<string[]>([])
  const [skinFilters, setSkinFilters] = useState<string[]>([])
  const [priceFilters, setPriceFilters] = useState<string[]>([])
  const [featuredFilters, setFeaturedFilters] = useState<string[]>([])

  const appliedFilters = [...categoryFilters, ...skinFilters, ...featuredFilters];
  const originalCategoryFilters = categoryFilters;
  const originalSkinFilters = skinFilters;
  const originalPriceFilters = priceFilters;
  const originalFeaturedFilters = featuredFilters;
  
  const [isOutOfStock, setIsOutOfStock] = useState<boolean>(false)

  // state used for Sort filter
  const [showSortFilters, setShowSortFilters] = useState<boolean>(false)
  const [showSortedValue, setShowSortedValue] = useState<string>('recommended')
  console.log('showSortedValue', showSortedValue);

  // Function to remove a filter from appliedFilters and its respective variable
  const removeFilter = (filterToRemove: string) => {

    if (filterToRemove === 'all') {
      setCategoryFilters([]);   
      setSkinFilters([]);       
      setPriceFilters([]);      
      setFeaturedFilters([]);   
    }

    if (originalCategoryFilters.includes(filterToRemove)) {
      setCategoryFilters(categoryFilters.filter(filter => filter !== filterToRemove));
    }
    if (originalSkinFilters.includes(filterToRemove)) {
      setSkinFilters(skinFilters.filter(filter => filter !== filterToRemove));
    }
    if (originalPriceFilters.includes(filterToRemove)) {
      setPriceFilters(priceFilters.filter(filter => filter !== filterToRemove));
    }
    if (originalFeaturedFilters.includes(filterToRemove)) {
      setFeaturedFilters(featuredFilters.filter(filter => filter !== filterToRemove));
    }
  };
  
    
  const handleFiltersChange = (filterType: string, value: string | Boolean) => {

    if(filterType === 'category'){
      if(typeof value === 'string')
      if(categoryFilters?.includes(value)){
        setCategoryFilters(categoryFilters?.filter((item) => item !== value));
      }else{
        setCategoryFilters([...categoryFilters, value]);
      }
    }

    if(filterType === 'featured'){
      if(typeof value === 'string')
      if(featuredFilters?.includes(value)){
        setFeaturedFilters(featuredFilters?.filter((item) => item !== value));
      }else{
        setFeaturedFilters([...featuredFilters, value]);
      }
    }

    if(filterType === 'price'){
      if(typeof value === 'string')
      if(priceFilters?.includes(value)){
        setPriceFilters(priceFilters?.filter((item) => item !== value));
      }else{
        setPriceFilters([...priceFilters, value]);
      }
    }

    if(filterType === 'skin'){
      if(typeof value === 'string')
      if(skinFilters.includes(value)){
        setSkinFilters(skinFilters.filter((item) => item !== value));
      }else{
        setSkinFilters([...skinFilters, value]);
      }
    }
    

  }

  // function to show products based on filter Selection
  const filteredProducts = filterProducts(appliedFilters, products, isOutOfStock, showSortedValue)

  return (
    <Wrapper>

      {/* page tage */}
      <section>
        <div className="left-[5px] mobile-s:left-[20px] mobile-l:left-[40px] tablet:left-[70px] laptop:left-[50px] laptop-lg:left-[108px] top-[53px] absolute justify-start items-baseline gap-1 md:gap-2 inline-flex w-[238px] md:w-[330px] h-[34px]">
          <div className="text-neutral-950 md:text-[32px] font-semibold md:font-bold capitalize leading-[33.60px] md:leading-[44.80px]">Women skincare </div>
          <div className="text-sm font-semibold leading-tight text-zinc-600 md:text-xl md:font-bold md:leading-7">({filteredProducts.length})</div>
        </div>
      </section>

      {/* sort and filter small screen start */}
      <section>
        <FilterOptionsMobile
          appliedFilters={appliedFilters}
          removeFilter={removeFilter}
          setIsOutOfStock={setIsOutOfStock}
          isOutOfStock={isOutOfStock}
          categoryFilters={categoryFilters}
          skinFilters={skinFilters}
          featuredFilters={featuredFilters}
          priceFilters={priceFilters}
          handleFiltersChange={handleFiltersChange}
        />  
      </section>
   
      {/* sort filter for desktop screen      */}
      <section className='h-[5000px] overflow-y-auto px-[5px] mobile-m:px-[20px] mobile-l:[25px] laptop:px-[50px] laptop-lg:px-[108px]'>
        <SortFilter
          setShowSortFilters={setShowSortFilters}
          setShowSortedValue={setShowSortedValue}
          showSortFilters={showSortFilters}
          showSortedValue={showSortedValue}
        />

        {/* sort filter on right side end */}
      

        {/* <div className="w-72 left-[1090px] top-[124px] absolute bg-white border border-neutral-200 justify-start items-start inline-flex laptop:hidden">
          <div className="relative flex items-center justify-start h-10 gap-2 px-4 py-2 grow shrink basis-0">
            <div className="w-56 h-[25px] justify-center items-center flex">
              <div className="grow shrink basis-0">
                <span className="text-base font-bold leading-snug capitalize text-neutral-950">sort</span>
                <span className="text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">: </span>
                <span className="text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">
                  { 
                    showSortedValue ? showSortedValue : 'recommended'
                  }
                </span>
              </div>
            </div>
            <img
              src='productpage/arrow_drop_down-balck.svg'  
              className={`${showSortFilters ? '': 'rotate-180'} w-6 h-6 relative cursor-pointer`}
              onClick={() => {
                setShowSortFilters((prev) => !prev)  
                
              }}
            />
          </div>

          <div className={`${showSortFilters ? 'visible':'hidden'} grow shrink basis-0 px-4 py-4 justify-start items-center gap-2 flex-col absolute top-10 bg-white z-10 h-auto w-full border-t`}>
            <div 
              className='cursor-pointer text-neutral-950 text-sm font-normal capitalize leading-[25.20px]' 
              onClick={() => {
                setShowSortedValue('price high to low')
                setShowSortFilters(false)
              }}
            >
              price high to low
            </div>

            <div 
              className='cursor-pointer text-neutral-950 text-sm font-normal capitalize leading-[25.20px]' 
              onClick={() => {
                setShowSortedValue('price low to high')
                setShowSortFilters(false)
              }}
            >
              price low to high
            </div>
            
          </div> 

        </div> */}
        {/* sort and filter small screen end */}

        {/* filter and product card section */}
        <div className='flex flex-row gap-6'>
          {/* LEFT SIDE - FILTER OPTIONS START*/}
          <FilterOptions
            appliedFilters={appliedFilters}
            removeFilter={removeFilter}
            setIsOutOfStock={setIsOutOfStock}
            isOutOfStock={isOutOfStock}
            categoryFilters={categoryFilters}
            skinFilters={skinFilters}
            featuredFilters={featuredFilters}
            priceFilters={priceFilters}
            handleFiltersChange={handleFiltersChange}
          />
          {/* LEFT SIDE - FILTER OPTIONS END*/}
          
          {/* RIGHT SIDE - PRODUCT CARDS START*/}
          <div className="mt-[172px] mobile-l:ml-[30px] tablet:ml-[60px] laptop:ml-0 flex-col justify-end items-center gap-6 inline-flex flex-wrap">
            
            <div className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">

              {/* fisrt section to show two product and promotion start */}
              { filteredProducts && filteredProducts.length > 0  ? (
                filteredProducts?.slice(0, 2).map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    smallDescription={product.smallDescription}
                    image={product.thumbnail}
                    price={product.price}
                    outofstock={product.outofstock}
                  />
                ))
                ):(
                products?.slice(0, 2).map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    smallDescription={product.smallDescription}
                    image={product.thumbnail}
                    price={product.price}
                    outofstock={product.outofstock}
                  />
                )))
              }

              {/* promotion help expert advise end */}
                <div className="w-[152px] tablet:w-72 h-[345px] tablet:h-[560px] relative bg-rose-950">
                  <div className="w-[119px] tablet:w-[255px] h-[118.53px] tablet:h-[254px] left-[32px] top-[187px] absolute border border-white  bg-rose-900 rounded-full blur-[50px] "></div>
                  <Image 
                    src="productpage/expertadvice.svg"
                    width={353}
                    height={311}
                    alt='' 
                    className="w-[184px] h-[162px] tablet:w-[353.28px] tablet:h-[311px] top-[184px] tablet:top-[249px] absolute" 
                  />
                  <h2 className="w-[136px] left-[8px] tablet:left-[16px] top-[16px] tablet:top-[24px] absolute text-white text-base tablet:text-xl font-bold leading-snug tablet:leading-7">1-2-1 expert advice</h2>
                  <p className="w-[135px] tablet:w-64 left-[9px] tablet:left-[16px] top-[68px]  tablet:top-[90px] absolute text-white text-xs tablet:text-sm font-normal capitalize tablet:leading-[25.20px]">take some time to feel uplifted with a complimentary, bespoke beauty service. our team of experts are here to help in person.</p>
                </div>
            </div>
            {/* promotion help expert advise start */}
              
              {/* fisrt div two product and promotion display end */}

              {/* second section to display 3 products start */}
              <div className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">
                { filteredProducts && filteredProducts.length > 0  ? (
                  filteredProducts?.slice(2, 5).map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      smallDescription={product.smallDescription}
                      image={product.thumbnail}
                      price={product.price}
                      outofstock={product.outofstock}
                    />
                  ))
                ):(
                  products?.slice(2, 5).map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      smallDescription={product.smallDescription}
                      image={product.thumbnail}
                      price={product.price}
                      outofstock={product.outofstock}
                    />
                  )))
                }
              </div>

              {/* third section to show one products and one promotion start */}
              <div className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">

                <div className="hidden tablet:flex items-center justify-center gap-6 col-span-2">
                  <div className="w-[600px] h-[560px] relative">
                    <img className="w-[600px] h-[560px] left-0 top-0 absolute" src="productpage/award.svg" />
                    <div className="left-[16px] top-[24px] absolute flex-col justify-start items-start gap-3 inline-flex">
                      <div className="self-stretch text-xl font-bold leading-7 text-white">#AWARDED</div>
                      <div className="h-[105px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-base font-bold leading-snug text-white capitalize">capture totale super potent rich cream</div>
                        <div className="self-stretch text-white text-sm font-normal capitalize leading-[25.20px]">Global age-defying rich cream - intense nourishment & revitalisation<br/>Formulated with 88% natural-origin ingredients</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                { filteredProducts && filteredProducts.length > 0  ? (
                    filteredProducts?.slice(5, 6).map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        smallDescription={product.smallDescription}
                        image={product.thumbnail}
                        price={product.price}
                        outofstock={product.outofstock}
                      />
                    ))
                  ):(
                    products?.slice(5, 6).map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        smallDescription={product.smallDescription}
                        image={product.thumbnail}
                        price={product.price}
                        outofstock={product.outofstock}
                      />
                    )))
                }
              </div>
              {/* third section to show oneproducts and one promotion start */}

              {/* fourth section to display three products start */}
              <div className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">
                { filteredProducts && filteredProducts.length > 0  ? (
                    filteredProducts?.slice(6, 9).map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        smallDescription={product.smallDescription}
                        image={product.thumbnail}
                        price={product.price}
                        outofstock={product.outofstock}
                      />
                    ))
                  ):(
                    products?.slice(6, 9).map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        smallDescription={product.smallDescription}
                        image={product.thumbnail}
                        price={product.price}
                        outofstock={product.outofstock}
                      />
                  )))
                }
              </div>
              {/* fourth section to display three products start */}

              {/* fifth section to display two products and one promotion */}
              <div className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">
                { filteredProducts && filteredProducts.length > 0  ? (
                    filteredProducts?.slice(9, 11).map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        smallDescription={product.smallDescription}
                        image={product.thumbnail}
                        price={product.price}
                        outofstock={product.outofstock}
                      />
                    ))
                  ):(
                    products?.slice(9, 11).map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        smallDescription={product.smallDescription}
                        image={product.thumbnail}
                        price={product.price}
                        outofstock={product.outofstock}
                      />
                    )))
                }
                {/* promotion image */}
                <div className="w-[152px] h-[345px] tablet:w-72 tablet:h-[560px] relative bg-rose-950">
                <div className="w-[119px] tablet:w-[255px] h-[118.53px] tablet:h-[254px] left-[32px] top-[187px] absolute border border-white  bg-rose-900 rounded-full blur-[50px] "></div>
                  <Image 
                    src="/productpage/facial.png"
                    width={353}
                    height={311}
                    alt='' 
                    className="w-[139px] tablet:w-[353.28px] h-[139px] tablet:h-[311px] top-[206px] tablet:top-[249px] absolute object-cover" 
                  />
                  <div className='px-[16px] py-[24px] flex flex-col gap-2 absolute '>
                    <h2 className="w-[136px] tablet:w-64 text-base tablet:text-xl font-bold tablet:leading-7 text-white">NEW Virtual Skincare Analysis</h2>
                    <p className="w-[136px] tablet:w-64 text-white text-xs tablet:text-sm font-normal capitalize tablet:leading-[25.20px]">
                      Looking for a full skincare routine? Our NEW Virtual Skincare Analysis Tool evaluates your skin and provides the most personalized recommendations. 
                    </p>
                    <h3 className="hidden tablet:visible w-[136px] tablet:w-64 text-white text-xs tablet:text-sm font-semibold tablet:leading-[25.20px]">Available exclusively for mobile</h3>
                  </div>
                  <div className="w-[163px] text-neutral-950 text-base font-bold capitalize leading-snug absolute top-[507px] left-[16px]">
                    Scan To Get Started
                  </div>
                  <img className="w-[68px] h-[68px] absolute top-[484px] left-[207px]" src="productpage/scan.svg" />
                </div>
              </div>
              
              {/* section to display all products */}
              {/* <div className="inline-flex flex-wrap items-start justify-center gap-6 "> */}
              <div className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">
                { filteredProducts && filteredProducts.length > 0  ? (
                      filteredProducts?.slice(11).map((product) => (
                        <ProductCard
                          key={product.id}
                          id={product.id}
                          title={product.title}
                          smallDescription={product.smallDescription}
                          image={product.thumbnail}
                          price={product.price}
                          outofstock={product.outofstock}
                        />
                      ))
                    ):(
                      products?.slice(11).map((product) => (
                        <ProductCard
                          key={product.id}
                          id={product.id}
                          title={product.title}
                          smallDescription={product.smallDescription}
                          image={product.thumbnail}
                          price={product.price}
                          outofstock={product.outofstock}
                        />
                    )))
                }

              </div>
          </div>
          {/* RIGHT SIDE - PRODUCT CARDS START*/}
        </div>    
      </section> 

    </Wrapper>

  )
}

export default Products