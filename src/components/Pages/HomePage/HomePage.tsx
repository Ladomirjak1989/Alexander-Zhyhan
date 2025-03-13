'use client';
import Slider from "@/components/Swiper/Swiper";
import React, { useState } from "react";
import { FaDraftingCompass, FaTools, FaBath, FaTimes, FaPlus } from "react-icons/fa";



const services = [
    {
        icon: <FaDraftingCompass size={40} />,
        title: "BOUWTEKENINGEN",
        description: "Het opstellen van gedetailleerde bouwplannen met bekwame architecten en management. Of ze nu aan uw aannemer worden overhandigd of door ons worden beheerd, wij behandelen cruciale details voor optimale oplossingen."
    },
    {
        icon: <FaTools size={40} />,
        title: "BOUWVERGUNNINGEN",
        description: "Denkt u aan een uitbreiding van uw huis? Wij leveren uitgebreide plannen aan de gemeente en beheren het proces totdat uw aannemer met de nieuwe vergunning kan bouwen. Ons team staat klaar om uw visie tot leven te brengen."
    },
    {
        icon: <FaBath size={40} />,
        title: "TOTALE RENOVATIE",
        description: "Kies voor onze complete renovatiediensten. Als projectmanagers voor ons bouwteam handelen wij on-site communicatie, kwaliteitscontroles en prijsafstemming af, waardoor de noodzaak voor een afzonderlijke aannemer vervalt. Waarom ergens anders inhuren als wij het afgedekt hebben?"
    }
];

const accordionItems = [
    {
        title: "Moeiteloos Projectbeheer",
        description: "Wij vereenvoudigen uw leven met uitgebreide diensten en bieden een alles-in-één oplossing voor al uw behoeften.",
        icon: "📑",
    },
    {
        title: "Eenvoudige Klantbetrokkenheid",
        description: "Wij beheren communicatie efficiënt en houden klanten op de hoogte van eventuele veranderingen of complicaties gedurende het proces.",
        icon: "👍",
    },
    {
        title: "Eerlijke Prijzen en Kwaliteitsborging",
        description: " Onze toewijding ligt in transparante en eerlijke prijsstelling, zodat klanten waarde krijgen door duidelijk inzicht in de kosten.",
        icon: "📊",
    },
    {
        title: "Wereldwijde Toegankelijkheid en Gemak",
        description: "Als internationaal bedrijf zijn we gespecialiseerd in het assisteren van expats bij hun renovaties, waarbij we duidelijkheid bieden over kosten en regelgeving, zelfs wanneer ze in het buitenland zijn.",
        icon: "🌍",
    }
];

