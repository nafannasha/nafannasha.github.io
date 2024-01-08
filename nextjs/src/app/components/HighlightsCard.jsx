import Link from "next/dist/client/link";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import classnames from "classnames";

const HighlightsCard = ({
  src,
  flip = false,
  title,
  desc,
  badge_title,
  badge_desc,
  ctaLink,
  linkName,
  link,
  linkOnClick,
  className,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {/* MOBILE VIEW */}
      <div className={`block md:hidden ${className}`}>
        {/* CONTENT */}
        <div className="shadow-lg h-3/4 bg-white">
          {/* BADGE */}
          <div className="p-10">
            {badge_title && (
              <div className="mb-7 flex items-center text-sm uppercase">
                <div className="mr-6 pt-0.5 px-3 bg-mdecBlack text-white text-center font-bold rounded-full">
                  {badge_title}
                </div>
                <p>{badge_desc}</p>
              </div>
            )}

            <p className="mb-4 text-4xl font-bold">{title}</p>
            <p className="mb-6 text-lg sm:text-2xl">{desc}</p>

            {ctaLink && (
              <Link href={ctaLink}>
                <Button size="md" color="red" type="fill" className="uppercase">
                  {t("learn_more")}
                </Button>
              </Link>
            )}

            {link && (
              <Link href={link}>
                <p
                  className="text-left text-base text-darkRed font-bold cursor-pointer"
                  onClick={linkOnClick}
                >
                  + {linkName ? linkName : t("learn_more")}
                </p>
              </Link>
            )}
          </div>
          {/* IMAGE */}
          <div>
            <img src={src} className="w-full" />
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div
        className={`
            hidden md:block h-[447px]
            ${
              flip
                ? "rounded-l-100"
                : "rounded-r-100 rounded-l-[18.75rem] shadow-lg"
            }
            ${className}
          `}
      >
        <div
          className={classnames("flex h-full items-end", {
            "flex-row-reverse": flip,
          })}
        >
          {/* IMAGE */}
          <img
            src={src}
            className={`h-[480px] w-auto ${flip ? "absolute" : "relative"}`}
          />
          {/* CONTENT */}
          <div
            className={`
                p-14 w-full h-full bg-white flex flex-col justify-center
                ${
                  flip
                    ? "rounded-l-100 rounded-r-[18.75rem] shadow-lg pr-[29.5rem]"
                    : "rounded-r-[80px]"
                }
              `}
          >
            {/* BADGE */}
            {badge_title && (
              <div className="mb-7 flex items-center text-sm uppercase">
                <div className="mr-6 pt-0.5 px-3 bg-mdecBlack text-white text-center font-bold rounded-full">
                  {badge_title}
                </div>
                <p>{badge_desc}</p>
              </div>
            )}

            <p className="mb-4 text-4xl font-bold">{title}</p>
            <p className="mb-6 text-lg">{desc}</p>

            {ctaLink && (
              <Link href={ctaLink} passHref>
                <Button size="md" color="red" type="fill" className="uppercase">
                  {t("learn_more")}
                </Button>
              </Link>
            )}

            {link && (
              <Link href={link}>
                <p
                  className="text-left text-base text-darkRed font-bold cursor-pointer"
                  onClick={linkOnClick}
                >
                  + {linkName ? linkName : t("learn_more")}
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightsCard;
