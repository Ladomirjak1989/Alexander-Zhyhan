'use client';
import React from "react";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative w-full h-[900px] md:h-[600px] flex items-center justify-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/img/imgbanner1.jpg')" }}>
            {/* Контейнер контенту */}
            <div className="text-white mr-auto px-6 md:px-12 max-w-lg">
                <h1 className="text-3xl md:text-5xl font-bold">END TO END RENOVATIEBEHEER</h1>
                <p className="mt-4 text-lg md:text-xl font-light">Bij Alexander Zhuhan begrijpen we dat een renovatieproject een omvangrijke taak is.</p>

                <Link href="/contact" className="mt-6 border-4 inline-block px-6 py-3 border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                    NEEM CONTACT OP →
                </Link>
            </div>

            {/* Інформаційний блок */}
            <div className="relative h-full w-full">
            <div className="absolute z-50 right-0 bottom-[-40px] bg-green-950 text-white p-6 md:p-8 text-sm md:text-base max-w-3xl ml-6 md:ml-12">
                <p>
                    Bij Alexander Zhuhan begrijpen we dat een renovatieproject een omvangrijke taak is. Daarom bieden wij een end-to-end renovatie-ervaring, waarbij we elke stap van het proces beheren, van ontwerp tot constructie en projectmanagement. Wij nemen alle zorgen uit handen, zodat u zich kunt concentreren op het eindresultaat.
                </p>
                <p className="mt-2 font-bold">Bel +31 (0) 57-63-48-94</p>
                <hr className="mt-2 w-64 border-green-700" />
            </div>
            </div>
        </section>
        
    );
};

export default Banner;