import React from 'react'

const Button = ({children, className}) => {
  return (
    <div className={`px-[48px] py-[16px] bg-primary text-white font-body font-medium rounded-[4px] cursor-pointer hover:bg-orange-700 transition-colors duration-150 ${className}`}>{children || "View Products"}</div>
  )
}

export default Button