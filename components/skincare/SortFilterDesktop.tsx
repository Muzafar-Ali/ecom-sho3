import React, { Dispatch, SetStateAction } from 'react'
import { BiCaretDown } from 'react-icons/bi'

export interface SortFilterDesktopProps {
  setShowSortFilters: Dispatch<SetStateAction<boolean>>
  setShowSortedValue: Dispatch<SetStateAction<string>>
  showSortFilters:boolean;
  showSortedValue: string;
}


const SortFilterDesktop:React.FC<SortFilterDesktopProps> = ({ setShowSortFilters,showSortFilters, showSortedValue, setShowSortedValue}) => {
  return (
    <div>
      {/* header tags start */}

    {/* header tags end*/}

    {/* sort filter on right side start */}
    <div className="w-[152px] tablet:w-72 left-[160px] laptop:left-[674.5px] laptop-lg:left-[1044.5px] tablet:top-[124px] absolute bg-white border border-neutral-200 justify-start items-start hidden laptop:inline-flex">
      <div className="relative flex items-center justify-start h-10 gap-2 px-4 py-2 grow shrink basis-0 cursor-pointer"
        onClick={() => {
          setShowSortFilters((prev) => !prev)  
        }}
      >
        <div className="w-[104px] tablet:w-56 h-[25px] justify-center items-center flex " >
          <div className="grow shrink basis-0">
            <span className="text-base font-bold leading-snug capitalize text-neutral-950">sort</span>
            <span className="text-neutral-950 text-sm font-normal capitalize leading-[25.20px] pr-2">:</span>
            <span className="text-neutral-950 text-sm font-normal capitalize leading-[14px] tablet:leading-[25.20px]">
              { 
                showSortedValue && showSortedValue
              }
            </span>
          </div>
        </div>
        <BiCaretDown className={`${showSortFilters ? '': 'rotate-180'} relative cursor-pointer max-tablet:w-3 h-3`}/>
      </div>

      <div className={`${showSortFilters ? 'visible':'hidden'} grow shrink basis-0 px-4 py-4 justify-start items-center gap-2 flex-col absolute top-10 bg-white z-10 h-auto w-full border-t`}>
        <div 
          className='cursor-pointer text-neutral-950 text-sm font-normal capitalize leading-[14px] tablet:leading-[25.20px]' 
          onClick={() => {
            setShowSortedValue('price high to low')
            setShowSortFilters(false)
          }}
        >
          price high to low
        </div>

        <div 
          className='cursor-pointer text-neutral-950 text-sm font-normal capitalize leading-[14px] tablet:leading-[25.20px]' 
          onClick={() => {
            setShowSortedValue('price low to high')
            setShowSortFilters(false)
          }}
        >
          price low to high
        </div>
        
      </div> 

    </div>
  </div>
  )
}

export default SortFilterDesktop

