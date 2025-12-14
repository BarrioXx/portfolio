import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main>
    <div className="cursor-pointer hover:scale-115 transition-transform duration-300">
      <Spline
        scene="https://prod.spline.design/xj0Tk7ifI0WJuvIl/scene.splinecode" 
        style={{ pointerEvents: 'none' }}
      />
      
                {/* CAPA CLICABLE */}
                <a
                    href="#info"
                    className="absolute inset-0 cursor-pointer"
                />
            </div>

            {/* MODAL */}
            <div
                id="info"
                className="fixed inset-0 z-50 hidden items-center justify-center 
                bg-black/60 backdrop-blur-sm target:flex"
            >
                <div className="w-[90%] max-w-lg rounded-2xl bg-[#1e293b] p-8 
                    shadow-2xl shadow-black/80 animate-scale-in relative">

                    <a
                        href="#"
                        className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    >
                        ✕
                    </a>

                    <h3 className="text-xl font-bold mb-4">
                        Información adicional
                    </h3>

                    <p className="text-gray-300">
                        Aquí puedes poner cualquier contenido:
                        experiencia, tecnologías, enlaces, CTA, etc.
                    </p>
                </div>
    </div>
    </main>
  );
}





