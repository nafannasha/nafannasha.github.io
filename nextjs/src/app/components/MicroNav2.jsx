import { useState, useEffect } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useLocalization } from "src/contexts/LocalizationContext";
import classnames from "classnames";
import Section from "./Section";

const MicroNav2 = ({ navArray }) => {
  const { changeLocale, getCurrentLocale } = useLocalization();
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

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
              <p
                className={classnames("cursor-pointer", {
                  "opacity-50": getCurrentLocale() !== "en",
                  "text-mdecRed font-bold": getCurrentLocale() === "en",
                })}
                onClick={() => changeLocale("en")}
              >
                ENG
              </p>
              <span className="border-l border-[#c9c6c6] mx-3" />
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
          </Section>
        </div>
        <div
          className={
            "transition-all duration-200 transform" +
            " " +
            (scroll ? "bg-white shadow-lg" : "bg-[#ffd5d5]")
          }
        >
          <Section>
            <a href="/">
              <img
                className="py-4 max-w-[148px] cursor-pointer"
                src="/static/logo/mdec-logo.png"
              />
            </a>
          </Section>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="sm:hidden block fixed top-0 z-20 w-full">
        <div className="bg-[#383e43]">
          <Section className="gap-0">
            <div className="flex justify-end bg-[#383e43] text-sm text-[#c9c6c6] uppercase py-3 gap-x-3 font-bold">
              <p
                className={classnames("cursor-pointer", {
                  "opacity-50": getCurrentLocale() !== "en",
                  "text-mdecRed font-bold": getCurrentLocale() === "en",
                })}
                onClick={() => changeLocale("en")}
              >
                ENG
              </p>
              <span className="border-l border-text-[#c9c6c6] mx-3" />
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
          </Section>
        </div>
        <div
          className={
            "transition-all duration-200 transform" +
            " " +
            (scroll ? "bg-white shadow-lg" : "bg-[#ffd5d5]")
          }
        >
          <Section>
            <a href="/">
              <img
                className="py-4 max-w-[120px] cursor-pointer"
                src="/static/logo/mdec-logo.png"
              />
            </a>
          </Section>
        </div>
      </nav>
    </>
  );
};

export default MicroNav2;
