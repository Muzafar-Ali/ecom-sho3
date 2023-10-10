import React, { Dispatch, SetStateAction } from 'react'
import { GrFormClose } from 'react-icons/gr'
import CategoryFilter from './CategoryFilter'
import FeaturedFilter from './FeaturedFilter'
import PriceFilter from './PriceFilter'
import SkinFilter from './SkinFilter'

export interface FilterOptionsProps{
  appliedFilters: string[];
  removeFilter: (filterToRemove: string) => void;
  setIsOutOfStock: Dispatch<SetStateAction<boolean>>;
  isOutOfStock: boolean;
  categoryFilters: string[];
  skinFilters: string[]
  priceFilters: string[];
  featuredFilters: string[];
  handleFiltersChange: (filterType: string, value: string | Boolean) => void
}

const FilterOptions:React.FC<FilterOptionsProps> = ({
  appliedFilters,
  removeFilter,
  setIsOutOfStock,
  isOutOfStock,
  categoryFilters,
  skinFilters,
  priceFilters,
  featuredFilters,
  handleFiltersChange
}) => {
  return (
    <div className="mt-[122px] flex-col justify-start items-start gap- hidden laptop:inline-flex">
      <div className="text-neutral-950 text-2xl font-bold capitalize leading-[33.60px]">filter</div>
      
      {/* applied filters div start */}
      <div className="inline-flex flex-col items-start justify-center h-auto gap-4 px-4 pt-4 pb-2 bg-white border-t w-72 border-neutral-200">
        <div className="w-[161px] text-neutral-950 text-base font-bold capitalize leading-snug"></div>
        <div className="flex flex-col items-start justify-start gap-2">

          { appliedFilters?.map((value,index) => (
              <div
                key={index} 
                className="inline-flex items-center justify-start h-8 gap-2 py-1 pl-3 pr-2 border border-neutral-200"
              >
                <div className="text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">{value}</div>
                <div className="w-[18px] h-[18px] relative cursor-pointer">
                  <GrFormClose size={18}
                    onClick={() => removeFilter(value)}
                  />
                </div>
              </div>
            ))
          }

          <button 
            onClick={() => removeFilter('all')}
            className="inline-flex items-center justify-center h-12 gap-2 py-2">
            <div className="text-base font-normal leading-7 text-pink-800 capitalize">clear all filters</div>
          </button>
          
        </div>
      </div>
      {/* applied filters div end */}

      {/* left side filter selection div start */}
      <div className="flex flex-col items-start justify-start">
      
        {/* out of stock button start */}
        <div className="inline-flex items-center justify-start gap-2 p-4 bg-white border-t w-72 h-14 border-neutral-200">
          <div className="text-base font-bold leading-snug capitalize grow shrink basis-0 text-neutral-950">out of stock items</div>
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
    </div>
  )
}

export default FilterOptions