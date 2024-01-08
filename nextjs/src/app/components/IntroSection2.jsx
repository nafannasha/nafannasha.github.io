import classnames from "classnames";

import FullWidthSection from "src/components/FullWidthSection";
import Section from "./Section";

const IntroSection2 = ({
  desktopImage,
  tabletImage,
  mobileImage,
  smallMobileImage,
  smallMobileHeight = "pt-[80vh]",
  bgColour = "bg-[#F6EdE4]",
  title,
  titleColor,
  desc_1,
  desc_2,
  desc_3,
  className = "md:h-[37.5rem]",
}) => {
  return (
    <>
      <FullWidthSection
        className={`md:rounded-tr-100 md:bg-white md:relative -mt-12 ${className}`}
      >
        {/* DESKTOP VIEW */}
        <div
          className="bg-cover bg-center bg-no-repeat h-full rounded-tr-100 hidden md:block mb-[-100px]"
          style={{ backgroundImage: `url(${desktopImage})` }}
        >
          <div className="max-w-[1440px] mx-auto">
            <Section>
              <div className={`pt-20 md:pl-[28rem] lg:pl-[33rem]`}>
                <h1
                  className={classnames(
                    "pb-10 text-4xl text-left font-black tracking-widest",
                    {
                      "text-black": titleColor === undefined,
                      [`${titleColor}`]: titleColor,
                    }
                  )}
                >
                  {title}
                </h1>
                <p
                  className={classnames(
                    "text-2xl text-superGray tracking-wider"
                  )}
                >
                  {desc_1}
                </p>
                {desc_2 && (
                  <>
                    <br />
                    <p
                      className={classnames(
                        "text-2xl text-superGray tracking-wider"
                      )}
                    >
                      {desc_2}
                    </p>
                  </>
                )}
                {desc_3 && (
                  <>
                    <br />
                    <p
                      className={classnames(
                        "text-2xl text-superGray tracking-wider"
                      )}
                    >
                      {desc_3}
                    </p>
                  </>
                )}
              </div>
            </Section>
          </div>
        </div>

        {/* TABLET VIEW */}
        <div
          className="hidden sm:block md:hidden bg-cover bg-center bg-no-repeat h-full rounded-tr-100"
          style={{ backgroundImage: `url(${tabletImage})` }}
        >
          <div className="max-w-[1440px] mx-auto">
            <FullWidthSection>
              <div className={`pt-12 pl-[20rem] pr-10`}>
                <h1
                  className={classnames(
                    "pb-6 text-4xl text-left font-black tracking-widest",
                    {
                      "text-black": titleColor === undefined,
                      [`${titleColor}`]: titleColor,
                    }
                  )}
                >
                  {title}
                </h1>
                <div className="pb-10">
                  <p
                    className={classnames(
                      "text-2xl text-superGray tracking-wider"
                    )}
                  >
                    {desc_1}
                  </p>
                  {desc_2 && (
                    <>
                      <br />
                      <p
                        className={classnames(
                          "text-2xl text-superGray tracking-wider"
                        )}
                      >
                        {desc_2}
                      </p>
                    </>
                  )}
                  {desc_3 && (
                    <>
                      <br />
                      <p
                        className={classnames(
                          "text-2xl text-superGray tracking-wider"
                        )}
                      >
                        {desc_3}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </FullWidthSection>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div
          className={`hidden xs:block sm:hidden rounded-tr-[4.5rem] ${bgColour}`}
        >
          <div className="max-w-[1440px] mx-auto">
            <FullWidthSection>
              <div className={`pt-12 px-10`}>
                <h1
                  className={classnames(
                    "pb-6 text-4xl text-left font-black tracking-widest",
                    {
                      "text-black": titleColor === undefined,
                      [`${titleColor}`]: titleColor,
                    }
                  )}
                >
                  {title}
                </h1>
                <div className="pb-10 absolute">
                  <p
                    className={classnames(
                      "text-2xl text-superGray tracking-wider"
                    )}
                  >
                    {desc_1}
                  </p>
                  {desc_2 && (
                    <>
                      <br />
                      <p
                        className={classnames(
                          "text-2xl text-superGray tracking-wider"
                        )}
                      >
                        {desc_2}
                      </p>
                    </>
                  )}
                  {desc_3 && (
                    <>
                      <br />
                      <p
                        className={classnames(
                          "text-2xl text-superGray tracking-wider"
                        )}
                      >
                        {desc_3}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </FullWidthSection>
            <img src={mobileImage} alt="" className="w-full" />
          </div>
        </div>

        {/* SMALL MOBILE VIEW */}
        <div className={`xs:hidden rounded-tr-[4.5rem] ${bgColour}`}>
          <div className="max-w-[1440px] mx-auto">
            <FullWidthSection>
              <div className={`pt-12 px-10`}>
                <h1
                  className={classnames(
                    "pb-6 text-3xl text-left font-black tracking-widest",
                    {
                      "text-black": titleColor === undefined,
                      [`${titleColor}`]: titleColor,
                    }
                  )}
                >
                  {title}
                </h1>
                <div className="pb-10 absolute">
                  <p
                    className={classnames(
                      "text-xl text-superGray tracking-wider"
                    )}
                  >
                    {desc_1}
                  </p>
                  {desc_2 && (
                    <>
                      <br />
                      <p
                        className={classnames(
                          "text-xl text-superGray tracking-wider"
                        )}
                      >
                        {desc_2}
                      </p>
                    </>
                  )}
                  {desc_3 && (
                    <>
                      <br />
                      <p
                        className={classnames(
                          "text-xl text-superGray tracking-wider"
                        )}
                      >
                        {desc_3}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </FullWidthSection>
            <img
              src={smallMobileImage}
              alt=""
              className={`w-full ${smallMobileHeight}`}
            />
          </div>
        </div>
      </FullWidthSection>
    </>
  );
};

export default IntroSection2;
