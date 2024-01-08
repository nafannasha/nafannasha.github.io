import Link from "next/link";
import { useTranslation } from "react-i18next";

const RoundCta = ({ title, desc, link, src, flip = false }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`max-w-md mx-auto md:flex md:max-w-screen-md lg:max-w-screen-lg text-mdecDarkGray ${
          flip ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`px-10 py-12 lg:py-20 bg-white md:w-7/12 lg:w-7/12 flex flex-col justify-center rounded-tr-[4rem] min-h-[400px] space-y-4 mt-10 ${
            flip
              ? "md:rounded-r-[4rem]"
              : "md:rounded-l-[4rem] md:rounded-tr-none"
          }`}
        >
          <p className="uppercase font-bold text-xl lg:text-2xl">{title}</p>
          <p className="text-lg lg:text-xl">{desc}</p>
          {link && (
            <Link href={link}>
              <p className="text-left lg:text-lg text-darkRed font-bold cursor-pointer">
                + {t("learn_more")}
              </p>
            </Link>
          )}
        </div>
        <div className="md:w-5/12 lg:w-5/12 md:relative flex flex-col">
          <div
            className={`half-bg ${
              flip ? "half-bg-flip" : ""
            } md:mt-10 flex-grow w-full`}
          >
            <img
              className="h-full w-full md:w-auto md:absolute bottom-0 left-0 rounded-full"
              src={src}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoundCta;
