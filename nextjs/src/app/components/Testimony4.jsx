import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Section from "./Section";
import Button from "src/components/Button";
import TestimonyCarousel from "./TestimonyCarousel";

const Testimony4 = (props) => {
  const router = useRouter();
  const { t } = useTranslation();
  const {
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
      <TestimonyCarousel>
        {stories.map((stories, keys) => {
          return (
            <TestimonyCard
              key={keys}
              bigTitle={stories.bigTitle}
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
  bigTitle,
  title,
  titleColor = "text-mdecGreen",
  desc,
  author,
  credentials,
  src,
  videoSrc,
  onClick,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-6 md:mb-16 flex flex-wrap items-center">
      <div className=" pt-12 mb-6 md:mb-0 h-full w-full md:w-1/2 self-start">
        {/* TESTIMONY */}
        <div className="flex flex-col h-full justify-between">
          {/* CONTENT */}
          <div className="h-full flex flex-col justify-center md:pr-16 md:pl-0 sm:px-8 px-0">
            <div className="text-lg text-left justify-self-center relative">
              <p className={`text-3xl uppercase mb-5 ${titleColor}`}>
                {bigTitle}
              </p>
              <p className="mb-5 text-[1.75rem]">{title}</p>
              <p>{desc}</p>
              <br />
              <p className="font-black italic">{author}</p>
              <p className="italic">{credentials}</p>
            </div>
          </div>
        </div>
      </div>
      {/* IMAGE PLACEHOLDER */}
      <div className="h-full w-full md:w-1/2 flex justify-center">
        <a href={videoSrc} target="_blank" onClick={onClick}>
          <img
            src={src}
            className={`
          w-full h-full md:h-[500px] md:w-[500px]
          object-contain cursor-pointer
        `}
          />
        </a>
      </div>
    </div>
  );
};

export default Testimony4;
