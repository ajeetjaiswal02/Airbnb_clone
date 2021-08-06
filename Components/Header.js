import React, { useState } from 'react'
import Image from "next/image"
import {GlobeAltIcon, MenuIcon, UserCircleIcon,UserIcon, SearchIcon} from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';



function Header({placeholder}) {
    const [searchInput , setserchInput] = useState("");
    const [startDate , setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [nofoguest, setNoofGuest] = useState(1);
    const router = useRouter();

    
    const handleSelect = (ranges) => {
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    
    const reset = () => {
        setserchInput("")
    }
    
    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                nofoguest
            },

        })
    }
   

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">

            {/*Left header*/}
            <div onClick={()=> router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
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
                type="text" placeholder={placeholder || "start your search"} value={searchInput} onChange={(e) => setserchInput(e.target.value)} />
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

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate = {new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">
                            Number of Guests
                        </h2> 

                        <UserIcon className="h-5" />
                        <input value={nofoguest} type="number" 
                        className="w-12 pl-2 text-lg outline-none text-red-500"
                        min={1}
                        onChange={(e) => setNoofGuest(e.target.value)} 
                        />
                    </div>

                    <div className="flex">
                        <button className="flex-grow" onClick={reset}>Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>

                </div>
            )}

            

        </header>
    )
}

export default Header
