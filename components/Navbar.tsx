"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { navLinks, NavItem } from "@/constants/page";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleDropdown = (label: string) => {
    setDropdownOpen(dropdownOpen === label ? null : label);
  };

  return (
    <nav className="sticky top-0 flex-between z-50 w-full bg-white py-3 border-b border-gray-2 glassmorphism shadow-md ">
      <div className="container mx-auto md:max-w-[1280px] flex-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logo.svg"
            width={140}
            height={40}
            alt="Humanity Logo"
            className=""
          />
        </Link>
        <div>
          <div className="hidden md:flex items-center gap-4">
            <div className="">
              <div className="flex items-baseline">
                <ul className="flex gap-x-6">
                  {navLinks.map((item: NavItem, index: number) => {
                    const isActive =
                      pathname === item.route ||
                      pathname.startsWith(`${item.route}/`);

                    return (
                      <li
                        key={index}
                        className="group"
                        onClick={() => handleDropdown(item.label)}
                      >
                        {item.subMenu ? (
                          <div>
                            <button
                              onClick={() => handleDropdown(item.label)}
                              className={cn("flex items-center navTextColor", {
                                "text-orange-1": isActive,
                              })}
                            >
                              {item.label}
                              <svg
                                className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            <ul
                              className={`${dropdownOpen === item.label ? "block" : "hidden"
                                } absolute mt-2 bg-white rounded-md shadow-lg`}
                            >
                              {item.subMenu.map((subItem: NavItem, subIndex: number) => (
                                <li key={subIndex} className={cn(
                                  " px-3 ",
                                  { "text-orange-1": isActive }
                                )}
                                >
                                  <Link
                                    href={subItem.route}
                                    className={cn(
                                      "block px-3 py-2 navTextColor",
                                      { "text-orange-1": isActive }
                                    )}
                                  >
                                    {subItem.label}
                                  </Link>
                                  {item.subMenu && subIndex < item.subMenu.length - 1 && (
                                    <hr className="border-border-1/80" />
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <Link
                            href={item.route}
                            className={cn("px-3 py-2 navTextColor", {
                              "text-orange-1": isActive,
                            })}
                          >
                            {item.label}
                          </Link>
                        )}
                        
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <Button className="button-orange">
              <Link href="/our-causes">Donate</Link>
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
