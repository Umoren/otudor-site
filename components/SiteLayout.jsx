import Image from "next/image";
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const router = useRouter();
    return (
        <>
            <main className=" text-letter bg-gray-900 min-h-screen w-screen">
                <div className="flex flex-col md:flex-row m-auto">
                    <div className="w-1/2 p-20 fixed">
                        <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
                            Love Otudor </h1>
                        <h3 className="text-2xl font-bold my-4"> Software Developer - Mobile</h3>

                        <p className="my-4 text-lg text-letter/50 w-4/5">
                            A <span className="text-bold text-letter">Mobile Application developer and Technical Writer </span>. Passionate about
                            contributing to the growth of communities and empowering women in tech.
                            With a bachelor's degree in Computer Engineering,

                        </p>

                        <p className="my-4 text-lg text-letter/50 w-4/5">
                            Love has experience building robust mobile applications and writing creative,
                            educative, and catchy articles, blogs, and scripts.
                            Love is a <span className="text-bold text-letter">Past Outreachy intern and mentor at ODK-X </span>and has featured articles
                            on several tech blogs such as CodeSource.io and Section.io.
                        </p>

                        <div className="my-16 text-sm uppercase hidden md:block">
                            <ul>
                                <Link href="/"
                                    className="border-white"
                                >
                                    <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                                        <span>01</span>
                                        <hr className="w-[2rem] bg-gray-300" />
                                        <span> Work</span>
                                    </li>
                                </Link>

                                <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                                    <span>02</span>
                                    <hr className="w-[3rem] bg-white" />
                                    <span> Articles</span>
                                </li>

                                <Link href="/talks" >
                                    <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                                        <span>03</span>
                                        <hr className="w-[4rem] bg-white" />
                                        <span> Talks</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>

                        <div className="mt-12 flex gap-6">
                            <Image
                                src="/assets/loveOtudor.jpeg"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />

                            <div className="flex mt-2 gap-6">
                                <a
                                    href="https://github.com/lamouresparus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} /> Github
                                </a>

                                <a
                                    href="hhttps://twitter.com/lamoureSparus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                                </a>

                                <a
                                    href="https://ng.linkedin.com/in/loveotudor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} /> Linkedin{" "}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 relative left-[50%] p-20">{children}</div>
                </div>
            </main>
        </>
    )
}