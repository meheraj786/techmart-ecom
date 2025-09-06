import React from 'react'
import Flex from '../../layouts/Flex'
import Logo from '../../layouts/Logo'
import { NavLink } from 'react-router'

const Navbar = () => {
  const navItems=[
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Sign Up",
      link: "/signup",
    },
  ]
  return (
    <div className='font-body'>
      <Flex>
      <Logo/>
      {
        navItems.map((item)=>(
          <NavLink to={item.link} className={({isActive})=>isActive ? "border-b":"hover:border-b"}>
            {item.name}
          </NavLink>
        ))
      }

      </Flex>
    </div>
  )
}

export default Navbar