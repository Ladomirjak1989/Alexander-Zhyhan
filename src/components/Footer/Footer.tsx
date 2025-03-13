'use client';
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Uw bericht is succesvol verzonden!");
                setFormData({ name: "", lastName: "", email: "", message: "" });
            } else {
                setStatus("Er is een fout opgetreden. Probeer het opnieuw.");
            }
        } catch (error) {
            setStatus("Er is een probleem opgetreden bij het verzenden.");
        }
    };

    return (
        <footer id="contact" className="bg-emerald-50 py-7"> {/* ✅ Додаємо id для скролу */}
            <div className="mx-auto px-6 pt-4 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-56">
                {/* Ліва частина - Форма */}
                <div>
                    <div className="flex items-center space-x-4">
                        <hr className="w-16 border-t-2 border-green-900" />
                        <span className="text-md font-light text-green-900">NEEM</span>
                        <h2 className="text-4xl font-bold text-green-900">CONTACT OP</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <input type="text" name="name" placeholder="Uw Naam" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900" required />
                        <input type="text" name="lastName" placeholder="Uw Achternaam" value={formData.lastName} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900" required />
                        <input type="email" name="email" placeholder="Uw E-mailadres" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900" required />
                        <textarea name="message" placeholder="Bericht" value={formData.message} onChange={handleChange} rows={4} className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900" required></textarea>
                        <button type="submit" className="w-full bg-green-900 text-white py-3 rounded-lg text-lg hover:bg-green-800 transition">VERZENDEN</button>
                    </form>

                    {status && <p className="mt-4 text-center text-green-900">{status}</p>}
                </div>

                {/* Права частина - Контактна інформація */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-green-900">Bedrijf</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Projecten</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-green-900">Contact</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li className="flex items-center space-x-2"><FaPhone className="text-green-900" /><span>+31 (06) 57-63-48-94</span></li>
                            <li className="flex items-center space-x-2"><FaEnvelope className="text-green-900" /><a href="mailto:info@alexanderzhuhan.nl" className="hover:underline">alex.zhyhan@hotmail.com</a></li>
                            <li className="flex items-center space-x-2"><FaInstagram className="text-green-900" /><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">alexanderzhuhan.nl</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Нижній блок */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600 text-sm mt-12 px-6 md:px-16">
                <div className="text-center md:text-left">
                    <p>&copy; COPYRIGHT 2025 | KVK 96675993  Website by <a href="https://" className="text-green-900 hover:underline">BL ICT Bedrijf</a></p>
                </div>
                <div className="text-center md:text-right -mt-32">
                    <p className="font-semibold text-green-950 italic text-5xl">Aleksander Klusbedrijf</p>
                    <p className="font-semibold text-gray-700 italic text-3xl">Interieurrenovaties</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

