import React from 'react';
import Image from "next/image";

function LargeCard2({img, title, description, buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="text-white text-4xl font-bold mb-3 w-64">{title}</h3>
                <p className="text-white text-xl font-bold">{description}</p>
                <button className=" font-bold text-sm text-black bg-white px-4 py-2 rounded-lg mt-5">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard2