const HomePage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // 🔹 Функція для плавного скролу
    const handleScroll = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-16 bg-white ml-40">
            <div id="interier" className="flex items-center space-x-4 ml-12">
                <hr className="w-16 border-t-2 border-green-950" />
                <span className="text-sm font-light tracking-wide text-green-900">ONZE</span>
                <h2 className="text-4xl font-bold text-green-950">PROJECT MANAGEMENT</h2>
            </div>
            <p className="ml-12 mt-4 text-lg text-gray-900">We handle it all from start to finish</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
                {services.map((service, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center border-t-4 border-green-900">
                        <div className="flex justify-center mb-4 text-green-900">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-green-900">{service.title}</h3>
                        <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>


            <div id="projects" className="mr-12 p-14 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-28 mt-10">
                {/* Ліва частина - текст */}
                <div className="lg:w-1/2 text-left">

                    <div className="flex items-center space-x-4">
                        <hr className="w-16 border-t-2 border-green-950" />
                        <span className="text-sm font-light tracking-wide text-green-900">ONZE</span>
                        <h2 className="text-4xl font-bold text-green-950">PROJECTEN</h2>
                    </div>
                    <p className="text-gray-900 mt-4 leading-relaxed">
                        Met een passie voor tijdloos design en een praktische benadering van projectmanagement creëren we interieurs die jouw persoonlijke stijl weerspiegelen zonder in te boeten op functionaliteit of duurzaamheid. Van verbluffende ontwerpen tot uitgebreide planning, we geven prioriteit aan duidelijke communicatie, nazorg en het leveren van betrouwbare resultaten waarop je kunt rekenen.
                    </p>
                    <p className="text-gray-900 mt-4 leading-relaxed">
                        Bij Alexander Zhuhan bieden we meer dan alleen mooie interieurs. We creëren ruimtes waar je van zult houden en die je jarenlang zult koesteren, terwijl we zorgen voor een zo soepel en kwalitatief hoogstaand mogelijk proces van begin tot eind. Klaar om jouw ruimte te transformeren? Laten we jouw visie tot leven brengen.
                    </p>
                </div>

                {/* Права частина - Swiper */}
                <div className="lg:w-1/2 w-full">
                    <Slider id="flip" />
                </div>
            </div>


            {/* Акордеон - Diensten */}
            <div className="mt-16 lg:px-16 flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2 text-left">
                    <div className="flex items-center space-x-4">
                        <hr className="w-16 border-t-2 border-green-950" />
                        <span className="text-sm font-light tracking-wide text-green-900">ONZE</span>
                        <h2 className="text-4xl font-bold text-green-950">DIENSTEN</h2>
                    </div>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Transformeer uw huis met onze deskundige renovatieoplossingen, waarmee we luxe uitstralingen leveren zonder de hoge prijzen.
                    </p>
                </div>
                <div className="lg:w-1/2 w-full">
                    {accordionItems.map((item, index) => (
                        <div key={index} className="border-b border-gray-300 py-4">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-900 text-white text-lg">
                                        {item.icon}
                                    </div>
                                    <span className="text-lg font-semibold text-green-900">
                                        {item.title}
                                    </span>
                                </div>
                                {openIndex === index ? (
                                    <FaTimes className="text-green-900" />
                                ) : (
                                    <FaPlus className="text-green-900" />
                                )}
                            </button>
                            {openIndex === index && (
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>


            {/* <div className="mt-16">
                <Slider id="thumbs" />
            </div> */}
        </section>

    );
};

export default HomePage;


// 'use client';
// import Slider from "@/components/Swiper/Swiper";
// import React, { useState } from "react";
// import { FaDraftingCompass, FaTools, FaBath, FaTimes, FaPlus } from "react-icons/fa";

// const services = [
//     {
//         icon: <FaDraftingCompass size={40} />,
//         title: "BOUWTEKENINGEN",
//         description: "Het opstellen van gedetailleerde bouwplannen met bekwame architecten en management. Of ze nu aan uw aannemer worden overhandigd of door ons worden beheerd, wij behandelen cruciale details voor optimale oplossingen."
//     },
//     {
//         icon: <FaTools size={40} />,
//         title: "BOUWVERGUNNINGEN",
//         description: "Denkt u aan een uitbreiding van uw huis? Wij leveren uitgebreide plannen aan de gemeente en beheren het proces totdat uw aannemer met de nieuwe vergunning kan bouwen. Ons team staat klaar om uw visie tot leven te brengen."
//     },
//     {
//         icon: <FaBath size={40} />,
//         title: "TOTALE RENOVATIE",
//         description: "Kies voor onze complete renovatiediensten. Als projectmanagers voor ons bouwteam handelen wij on-site communicatie, kwaliteitscontroles en prijsafstemming af, waardoor de noodzaak voor een afzonderlijke aannemer vervalt. Waarom ergens anders inhuren als wij het afgedekt hebben?"
//     }
// ];

// const accordionItems = [
//     { title: "Moeiteloos Projectbeheer", description: "Wij vereenvoudigen uw leven met uitgebreide diensten en bieden een alles-in-één oplossing voor al uw behoeften.", icon: "📑" },
//     { title: "Eenvoudige Klantbetrokkenheid", description: "Wij beheren communicatie efficiënt en houden klanten op de hoogte van eventuele veranderingen of complicaties gedurende het proces.", icon: "👍" },
//     { title: "Eerlijke Prijzen en Kwaliteitsborging", description: "Onze toewijding ligt in transparante en eerlijke prijsstelling, zodat klanten waarde krijgen door duidelijk inzicht in de kosten.", icon: "📊" },
//     { title: "Wereldwijde Toegankelijkheid en Gemak", description: "Als internationaal bedrijf zijn we gespecialiseerd in het assisteren van expats bij hun renovaties, waarbij we duidelijkheid bieden over kosten en regelgeving, zelfs wanneer ze in het buitenland zijn.", icon: "🌍" }
// ];

// const HomePage = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(null);

//     const toggleAccordion = (index: number) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     // 🔹 Функція для плавного скролу
//     const handleScroll = (targetId: string) => {
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//             targetElement.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <section className="py-16 bg-white ml-40">
//             <div id="projects" className="flex items-center space-x-4 ml-12">
//                 <hr className="w-16 border-t-2 border-green-950" />
//                 <span className="text-sm font-light tracking-wide text-green-900">ONZE</span>
//                 <h2 className="text-4xl font-bold text-green-950">PROJECT MANAGEMENT</h2>
//             </div>

//             <p className="ml-12 mt-4 text-lg text-gray-900">We handle it all from start to finish</p>

//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
//                 {services.map((service, index) => (
//                     <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center border-t-4 border-green-900">
//                         <div className="flex justify-center mb-4 text-green-900">{service.icon}</div>
//                         <h3 className="text-xl font-semibold text-green-900">{service.title}</h3>
//                         <p className="mt-2 text-gray-600">{service.description}</p>
//                     </div>
//                 ))}
//             </div>

//             <div id="interier" className="mr-12 p-14 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-28 mt-10">
//                 <div className="lg:w-1/2 text-left">
//                     <div className="flex items-center space-x-4">
//                         <hr className="w-16 border-t-2 border-green-950" />
//                         <span className="text-sm font-light tracking-wide text-green-900">ONZE</span>
//                         <h2 className="text-4xl font-bold text-green-950">PROJECTEN</h2>
//                     </div>
//                     <p className="text-gray-900 mt-4 leading-relaxed">Met een passie voor tijdloos design...</p>
//                 </div>
//                 <div className="lg:w-1/2 w-full">
//                     <Slider id="flip" />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HomePage;

