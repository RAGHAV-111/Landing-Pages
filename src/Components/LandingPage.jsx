import logo5 from "../logo/logo5.jpg";
import logo7 from "../logo/logo7.jpg";
import logo9 from "../logo/logo9.jpg";
import { CiEdit } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { GrCatalogOption } from "react-icons/gr";
import { RiFontSize } from "react-icons/ri";
import { IconContext } from "react-icons";
import Cards from "./Cards";
// import footer from "./footer";
import Footer1 from "./Footer1";

import("preline");

function LandingPage() {
  return (
    <>
      <nav className="bg-white-100 h-0 "></nav>

      <body>
        <div className="flex flex-col sm:flex-row">
          <div className="mx-7 flex flex-col items-center sm:items-start justify-center h-50 w-full  md:w-1/2 mt-4 ">
            <div>
              <div>
                <h1 className="text-5xl font-bold">Free Online Resume </h1>
                <h2 className="text-5xl font-bold">Builder</h2>
              </div>
              <div>
                <button className="my-8 bg-purple-600 p-2 rounded-md text-white hover:bg-purple-500">
                  Build my Resume
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 sm:w-full">
            <img className="h-50 rounded-br-3xl " src={logo5} alt="Logo" />
          </div>
        </div>

        <div className="my-10 flex space-x-10  flex-col md:flex-row ">
          <div></div>
          <div className="flex p-4 md:p-0">
            <IconContext.Provider
              value={{ className: "shared-class", size: 22 }}
            >
              <>
                <CiEdit />
              </>
            </IconContext.Provider>

            <h2 className="mx-2 font-medium">Easy to create and customize</h2>
          </div>

          <div className="flex p-4 md:p-0 ">
            <IconContext.Provider
              value={{ className: "shared-class", size: 22 }}
            >
              <>
                <CiImageOn />
              </>
            </IconContext.Provider>

            <h2 className="mx-2 font-medium">
              Hundreds of free templates and layouts
            </h2>
          </div>

          <div className="flex p-4 md:p-0 ">
            <IconContext.Provider
              value={{ className: "shared-class", size: 22 }}
            >
              <>
                <GrCatalogOption />
              </>
            </IconContext.Provider>

            <h2 className="mx-2 font-medium ">
              Professionally designed and formatted
            </h2>
          </div>

          <div className="flex p-4 md:p-0 ">
            <IconContext.Provider
              value={{ className: "shared-class", size: 22 }}
            >
              <>
                <RiFontSize />
              </>
            </IconContext.Provider>
            <h2 className="mx-2 font-medium ">Styles for every industry</h2>
          </div>
        </div>

        <div className="px-2 flex items-center justify-center ">
          <div className=" sm:w-full md:w-1/2">
            <div className=" flex items-center justify-center ">
              <h2 className="text-2xl my-10 font-bold ">Heading1</h2>
            </div>

            <div className="">
              <img className="rounded-3xl" src={logo7} alt="Logo" />

              <p className="my-10">
                Forget spending hours formatting your resume, or choosing
                complimentary fonts for your cover letter. Creating a resume
                online with Canva’s free resume builder will give you a sleek
                and attractive resume, without the fuss.
              </p>

              <p className="my-10">
                Choose from hundreds of free, designer-made templates, and
                customize them within minutes. With a few simple clicks, you can
                change the colors, fonts, layout, and add graphics to suit the
                job you’re applying for.
              </p>
              <p className="my-10">
                Let us help you with the design, so you can focus on promoting
                your skills and landing your dream job.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row  ">
          <div className="sm:w-full md:w-1/2  xl:p-20">
            <img className=" h-full rounded-3xl" src={logo9} alt="Logo9" />
          </div>

          <div className=" flex justify-center items-center  sm:w-full md:w-1/2 sm:p-20  md:p-5 lg:p-5 xl:p-20">
            <div>
              <div>
                <div  className=" flex ml-4 mt-4">
                  <h2 className="text-4xl  font-bold ">How to make a resume</h2>
                </div>
                <div className="wrapper w-5/6 my-4 flex justify-center items-center  ">
                  <div className="hs-accordion-group">
                    <div
                      className="hs-accordion active"
                      id="hs-basic-heading-one"
                    >
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 px-6 inline-flex items-center gap-x-3 w-full font-semibold text-sm text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-collapse-one"
                      >
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8.12421 13.36V2.35999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>

                        <h2 className="text-2xl ">Open Canva</h2>
                      </button>
                      <div
                        id="hs-basic-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-heading-one"
                      >
                        <div className="pb-4 px-6">
                          <p className="text-lg text-black dark:text-gray-200 mx-7">
                            Open up Canva and search for Resume to start
                            designing your own.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hs-accordion active"
                      id="hs-basic-heading-one"
                    >
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 px-6 inline-flex items-center gap-x-3 w-full font-semibold text-sm text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-collapse-one"
                      >
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8.12421 13.36V2.35999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h2 className="text-2xl">Find the right template</h2>
                      </button>
                      <div
                        id="hs-basic-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-heading-one"
                      >
                        <div className="pb-4 px-6">
                          <p className="text-lg text-black dark:text-gray-200 mx-7">
                            Choose from hundreds of professionally-designed
                            resume templates. Take your pick from styles like
                            modern or simple layouts or industries like acting,
                            graphic design or more corporate layouts.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hs-accordion active"
                      id="hs-basic-heading-one"
                    >
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 px-6 inline-flex items-center gap-x-3 w-full font-semibold text-sm text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-collapse-one"
                      >
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8.12421 13.36V2.35999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h2 className="text-2xl">Personalize your resume</h2>
                      </button>
                      <div
                        id="hs-basic-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-heading-one"
                      >
                        <div className="pb-4 px-6">
                          <p className="text-lg text-black dark:text-gray-200 mx-7">
                            After picking a template, use Canva’s drag and drop
                            design tools to tweak your resume. Change fonts,
                            text and colors in a few clicks. Upload your own
                            photo and rearrange any and all elements as much as
                            you want.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hs-accordion active"
                      id="hs-basic-heading-one"
                    >
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 px-6 inline-flex items-center gap-x-3 w-full font-semibold text-sm text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-collapse-one"
                      >
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8.12421 13.36V2.35999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h2 className="text-2xl">
                          Get creative with more features
                        </h2>
                      </button>
                      <div
                        id="hs-basic-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-heading-one"
                      >
                        <div className="pb-4 px-6">
                          <p className="text-lg text-black dark:text-gray-200 mx-7">
                            Crop, straighten, use photo filters, and texturize
                            your images. Use your own color scheme, font style,
                            background and text layout. Add borders, frames and
                            other ingredients to make your resume stand out.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hs-accordion active"
                      id="hs-basic-heading-one"
                    >
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 px-6 inline-flex items-center gap-x-3 w-full font-semibold text-sm text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-collapse-one"
                      >
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8.12421 13.36V2.35999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h2 className="text-2xl">Order your prints</h2>
                      </button>
                      <div
                        id="hs-basic-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-heading-one"
                      >
                        <div className="pb-4 px-6">
                          <p className="text-lg text-black dark:text-gray-200 mx-7">
                            Order high-quality prints of your resumes through
                            Canva Print and enjoy free shipping. Or, save your
                            design as a PDF, JPG or PNG file.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex justify-center items-center">
                <button className="my-8 bg-purple-600 p-2 rounded-md  text-white hover:bg-purple-500 ">
                  Create a New Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <hr />
        </div>

        <div className=" h-50">
          <h2 className="my-5  mx-5  font-medium  text-xl ">
            Browse Templates
          </h2>
          <div className="container flex  flex-wrap my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              <Cards />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center ">
            <h2 className="text-2xl my-5 font-bold ">Heading 2</h2>
            <div></div>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <div className=" flex items-center justify-center w-2/3 ">
                <p className="my-5">
                  Forget spending hours formatting your resume, or choosing
                  complimentary fonts for your cover letter. Creating a resume
                  online with Canva’s free resume builder will give you a sleek
                  and attractive resume, without the fuss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>

      <Footer1 />
    </>
  );
}

export default LandingPage;
