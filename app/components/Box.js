"use client";
import Spline from "@splinetool/react-spline";
import { supabase } from "@/lib/supabaseClient";

export default function Box() {

    async function saveName() {
        const input = document.getElementById("username-input");
        const messageBox = document.getElementById("feedback");
        const username = input.value.trim().toLowerCase();

        messageBox.textContent = "";
        messageBox.className = "mt-4 text-center text-sm";

        if (!username) {
            messageBox.textContent = "El nombre no puede estar vacío";
            messageBox.classList.add("text-red-400");
            return;
        }
        const { error } = await supabase
            .from("users_portfolio")
            .insert([{ username }]);

        if (error) {
            if (error.code === "23505") {
                messageBox.textContent = "Ese usuario ya existe";
            } else {
                messageBox.textContent = "Ha ocurrido un error. Inténtalo de nuevo.";
            }
            messageBox.classList.add("text-red-400");
            return;
        }


        messageBox.textContent = `Usuario "${username}" creado correctamente 🎉`;
        messageBox.classList.add("text-green-400");
        input.value = "";
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

                <div
                    id="feedback"
                    className="mt-4 text-center text-sm"
                />
                </div>
            </div>
        </>
    );
}