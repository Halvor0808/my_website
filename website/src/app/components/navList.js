import React from "react";

const NavList = () => {
  return (
    <nav className="bg-neutral-800 border-b-neutral-400/50 border-b-2 border-solid mb-6">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {/* Current: ""bg-neutral-900/50 text-white rounded-md px-3 py-2 text-sm font-medium  
                border-neutral-900 border-2 border-solid", 
              Default: "text-gray-300 hover:bg-neutral-700/50 hover:text-white rounded-md px-3 py-2 
                text-sm font-medium hover:border-neutral-900 border-2 hover:border-solid"
                style={{"border-color": "transparent" }}  */}
              <a
                href=""
                className="bg-neutral-900/50 text-white rounded-md px-3 py-2 text-sm font-medium  border-neutral-900 border-2 border-solid"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#Projects"
                className="text-gray-300 hover:bg-neutral-700/50 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:border-neutral-900 border-2 hover:border-solid"
                style={{"border-color": "transparent" }} 
              >
                Projects
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </nav>
  
  );
}
export default NavList;
