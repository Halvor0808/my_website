'use client'
import { React, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {capitalize} from '../utils/stringUtils'


const NavList = ({tabs}) => {

  const pathname = usePathname().slice(1) /*Remove '/' from path*/  
  
  const [activeTab, setActiveTab] = useState(pathname)
  const handleTabSelection = (tab) => {
    setActiveTab(tab);  
  }
  
  return (
    <nav className="bg-neutral-800 border-b-neutral-400/50 border-b-2 border-solid mb-6">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-2">

              {tabs.map(tab => (
                <Link 
                key={tab}
                href={tab}
                className={"navTab " + (activeTab === tab ? 'activeTab' : '')}
                onClick={() => handleTabSelection(tab)}
                >
                  {capitalize(tab)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavList;
