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

import changandrobert from "../../public/chang-roberts-leader-election.jpg";
import dataalgorithmcpp from "../../public/data_algorithm_cpp.jpg";
import deliverooclone from "../../public/deliverooClone.png";
import dojoblog from "../../public/dojo_blog.png";
import figraytracing from "../../public/figRaytracing.png";
import konesto from "../../public/koneSto.png";
import laptopui from "../../public/laptop-ui.png";
import plateformesi from "../../public/plateformeEsi.png";
import portfolio from "../../public/portfolio.png";
import pygamegame from "../../public/pyGameGame.png";
import quotegenerator from "../../public/quote_generator.png";
import snakejs from "../../public/snake_js.png";

import { Fragment, useState } from "react";
import Modal from "../components/Modal";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setModalOpen(true);
    setCurrentProject(project);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
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
                <span className="text-teal-500"> technologies</span>. I acquired
                a certain <span className="text-teal-500">experience</span> in
                the field of computer science. I worked on WEB, mobile, games,
                video editing, desktop, system programming and plugins
                development on my favorite text editor{" "}
                <span className="text-teal-500">Emacs</span>.
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
                <Image
                  src={design}
                  width={100}
                  height={100}
                  alt="design icon"
                />
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
                  <span className="text-teal-600">
                    I am an arch Linux user.{" "}
                  </span>
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
                system administration, through mobile development. This is a
                non-exhaustive list of my projects.
              </p>
              <p className="text-md py-2 leading-8 text-teal-800 dark:text-white">
                {" "}
                Click on the project to see more details.
              </p>
            </div>

            {/* PROJECTS LIST */}
            <div className="flex flex-col gap-10 py-10 justify-center w-full lg:flex-row lg:flex-wrap">
              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "Chang and Robert Implementation",
                    "GO",
                    "Chang and Robert algorithm in GOLANG, it is a distributed algorithm that allows to solve the mutual exclusion problem. This algorithm permit election of a leader.",
                    "https://github.com/SamuelVanie/ChangAndRobertAlgorithm",
                  ])
                }
              >
                <Image
                  src={changandrobert}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "Data Structures and Algorithms in C++",
                    "C++",
                    "This repository contains the implementation of the most common data structures and algorithms in C++ but with the help of C++ smart pointers instead of raw pointers. This repository is a work in progress.",
                    "https://github.com/SamuelVanie/DataAlgorithmsCpp",
                  ])
                }
              >
                <Image
                  src={dataalgorithmcpp}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "Deliveroo Clone",
                    "REACT NATIVE, TAILWIND CSS, SANITY.IO, REDUX, STRIPE, REACT-NATIVE-MAPS, REACT NATIVE NAVIGATION",
                    "This is a clone of the deliveroo app. It is a mobile application that allows you to order food from your phone. This application is made with React Native, Tailwind CSS, Sanity.io, Redux and Stripe. Check out the demo video on my github repository.",
                    "https://github.com/SamuelVanie/deliveroo-clone",
                  ])
                }
              >
                <Image
                  src={deliverooclone}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "DOJO BLOG",
                    "REACT JS, CSS",
                    "This is a blog application made with React JS and CSS. It is a blog application that allows you to create, read, update and delete posts. It is a CRUD application. Check out the demo video on my github repository.",
                    "https://github.com/SamuelVanie/dojo-blog",
                  ])
                }
              >
                <Image
                  src={dojoblog}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "Ray Tracing",
                    "PYTHON",
                    "This is a ray tracing application made with Python. It uses ray tracing techlogy to render some 3D objects. Check out an example of the result on my github repository.",
                    "https://github.com/SamuelVanie/ray_tracing",
                  ])
                }
              >
                <Image
                  src={figraytracing}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "KONESTO RESTAURANT WEBSITE",
                    "HTML, CSS, PHP, JAVASCRIPT",
                    "This is a restaurant website made with HTML, CSS, PHP and Javascript. It is a website of a restaurant that allows people to buy food from their card. The cards are read by a raspberry pi. The site is hosted but will not work because the raspberry pi is not connected to the internet. Check it out on the link below",
                    "https://samuelvanie.github.io/RestaurantWebSite/",
                  ])
                }
              >
                <Image
                  src={konesto}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "LAPTOP UI",
                    "HTML, CSS",
                    "Simple hero section of a laptop website. This is a simple hero section of a laptop website. It is made with HTML and CSS. Check it out on the link below.",
                    "https://samuelvanie.github.io/laptop-ui/",
                  ])
                }
              >
                <Image
                  src={laptopui}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "PLATEFORMESI",
                    "LARAVEL, AJAX, BOOTSTRAP",
                    "Website for a university. Help the university to manage the students and the teachers. Can be used to manage grades, attendance, etc... The server were it was hosted is downnow, but you can check the code and also the full project concept on the link below",
                    "rapport.pdf",
                  ])
                }
              >
                <Image
                  src={plateformesi}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "PORTFOLIO",
                    "NEXT JS, TAILWIND CSS",
                    "This represents my portfolio. The current website you are on. It is made with Next JS and Tailwind CSS. Check out the source code on the link below",
                    "https://github.com/SamuelVanie/portfolio-next-js",
                  ])
                }
              >
                <Image
                  src={portfolio}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "PYTHON GAME",
                    "PYTHON (PYGAME)",
                    "This is a game made with Python and Pygame. It is a simple game I decided to build to learn more about Pygame. Check out the source code on the link below",
                    "https://github.com/SamuelVanie/pyGameProject",
                  ])
                }
              >
                <Image
                  src={pygamegame}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "QUOTE GENERATOR",
                    "NEXTJS, STYLED COMPONENTS, AWS LAMBDA, TYPESCRIPT",
                    "This is a quote generator made with Next JS, Styled Components, AWS Lambda and Typescript. It is a simple quote generator that allows you to generate daily quotes. The quotes are fetch from the zenquotes API. It is still an ongoing project so not yet hosted. Check out the source code on the link below",
                    "https://github.com/SamuelVanie/quote-generator",
                  ])
                }
              >
                <Image
                  src={quotegenerator}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              <div
                className="basis-1/4 cursor-pointer"
                onClick={() =>
                  openModal([
                    "SNAKE GAME",
                    "JAVASCRIPT",
                    "This is a simple snake game made with Javascript. It uses the canvas API to render the game and the Grid system for the snake movements. You can play it directly in the browser on the link below",
                    "https://samuelvanie.github.io/snake_js/",
                  ])
                }
              >
                <Image
                  src={snakejs}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>

              {/* Render the project description modal */}
              {modalOpen && (
                <Modal
                  title={currentProject[0]}
                  technologies={currentProject[1]}
                  description={currentProject[2]}
                  link={currentProject[3]}
                  closeModal={closeModal}
                />
              )}
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
}
