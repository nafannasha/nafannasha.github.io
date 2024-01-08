import { useRouter } from "next/router";
import Section from "./Section";
import Button from "src/components/Button";

const Banner2 = ({
  desktopImg,
  tabletImg,
  mobileImg,
  smallMobileImg,
  title,
  textColor = "text-white",
}) => {
  return (
    <>
      {/* DESKTOP BANNER */}
      <div
        className={`
        hidden md:block
        w-full
        h-[670px] xs:h-[800px] sm:h-[373px] md:h-[700px]
        bg-cover bg-center bg-no-repeat
        text-left
        ${textColor}
      `}
        style={{ backgroundImage: `url(${desktopImg})` }}
      >
        <Section className="pt-64">
          <div className="flex w-full sm:w-80 md:w-[450px]">
            <p className="text-2xl md:text-5xl font-bold">{title}</p>
          </div>
        </Section>
      </div>

      {/* TABLET BANNER */}
      <div
        className={`
        hidden sm:block md:hidden
        w-full
        h-[670px] xs:h-[800px] sm:h-[373px] md:h-[700px]
        bg-cover bg-center bg-no-repeat
        text-left
        ${textColor}
      `}
        style={{ backgroundImage: `url(${tabletImg})` }}
      >
        <Section className="pt-16 sm:pt-32">
          <div className="w-full sm:w-80 md:w-[450px] ml-12">
            <p className="text-3xl md:text-5xl font-bold">{title}</p>
          </div>
        </Section>
      </div>

      {/* MOBILE BANNER */}
      <div
        className={`
        hidden xs:block sm:hidden
        w-full
        h-[360px] xs:h-[400px]
        bg-cover bg-center bg-no-repeat
        text-left
        ${textColor}
      `}
        style={{ backgroundImage: `url(${mobileImg})` }}
      >
        <Section className="pt-24 lg:pt-64">
          <div className="w-full sm:w-80 md:w-[450px]">
            <p className="text-3xl md:text-5xl font-bold">{title}</p>
          </div>
        </Section>
      </div>

      {/* SMALL MOBILE BANNER */}
      <div
        className={`
        block xs:hidden
        w-full
        h-[360px] xs:h-[400px]
        bg-cover bg-center bg-no-repeat
        text-left
        ${textColor}
      `}
        style={{ backgroundImage: `url(${smallMobileImg})` }}
      >
        <Section className="pt-24 lg:pt-64">
          <div className="w-full sm:w-80 md:w-[450px]">
            <p className="text-3xl md:text-5xl font-bold">{title}</p>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Banner2;
