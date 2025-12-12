import Image from "next/image";

/**
 * ExperienceItem component
 * Displays a single work experience block with image, title, description and technologies
 */
export default function ExperienceItem({ experience }) {
    const {
        title,
        company,
        period,
        description,
        projects,
        technologies,
        image,
    } = experience;

    return (
        <div
        className="group relative flex flex-row gap-6 m-5 px-5 py-3 md:my-10 md:px-8 md:py-6 
        rounded-2xl 
        shadow-2xl shadow-black/70
        hover:shadow-2xl hover:shadow-black/90 
        bg-[#1e293b] 
        border border-gray-700
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:-translate-y-1
        overflow-hidden"
    >

            {/* Company/Job image - rounded and positioned at the top left */}
            <div className="flex-shrink-0">
                <div className="relative w-12 h-12 md:w-24 md:h-24 rounded-lg md:rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt={`${company} logo`}
                        fill
                        className=""
                    />
                </div>
            </div>

            {/* Text block on the right */}
            <div className="flex-grow">
                {/* Job title and company name */}
                <div className="mb-5 md:mt-5">
                    <h3 className="text-sm md:text-xl font-bold">{title}</h3>
                    <div className="flex justify-between md:flex-wrap flex-col md:flex-row">
                        <p className="text-xs md:text-xl">{company}</p>
                        <p className="text-xs md:text-lg text-gray-500">
                            {period}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-xs md:text-base text-justify">
                    {description}
                </p>

                {/* Projects list */}
                {projects && projects.length > 0 && (
                    <div className="mb-2 md:mb-6">
                        <h4 className="text-xs font-semibold mb-2 md:text-base">
                            Proyectos:
                        </h4>
                        <ul className="list-disc pl-5 text-xs md:text-base">
                            {projects.map((project, index) => (
                                <li key={index} className="">
                                    {project}
                                </li>
                            ))}
                        </ul>
                        {/* Información adicional abajo */}
                        <div
                            className="w-full mt-4 
                            max-h-0 opacity-0 
                            group-hover:max-h-64 group-hover:opacity-100 
                            transition-all duration-500 ease-in-out overflow-hidden"
                        >
                            <h4 className="text-xs md:text-base font-semibold mb-2">
                                TECNOLOGÍAS USADAS:
                            </h4>

                            <ul className="list-disc pl-5 text-xs md:text-base">
                                {technologies.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Technologies list */}
                <div>
                    {/* <h4 className="text-sm font-semibold mb-2">Tecnologías:</h4> */}
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-foreground text-accent rounded-full px-2 md:px-4 py-1 text-[10px] md:text-sm font-bold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
