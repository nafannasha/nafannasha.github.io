import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Section from "./Section";
import Button from "src/components/Button";

/**
 * Usage:
 *
 * Required props: stories as an array of objects with title, desc, author, credentials and src
 *
 * Optional props: bigTitle, subtitle1, subtitle2, cta, link.
 */

const Testimony = (props) => {
  const router = useRouter();
  const { t } = useTranslation("home");
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
    imageClassName,
  } = props;

  const [index, setIndex] = useState(0);

  return (
    <Section className={className}>
      {showBigTitle && (
        <>
          <p className="text-mdecGreen text-2xl uppercase">
            {t("success_stories")}
          </p>
          <p className="mb-16 font-light text-6xl uppercase">{bigTitle}</p>
        </>
      )}
      <TestimonyCard
        title={stories?.[index]?.title}
        titleColor={titleColor}
        desc={stories?.[index]?.desc}
        author={stories?.[index]?.author}
        credentials={stories?.[index]?.credentials}
        src={stories?.[index]?.src}
        videoSrc={stories?.[index]?.videoSrc}
        onClick={stories?.[index]?.onClick}
        stories={stories}
        showArrows={stories?.length > 1}
        index={index}
        setIndex={setIndex}
        imageClassName={imageClassName}
      />
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
    </Section>
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
  imageClassName,
}) => {
  const { t } = useTranslation("home");

  return (
    <div className="mb-6 md:mb-16 flex flex-wrap items-center">
      <div className="md:px-8 mb-6 md:mb-0 h-full w-full md:w-1/2">
        {/* TESTIMONY */}
        <div className="flex flex-col h-full justify-between">
          {/* CONTENT */}
          <div className="h-full flex flex-col justify-center">
            <div className="text-lg text-left justify-self-center">
              <p className={`mb-5 text-[1.75rem] ${titleColor} uppercase`}>
                {t("home.testimony.title")}
              </p>
              <p className="mb-5 font-bold text-[1.75rem]">{title}</p>
              <p>{desc}</p>
              <br />
              <p className="font-black italic">{author}</p>
              <p className="italic">{credentials}</p>
            </div>
          </div>
          {/* ARROWS */}
          {showArrows && (
            <div className="inline-flex">
              <div
                onClick={() => (index > 0 ? setIndex(index - 1) : {})}
                className={index > 0 ? "text-darkRed" : "text-lightGray"}
              >
                {/* PREV ARROW */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                onClick={() =>
                  index < stories?.length - 1 ? setIndex(index + 1) : {}
                }
                className={
                  index < stories?.length - 1
                    ? "text-darkRed"
                    : "text-lightGray"
                }
              >
                {/* NEXT ARROW */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* IMAGE PLACEHOLDER */}
      <div
        className={`h-full w-full md:w-1/2 flex cursor-pointer ${imageClassName}`}
      >
        <div onClick={onClick}>
          <img
            src={src}
            className={`w-full h-full md:h-[500px] md:w-[500px] object-contain`}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
