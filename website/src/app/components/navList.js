'use client'
import { React, useState } from "react";
import Link from "next/link";

const NavList = () => {

  const [activeTab, setActiveTab] = useState("home")
  const handleTabSelection = (tab) => {
    setActiveTab(tab);
  }
  
  return (
    <nav className="bg-neutral-800 border-b-neutral-400/50 border-b-2 border-solid mb-6">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-4">
              <Link href="/"
                className={activeTab === "home" ? "text-red-600" : ""}
                onClick={() => handleTabSelection("home")}>
                Home
              </Link>

              <Link href="/projects"
                className={activeTab === "projects" ? "text-red-600" : ""}
                onClick={() => handleTabSelection("projects")}>
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavList;
