'use client'
import { category } from 'lib/productData/filterCategories';
import React, { useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';

interface CategoryFilterProps {
  categoryFilters: string[];
  handleFiltersChange: (filetrTyp: string, value: string) => void;
}

const CategoryFilter:React.FC<CategoryFilterProps> = ({categoryFilters, handleFiltersChange}) => {
  const [isDropDown, setIsDropDown] = useState(true)
  
  return (
    <section className="inline-flex flex-col items-start justify-start h-auto gap-4 px-4 pt-4 pb-2 bg-white border-t mobile-m:w-80 mobile-l:w-[352px] tablet:w-[654px] laptop:w-72 border-neutral-200">

      <div 
        className="inline-flex items-center justify-start w-64 mobile-m:w-[286px] mobile-l:w-[316px] tablet:w-[622px] laptop:w-64 gap-2 cursor-pointer" 
        onClick={() => setIsDropDown((prev) => !prev)}
      >
        <h2 className="text-base font-bold leading-snug text-pink-800 capitalize grow shrink basis-0">
          category
        </h2>
        <BiCaretDown className={`${isDropDown ? 'rotate-180' : ''} cursor-pointer text-pink-800 transition duration-500 ease-in-out`}/>
      </div>

      <div className={`${isDropDown ? 'visible-container' : 'hidden-container'} flex-col justify-start items-start gap-2 flex transition-all duration-700 ease-in-out`}>
        { category.map((categories, index) => (
    
            <div key={index} className="inline-flex items-center justify-start w-64 gap-2">
              {/* box start */}
              <button
                onClick={() => handleFiltersChange('category',categories,)} 
                className="relative w-4 h-4 cursor-pointer"
                >
                {/* box border line */}
                <div className="absolute top-0 left-0 w-4 h-4 border-2 rounded-sm border-neutral-950"></div>
                {/* selection color change inside box */}
                <div className={`${categoryFilters.includes(categories) ? 'bg-neutral-950' : ''} w-[10.67px] h-[10.67px] left-[2.67px] top-[2.67px] absolute`}></div>
              </button>
              {/* box end */}
              <p className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">{categories}</p>
            </div>

          ))
        }


        {/* <div className="inline-flex items-center justify-start w-64 gap-2">
          <div className="relative w-4 h-4">
            <div className="absolute top-0 left-0 w-4 h-4 border-2 rounded-sm border-neutral-950"></div>
          </div>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">exfoliators</div>
        </div>
        <div className="inline-flex items-center justify-start w-64 gap-2">
          <div className="relative w-4 h-4">
            <div className="absolute top-0 left-0 w-4 h-4 border-2 rounded-sm border-neutral-950"></div>
          </div>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">toners</div>
        </div>
        <div className="inline-flex items-center justify-start w-64 gap-2">
          <div className="relative w-4 h-4">
            <div className="absolute top-0 left-0 w-4 h-4 border-2 rounded-sm border-neutral-950"></div>
          </div>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">retinols</div>
        </div>
        <div className="inline-flex items-center justify-start w-64 gap-2">
          <div className="relative w-4 h-4">
            <div className="absolute top-0 left-0 w-4 h-4 border-2 rounded-sm border-neutral-950"></div>
            <div className="w-[10.67px] h-[10.67px] left-[2.67px] top-[2.67px] absolute bg-neutral-950"></div>
          </div>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">peels and masques</div>
        </div>
        <div className="inline-flex items-center justify-start w-64 gap-2">
          <div className="relative w-4 h-4">
            <div className="absolute top-0 left-0 w-4 h-4 border-2 rounded-sm border-neutral-950"></div>
          </div>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">moisturiser</div>
        </div>
        <div className="inline-flex items-center justify-start w-64 gap-2">
          <div className="relative w-4 h-4">
            <div className="absolute top-0 left-0 w-4 h-4 border-2 rounded-sm border-neutral-950"></div>
          </div>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">night cream</div>
        </div>
        <div className="inline-flex items-center justify-start w-64 gap-2">
          <div className="relative w-4 h-4">
            <div className="absolute top-0 left-0 w-4 h-4 border-2 rounded-sm border-neutral-950"></div>
          </div>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">facial oil</div>
        </div>
        <div className="inline-flex items-center justify-start w-64 gap-2">
          <div className="relative w-4 h-4">
            <div className="absolute top-0 left-0 w-4 h-4 border-2 rounded-sm border-neutral-950"></div>
          </div>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">sunscreen</div>
        </div>
        <div className="inline-flex items-center justify-start w-64 gap-2">
          <div className="relative w-4 h-4">
            <div className="absolute top-0 left-0 w-4 h-4 border-2 rounded-sm border-neutral-950"></div>
          </div>
          <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal capitalize leading-[25.20px]">eye care</div>
        </div> */}

      </div>
    </section>
  )
}

export default CategoryFilter