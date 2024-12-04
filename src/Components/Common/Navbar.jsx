import React, { useState } from "react";
import {
  Navbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
  Badge,
} from "@nextui-org/react";

import {
  UserIcon,
  ChevronDownIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
function NavbarArea() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);

  const ToggleMenuDrop = () => {
    setIsDropMenuOpen(!isDropMenuOpen);
  };

  const menuItems = ["Eat & Drink", "Events", "Club"];
  const dropMenuItems = [
    "My Profile",
    "Pay With Crypto",
    "Cart",
    "Contact Us",
    "Log Out",
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="py-2"
      maxWidth="2xl"
      isBlurred='false'
      position='static'
    >
      <NavbarBrand justify="start" className="md:w-full w-44">
        <img src="/logo.png" alt="Logo" />
      </NavbarBrand>

      <NavbarContent justify="end">
        <div className="space-x-8 lg:flex hidden">
          <NavbarItem className="text-Dark_Indigo text-[18px] cursor-pointer">
            Eat & Drink
          </NavbarItem>
          <NavbarItem className="text-Dark_Indigo text-[18px] cursor-pointer">
            Club{" "}
            <sup className="bg-Dodger_Blue text-[12px] text-white px-[9px] py-[5px] rounded-[23px]">
              +HOT
            </sup>
          </NavbarItem>

          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="none"
                  className="text-Dark_Indigo text-[18px] cursor-pointer"
                >
                  Things to do{" "}
                  <ChevronDownIcon className="size-4 text-Dodger_Blue" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="water">Water Sports</DropdownItem>
                <DropdownItem key="day">Day Parties</DropdownItem>
                <DropdownItem key="outdoors">Outdoors</DropdownItem>
                <DropdownItem key="rentals">Rentals</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem className="cursor-pointer">
            <Badge content="3" color="primary" className="size-[30px]">
              <ShoppingCartIcon className="size-[30px] text-Dark_Indigo" />
            </Badge>
          </NavbarItem>

          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="none"
                  className="text-Dark_Indigo text-[18px] cursor-pointer"
                >
                  <UserIcon className="text-Dark_Indigo size-6" /> Account
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="profile">
                <DropdownItem key="profile">My Profile</DropdownItem>
                <DropdownItem key="history">My History</DropdownItem>
                <DropdownItem key="sign out">Sign Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </div>

        {/* Toggle Button */}
        <NavbarMenuToggle
          aria-level={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        {/* Toggle Button */}
        <Button
          color="primary"
          className="font-bold font-Red_Hat md:flex hidden"
        >
          Contact Now
        </Button>
      </NavbarContent>

      {/* MenuBar */}
      <NavbarMenu className="bg-[#F5FAFF] py-10 text-[#26395C] font-medium text-2xl gap-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={index}
            className="transition-all duration-500 ease-in-out"
          >
            {item}
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <button
            onClick={ToggleMenuDrop}
            className="inline-flex justify-between items-center w-full transition-all duration-300 ease-in-out"
          >
            Things to do{" "}
            <ChevronDownIcon
              className={`size-6 transform transition-transform ${
                isDropMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </NavbarMenuItem>

        {/* Dropdown Menu */}
        <NavbarContent
          className={`flex flex-col items-start space-y-4 transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
            isDropMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <hr className="bg-[#C4C4C4] h-[1px] w-full" />
          {dropMenuItems.map((item, index) => (
            <NavbarMenuItem
              key={index}
              className="transition-all duration-500 ease-in-out transform"
            >
              {item}
            </NavbarMenuItem>
          ))}
        </NavbarContent>

        {/* Get Started Button */}
        <NavbarItem className="transition-opacity duration-500 ease-in-out">
          <Button
            color="primary"
            className="px-[28px] py-3 transform transition-transform duration-300 ease-in-out translate hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarArea;
