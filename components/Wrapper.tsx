import React, { FC } from 'react';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}


const Wrapper: FC<WrapperProps> = ({children, className}) => {
  return (
    <div className={`max-w-[1440px] mx-auto mt-[32px] relative bg-stone-50 ${className}`}>
      {children}
    </div>
  )
}

export default Wrapper
