import Section from "src/components/Section";
import FullWidthSection from "src/components/FullWidthSection";
import { useRouter } from "next/router";
import Button from "./Button";
import Carousel from "src/components/Carousel";

const SubHeroBanner = ({
  desktopImage,
  tabletImage,
  mobileImage,
  topPadding = "pt-52",
  label,
  title,
  titleColor = "text-white",
  subTitle,
  subTitleColor = "text-mdecRed",
  cta,
  link,
  anchorTitle,
  anchorImages,
}) => {
  const router = useRouter();
  return (
    <>
      {/* Desktop */}
      <div
        className="h-[60rem] hidden md:block mb-[-160px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${desktopImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <Section>
            <div className={`${topPadding} md:pr-[30rem] lg:pr-[35rem]`}>
              {label && (
                <>
                  <div className="py-2 pl-2 pr-10 mb-6 bg-[#602404] w-max">
                    <p className="text-sm font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              <h1 className={`mb-2 text-5xl font-bold ${titleColor}`}>
                {title}
              </h1>
              <h2 className={`text-xl font-bold ${subTitleColor}`}>
                {subTitle}
              </h2>
              {cta && (
                <div className="flex justify-start py-6">
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
            {anchorTitle && (
              <div className="rounded-3xl bg-white shadow-md text-left text-center py-4 mx-[5rem] mt-20 px-4">
                <p className="font-bold">{anchorTitle}</p>

                <div className="grid grid-cols-6 gap-x-2 mx-auto px-2 items-center">
                  {anchorImages.map((item, index) => {
                    return (
                      <img
                        className="max-w-[8rem] max-h-[7rem] mx-auto"
                        key={index}
                        src={item}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </Section>
        </div>
      </div>

      {/* Tablet */}
      <div
        className="hidden xs:block md:hidden bg-cover bg-center bg-no-repeat h-[40rem]"
        style={{ backgroundImage: `url(${tabletImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className={`pt-[10rem] px-8.5 pr-[25rem]`}>
              {label && (
                <>
                  <div className="py-2 pl-2 pr-10 mb-6 bg-[#602404] w-max">
                    <p className="text-sm font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              <h1 className={`text-2xl font-bold ${titleColor}`}>{title}</h1>
              <h2 className={`text-lg font-bold ${subTitleColor}`}>
                {subTitle}
              </h2>
              {cta && (
                <div className="flex justify-start py-6">
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
            {anchorTitle && (
              <div className="rounded-3xl bg-white shadow-md text-left text-center py-4 mx-[2rem] mt-4 px-4">
                <p className="font-bold">{anchorTitle}</p>

                <div className="grid grid-cols-6 gap-x-2 mx-auto px-2 items-center">
                  {anchorImages.map((item, index) => {
                    return (
                      <img
                        className="max-w-[7rem] max-h-[7rem] mx-auto"
                        key={index}
                        src={item}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </FullWidthSection>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="xs:hidden h-[41.875rem] bg-cover bg-center bg-no-repeat mb-[-40px]"
        style={{ backgroundImage: `url(${mobileImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className={`pt-20 px-6`}>
              {label && (
                <>
                  <div className="py-2 pl-1 pr-2 mb-6 bg-[#602404] w-max">
                    <p className="text-xs font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              <h1 className={`text-lg font-bold ${titleColor}`}>{title}</h1>
              <h2 className={`text-sm font-bold ${subTitleColor}`}>
                {subTitle}
              </h2>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color="red"
                    type="fill"
                    size="sm"
                    className="uppercase min-w-max"
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
            </div>

            {anchorTitle && (
              <div className="rounded-3xl bg-white shadow-md text-left text-center py-4 mx-[2rem] mt-4 px-4">
                <p className="font-bold">{anchorTitle}</p>

                <div className="grid grid-cols-1 mx-auto items-center pt-6">
                  <Carousel>
                    {anchorImages.map((item, index) => {
                      return (
                        <img className="max-w-[10rem]" key={index} src={item} />
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            )}
          </FullWidthSection>
        </div>
      </div>
    </>
  );
};

export default SubHeroBanner;
