import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Button from "src/components/Button";
import FullWidthSection from "src/components/FullWidthSection";
import Section from "src/components/Section";

const CTABanner = ({
  desktopImage,
  tabletImage,
  mobileImage,
  mobileSmallImage,
  title,
  titleColor = "text-white",
  description,
  descriptionColor = "text-white",
  alignLeft,
  cta,
  link,
  smallText,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      {/* DESKTOP VIEW */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full hidden md:block py-24"
        style={{ backgroundImage: `url(${desktopImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <Section>
            <div
              className={`flex flex-col ${
                alignLeft ? "justify-start w-1/2" : "justify-center"
              }`}
            >
              <h1
                className={`text-[2.5rem] pb-6 md:text-[2.5rem] font-black ${
                  alignLeft ? "text-left" : "text-center uppercase"
                } ${titleColor}`}
              >
                {title}
              </h1>
              <p
                className={`text-lg ${
                  alignLeft ? "text-left" : "text-center"
                } ${descriptionColor}`}
              >
                {description}
              </p>
              {link ? (
                <div
                  className={`flex ${
                    alignLeft ? "justify-start" : "justify-center"
                  } pt-10`}
                >
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
              ) : null}
              <p className={`pt-6 text-base ${descriptionColor}`}>
                {smallText}
              </p>
            </div>
          </Section>
        </div>
      </div>

      {/* TABLET VIEW */}
      <div
        className="hidden sm:block md:hidden bg-cover bg-center bg-no-repeat w-full py-24"
        style={{ backgroundImage: `url(${tabletImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className="px-8.5">
              <h1
                className={`text-4xl pb-4 font-black text-center ${titleColor} uppercase`}
              >
                {title}
              </h1>
              <p className={`text-xl text-center ${descriptionColor}`}>
                {description}
              </p>
              {link ? (
                <div className="flex justify-center pt-6">
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
              ) : null}
              <p className={`pt-2 text-sm ${descriptionColor}`}>{smallText}</p>
            </div>
          </FullWidthSection>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div
        className="hidden xs:block sm:hidden w-full py-36 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mobileImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className="px-[1.875rem]">
              <h1
                className={`text-5xl pb-6 font-black text-center ${titleColor} uppercase`}
              >
                {title}
              </h1>
              <p className={`text-lg text-center ${descriptionColor}`}>
                {description}
              </p>
              {link ? (
                <div className="flex justify-center pt-6">
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
              ) : null}
              <p className={`pt-4 text-sm ${descriptionColor}`}>{smallText}</p>
            </div>
          </FullWidthSection>
        </div>
      </div>

      {/* SMALL MOBILE VIEW */}
      <div
        className="xs:hidden w-full py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mobileSmallImage})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <FullWidthSection>
            <div className="px-6">
              <h1
                className={`text-[1.75rem] pb-2 font-black text-center ${titleColor} uppercase`}
              >
                {title}
              </h1>
              <p className={`text-sm text-center ${descriptionColor}`}>
                {description}
              </p>
              {link ? (
                <div className="flex justify-center pt-4">
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
              ) : null}
              <p className={`pt-2 text-sm ${descriptionColor}`}>{smallText}</p>
            </div>
          </FullWidthSection>
        </div>
      </div>
    </>
  );
};

export default CTABanner;
