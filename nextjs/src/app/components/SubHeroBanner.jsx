import Section from "src/components/Section";
import FullWidthSection from "src/components/FullWidthSection";
import { useRouter } from "next/router";
import Button from "./Button";

const SubHeroBanner = ({
  desktopImage,
  tabletImage,
  mobileImage,
  mobileSmallImage,
  topPadding = "pt-52",
  label,
  title,
  titleColor = "text-white",
  mobileTitleSize = "text-[1.75rem]",
  subTitle,
  subTitleColor = "text-mdecRed",
  subTitleWeight = "font-bold",
  mobileSubSize = "text-sm",
  cta,
  ctaWidth = "min-w-max",
  link,
  btnColor = "red",
  btnTextColor = "text-white",
  logo,
}) => {
  const router = useRouter();
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-[43.75rem] hidden md:block mb-[-100px]"
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
              {logo && (
                <div className="md:pb-4 pb-4">
                  <img src={logo} alt="" />
                </div>
              )}
              <h1 className={`mb-2 text-5xl font-bold ${titleColor}`}>
                {title}
              </h1>
              <h2 className={`text-xl ${subTitleColor} ${subTitleWeight}`}>
                {subTitle}
              </h2>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color={btnColor}
                    type="fill"
                    size="md"
                    className={`uppercase ${btnTextColor} ${ctaWidth}`}
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
            </div>
          </Section>
        </div>
      </div>
      <div
        className="hidden sm:block md:hidden bg-cover bg-center bg-no-repeat h-[19.25rem]"
        style={{ backgroundImage: `url(${tabletImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className="pt-16 px-8.5 pr-[25rem]">
              {label && (
                <>
                  <div className="py-2 pl-2 pr-10 mb-6 bg-[#602404] w-max">
                    <p className="text-sm font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              {logo && (
                <div className="md:pb-4 pb-4">
                  <img src={logo} alt="" />
                </div>
              )}
              <h1 className={`text-2xl font-bold ${titleColor}`}>{title}</h1>
              <h2 className={`text-lg ${subTitleColor} ${subTitleWeight}`}>
                {subTitle}
              </h2>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color={btnColor}
                    type="fill"
                    size="md"
                    className={`uppercase ${btnTextColor} ${ctaWidth}`}
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
            </div>
          </FullWidthSection>
        </div>
      </div>
      <div
        className="hidden xs:block sm:hidden h-[47.063rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mobileImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className="pt-[2.313rem] px-[1.875rem]">
              {label && (
                <>
                  <div className="py-2 pl-2 pr-10 mb-6 bg-[#602404] w-max">
                    <p className="text-sm font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              {logo && (
                <div className="md:pb-4 pb-4">
                  <img src={logo} alt="" />
                </div>
              )}
              <h1 className={`text-4xl font-bold ${titleColor}`}>{title}</h1>
              <h2 className={`text-base ${subTitleColor} ${subTitleWeight}`}>
                {subTitle}
              </h2>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color={btnColor}
                    type="fill"
                    size="md"
                    className={`uppercase ${btnTextColor} ${ctaWidth}`}
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
            </div>
          </FullWidthSection>
        </div>
      </div>
      <div
        className="xs:hidden h-[41.875rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mobileSmallImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className="pt-[1.938rem] px-6">
              {label && (
                <>
                  <div className="py-2 pl-1 pr-2 mb-6 bg-[#602404] w-max">
                    <p className="text-xs font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              {logo && (
                <div className="md:pb-4 pb-4">
                  <img src={logo} alt="" />
                </div>
              )}
              <h1 className={`${mobileTitleSize} font-bold ${titleColor}`}>
                {title}
              </h1>
              <h2
                className={`${mobileSubSize} ${subTitleColor} ${subTitleWeight}`}
              >
                {subTitle}
              </h2>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color={btnColor}
                    type="fill"
                    size="md"
                    className={`uppercase ${btnTextColor} ${ctaWidth}`}
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
            </div>
          </FullWidthSection>
        </div>
      </div>
    </>
  );
};

export default SubHeroBanner;
