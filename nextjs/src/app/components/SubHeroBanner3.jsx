import Section from "src/components/Section";
import FullWidthSection from "src/components/FullWidthSection";
import { useRouter } from "next/router";
import Button from "./Button";

const SubHeroBanner3 = ({
  desktopImage,
  tabletImage,
  mobileImage,
  mobileSmallImage,
  className,
  topPadding = "pt-24",
  label,
  title,
  titleColor = "text-white",
  mobileTitleSize = "text-[1.75rem]",
  subTitle,
  subTitleColor = "text-mdecRed",
  mobileSubSize = "text-sm",
  cta,
  link,
  button,
  onClick,
  disabledCta,
  logo,
  cta1,
}) => {
  const router = useRouter();
  return (
    <>
      <div
        className={`bg-cover bg-center bg-no-repeat h-[43.75rem] hidden md:block mb-[-100px] ${className}`}
        style={{ backgroundImage: `url(${desktopImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <Section>
            <div className={`${topPadding} md:pr-[30rem] lg:pr-[35rem]`}>
              {label && (
                <>
                  <div className="py-2 px-4 mb-6 bg-mdecBlack w-max">
                    <p className="text-sm font-bold tracking-[5px] text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              {logo && (
                <div>
                  <img src={logo} alt="" />
                </div>
              )}
              <h1 className={`mb-5 text-5xl font-bold ${titleColor}`}>
                {title}
              </h1>
              <p className={`text-xl whitespace-pre-line ${subTitleColor}`}>
                {subTitle}
              </p>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color="red"
                    type="fill"
                    size="lg"
                    className="uppercase min-w-max text-lg"
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
              {cta1 && (
                <div className="flex justify-start py-6">
                  <Button
                    color="black"
                    type="fill"
                    size="lg"
                    className="uppercase min-w-max text-lg"
                    onClick={onClick}
                  >
                    {cta1}
                  </Button>
                </div>
              )}
              {button && (
                <div className="flex justify-start py-6">
                  <Button
                    color="red"
                    type="fill"
                    size="lg"
                    className="uppercase min-w-max text-lg"
                    onClick={onClick}
                  >
                    {button}
                  </Button>
                </div>
              )}
              {disabledCta && (
                <div className="flex justify-start py-6">
                  <Button
                    color="gray"
                    type="fill"
                    size="md"
                    className="uppercase min-w-max text-white bg-opacity-70 hover:pointer-events-none"
                  >
                    {disabledCta}
                  </Button>
                </div>
              )}
            </div>
          </Section>
        </div>
      </div>
      <div
        className={`hidden sm:block md:hidden bg-cover bg-center bg-no-repeat h-[35rem] mb-[-100px] ${className}`}
        style={{ backgroundImage: `url(${tabletImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            {logo && (
              <div className="pt-20">
                <img src={logo} alt="" />
              </div>
            )}
            <div className={`${topPadding} px-8.5 pr-[25rem]`}>
              {label && (
                <>
                  <div className="py-2 px-4 mb-6 bg-mdecBlack w-max">
                    <p className="text-sm font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              <h1 className={`text-4xl font-bold ${titleColor}`}>{title}</h1>
              <p className={`text-lg ${subTitleColor}`}>{subTitle}</p>
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
              {button && (
                <div className="flex justify-start py-6">
                  <Button
                    color="red"
                    type="fill"
                    size="md"
                    className="uppercase min-w-max"
                    onClick={onClick}
                  >
                    {button}
                  </Button>
                </div>
              )}
              {disabledCta && (
                <div className="flex justify-start py-6">
                  <Button
                    color="gray"
                    type="fill"
                    size="md"
                    className="uppercase min-w-max rounded-none text-white bg-opacity-70 hover:pointer-events-none"
                  >
                    {disabledCta}
                  </Button>
                </div>
              )}
            </div>
          </FullWidthSection>
        </div>
      </div>
      <div
        className={`hidden xs:block sm:hidden h-[47.063rem] bg-cover bg-center bg-no-repeat mb-[-100px] ${className}`}
        style={{ backgroundImage: `url(${mobileImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            {logo && (
              <div className="pt-20">
                <img src={logo} alt="" />
              </div>
            )}
            <div className={`${topPadding} px-[1.875rem]`}>
              {label && (
                <>
                  <div className="py-2 px-2 mb-6 bg-mdecBlack w-max">
                    <p className="text-sm font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              <h1 className={`text-4xl font-bold ${titleColor}`}>{title}</h1>
              <p className={`text-xl ${subTitleColor}`}>{subTitle}</p>
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
              {button && (
                <div className="flex justify-start py-6">
                  <Button
                    color="red"
                    type="fill"
                    size="md"
                    className="uppercase min-w-max"
                    onClick={onClick}
                  >
                    {button}
                  </Button>
                </div>
              )}
              {disabledCta && (
                <div className="flex justify-start py-6">
                  <Button
                    color="gray"
                    type="fill"
                    size="md"
                    className="uppercase min-w-max rounded-none text-white bg-opacity-70 hover:pointer-events-none"
                  >
                    {disabledCta}
                  </Button>
                </div>
              )}
            </div>
          </FullWidthSection>
        </div>
      </div>
      <div
        className={`xs:hidden h-[41.875rem] bg-cover bg-center bg-no-repeat mb-[-100px] ${className}`}
        style={{ backgroundImage: `url(${mobileSmallImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            {logo && (
              <div className="pt-20">
                <img src={logo} alt="" />
              </div>
            )}
            <div className={`${topPadding} px-6`}>
              {label && (
                <>
                  <div className="py-2 px-2 mb-6 bg-mdecBlack w-max">
                    <p className="text-xs font-bold text-white uppercase">
                      {label}
                    </p>
                  </div>
                </>
              )}
              <h1 className={`${mobileTitleSize} font-bold ${titleColor}`}>
                {title}
              </h1>
              <p className={`text-xl ${subTitleColor}`}>{subTitle}</p>
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
              {button && (
                <div className="flex justify-start py-6">
                  <Button
                    color="red"
                    type="fill"
                    size="md"
                    className="uppercase min-w-max"
                    onClick={onClick}
                  >
                    {button}
                  </Button>
                </div>
              )}
              {disabledCta && (
                <div className="flex justify-start py-6">
                  <Button
                    color="red"
                    type="fill"
                    size="md"
                    className="uppercase min-w-max rounded-none text-white bg-opacity-70 hover:pointer-events-none"
                  >
                    {disabledCta}
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

export default SubHeroBanner3;
