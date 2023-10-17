import React from 'react'
import { GrFormClose } from 'react-icons/gr'

interface AppliedFiltersProps {
  appliedFilters: string[];
  removeFilter: (filterToRemove: string) => void
}

const AppliedFiltersMobile:React.FC<AppliedFiltersProps> = ({ appliedFilters, removeFilter}) => {
  return (

    <div className={`${appliedFilters.length > 0 ? 'visible':'hidden'} w-full h-auto py-5 flex-col justify-center items-start gap-3 mt-20 px-[5px] mobile-m:px-[25px] mobile-l:px-[50px] tablet:px-[86px] inline-flex laptop:hidden`}>
      <div className="w-full justify-between items-start inline-flex">
        
        <div className="text-neutral-950 text-sm font-semibold font-['Open Sans'] leading-tight">Applied filters</div>
    
        <button className="justify-center items-center gap-2 flex"
          onClick={() => removeFilter('all')}  
        >
          <div className="text-pink-800 text-sm font-normal font-['Open Sans'] leading-normal">clear all filters</div>
        </button>

      </div>

      <div className="h-auto flex-col justify-start items-start gap-1 flex">
  
        <div className="grid grid-cols-2 tablet:grid-cols-4  pl-3 pr-2 py-1 justify-start items-center gap-2">
          { appliedFilters?.map((value,index) => (
            <div
              key={index} 
              className="inline-flex items-center justify-between h-8 gap-2 py-1 pl-3 pr-2 border border-neutral-200"
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
        </div>


      </div>
    </div>
  )
}

export default AppliedFiltersMobile