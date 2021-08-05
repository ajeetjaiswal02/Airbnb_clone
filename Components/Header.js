import React from 'react'
import Image from "next/image"
import {GlobeAltIcon, MenuIcon, UserCircleIcon, SearchIcon} from "@heroicons/react/solid"

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">

            {/*Left header*/}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
            </div>

            {/*Middle header*/}
            <div className="flex items-center  md:border-2 rounded-full
            py-2 md:shadow-sm"
            >
                <input className="flex-grow pl-5 bg-transparent 
                outline-none text-sm placeholder-gray-600 text-gray-400 " 
                type="text" placeholder="Start your Search" />
                <SearchIcon className="hidden md:inline-flex  
                h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" 
                />
            </div>

            {/*Right header*/}

            <div className="flex items-center justify-end text-gray-500 space-x-3 ">
                <p className="hidden md:inline cursor-pointer">Beacome a Host</p>
                <GlobeAltIcon className="h-6" />

                <div className="flex items-center space-x-4 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            

        </header>
    )
}

export default Header
