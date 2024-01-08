import { useRouter } from "next/router";
import Section from "./Section";
import Button from "src/components/Button";

const Banner = ({
  desktopImg,
  tabletImg,
  mobileImg,
  smallMobileImg,
  title,
  textColor = "text-white",
  desc,
  link,
  smallText,
  smallTextColor = "text-white",
  disclaimer,
  disclaimerTextColor = "text-white",
  onClick,
  linkTitle,
  bannerLogo,
  bannerLogo2,
  disabled = false,
}) => {
  const router = useRouter();

  const linkHandler = (e) => {
    e.preventDefault();
    if (link.startsWith("https://") || link.startsWith("http://")) {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };

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
        <Section className={`pt-16 ${bannerLogo ? "lg:pt-20" : "lg:pt-40"}`}>
          {bannerLogo && (
            <div className="pb-[6px] max-w-[12rem] flex justify-between">
              <img className="object-contain w-8/12" src={bannerLogo}></img>
              {bannerLogo2 && (
                <img
                  className="object-contain pl-2 w-8/12"
                  src={bannerLogo2}
                ></img>
              )}
            </div>
          )}
          <div className="w-full sm:w-80 md:w-[750px]">
            <p className="mb-2 text-2xl md:text-[44px] md:leading-[1] font-bold">
              {title}
            </p>
            {desc && <p className="mb-5 text-base md:text-2xl">{desc}</p>}
            {(link || onClick) && (
              <Button
                size="lg"
                type="fill"
                color={!disabled ? "red" : "disabled"}
                onClick={link ? linkHandler : onClick}
                className={`uppercase text-[1.375rem] flex items-center justify-center min-w-max px-10 ${
                  disabled && "hover:cursor-not-allowed"
                }`}
              >
                {linkTitle}
              </Button>
            )}
            {smallText && (
              <p className={`my-5 text-base ${smallTextColor}`}>{smallText}</p>
            )}
            {disclaimer && (
              <p className={`my-5 text-base ${disclaimerTextColor}`}>
                {disclaimer}
              </p>
            )}
          </div>
        </Section>
      </div>

      {/* TABLET BANNER */}
      <div
        className={`
        hidden sm:block md:hidden
        w-full
        h-[670px] xs:h-[800px] sm:h-[450px] md:h-[700px]
        bg-cover bg-center bg-no-repeat
        text-left
        ${textColor}
      `}
        style={{ backgroundImage: `url(${tabletImg})` }}
      >
        <Section className="pt-10 lg:pt-40">
          {bannerLogo && (
            <div className="pb-3 max-w-[10rem] flex justify-between">
              <img className="max-h-24 object-contain" src={bannerLogo}></img>
              {bannerLogo2 && (
                <img
                  className="pl-2 max-h-24 object-contain"
                  src={bannerLogo2}
                ></img>
              )}
            </div>
          )}
          <div className="w-full sm:w-full md:w-[600px]">
            <p className="mb-2 text-2xl md:text-5xl font-bold">{title}</p>
            {desc && <p className="mb-5 text-base md:text-2xl">{desc}</p>}
            {(link || onClick) && (
              <Button
                size="sm"
                type="fill"
                color={!disabled ? "red" : "disabled"}
                onClick={link ? linkHandler : onClick}
                className={`uppercase text-sm flex items-center justify-center min-w-max px-6 ${
                  disabled && "hover:cursor-not-allowed"
                }`}
              >
                {linkTitle}
              </Button>
            )}
            {smallText && (
              <p className={`my-5 text-base ${smallTextColor}`}>{smallText}</p>
            )}
            {disclaimer && (
              <p className={`my-5 text-base ${disclaimerTextColor}`}>
                {disclaimer}
              </p>
            )}
          </div>
        </Section>
      </div>

      {/* MOBILE BANNER */}
      <div
        className={`
        hidden xs:block sm:hidden
        w-full
        h-[670px] xs:h-[800px]
        bg-cover bg-center bg-no-repeat
        text-left
        ${textColor}
      `}
        style={{ backgroundImage: `url(${mobileImg})` }}
      >
        <Section className="pt-8 xs:pt-10">
          {bannerLogo && (
            <div className="pb-3 w-24 flex justify-between">
              <img className="object-contain" src={bannerLogo}></img>
              {bannerLogo2 && (
                <img className="object-contain pl-2" src={bannerLogo2}></img>
              )}
            </div>
          )}
          <div className="w-full">
            <p className="mb-3 text-[28px] xs:text-4xl font-bold">{title}</p>
            {desc && <p className="mb-5 text-lg">{desc}</p>}
            {(link || onClick) && (
              <Button
                size="sm"
                type="fill"
                color={!disabled ? "red" : "disabled"}
                onClick={link ? linkHandler : onClick}
                className={`uppercase text-sm flex items-center justify-center min-w-max px-6 ${
                  disabled && "hover:cursor-not-allowed"
                }`}
              >
                {linkTitle}
              </Button>
            )}
            {smallText && (
              <p className={`my-3 text-sm ${smallTextColor}`}>{smallText}</p>
            )}
            {disclaimer && (
              <p className={`my-3 text-sm ${disclaimerTextColor}`}>
                {disclaimer}
              </p>
            )}
          </div>
        </Section>
      </div>

      {/* SMALL MOBILE BANNER */}
      <div
        className={`
        block xs:hidden
        w-full
        h-[670px] xs:h-[800px]
        bg-cover bg-center bg-no-repeat
        text-left
        ${textColor}
      `}
        style={{ backgroundImage: `url(${smallMobileImg})` }}
      >
        <Section className="pt-8 xs:pt-10">
          {bannerLogo && (
            <div className="pb-3 w-24 flex justify-between">
              <img className="object-contain" src={bannerLogo}></img>
              {bannerLogo2 && (
                <img className="object-contain pl-2" src={bannerLogo2}></img>
              )}
            </div>
          )}
          <div className="w-full">
            <p className="mb-3 text-[28px] xs:text-4xl font-bold">{title}</p>
            {desc && <p className="mb-5 text-lg">{desc}</p>}
            {(link || onClick) && (
              <Button
                size="sm"
                type="fill"
                color={!disabled ? "red" : "disabled"}
                onClick={link ? linkHandler : onClick}
                className={`uppercase text-sm flex items-center justify-center min-w-max px-6 ${
                  disabled && "hover:cursor-not-allowed"
                }`}
              >
                {linkTitle}
              </Button>
            )}
            {smallText && (
              <p className={`my-3 text-sm ${smallTextColor}`}>{smallText}</p>
            )}
            {disclaimer && (
              <p className={`my-3 text-sm ${disclaimerTextColor}`}>
                {disclaimer}
              </p>
            )}
          </div>
        </Section>
      </div>
    </>
  );
};

export default Banner;
