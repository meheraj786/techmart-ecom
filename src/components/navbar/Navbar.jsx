import React from "react";
import Flex from "../../layouts/Flex";
import Container from "../../layouts/Container";
import Logo from "../../layouts/Logo";
import { Link, NavLink } from "react-router";
import { GiLoveHowl } from "react-icons/gi";
import { PiCarThin } from "react-icons/pi";
import { BiCart, BiHeart, BiUser } from "react-icons/bi";

const Navbar = () => {
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
          <Flex className="justify-center gap-x-[48px]">
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
          <Flex className="justify-end gap-x-5">
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
              to="/dashboard"
              className="p-[10px] cursor-pointer hover:bg-primary rounded-full transition-colors duration-150 hover:text-white"
            >
              <BiUser size={26} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
