import Header from "./components/Header";
import NumberTab from "./components/NumberTab";
import ExperienceItem from "./components/ExperienceItem";
import Box from "./components/Box";
import ProjectItem from "./components/ProjectItem";

export default function Home() {
    // Data for work experiences
    const experiences = [
        {
            title: "Software Engineer & Data Analyst",
            company: "GRASP SPAIN",
            period: "Sep. 2023 - Presente",
            description: "",
            // "Desarrollo de una aplicación web para la generación de medidas sintéticas de satélites en el marco de un proyecto NEOTEC financiado por el CDTI. Responsable de varias tareas de preparación y procesamiento de datos satelitales críticos para la observación terrestre, implementando soluciones técnicas innovadoras que optimizan la calidad y utilidad de la información geoespacial obtenida.",
            projects: [
                "Simulador de medidas de instrumentos satelitales",
                "Preparacion de cadenas de procesado para datos geoespaciales (S5P, OLCI...)",
            ],
            technologies: ["Python", "Remote Sensing", "Streamlit", "Docker"],
            image: "/company_logo/grasp.png",
        },
        {
            title: "Ingeniero de Investigación en Visión Artificial",
            company: "Universidad de Valladolid (UVa)",
            period: "Nov. 2021 - Mar. 2023",
            description: "",
            projects: [
                "Sistema de prevencion de roturas en cintas transportadoras",
                "Prototipo contador de visitantes para eventos en espacios abiertos",
            ],
            technologies: [
                "Python",
                "Computer Vision",
                "IoT",
                // "Inteligencia Artificial",
                // "Ciencia de Datos",
                "Machine Learning",
            ],
            image: "/company_logo/uva.png",
        },
    ];

    // Sample project data
    const projects = [
        {
            image: "/projects_logo/blockheadapp.png",
            domain: "https://blockheadapp.com",
        },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://taskmanager.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://travelblog.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://weatherapp.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://portfolio.goyocancio.es",
        // },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto">
            <Header />
            
            {/* Number Tab Section*/}
            <section id="starbar">
                <div className="container w-full max-w-5xl mx-auto py-4">
                </div>
                <NumberTab />
            </section>

            {/* Work Experience Section*/}
            <section id="experience">
                <div className="container w-full max-w-5xl mx-auto py-12">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Experiencia Laboral
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <ExperienceItem
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Box Section*/}
            <section id="Box">
                <div className="container w-full max-w-5xl mx-auto py-4">
                <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            ¿Quieres comprobar mis habilidades como Consultor IAM?
                        </h2>
                        <p className="text-2xl md:text-4xl font-bold">
                            ¡¡ABRE LA CAJA!!
                        </p>
                    </div>
                </div>
                <Box />
            </section>

            {/* Projects Section */}
            <section id="projects">
                <div className="container mx-auto py-12 px-10">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Proyectos Personales
                        </h2>
                    </div>

                    <p className="text-xs md:text-base mb-2 text-justify">
                        De manera paralela a los trabajos que he ido
                        desempeñando, he desarrollado varios proyectos
                        personales tanto para probarme a mí mismo y ver de qué
                        soy capaz, como para aplicar mis conocimientos y
                        aprender nuevas tecnologías.
                    </p>
                    <p className="text-xs md:text-base mb-8  text-justify">
                        Aquí puedes ver algunos de ellos:
                    </p>

                    {/* Projects row */}
                    <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                        {/* Restore the map */}
                        {projects.map((project, index) => {
                            if (!project || !project.image || !project.domain) {
                                return null; // Keep the check and null return
                            }
                            return (
                                <div key={index} className="">
                                    <ProjectItem project={project} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <footer className="text-center text-xs md:text-sm text-gray-500">
                © {new Date().getFullYear()} Goyo Cancio. Todos los derechos
                reservados.
            </footer>
        </div>
    );
}
