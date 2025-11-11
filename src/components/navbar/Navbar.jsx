import React, { useState } from "react";
import Flex from "../../layouts/Flex";
import Container from "../../layouts/Container";
import Logo from "../../layouts/Logo";
import { Link, NavLink } from "react-router";
import { BiCart, BiHeart, BiUser } from "react-icons/bi";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isShow, setIsShow]=useState(false)
  const navItems = [
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
      link: "/registration",
    },
  ];
  return (
    <div className="font-body mt-[47px] pb-[23px] border-b border-black/30">
      <Container>
        <Flex>
          <Logo />
          <Flex className="justify-center hidden xl:flex gap-x-[48px]">
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "border-b" : "hover:border-b"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </Flex>
          <Menu className="xl:hidden" onClick={()=>setIsShow(!isShow)}/>
          <Flex className="justify-end hidden xl:flex gap-x-5">
            <input
              type="text"
              className="bg-[#F5F5F5] px-5 py-3 pr-[70px] rounded-s"
              placeholder="What are you looking for?"
            />
            <Link to="/wishlist" className="p-[10px] cursor-pointer hover:bg-primary rounded-full transition-colors duration-150 hover:text-white">
              <BiHeart size={26} />
            </Link>
            <Link to="/cart" className="p-[10px] cursor-pointer hover:bg-primary rounded-full transition-colors duration-150 hover:text-white">
              <BiCart size={26} />
            </Link>
            <Link
              to="/my-account"
              className="p-[10px] cursor-pointer hover:bg-primary rounded-full transition-colors duration-150 hover:text-white"
            >
              <BiUser size={26} />
            </Link>
          </Flex>
        </Flex>
          {
            isShow && (
              <>
              <Flex className="justify-center mt-10 flex-col xl:hidden gap-y-[18px]">
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                onClick={()=>setIsShow(false)}
                className={({ isActive }) =>
                  isActive ? "border-b" : "hover:border-b"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </Flex>
          <Flex className="justify-center xl:hidden gap-x-5">
            <input
              type="text"
              className="bg-[#F5F5F5] px-5 my-5 py-3 pr-[70px] w-full rounded-s"
              placeholder="What are you looking for?"
            />
            <Link to="/wishlist" className="p-[10px] cursor-pointer hover:bg-primary rounded-full transition-colors duration-150 hover:text-white">
              <BiHeart size={26} />
            </Link>
            <Link to="/cart" className="p-[10px] cursor-pointer hover:bg-primary rounded-full transition-colors duration-150 hover:text-white">
              <BiCart size={26} />
            </Link>
            <Link
              to="/dashboard"
              className="p-[10px] cursor-pointer hover:bg-primary rounded-full transition-colors duration-150 hover:text-white"
            >
              <BiUser size={26} />
            </Link>
          </Flex>
              </>
            )
          }
      </Container>
    </div>
  );
};

export default Navbar;
