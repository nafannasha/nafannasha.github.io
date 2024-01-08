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
  mobileSubSize = "text-sm",
  cta,
  link,
  btnColor = "red",
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
              <h1 className={`mb-2 text-5xl font-bold ${titleColor}`}>
                {title}
              </h1>
              <h2 className={`text-xl font-bold ${subTitleColor}`}>
                {subTitle}
              </h2>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color={btnColor}
                    type="fill"
                    size="md"
                    className="uppercase min-w-max text-white"
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
        className="hidden sm:block md:hidden bg-cover bg-center bg-no-repeat h-[30rem] mb-[-100px]"
        style={{ backgroundImage: `url(${tabletImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className={`${topPadding} px-8.5 pr-[25rem]`}>
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
                    color={btnColor}
                    type="fill"
                    size="md"
                    className="uppercase min-w-max text-white"
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
        className="hidden xs:block sm:hidden h-[50rem] bg-cover bg-center bg-no-repeat mb-[-100px]"
        style={{ backgroundImage: `url(${mobileImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className={`${topPadding} px-[1.875rem]`}>
              {label && (
                <>
                  <div className="py-2 pl-2 pr-10 mb-6 bg-[#602404] w-max">
                    <p className="text-sm font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              <h1 className={`text-4xl font-bold ${titleColor}`}>{title}</h1>
              <h2 className={`text-base font-bold ${subTitleColor}`}>
                {subTitle}
              </h2>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color={btnColor}
                    type="fill"
                    size="md"
                    className="uppercase min-w-max text-white"
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
        className="xs:hidden h-[44rem] bg-cover bg-center bg-no-repeat mb-[-100px]"
        style={{ backgroundImage: `url(${mobileSmallImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className={`${topPadding} px-6`}>
              {label && (
                <>
                  <div className="py-2 pl-1 pr-2 mb-6 bg-[#602404] w-max">
                    <p className="text-xs font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              <h1 className={`${mobileTitleSize} font-bold ${titleColor}`}>
                {title}
              </h1>
              <h2 className={`${mobileSubSize} font-bold ${subTitleColor}`}>
                {subTitle}
              </h2>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color={btnColor}
                    type="fill"
                    size="md"
                    className="uppercase min-w-max text-white"
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
