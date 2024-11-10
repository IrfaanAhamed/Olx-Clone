import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { categoriesData } from "./data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
function Categories() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="border-y-2 border-slate-100 h-8 flex items-center px-2">
      <Popover>
        <PopoverTrigger
          onClick={() => setisOpen(!isOpen)}
          className="flex items-center font-bold"
        >
          All Categories
          <IoIosArrowDown
            className={`text-2xl transition-transform duration-300 
            ${isOpen ? "rotate-180" : ""}`}
          />
        </PopoverTrigger>
        <PopoverContent className="w-full grid grid-cols-1  p-1 md:grid-cols-4 ">
          {categoriesData.map((category, i) => (
            <div
              className="md:px-4 px-2 py-2 rounded-sm duration-300"
              key={i}
            >
              <a
                className="md:font-bold text-md mb-2 hover:text-blue-600"
                href={category.href}
              >
                {category.label}
              </a>
              <ul className="space-y-1 hidden md:block">
                {category.subcategories.map((sub, j) => (
                  <li key={j}>
                    <a
                      href={sub.href}
                      className="text-sm text-gray-700 hover:text-blue-600"
                    >
                      {sub.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </PopoverContent>
      </Popover>
      <div className="md:flex md:flex- items-center space-x-5 ml-5 hidden whitespace-nowrap ">
        {categoriesData.map((item, i) => (
          <a
            href={item.href}
            className="text-sm hover:text-blue-500 duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Categories;
