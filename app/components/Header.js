"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Header() {
    const developerName = "Sergio Barrio Martín";
    const jobTitle = "Consultor IAM";

    const [user, setUser] = useState(null);

    useEffect(() => {
        // Sesión inicial
        supabase.auth.getSession().then(({ data }) => {
            setUser(data.session?.user ?? null);
        });

        // Escuchar login / logout
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    async function logout() {
        await supabase.auth.signOut();
    
        // limpiar formulario auth si existe
        if (typeof window !== "undefined") {
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const feedback = document.getElementById("auth-feedback");
    
            if (email) email.value = "";
            if (password) password.value = "";
            if (feedback) feedback.textContent = "";
        }
    }

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "/social/linkedin.svg",
            url: "https://linkedin.com/in/goyocancio",
            alt: "LinkedIn Profile",
        },
    ];

    return (
        <header className="border-b border-accent-yellow py-4 px-2 md:px-6">

            {/* AUTH */}
            <div className="absolute top-4 right-4 md:top-6 md:right-8 z-50">
            {user ? (
                <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-300 hidden md:block">
                        {user.email}
                    </span>

                <button
                    onClick={logout}
                    className="rounded-lg bg-slate-700 px-3 py-1 
                    hover:bg-slate-600 transition"
                >
                    Logout
                </button>
                </div>
    ) : (
        <a
            href="#auth"
            className="text-sm text-gray-300 hover:text-white transition"
        >
            Iniciar sesión / Registrarse
        </a>
    )}
</div>

            <div className="container mx-auto flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-2 md:gap-8">
                    <div className="relative w-15 h-15 md:w-40 md:h-40 rounded-full overflow-hidden border border-white shadow-xl">
                        <Image
                            src="/profile.png"
                            alt="Profile picture"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-lg md:text-4xl font-bold leading-tight">
                            {developerName}
                        </h1>
                        <p className="text-sm md:text-xl">
                            {jobTitle}
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">

                    {/* SOCIAL */}
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-110"
                            aria-label={link.alt}
                        >
                            <Image
                                src={link.icon}
                                alt={link.alt}
                                width={24}
                                height={24}
                                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
