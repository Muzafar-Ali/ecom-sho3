'use client';
import { useState } from 'react';
import { dummyData } from './dummyData';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const faqs = () => {
  const [isOpen, setisOpen] = useState(false);
  const [dataChange, setdataChange] = useState();

  const handleIsOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <section className="my-32 flex">
      {/* Left Section */}
      <div className="ml-12 h-32 w-[488px] bg-stone-100 font-semibold">
        <div className="p-2">Product Information</div>
        <hr></hr>
        <div className="p-2">Gifts</div>
        <hr />
        <div className="p-2">Career</div>
        <hr />
      </div>
      {/* Left Section */}
      <div className="flex flex-col">
      <div  className="ml-6 w-3/4">
      <div onClick={handleIsOpen} className="flex bg-stone-100 px-3 py-4">
        <h1 className={`mr-auto font-semibold ${isOpen ? 'text-[#A10550]' : ''}`}>
            Does your company test on animals?
        </h1>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <hr />
      <div
        className={`overflow-hidden bg-stone-100  duration-300 ${
          isOpen ? 'max-h-52' : 'max-h-0'
        }`}
      >
        
        <p className="space-y-2 px-8 py-6">
            Beautya has a strong belief that cosmetic animal testing is not necessary and should be eliminated worldwide. We do not test on animals and our company is helping to bring about change in countries where animal testing is conducted on cosmetics as required by law.    
        </p>    

    </div>
    </div>
      
      </div>
    </section>
  );
};

export default faqs;