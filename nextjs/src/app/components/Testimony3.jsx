import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Section from "./Section";
import Button from "src/components/Button";
import TestimonyCarousel from "./TestimonyCarousel";

/**
 * Usage:
 *
 * Required props: stories as an array of objects with title, desc, author, credentials and src
 *
 * Optional props: bigTitle, subtitle1, subtitle2, cta, link.
 */

/*
CHANGES FROM TESTIMONY COMPONENT:
1. Removed large title
2. Removed headline above title
3. Added quotation marks
4. Added Carousel
*/

const Testimony3 = (props) => {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    showBigTitle = true,
    bigTitle,
    titleColor,
    stories,
    subtitle1,
    subtitle2,
    subtitleClass,
    cta,
    link = "/",
    className,
  } = props;

  const [index, setIndex] = useState(0);

  return (
    <div className={className}>
      {showBigTitle && <></>}
      <TestimonyCarousel>
        {stories.map((stories, index) => {
          return (
            <TestimonyCard
              key={index}
              title={stories.title}
              titleColor={titleColor}
              desc={stories.desc}
              author={stories.author}
              credentials={stories.credentials}
              src={stories.src}
              videoSrc={stories.videoSrc}
              onClick={stories.onClick}
              stories={stories}
              showArrows={stories.length > 1}
              index={index}
              setIndex={setIndex}
            />
          );
        })}
      </TestimonyCarousel>
      {(subtitle1 || subtitle2) && (
        <div
          className={`mb-4 md:mb-8 text-lg md:text-2xl text-center ${subtitleClass}`}
        >
          {subtitle1 && <p>{subtitle1}</p>}
          {subtitle2 && <p>{subtitle2}</p>}
        </div>
      )}
      {cta && (
        <div className="flex justify-center">
          <Button
            color="red"
            type="fill"
            size="md"
            className="uppercase min-w-max"
            onClick={() => router.push(link)}
          >
            {cta}
          </Button>
        </div>
      )}
    </div>
  );
};

const TestimonyCard = ({
  title,
  titleColor = "text-mdecGreen",
  desc,
  author,
  credentials,
  src,
  videoSrc,
  onClick,
  stories,
  showArrows,
  index,
  setIndex,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-6 md:mb-16 flex flex-wrap items-center mx-2">
      <div className="md:px-12 px-12 mb-6 md:mb-0 h-full w-full md:w-1/2">
        {/* TESTIMONY */}
        <div className="flex flex-col h-full justify-between">
          {/* CONTENT */}
          <div className="h-full flex flex-col justify-center md:pr-16 md:pl-0 sm:px-8 px-0">
            <div className="text-lg text-left justify-self-center relative">
              <p className="mb-5 font-bold text-[1.75rem]">{title}</p>
              <p>{desc}</p>
              <br />
              <p className="font-black italic">{author}</p>
              <p className="italic">{credentials}</p>
              {/* QUOTATION MARKS */}
              {/* Opening Quote Icon: vaadin-quote-right (icones.js.org) */}
              <svg
                className="absolute left-0 top-0 iconify iconify--vaadin w-10 h-10 text-gray-400 transform -translate-x-full -ml-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M7 7v7H0V6.9c0-4.8 4.5-5.4 4.5-5.4l.6 1.4s-2 .3-2.4 1.9C2.3 6 3.1 7 3.1 7H7z"
                ></path>
                <path
                  fill="currentColor"
                  d="M16 7v7H9V6.9c0-4.8 4.5-5.4 4.5-5.4l.6 1.4s-2 .3-2.4 1.9c-.4 1.2.4 2.2.4 2.2H16z"
                ></path>
              </svg>
              {/* Closing Quote Icon: vaadin-quote-right (icones.js.org) */}
              <svg
                className="absolute right-0 bottom-0 iconify iconify--vaadin w-10 h-10 text-gray-400 -mr-8 mb-24 xs:mb-16"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M9 9V2h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-.6-1.4s2-.3 2.4-1.9c.4-1.2-.4-2.2-.4-2.2H9z"
                ></path>
                <path
                  fill="currentColor"
                  d="M0 9V2h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-.6-1.4s2-.3 2.4-1.9C4.7 10 3.9 9 3.9 9H0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* IMAGE PLACEHOLDER */}
      <div className="h-full w-full md:w-1/2 flex cursor-pointer">
        <a href={videoSrc} target="_blank" onClick={onClick}>
          <img
            src={src}
            className={`
          w-full h-full md:h-[500px] md:w-[500px]
          object-contain
        `}
          />
        </a>
      </div>
    </div>
  );
};

export default Testimony3;
