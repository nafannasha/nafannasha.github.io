import Link from "next/link";
import classnames from "classnames";
import FullWidthSection from "src/components/FullWidthSection";
import Breadcrumbs from "src/components/Breadcrumbs";

const IntroSection = ({
  desktopImage,
  mobileImage,
  topPadding = "md:pt-28",
  title,
  titleColor,
  desc,
  descColor,
  linkTitle,
  link,
  linkColor = "text-darkRed",
  breadcrumbs = true,
  mobileBg = "bg-white",
  mdBgHeight = "h-[37.5rem]",
  mdBgColor = "bg-white",
}) => {
  return (
    <FullWidthSection
      className={`h-auto md:${mdBgHeight} md:rounded-tr-100 md:${mdBgColor} ${mobileBg} md:relative`}
    >
      <div className="hidden md:block md:absolute md:h-full">
        <img src={desktopImage} alt="" className="md:object-cover md:h-full" />
      </div>
      <div className="grid grid-cols-1 md:absolute md:grid-cols-12 md:gap-5">
        <div
          className={`hidden md:block md:col-start-7 md:col-span-5 ${topPadding}`}
        >
          {breadcrumbs == true && <Breadcrumbs />}
        </div>
        <div className="md:col-start-7 md:col-span-5 px-6 md:px-0 pt-[4.5rem] md:pt-0 pb-6 md:pb-0">
          <h1
            className={classnames("text-2xl uppercase", {
              "text-mdecGreen": titleColor === undefined,
              [`${titleColor} font-bold`]: titleColor,
            })}
          >
            {title}
          </h1>
        </div>

        <div className="px-6 md:col-start-7 md:col-span-5 md:px-0 pb-7 md:pb-0">
          <p
            className={classnames("text-lg md:text-xl lg:text-2xl", {
              [`${descColor}`]: descColor,
            })}
          >
            {desc}
          </p>
        </div>

        {link && (
          <div className="md:col-start-7 md:col-span-5 px-6 md:px-0 pb-12 xs:pb-1.5 md:pb-0">
            <Link href={link}>
              <a className="flex flex-row-reverse items-center justify-end md:flex-row md:justify-start">
                <p className={`pr-2 text-base font-bold ${linkColor}`}>
                  {linkTitle}
                </p>
                <svg
                  className={`h-7 w-7 mr-4 md:mr-0 ${linkColor}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
          </div>
        )}

        <div className="w-full md:hidden sm:mt-4">
          <img src={mobileImage} alt="" className="w-full" />
        </div>
      </div>
    </FullWidthSection>
  );
};

export default IntroSection;
