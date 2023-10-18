'use client'
import Wrapper from 'components/Wrapper'
import ProductCard from 'components/product2/ProductCard'
import FilterOptionsDesktop from 'components/skincare/FilterOptions/FilterOptionsDesktop'
import SortFilterDesktop from 'components/skincare/SortFilterDesktop'
import FilterOptionsMobile from 'components/skincare/Mobile/FilterOptionsMobile'

import AppliedFiltersMobile from 'components/skincare/Mobile/AppliedFiltersMobile'
import { filterProducts } from 'lib/filterProducts'
import { products } from 'lib/productData/productdata'
import Image from 'next/image'
import { useState } from 'react'


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
  
      {/* sort and filter desktop screen*/}
      <section className='flex flex-col items-center h-auto tablet:h-auto overflow-y-auto -px-[20px] laptop-lg:px-[108px] pb-5 relative'>

                {/* page tage */}
        <section>
          <div className="left-[6px] mobile-m:left-[30px] mobile-l:left-[50px] tablet:left-[88px] laptop:left-[50px] laptop-lg:left-[108px] top-[53px] absolute justify-start items-baseline gap-1 tablet:gap-2 inline-flex w-[238px] tablet:w-[330px] h-[34px]">
            <div className="text-neutral-950 md:text-[32px] font-semibold md:font-bold capitalize leading-[33.60px] md:leading-[44.80px]">Women skincare </div>
            <div className="text-sm font-semibold leading-tight text-zinc-600 md:text-xl md:font-bold md:leading-7">({filteredProducts.length})</div>
          </div>
        </section>
          

        {/* applied filters mobile */}
        <AppliedFiltersMobile
          appliedFilters={appliedFilters}
          removeFilter={removeFilter} 
        />

        {/* sort and filter small screen*/} 
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
          setShowSortFilters={setShowSortFilters}
          setShowSortedValue={setShowSortedValue}
          showSortFilters={showSortFilters}
          showSortedValue={showSortedValue}
        />  
   
        {/* sort filter on desktop */}
        <SortFilterDesktop
          setShowSortFilters={setShowSortFilters}
          setShowSortedValue={setShowSortedValue}
          showSortFilters={showSortFilters}
          showSortedValue={showSortedValue}
        />
      



        {/* filter and product card section */}
        <div className='flex flex-row gap-6'>
          {/* LEFT SIDE - FILTER OPTIONS START*/}
          <FilterOptionsDesktop
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
          <div className="mt-4 laptop:mt-[172px] flex-col justify-center tablet:justify-end items-center gap-6 inline-flex flex-wrap">
            
            <section className="grid grid-cols-2 laptop-lg:grid-cols-3 items-center gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">

              {/* fisrt section to show two product and promotion start */}
              { filteredProducts && filteredProducts.length > 0  ? (
                filteredProducts?.slice(0, 2).map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    smallDescription={product.smallDescription}
                    thumbnail={product.thumbnail}
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
                    thumbnail={product.thumbnail}
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
            </section>
            {/* promotion help expert advise start */}
              
            {/* fisrt div two product and promotion display end */}

            {/* second section to display 3 products start */}
            <section className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">
              { filteredProducts && filteredProducts.length > 0  ? (
                filteredProducts?.slice(2, 5).map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    smallDescription={product.smallDescription}
                    thumbnail={product.thumbnail}
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
                    thumbnail={product.thumbnail}
                    price={product.price}
                    outofstock={product.outofstock}
                  />
                )))
              }
            </section>

            {/* third section to show one products and one promotion start */}
            <section className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">

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
                      thumbnail={product.thumbnail}
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
                      thumbnail={product.thumbnail}
                      price={product.price}
                      outofstock={product.outofstock}
                    />
                  )))
              }
            </section>
            {/* third section to show oneproducts and one promotion start */}

            {/* fourth section to display three products start */}
            <section className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">
              { filteredProducts && filteredProducts.length > 0  ? (
                  filteredProducts?.slice(6, 9).map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      smallDescription={product.smallDescription}
                      thumbnail={product.thumbnail}
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
                      thumbnail={product.thumbnail}
                      price={product.price}
                      outofstock={product.outofstock}
                    />
                )))
              }
            </section>
            {/* fourth section to display three products start */}

            {/* fifth section to display two products and one promotion */}
            <section className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">
              { filteredProducts && filteredProducts.length > 0  ? (
                  filteredProducts?.slice(9, 11).map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      smallDescription={product.smallDescription}
                      thumbnail={product.thumbnail}
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
                      thumbnail={product.thumbnail}
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
                    Looking for a full skincare routine? Our NEW Virtual Skincare Analysis Tool evaluates your skin and provides the most 
                    personalized recommendations. 
                  </p>
                  <h3 className="hidden tablet:visible w-[136px] tablet:w-64 text-white text-xs tablet:text-sm font-semibold tablet:leading-[25.20px]">Available exclusively for mobile</h3>
                </div>
                <div className="hidden tablet:visible w-[163px] text-neutral-950 text-base font-bold capitalize leading-snug absolute top-[507px] left-[16px]">
                  Scan To Get Started
                </div>
                <img className="w-[68px] h-[68px] absolute top-[484px] left-[207px]" src="productpage/scan.svg" />
              </div>
            </section>
              
              {/* section to display all products */}
              {/* <div className="inline-flex flex-wrap items-start justify-center gap-6 "> */}
              <section className="grid grid-cols-2 laptop-lg:grid-cols-3 gap-1 mobile-m:gap-3 mobile-l:gap-5 tablet:gap-6">
                { filteredProducts && filteredProducts.length > 0  ? (
                    filteredProducts?.slice(11).map((product) => (
                        <ProductCard
                          key={product.id}
                          id={product.id}
                          title={product.title}
                          smallDescription={product.smallDescription}
                          thumbnail={product.thumbnail}
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
                          thumbnail={product.thumbnail}
                          price={product.price}
                          outofstock={product.outofstock}
                        />
                    )))
                }
              </section>
          </div>
          {/* RIGHT SIDE - PRODUCT CARDS START*/}
        </div>    
      </section> 
    </Wrapper>
  )
}

export default Products