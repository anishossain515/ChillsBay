import { Dropdown,DropdownItem,DropdownMenu,DropdownTrigger } from '@nextui-org/react'
import React from 'react'
import {UserIcon} from "@heroicons/react/24/outline";
function DropDown() {
  return (
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
  )
}

export default DropDown