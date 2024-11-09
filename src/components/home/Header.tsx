import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdMyLocation } from "react-icons/md";
import { RiChat3Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { MdNotificationsNone } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import { IoSearchOutline } from "react-icons/io5";
import { location, remainingButtons } from "./datas";
import { Command, CommandGroup, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const handleLocationClick = (item) => {
    setSelectedLocation((prevSelected) => {
      if (!prevSelected.some((loc) => loc.state === item.state)) {
        const updatedSelected = [item, ...prevSelected].slice(0, 3);
        return updatedSelected;
      }
      return prevSelected;
    });
  };

  return (
    <div className="w-full h-16 flex  bg-slate-100 ">
      {/* left header */}
      <div className="gap-2 basis-1/4 flex items-center relative ml-2">
        <Link to="/Olx-Clone/">
          <img
            className="sm:w-14 w-10"
            src="https://www.svgrepo.com/show/504684/olx.svg"
            alt="logo"
          />
        </Link>

        <Command
          className="border sm:border-slate-950 min-w-7 h-8 sm:h-10 flex justify-center max-w-60
          sm:rounded-sm rounded-full focus:outline focus:outline-offset-2 focus:outline-cyan-400"
        >
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="flex items-center justify-center">
              <div className="hidden sm:flex items-center mx-1">
                <IoSearchOutline
                  className="text-3xl"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
                <Input
                  placeholder="Search city or area"
                  value={selectedLocation[0]?.state || ""}
                  style={{
                    border: "none",
                    outline: "none",
                    boxShadow: "none"
                  }}
                />
                <IoIosArrowDown
                  className={`text-3xl transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className="sm:hidden">
                <CiLocationOn className="sm:text-xl text-2xl" />
              </div>
            </PopoverTrigger>

            <PopoverContent className="w-[240px]">
              <CommandList>
                <CommandGroup>
                  <div className="flex items-center text-blue-600">
                    <MdMyLocation className="text-[35px]" />
                    <p className="text-sm pl-2">
                      <span className="font-bold"> Use current location</span>
                      <br /> Location blocked. Check browser/phone settings.
                    </p>
                  </div>
                </CommandGroup>
                <hr className="my-2" />
                <CommandGroup>
                  <h5 className="uppercase text-[10px] text-slate-500 mb-3">
                    Recent locations
                  </h5>
                  {selectedLocation.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center py-2 hover:bg-slate-100 rounded-md"
                    >
                      <CiLocationOn className="text-xl" />
                      <p className="text-sm pl-2">{item.state}</p>
                    </div>
                  ))}
                  {selectedLocation.length === 0 && (
                    <p className="text-sm text-gray-500">No recent locations</p>
                  )}
                </CommandGroup>
                <hr className="my-2" />
                <CommandGroup>
                  <h5 className="uppercase text-[10px] text-slate-500 mb-3">
                    Popular locations
                  </h5>
                  {location.slice(0, 10).map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center py-2 hover:bg-slate-100 rounded-md cursor-pointer"
                      onClick={() => handleLocationClick(item)}
                    >
                      <CiLocationOn className="text-xl" />
                      <p className="text-sm pl-2">{item.state}</p>
                    </div>
                  ))}
                </CommandGroup>
              </CommandList>
            </PopoverContent>
          </Popover>
        </Command>
      </div>
      {/* middle header */}
      <div
        className="w-full md:min-w-[500px] ml-3 flex
        basis-1/2 items-center"
      >
        <input
          className="flex-1 ml-2 rounded-l-sm rounded-r-none h-10 border hidden sm:block 
        border-black md:max-w-1/2 text-sm pl-2 focus:outline focus:outline-offset-2 
        focus:outline-cyan-400"
          placeholder="Find Cars, Mobile Phones and more..."
        />
        <div
          className="sm:w-10 sm:h-10 bg-slate-700 flex items-center
         justify-center sm:rounded-r-sm sm:rounded-l-none  rounded-full h-8 w-8 ml-1 sm:ml-0"
        >
          <IoSearchOutline className="text-white text-xl md:text-2xl" />
        </div>
      </div>
      {/* right header */}
      <div className=" basis-1/3 flex items-center justify-around flex-row-reverse sm:flex-row">
        <Popover>
          <PopoverTrigger
            className=" h-full pl-3 text-sm flex items-center"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <p className="uppercase font-bold">English</p>
            <IoIosArrowDown
              className={`text-3xl transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </PopoverTrigger>

          <PopoverContent
            className="max-w-56"
            onOpenChange={(open) => setIsOpen(open)}
          >
            <div className="flex items-center justify-between">
              <p>English</p> <FaCheck className="text-xl" />
            </div>
          </PopoverContent>
        </Popover>
        <div className="rounded-full bg bg-transparent relative text-black hover:bg-cyan-100 focus:ring-2 focus:ring-cyan-400 p-2">
          <RiChat3Line className="text-2xl" />
          <span className="w-3 rounded-full h-3 bg-cyan-300 absolute top-2 left-6"></span>
        </div>
        <div className="rounded-full bg bg-transparent relative text-black hover:bg-cyan-100 focus:ring-2 focus:ring-cyan-400 p-2">
          <MdNotificationsNone className="text-2xl" />
          <span className="w-3 rounded-full h-3 bg-cyan-300 absolute top-2 left-5"></span>
        </div>

        <div className="">
          <Popover>
            <PopoverTrigger className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <IoIosArrowDown className="text-2xl" />
            </PopoverTrigger>
            <PopoverContent className="mr-20 mt-2">
              <div className="space-y-4">
                <div className="flex items-center ">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h4 className="font-extrabold text-lg ml-2">Irfan</h4>
                </div>
                <Button className="w-full text-sm font-bold hover:bg-white hover:text-black hover:outline">
                  View and edit profile
                </Button>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-sm">1 step left</h3>
                  <Progress value={33} className="text-yellow-400" />

                  <p className="text-xs text-slate-500">
                    We are built on trust. Help one another to get to know each
                    other better.
                  </p>
                  <hr />
                </div>
                <div>
                  {remainingButtons.map((item, i) => (
                    <div
                      key={i}
                      className="hover:bg-slate-200 flex items-center gap-2 py-2 rounded-md pl-3"
                    >
                      <div className="text-lg">{item.icon}</div>
                      <h3 className="text-md pl-2">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center">
          <div className="relative font-extrabold rounded-full hover:bg-white p-3 py-4">
            <span
              className=" cursor-pointer
              before:absolute before:inset-1 before:rounded-full
              before:border-[6px] before:border-t-yellow-400
            before:border-r-teal-400 before:border-b-blue-500 before:border-l-yellow-400"
            />

            <div className=" flex text-sm items-center space-x-1 px-3 rounded-full">
              <FaPlus className="" />
              <span className="font-extrabold text-xs">SELL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
