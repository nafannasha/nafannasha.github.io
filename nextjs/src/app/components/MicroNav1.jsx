import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useLocalization } from "src/contexts/LocalizationContext";

import classnames from "classnames";
import Section from "./Section";

import { scrollTo } from "src/utils/scrollTo";

const MicroNav1 = ({ navArray, registerLink, signInLink }) => {
  const { changeLocale, getCurrentLocale } = useLocalization();
  const { t } = useTranslation();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const handleClick = (id, offset) => {
    scrollTo(id, offset);
  };

  return (
    <>
      {/* 
      General desktop and mobile navigation for micro sites besides the main MDEC site.
      navBar's background color is transparent and will transition to white colour after scrolling. 
      Pass in an array of objects with property name of label and href as props to generate links.
      eg.
      const linksObject = [
        {
          label: 'Tutorial',
          href: '#tutorial'
        }
      ]
      <GeneralNav 
        navArray={linksObject}
      />
    */}

      {/* Desktop Navigation */}
      <nav className="sticky top-0 z-20 hidden sm:block">
        <div className="bg-[#383e43]">
          <Section className="sm:gap-0">
            <div className="flex justify-end bg-[#383e43] text-sm text-[#c9c6c6] uppercase py-3 gap-x-3 font-bold">
              <a
                className="hover:underline hover:cursor-pointer"
                onClick={() => router.push(registerLink)}
              >
                {t("register")}
              </a>
              <span className="border-l" />
              <a
                className="hover:underline hover:cursor-pointer"
                onClick={() => router.push(signInLink)}
              >
                {t("sign_in")}
              </a>
            </div>
          </Section>
        </div>
        <div
          className={
            "transition-all duration-200 transform" +
            " " +
            (scroll ? "bg-white shadow-lg" : "bg-transparent")
          }
        >
          <Section>
            <div className="flex justify-between uppercase h-20 items-end py-8 font-bold text-[#14304c]">
              <div className="flex gap-x-12">
                {navArray.map((item, index) => (
                  <a
                    key={index}
                    className="hover:border-[#14304c] cursor-pointer border-transparent border-b-4"
                    onClick={() => handleClick(item.href, 100)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="flex gap-x-3">
                <p
                  className={classnames("cursor-pointer", {
                    "opacity-50": getCurrentLocale() !== "en",
                    "text-mdecRed font-bold": getCurrentLocale() === "en",
                  })}
                  onClick={() => changeLocale("en")}
                >
                  ENG
                </p>
                <span className="border-l border-superGray mx-3" />
                <p
                  className={classnames("cursor-pointer", {
                    "opacity-50": getCurrentLocale() !== "ms",
                    "text-mdecRed font-bold": getCurrentLocale() === "ms",
                  })}
                  onClick={() => changeLocale("ms")}
                >
                  BM
                </p>
              </div>
            </div>
          </Section>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="sm:hidden block fixed top-0 z-20 w-full">
        <div className="bg-[#383e43]">
          <Section className="gap-0">
            <div className="flex justify-end bg-[#383e43] text-sm text-[#c9c6c6] uppercase py-3 gap-x-3 font-bold">
              <a
                className="hover:underline hover:cursor-pointer"
                onClick={() => router.push(registerLink)}
              >
                {t("register")}
              </a>
              <span className="border-l" />
              <a
                className="hover:underline hover:cursor-pointer"
                onClick={() => router.push(signInLink)}
              >
                {t("sign_in")}
              </a>
            </div>
          </Section>
        </div>
        <div
          className={
            "px-[15px] flex flex-row-reverse justify-between h-full items-center py-6 float-right transition-all duration-200 transform w-full" +
            " " +
            (scroll ? "bg-white shadow-lg" : "bg-transparent")
          }
        >
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setIsOpen(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <Transition.Root show={isOpen ? true : false} as={Fragment}>
              <Dialog
                as="div"
                static
                className="fixed inset-0 overflow-hidden z-20 bg-darkRed bg-opacity-75 transition-all ease-in-out duration-100"
                open={isOpen}
                onClose={() => setIsOpen(false)}
              >
                <div className="absolute inset-0 overflow-hidden font-Montserrat">
                  <Dialog.Overlay className="absolute inset-0" />

                  <div className="fixed inset-y-0 left-0 pr-8 max-w-full flex">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition-all ease-in-out duration-500 sm:duration-700"
                      enterFrom="-translate-x-full opacity-50"
                      enterTo="translate-x-0 opacity-100"
                      leave="transform transition-all ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0 opacity-100"
                      leaveTo="-translate-x-full opacity-50"
                    >
                      <div className="w-screen max-w-md">
                        <div className="h-full flex flex-col pt-5 pb-7 bg-white shadow-xl overflow-y-auto">
                          <div className="px-4 sm:px-6">
                            <div className="flex items-start justify-end">
                              <div className="ml-3 h-7 flex items-center">
                                <button
                                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={4}
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mt-10 relative flex-1">
                            <div className="absolute inset-0 px-5 2xs:px-7.5">
                              {/* WIP */}
                              <div className="flex flex-col justify-between gap-y-4">
                                {navArray.map((item, index) => (
                                  <div
                                    key={index}
                                    onClick={() =>
                                      handleClick(`${item.href}`, 100)
                                    }
                                  >
                                    <a
                                      key={index}
                                      className="text-lightRed uppercase text-lg mb-8 cursor-pointer"
                                    >
                                      <span className="mr-2 text-xl font-extrabold">
                                        +
                                      </span>{" "}
                                      {item.label}
                                    </a>
                                  </div>
                                ))}
                                <div className="border-t mb-8" />
                                <div className="flex">
                                  <p
                                    className={classnames("cursor-pointer", {
                                      "opacity-50": getCurrentLocale() !== "en",
                                      "text-mdecRed font-bold":
                                        getCurrentLocale() === "en",
                                    })}
                                    onClick={() => changeLocale("en")}
                                  >
                                    ENG
                                  </p>
                                  <span className="border-l border-superGray mx-3" />
                                  <p
                                    className={classnames("cursor-pointer", {
                                      "opacity-50": getCurrentLocale() !== "ms",
                                      "text-mdecRed font-bold":
                                        getCurrentLocale() === "ms",
                                    })}
                                    onClick={() => changeLocale("ms")}
                                  >
                                    BM
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </>
        </div>
      </nav>
    </>
  );
};

export default MicroNav1;
