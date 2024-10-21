import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className=" self-center whitespace-nowrap text-sm font-bold sm:text-xl "
      >
        <div className="flex items-center ml-0">
          <img
            src="images/logo.png"
            alt="logo"
            className="h-10 w-20 mr-1 rounded-md "
          />
          <span className="text-white font-semibold dark:text-white px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
            Blog
          </span>
        </div>
      </Link>
      <form>
        <TextInput 
        type="text"
        placeholder="Search..."
        rightIcon={AiOutlineSearch}
        className=" hidden lg:inline"
        />
        <Button className="w-12 h-10 lg:hidden" color='gray' pill><AiOutlineSearch /></Button>
      </form>
    </Navbar>
  );
}

export default Header;
