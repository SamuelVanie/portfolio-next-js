"use client";

import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import waveCharacter from "../../public/sam_smiling_to_world.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import system from "../../public/consulting.png";

import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Samuel Michael Vanie Portfolio</title>
        <meta name="description" content="Samuel Vanie portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-black">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons text-gray-800 dark:text-white">
              SamuelVanie
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-gray-800 dark:text-white"
                />
              </li>
              <Link
                href="cv.pdf"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              >
                Resume
              </Link>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Samuel Michael Vanie
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-800 dark:text-white">
              Computer Sciences, Electronics and Telecommunications student
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
              I also provide services as a freelancer, I am a web developer
              (specialized in backend development), mobile developper (hybrid
              and native with Kotlin), and I also do system programming and
              administration (specialized in linux).
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <Link href="https://twitter.com/samuel_vanie" target="_blank">
              <AiFillTwitterCircle />
            </Link>
            <Link href="https://github.com/SamuelVanie" target="_blank">
              <AiFillGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-micha%C3%ABl-vani%C3%A9-a551491b9/"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={waveCharacter} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="mb-10">
          <div className="text-center">
            <p className="text-md py-2 mt-10 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
              Since an early age, I have been interested in computer sciences.
              With my curiosity, I have learned to work on several kinds of
              <span className="text-teal-500"> technologies</span>. I acquired a
              certain <span className="text-teal-500">experience</span> in the
              field of computer science. I worked on WEB, mobile, games, video
              editing, desktop, system programming and plugins development on my
              favorite text editor <span className="text-teal-500">Emacs</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
              I offer from a wide range of services, from web development to
              system administration, through mobile development.
            </p>

            <p className="text-gray-800 dark:text-white">
              This project uses{" "}
              <span className="text-teal-500">REACT JS and NEXT JS</span>
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="lg:basis-1/3 flex flex-col items-center shadow-lg p-10 rounded-xl my-10 text-center dark:bg-gray-900">
              <Image src={design} width={100} height={100} alt="design icon" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 text-gray-800 dark:text-white">
                Creating elegant designs suited for your needs.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-white">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Adobe XD</p>
            </div>

            <div className="lg:basis-1/3 flex flex-col items-center shadow-lg p-10 rounded-xl my-10 text-center dark:bg-gray-900">
              <Image
                src={code}
                width={100}
                height={100}
                alt="code hashtap icon"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800 dark:text-white">
                Clean and Optimized Code
              </h3>
              <p className="py-2 text-gray-800 dark:text-white">
                Fully reliable and optimized code thanks to my optimization
                classes and the clean code lessons took on internet . Mainly
                used languages:
              </p>
              <h4 className="py-4 text-teal-600">
                RUST, C++, C, JAVA, PYTHON, JAVASCRIPT, EMACS LISP
              </h4>
            </div>

            <div className="lg:basis-1/3 flex flex-col items-center shadow-lg p-10 rounded-xl my-10 text-center dark:bg-gray-900">
              <Image
                src={system}
                width={100}
                height={100}
                alt="hand icon representing system programming"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800 dark:text-white">
                System Administration and programming
              </h3>
              <p className="py-2 text-gray-800 dark:text-white">
                Knowledges in IP networking, have BASH knowledge, and a great
                experience in LINUX (Debian & Arch). By the way,{" "}
                <span className="text-teal-600">I am an arch Linux user. </span>
                Please feel free to check out my resume for more details.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 text-gray-800 dark:text-white">
              Inspiring Projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, from web development to
              system administration, through mobile development.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 justify-center w-full lg:flex-row lg:flex-wrap">
            <div className="basis-1/4">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/4">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/4">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/4">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/4">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/4">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
