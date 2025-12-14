"use client";

import Spline from "@splinetool/react-spline";

let userName = "";

export default function Box() {

    function saveName() {
        const input = document.getElementById("username-input");
        userName = input.value;

        console.log("Nombre guardado:", userName);

        window.location.hash = "";
    }

    return (
        <>
            <div className="relative cursor-pointer hover:scale-105 transition-transform duration-300">

                <Spline
                    scene="https://prod.spline.design/xj0Tk7ifI0WJuvIl/scene.splinecode"
                    style={{
                        pointerEvents: "none",
                    }}
                />

                <a
                    href="#info"
                    className="absolute inset-0 z-10 cursor-pointer"
                />
            </div>

            <div
                id="info"
                className="fixed inset-0 z-50 hidden items-center justify-center 
                bg-black/60 backdrop-blur-sm target:flex"
            >
                <div className="relative w-[90%] max-w-lg rounded-2xl bg-[#1e293b] p-8 shadow-2xl">
                    <a href="#" className="absolute top-4 right-4">✕</a>
                    <h3 className="text-xl font-bold mb-4">Nombre Usuario</h3>
                    <input
                        id="username-input"
                        type="text"
                        placeholder="Escribe tu nombre"
                        className="w-full rounded-lg bg-slate-800 border border-gray-700 
                        px-4 py-2 mb-6 focus:outline-none focus:border-slate-400"
                    />
                    <button
                        onClick={saveName}
                        className="w-full rounded-lg bg-slate-700 py-2 
                        hover:bg-slate-600 transition"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </>
    );
}