import Link from "next/link";

export default function ProjectCard() {
    const githubProjects = [
        {
            language: "Java",
            title: "CollapsingCardView",
            description: "A collapsible view that can expand to reveal more information when an image on the card is clicked.",
            repoLink: "https://github.com/Lamouresparus/CollapsingCardView"
        },
        {
            language: "Kotlin",
            title: "GreyAssessment",
            description: "GreyAssessment is an Android application that searches for Github Repositories and Users from the GitHub API (Application Programming Interface).",
            repoLink: "https://github.com/Lamouresparus/GreyAssessment"
        },
        {
            language: "Java",
            title: "CalcEngine",
            description: "A simple calculator engine built with Java",
            repoLink: "https://github.com/Lamouresparus/CalcEngine"
        },
        {
            language: "Java",
            title: "MyMovieApp",
            description: "A movie app built for mobile with Java",
            repoLink: "https://github.com/Lamouresparus/MyMovieApp"
        },
    ]
    return (
        <>
            <div className="sm:pt-32 sm:pb-40 -my-8 group md:py-0" data-href="">
                {githubProjects && githubProjects.map((project, i) => (
                    <article className="my-4 bg-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" itemScope itemType="http://schema.org/CreativeWork" key={i}>
                        <Link href={project.repoLink} target="_blank" rel="noopener noreferrer" className="block p-40">
                            <p className="text-xs font-bold tracking-widest uppercase text-white" itemProp="language"> {project.language} </p>
                            <h3 className="my-3 text-lg font-semibold leading-tight text-white" itemProp="title"> {project.title} </h3>
                            <p className="my-3 text-opacity-70" itemProp="description"> {project.description}</p>
                        </Link>
                    </article>
                ))}


            </div>
        </>
    )
}