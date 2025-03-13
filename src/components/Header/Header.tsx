"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navbarConfig = [
    { link: "/", text: "Home" },
    { link: "#interier", text: "Interieur Ontwerp" },
    { link: "#projects", text: "Projecten" },
    { link: "#contact", text: "Contact" },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 🔹 Функція для плавного скролу
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <header className="flex justify-between items-center p-4 border-b shadow-md bg-emerald-50">
            <div className="text-2xl font-serif font-semibold text-gray-900 ml-20">
                <span>Aleksander Klusbedrijf</span>
                <p className="text-sm text-gray-600 tracking-widest">Interieurrenovaties</p>
            </div>

            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 text-2xl">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <nav className="hidden md:flex space-x-8 text-gray-900 font-bold mr-20 hover:text-green-900 underline">
                {navbarConfig.map((item) =>
                    item.link.startsWith("#") ? (
                        <a key={item.link} href={item.link} onClick={(e) => handleScroll(e, item.link.substring(1))} className="pb-1 cursor-pointer">
                            {item.text}
                        </a>
                    ) : (
                        <Link key={item.link} href={item.link} className="pb-1 cursor-pointer">
                            {item.text}
                        </Link>
                    )
                )}
            </nav>
        </header>
    );

   
};

export default Header;



