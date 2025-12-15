"use client";

import Spline from "@splinetool/react-spline";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Box() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setUser(data.session?.user ?? null);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <>
            {/* SPLINE */}
            <div className="relative cursor-pointer hover:scale-105 transition-transform duration-300">
                <Spline
                    scene="https://prod.spline.design/xj0Tk7ifI0WJuvIl/scene.splinecode"
                    style={{ pointerEvents: "none" }}
                />

                <a
                    href="#info"
                    className="absolute inset-0 z-10 cursor-pointer"
                />
            </div>

            {/* MODAL */}
            <div
                id="info"
                className="fixed inset-0 z-50 hidden items-center justify-center 
                bg-black/60 backdrop-blur-sm target:flex"
            >
                <div className="relative w-[90%] max-w-lg rounded-2xl bg-[#1e293b] p-8 shadow-2xl text-center">
                    <a href="#" className="absolute top-4 right-4">✕</a>

                    {user ? (
                        <>
                            <h3 className="text-xl font-bold mb-4 text-green-400">
                                Acceso concedido ✅
                            </h3>

                            <p className="text-gray-300">
                                Estás logueado como:
                            </p>

                            <p className="mt-2 font-semibold text-white">
                                {user.email}
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="text-xl font-bold mb-4 text-red-400">
                                Acceso denegado ❌
                            </h3>

                            <p className="text-gray-300 mb-6">
                                Debes iniciar sesión para acceder a esta sección
                            </p>

                            <a
                                href="#auth"
                                className="inline-block rounded-lg bg-slate-700 
                                px-6 py-2 hover:bg-slate-600 transition"
                            >
                                Iniciar sesión
                            </a>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
