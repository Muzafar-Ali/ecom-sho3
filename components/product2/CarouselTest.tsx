'use client'
import React, { useEffect } from 'react'

const CarouselTest = () => {

  useEffect(() => {
    // Access the document object here or trigger your functions that use it.
    const box = document.querySelector('.product-container');

    const prevSlide = () => {
      let width = box?.clientWidth;
      box?.scrollBy({
        left: -(width ?? 0),
        behavior: 'smooth'
      });
    }

    const nextSlide = () => {
      let width = box?.clientWidth;
      box?.scrollBy({
        left: width ?? 0,
        behavior: 'smooth'
      });
    }

    // Make sure to clean up any event listeners or resources when the component unmounts.
    return () => {
      // Cleanup code here, if necessary.
    };
  }, []);

  return (
    <div className='relative overflow-hidden p-[26px] w-[1580px]'>

      <button className='border-none w-16 flex justify-center items-center bg-black/20 absolute top-[130px] left-[20px] text-5xl text-white z-10 rounded-full'
        onClick={revSlide}
      >
        <p>&lt;</p>
      </button>

      <button className='border-none w-16 flex justify-center items-center bg-black/20 absolute top-[130px] right-[180px] text-5xl text-white z-10 rounded-full'
        onClick={nextSlide}
      >
        <p>&gt;</p>
      </button>

      <div className="product-container">
        
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 1</h1>
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 2</h1>
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 3</h1>
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 4</h1>
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 5</h1>
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 6</h1>
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 7</h1>
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 8</h1>
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 9</h1>
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 10</h1>
          <h1 className='min-w-[250px] max-w-[150px] h-[250px] bg-black m-[10px] text-white'>Mycard 11</h1>
 
      </div>

    </div>
  )
}

export default CarouselTest