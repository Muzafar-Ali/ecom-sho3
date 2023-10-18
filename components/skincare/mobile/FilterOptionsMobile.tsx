import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import CategoryFilter from "../FilterOptions/CategoryFilter";
import FeaturedFilter from "../FilterOptions/FeaturedFilter";
import { FilterOptionsDesktopProps } from "../FilterOptions/FilterOptionsDesktop";
import PriceFilter from "../FilterOptions/PriceFilter";
import SkinFilter from "../FilterOptions/SkinFilter";
import { SortFilterDesktopProps } from "../SortFilterDesktop";
import SortFilterMobile from "./SortFilterMobile";

interface FilterOptionsMobileProps extends FilterOptionsDesktopProps, SortFilterDesktopProps {} 

const FilterOptionsMobile:React.FC<FilterOptionsMobileProps> = ({
  appliedFilters,
  removeFilter,
  setIsOutOfStock,
  isOutOfStock,
  categoryFilters,
  skinFilters,
  priceFilters,
  featuredFilters,
  handleFiltersChange,
  setShowSortFilters,
  setShowSortedValue,
  showSortFilters,
  showSortedValue,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log("isOpen", isOpen);
  
  return (
    <div className="relative laptop:hidden">
      
      {/* filter open section start  */}
      <section className={` h-10 justify-center items-center gap-1 mobile-m:gap-3 mobile-l:gap-5 inline-flex ${ appliedFilters.length > 0 ?'':'mt-[108px]'}`}> 
        <div 
          className="w-[152px] tablet:w-72 h-10 px-4 py-2 bg-white border border-neutral-200 justify-center items-center gap-2 tablet:gap-5 flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 11.3333V12.6667H6.5V11.3333H2.5ZM2.5 3.33333V4.66667H9.16667V3.33333H2.5ZM9.16667 14V12.6667H14.5V11.3333H9.16667V10H7.83333V14H9.16667ZM5.16667 6V7.33333H2.5V8.66667H5.16667V10H6.5V6H5.16667ZM14.5 8.66667V7.33333H7.83333V8.66667H14.5ZM10.5 6H11.8333V4.66667H14.5V3.33333H11.8333V2H10.5V6Z" fill="#0C0C0C"/>
          </svg>

          <div className="text-xs tablet:text-base font-semibold max-tablet:tracking-tight tablet:font-bold leading-snug capitalize text-neutral-950">
            Filter 
          </div>
        </div>

        <SortFilterMobile
          setShowSortFilters={setShowSortFilters}
          setShowSortedValue={setShowSortedValue}
          showSortFilters={showSortFilters}
          showSortedValue={showSortedValue}
        />
      </section>
      {/* filter open section end */}

      {/* filter selection section start */} 
      <section className={`${isOpen ? 'visible' : 'hidden'} flex-col justify-start items-start absolute top-0 z-10 w-full 
        py-4  `}>

        <div className="flex justify-between items-center py-4 px-4 bg-white">
          <div className="text-neutral-950 text-xl font-bold capitalize leading-7">filter</div>
          <GrFormClose 
            size={24} 
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
        

        {/* left side filter selection div start */}
        {/* NOTE :->  W-Full here has no effect  */}
        <div className="flex flex-col items-center tablet:items-start justify-center tablet:justify-start w-full">
        
          {/* out of stock button start */}
          <div className="inline-flex items-center justify-start gap-2 p-4 bg-white border-t w-full laptop:w-72  h-14 border-neutral-200">
            <div className="w-[232px] tablet:w-[654px] text-neutral-950 text-base font-bold font-['Open Sans'] leading-snug">out of stock items</div>
            <div 
              className="relative w-12 h-6 cursor-pointer"
              onClick={() => {
                setIsOutOfStock((prev) => !prev)
                
              }}
            >
              <div className={`${isOutOfStock ?  'bg-pink-800' : 'bg-slate-500'} w-12 h-6 left-0 top-0 absolute transition-colors duration-300 ease-in-out `}></div>
              <div className={`${isOutOfStock ? 'left-[28px] top-[4px] absolute' : 'left-[5px] top-[4px] absolute'} w-4 h-4 left-[28px] top-[4px] absolute bg-white shadow transition-all duration-300 ease-in-out `}></div>
            </div>
          </div>
          {/* out of stock button end */}
        
          {/* filter category selection start */}

          <CategoryFilter categoryFilters={categoryFilters} handleFiltersChange={handleFiltersChange}/>
          <SkinFilter skinFilters={skinFilters} handleFiltersChange={handleFiltersChange} />
          <FeaturedFilter featuredFilters={featuredFilters} handleFiltersChange={handleFiltersChange}/>
          <PriceFilter priceFilters={priceFilters} handleFiltersChange={handleFiltersChange}/>

          {/* filter category selection end */}

        </div>
      </section>
      {/* filter selection section end */}

    </div>
  )
}

export default FilterOptionsMobile