import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useRouter } from 'next/dist/client/router'
import { format } from "date-fns";
function Search() {
    const router = useRouter();

    const {location, startDate, endDate, nofoguest} = router.query;

    const formatedStartDate = format(new Date(startDate),"dd MMMM yy")
    const formatedendDate = format(new Date(endDate),"dd MMMM yy")

    const range = `${formatedStartDate} - ${formatedendDate}`;
    
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${nofoguest}`} />


            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays {range} for {nofoguest} number of guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6 ">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-500 whitespace-nowrap">
                        <p className="button">Cancelation Flexiblity</p>
                        <p className="button">Types of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Room</p>
                        <p className="button">More Filter</p> 

                    </div>

                </section>

            </main>




            <Footer />
        </div>
    )
}

export default Search
