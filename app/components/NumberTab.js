export default function StatsBar({ starbar }) {
    return (
        <div className="w-full max-w-5xl mx-auto px-6">
            <div className="flex justify-between text-center py-10 border-b border-gray-800">
                
                <div className="flex-1 cursor-pointer hover:scale-115 transition-transform duration-300">
                    <p className="text-3xl md:text-6xl font-bold text-slate-300">
                        ± 5
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-gray-500 tracking-wide">
                        Años de experiencia
                    </p>
                </div>

                <div className="flex-1 cursor-pointer hover:scale-115 transition-transform duration-300">
                    <p className="text-3xl md:text-6xl font-bold text-slate-300">
                        6
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-gray-500 tracking-wide">
                        Servicios Gestionados
                    </p>
                </div>

                <div className="flex-1 cursor-pointer hover:scale-115 transition-transform duration-300">
                    <p className="text-3xl md:text-6xl font-bold text-slate-300">
                        1
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-gray-500 tracking-wide">
                        Empresa Tecnológica
                    </p>
                </div>

                <div className="flex-1 cursor-pointer hover:scale-115 transition-transform duration-300">
                    <p className="text-3xl md:text-6xl font-bold text-slate-300">
                        B2
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-gray-500 tracking-wide">
                        Nivel de Inglés
                    </p>
                </div>

            </div>
        </div>
    );
}