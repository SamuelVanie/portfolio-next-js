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
import samImg from "../../public/avatar.jpeg";
import design from "../../public/design.png";
import code from "../../public/code.png";
import system from "../../public/consulting.png";

import changandrobert from "../../public/projects_img/chang-roberts-leader-election.jpg";
import dataalgorithmcpp from "../../public/projects_img/data_algorithm_cpp.jpg";
import deliverooclone from "../../public/projects_img/deliverooClone.png";
import dojoblog from "../../public/projects_img/dojo_blog.png";
import figraytracing from "../../public/projects_img/figRaytracing.png";
import konesto from "../../public/projects_img/koneSto.png";
import laptopui from "../../public/projects_img/laptop-ui.png";
import plateformesi from "../../public/projects_img/plateformeEsi.png";
import portfolio from "../../public/projects_img/portfolio.png";
import pygamegame from "../../public/projects_img/pyGameGame.png";
import quotegenerator from "../../public/projects_img/quote_generator.png";
import snakejs from "../../public/projects_img/snake_js.png";
import projetgl from "../../public/projects_img/GL.png";
import blobwar from "../../public/projects_img/blobwar.jpeg";
import chatbotemacs from "../../public/projects_img/chatbotemacs.png";

import { Fragment, useState } from "react";
import Modal from "../components/Modal";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
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
                  {t("occupation")}
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
                  {t("more_about")}
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
                <Image src={samImg} layout="fill" objectFit="cover" />
              </div>
            </section>

            <section className="mb-10">
              <div className="text-center">
                <p className="text-md py-2 mt-10 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
                  {t("service")}
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
                  {t("download")}
                </p>

                <p className="text-gray-800 dark:text-white">
                  This project uses{" "}
                  <span className="text-teal-500">NEXT JS and TAILWINDCSS</span>
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
                    {t("design_title")}
                  </h3>
                  <p className="py-2 text-gray-800 dark:text-white">
                    {t("design_description")}
                  </p>
                  <h4 className="py-4 text-teal-600 dark:text-white">
                    {t("design_tools_text")}
                  </h4>
                  <p className="text-gray-800 py-1 dark:text-white">
                    Photoshop
                  </p>
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
                    {t("optimization_title")}
                  </h3>
                  <p className="py-2 text-gray-800 dark:text-white">
                    {t("optimization_description")}
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
                    {t("sysnet_title")}
                  </h3>
                  <p className="py-2 text-gray-800 dark:text-white">
                    {t("sysnet_description")}
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="text-center">
                <h3 className="text-3xl py-1 text-gray-800 dark:text-white">
                  {t("inspiring_proj_title")}
                </h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                  {t("inspiring_proj_description")}
                </p>
                <p className="text-md py-2 leading-8 text-teal-800 dark:text-white">
                  {t("call_to_click_inspiring")}
                </p>
              </div>

              {/* PROJECTS LIST */}
              <div className="flex flex-col gap-10 py-10 justify-center w-full lg:flex-row lg:flex-wrap">
                <div
                  className="basis-1/4 cursor-pointer"
                  onClick={() =>
                    openModal([
                      t("plateformeesi_title"),
                      "LARAVEL, AJAX, BOOTSTRAP",
                      t("plateformeesi_description"),
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
                      t("gl_title"),
                      "JAVA, JUNIT, MOCKITO",
                      t("gl_description"),
                      "",
                    ])
                  }
                >
                  <Image
                    src={projetgl}
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
                      t("blobwar_ai_title"),
                      "RUST (RAYON)",
                      t("blobwar_ai_description"),
                      "https://en.wikipedia.org/wiki/Minimax",
                    ])
                  }
                >
                  <Image
                    src={blobwar}
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
                      t("chang_title"),
                      "GO",
                      t("chang_description"),
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
                      t("youdotcom_title"),
                      "EMACS LISP",
                      t("youdotcom_description"),
                      "https://github.com/SamuelVanie/youdotcom.el",
                    ])
                  }
                >
                  <Image
                    src={chatbotemacs}
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
                      t("ray_tracing_title"),
                      "PYTHON",
                      t("ray_tracing_description"),
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
                      t("deliveroo_title"),
                      "REACT NATIVE, TAILWIND CSS, SANITY.IO, REDUX, STRIPE, REACT-NATIVE-MAPS, REACT NATIVE NAVIGATION",
                      t("deliveroo_description"),
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
                      t("dailygen_title"),
                      "NEXTJS, STYLED COMPONENTS, AWS LAMBDA, TYPESCRIPT",
                      t("dailygen_description"),
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
                      t("cpp_datastruct_title"),
                      "C++",
                      t("cpp_datastruct_description"),
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
                      t("konesto_title"),
                      "HTML, CSS, PHP, JAVASCRIPT",
                      t("konesto_description"),
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
                      t("portfolio_title"),
                      "NEXT JS, TAILWIND CSS",
                      t("portfolio_description"),
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
                      t("pygame_title"),
                      "PYTHON (PYGAME)",
                      t("pygame_description"),
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
                      t("snake_js_title"),
                      "JAVASCRIPT",
                      t("snake_js_description"),
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

                <div
                  className="basis-1/4 cursor-pointer"
                  onClick={() =>
                    openModal([
                      t("dojo_title"),
                      "REACT JS, CSS",
                      t("dojo_description"),
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
                      t("laptop_title"),
                      "HTML, CSS",
                      t("laptop_description"),
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
    </I18nextProvider>
  );
}
