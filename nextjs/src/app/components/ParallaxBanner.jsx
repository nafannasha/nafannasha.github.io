import { useTranslation } from "react-i18next";

import { useRouter } from "next/router";

const ParallaxBanner = ({
  backgroundSrc,
  title,
  subtitle,
  titleColor = "text-white",
  subtitleColor = "text-white",
  paddingTop = "pt-20",
  cta,
  link,
  disable_cta,
  btnColor = "bg-mdecRed",
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <div
        className="md:bg-fixed bg-bottom bg-no-repeat bg-cover min-h-[35rem]"
        style={{
          backgroundImage: `url(${backgroundSrc})`,
        }}
      >
        <div className={`${paddingTop} max-w-xl mx-auto`}>
          <h1
            className={`text-4xl md:text-5xl font-bold text-center ${titleColor}`}
          >
            {title}
          </h1>
          <div className="mt-6">
            <p className={`text-lg text-center md:text-2xl ${subtitleColor}`}>
              {subtitle}
            </p>
          </div>
          {cta && (
            <div className="mt-6 flex justify-center">
              <a
                href={link}
                className={`flex items-center justify-center
       border font-bold focus:outline-none
        px-10 w-auto h-[60px] rounded-[30px] 
        ${btnColor} text-white border-none
        uppercase text-xl
      `}
              >
                {cta}
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ParallaxBanner;
