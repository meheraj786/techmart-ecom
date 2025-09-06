import React from 'react'

const Container = ({children}) => {
  return (
    <div className='xl:w-[1170px] w-full px-3 xl:px-0 mx-auto'>{children}</div>
  )
}

export default Container