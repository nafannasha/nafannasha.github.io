import Section from "src/components/Section";
import FullWidthSection from "src/components/FullWidthSection";
import { useRouter } from "next/router";
import Button from "./Button";

const SubHeroBanner2 = ({
  desktopImage,
  tabletImage,
  mobileImage,
  smallMobileImage,
  logo,
  desktopVector,
  tabletVector,
  mobileVector,
  smallMobileVector,
  title,
  quote,
  bgQuote = "bg-mdecRed",
  details,
  cta,
  link,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (typeof link === "function") {
      link();
    } else router.push(link);
  };

  return (
    <>
      {/* DESKTOP BANNER */}
      <div
        className="bg-cover bg-center bg-no-repeat h-auto hidden md:block"
        style={{
          backgroundImage: `url(${desktopImage})`,
        }}
      >
        <FullWidthSection className="relative">
          <div className="max-w-[1440px] mx-auto">
            <Section>
              <div className={"md:grid md:grid-cols-2"}>
                <div className="pt-32 pb-24 z-10">
                  {logo && <img className="pb-6" src={logo} />}
                  <h1
                    className={`mb-2 text-5xl font-bold leading-snug text-navyBlue`}
                  >
                    {title}
                  </h1>

                  {cta && (
                    <div className="flex justify-start py-6">
                      <Button
                        color="red"
                        type="fill"
                        size="lg"
                        className="uppercase min-w-max text-[1.2rem]"
                        onClick={() => handleClick()}
                      >
                        {cta}
                      </Button>
                    </div>
                  )}
                </div>
                <div className="flex justify-end absolute md:right-0">
                  {quote && (
                    <div
                      className={`h-[15rem] w-[15rem] ${bgQuote} rounded-full absolute top-32 mr-[30rem] flex flex-col justify-center`}
                    >
                      <div className="text-white text-center w-[10.65rem] mx-auto">
                        <p className="font-medium text-lg leading-tight">
                          {quote}
                        </p>
                        <p className="font-light text-sm italic">{details}</p>
                      </div>
                    </div>
                  )}
                  <img className="h-auto w-auto" src={desktopVector} />
                </div>
              </div>
            </Section>
          </div>
        </FullWidthSection>
      </div>

      {/* TABLET BANNER */}
      <div
        className="hidden sm:block md:hidden h-auto bg-cover bg-center bg-no-repeat pt-24"
        style={{
          backgroundImage: `url(${tabletImage})`,
          height: "100vh",
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className={"pt-16 px-8.5"}>
              {logo && <img className="pb-6" src={logo} />}
              <h1 className={"text-5xl font-bold leading-snug text-navyBlue"}>
                {title}
              </h1>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color="red"
                    type="fill"
                    size="lg"
                    className="uppercase min-w-max text-xl"
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}

              <div className="absolute right-0 mt-[-10rem]">
                {quote && (
                  <div
                    className={`h-[15rem] w-[15rem] ${bgQuote} rounded-full mt-[-6rem] absolute right-10 flex flex-col justify-center`}
                  >
                    <div className="text-white text-center w-[10.65rem] mx-auto">
                      <p className="font-medium text-lg leading-tight">
                        {quote}
                      </p>
                      <p className="font-light text-sm italic">{details}</p>
                    </div>
                  </div>
                )}
                <img className="h-auto w-auto" src={tabletVector} />
              </div>
            </div>
          </FullWidthSection>
        </div>
      </div>

      {/* MOBILE BANNER */}
      <div
        className="hidden xs:block sm:hidden h-auto bg-cover bg-center bg-no-repeat -mt-10"
        style={{
          backgroundImage: `url(${mobileImage})`,
          height: "100vh",
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className={"pt-36 pl-[1.875rem]"}>
              {logo && <img className="pb-10" src={logo} />}
              <h1 className={"text-5xl leading-snug font-bold text-navyBlue"}>
                {title}
              </h1>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color="red"
                    type="fill"
                    size="lg"
                    className="uppercase min-w-max text-xl"
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
              <div className="relative right-0 mt-[-5rem]">
                {quote && (
                  <div
                    className={`h-[14rem] w-[14rem] ${bgQuote} rounded-full absolute top-24 flex flex-col justify-center`}
                  >
                    <div className="text-white text-center w-[9rem] mx-auto">
                      <p className="font-medium leading-tight">{quote}</p>
                      <p className="font-light text-sm italic">{details}</p>
                    </div>
                  </div>
                )}
                <img
                  className="pl-10 h-full w-full right-0"
                  src={mobileVector}
                />
              </div>
            </div>
          </FullWidthSection>
        </div>
      </div>

      {/* SMALL MOBILE BANNER */}
      <div
        className={
          "xs:hidden h-[41.875rem] bg-cover bg-center bg-no-repeat -mt-10"
        }
        style={{
          backgroundImage: `url(${smallMobileImage})`,
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className={"px-6 pt-32"}>
              {logo && <img className="pb-10" src={logo} />}
              <h1 className={"text-[2rem] font-bold text-navyBlue"}>{title}</h1>
              {cta && (
                <div className="flex justify-start py-6">
                  <Button
                    color="red"
                    type="fill"
                    size="lg"
                    className="uppercase min-w-max text-xl"
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
              <div className="absolute right-0">
                {quote && (
                  <div
                    className={`h-[10rem] w-[10rem] ${bgQuote} rounded-full absolute left-0 ml-[-2rem] flex flex-col justify-center`}
                  >
                    <div className="text-white text-center w-[8.5rem] mx-auto">
                      <p className="font-medium text-xs leading-tight">
                        {quote}
                      </p>
                      <p className="font-light text-xs italic">{details}</p>
                    </div>
                  </div>
                )}
                <img className="h-auto w-[85vw]" src={smallMobileVector} />
              </div>
            </div>
          </FullWidthSection>
        </div>
      </div>
    </>
  );
};

export default SubHeroBanner2;
