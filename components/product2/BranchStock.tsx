import React, { FC, useState } from 'react'

interface BranchStockProps {
  setBranchStockIsOPen: React.Dispatch<React.SetStateAction<boolean>>;
  branchStockIsOPen: boolean;
}

const BranchStock: FC<BranchStockProps> = ({ setBranchStockIsOPen, branchStockIsOPen}) => {

  const [isData, setisData] = useState(true)
  console.log('branchStockIsOPen', branchStockIsOPen)
  return (
    <div className="w-[1440px] h-[1024px] glasscorlor bg-opacity-[0.3] backdrop-blur-[60px] absolute top-0 left-0 right-0 p-[104px]">
    
    <div className="w-[1440px] h-[1024px] left-0 top-0 absolute bg-black bg-opacity-[0.4] backdrop-blur-[6px]"></div>
    
    <div className="w-[1224px] h-[862px] relative bg-stone-50 border border-neutral-200 px-[48px] py-[32px] inline-flex flex-col">

      <div className="w-[1128px] h-[34px] justify-between items-start inline-flex mb-[16px]">
        <div className="text-neutral-950 text-2xl font-bold capitalize leading-[33.60px]">check in branches stock</div>
        <button 
          onClick={() => setBranchStockIsOPen((prev) => !prev)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#0C0C0C"/>
          </svg>
        </button>
      </div>

      <div className="w-[292px] h-[100px] flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-neutral-950 text-xl font-normal capitalize leading-9">what size are you looking for?</div>
        <div className="w-[264px] h-14 flex-col justify-center items-center flex">
          <div className="self-stretch h-14 px-4 py-2 justify-between items-center inline-flex">
            <div className="text-zinc-600 text-xl font-normal capitalize leading-9">30 mL</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="#606060"/>
            </svg>
          </div>
            <div className="self-stretch h-[0px] border border-zinc-600"></div>
        </div>
      </div>

      <div className='inline-flex items-center gap-[16px] mt-[16px]'>
        <div className="w-[551px] h-14 border-b border-zinc-600 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-14 px-4 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-start items-center gap-2 flex">
              <div className="grow shrink basis-0 h-9 justify-start items-center flex">
                <div className="grow shrink basis-0 h-9 justify-start items-center flex">
                  <div className="text-zinc-600 text-xl font-normal capitalize leading-9">address</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[216px] text-zinc-600 text-xs font-normal capitalize leading-snug">city, street or zip code</div>
        </div>

        <div className="w-[234px] h-12 px-4 py-2 opacity-40 bg-pink-800 justify-center items-center gap-2 inline-flex">
          <div className="opacity-40 text-white text-base font-normal capitalize leading-7">search</div>
        </div>

        <div className="text-neutral-950 text-lg font-normal capitalize leading-loose">or</div>

        <div className="w-[264px] h-12 px-4 py-2 border-2 border-pink-800 justify-center items-center gap-2 inline-flex">
          <div className="w-6 h-6 relative"></div>
          <div className="text-pink-800 text-base font-normal capitalize leading-7">around me</div>
        </div>
      </div>

      <div className='flex mt-[32px] gap-4'>  
        <div className='max-h-[550px] overflow-y-auto overflow-x-hidden'>
          { isData && (
            <div className="w-[552px] h-[714px] flex-col justify-start items-start inline-flex overflow-auto">
              <div className="h-[238px] p-4 bg-white border border-neutral-200 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch justify-start items-start gap-1 inline-flex">
                  <div className="w-6 h-6 relative"></div>
                  <div className="grow shrink basis-0">
                    <span className="text-pink-800 text-xl font-bold font-['Open Sans'] leading-7">Dickins & Jones _STR 0502 Richmond</span>
                    <span className="text-neutral-950 text-xl font-bold font-['Open Sans'] leading-7"> </span>
                    <span className="text-zinc-600 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">(2.43 kms)</span>
                  </div>
                </div>
                <div className="self-stretch h-[154px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch h-[90px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="w-6 h-6 relative"></div>
                      <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">80 George Street, Richmond,tw9 1HA</div>
                    </div>
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 relative"></div>
                        <div className="grow shrink basis-0 h-[25px] justify-start items-center gap-1 flex">
                          <div className="flex-col justify-center items-start gap-2 inline-flex">
                            <div>
                              <span className="text-neutral-950 text-base font-bold font-['Open Sans'] capitalize leading-snug">closed </span>
                              <span className="text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">- opens at</span>
                            </div>
                          </div>
                          <div className="text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">6:00pm</div>
                        </div>
                      </div>
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 relative"></div>
                        <div className="grow shrink basis-0 text-neutral-950 text-base font-bold font-['Open Sans'] capitalize leading-snug">4 in stock</div>
                      </div>
                  </div>
                  <div className="self-stretch h-12 px-4 py-2 border-2 border-pink-800 justify-center items-center gap-2 inline-flex">
                    <div className="text-pink-800 text-base font-normal font-['Open Sans'] capitalize leading-7"> more details</div>
                  </div>
                </div>
              </div>
              <div className="h-[238px] p-4 bg-white border-l border-r border-b border-neutral-200 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch justify-start items-start gap-1 inline-flex">
                  <div className="w-6 h-6 relative"></div>
                  <div className="grow shrink basis-0">
                    <span className="text-neutral-950 text-xl font-bold font-['Open Sans'] leading-7">Dickins & Jones _STR 0502 Richmond </span>
                    <span className="text-zinc-600 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">(2.43 kms)</span>
                  </div>
                </div>
                <div className="self-stretch h-[154px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch h-[90px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="w-6 h-6 relative"></div>
                      <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">80 George Street, Richmond,tw9 1HA</div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="w-6 h-6 relative"></div>
                      <div className="grow shrink basis-0 h-[25px] justify-start items-center gap-1 flex">
                        <div className="flex-col justify-center items-start gap-2 inline-flex">
                          <div>
                            <span className="text-neutral-950 text-base font-bold font-['Open Sans'] capitalize leading-snug">closed </span>
                            <span className="text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">- opens at</span>
                            </div>
                          </div>
                        <div className="text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">6:00pm</div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="w-6 h-6 relative"></div>
                      <div className="grow shrink basis-0 text-neutral-950 text-base font-bold font-['Open Sans'] capitalize leading-snug">4 in stock</div>
                    </div>
                  </div>
                  <div className="self-stretch h-12 px-4 py-2 border-2 border-neutral-950 justify-center items-center gap-2 inline-flex">
                    <div className="text-neutral-950 text-base font-normal font-['Open Sans'] capitalize leading-7"> more details</div>
                  </div>
                </div>
              </div>
              <div className="h-[238px] p-4 bg-white border-l border-r border-b border-neutral-200 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch justify-start items-start gap-1 inline-flex">
                  <div className="w-6 h-6 relative"></div>
                  <div className="grow shrink basis-0">
                    <span className="text-neutral-950 text-xl font-bold font-['Open Sans'] leading-7">Dickins & Jones _STR 0502 Richmond </span>
                    <span className="text-zinc-600 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">(2.43 kms)</span>
                  </div>
                </div>
                <div className="self-stretch h-[154px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch h-[90px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="w-6 h-6 relative"></div>
                      <div className="grow shrink basis-0 text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">80 George Street, Richmond,tw9 1HA</div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 relative"></div>
                        <div className="grow shrink basis-0 h-[25px] justify-start items-center gap-1 flex">
                          <div className="flex-col justify-center items-start gap-2 inline-flex">
                            <div>
                              <span className="text-neutral-950 text-base font-bold font-['Open Sans'] capitalize leading-snug">closed </span>
                              <span className="text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">- opens at</span>
                            </div>
                          </div>
                          <div className="text-neutral-950 text-sm font-normal font-['Open Sans'] capitalize leading-[25.20px]">6:00pm</div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="w-6 h-6 relative"></div>
                      <div className="grow shrink basis-0 text-neutral-950 text-base font-bold font-['Open Sans'] capitalize leading-snug">4 in stock</div>
                    </div>
                  </div>
                  <div className="self-stretch h-12 px-4 py-2 border-2 border-neutral-950 justify-center items-center gap-2 inline-flex">
                    <div className="text-neutral-950 text-base font-normal font-['Open Sans'] capitalize leading-7"> more details</div>
                  </div>
                </div>
              </div>
            </div>)
          }
          { !isData && (
            <div className="w-[552px] h-[500px] flex-col justify-center items-center inline-flex">
              <div className="w-[423px] text-center text-neutral-950 text-2xl font-bold font-['Open Sans'] capitalize leading-[33.60px]">please insert the street, zone, or zip code.</div>
            </div>
          )}
        </div>
        <div className='relative'>
          <div className="w-[552px] h-[544px] opacity-40 bg-zinc-600 "></div>
          <div className="w-[423px] text-center text-neutral-950 text-2xl font-bold capitalize leading-[33.60px] absolute mt-[32px]">please insert the street, zone, or zip code.</div>
        </div>

      </div>

    </div>
</div>
  )
}

export default BranchStock