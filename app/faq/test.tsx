{dummyData.map((item: any, index) => (
    <div key={index} className="ml-6 w-3/4">
      <div onClick={handleIsOpen} className="flex bg-stone-100 px-3 py-4">
        <h1 className={`mr-auto font-semibold ${isOpen ? 'text-[#A10550]' : ''}`}>
          {item.question}
        </h1>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <hr />
      <div
        className={`overflow-hidden bg-stone-100  duration-300 ${
          isOpen ? 'max-h-52' : 'max-h-0'
        }`}
      >
        {
          isOpen && (
            <p className="space-y-2 px-8 py-6">{item.answer}</p>    
          )
        }
      </div>
    </div>
  ))
  }