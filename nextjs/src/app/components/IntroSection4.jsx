import Breadcrumbs from "src/components/Breadcrumbs";
import Button from "./Button";
import { useRouter } from "next/router";
import Link from "next/link";

const IntroSection4 = ({
  bgColor = "bg-transprent",
  bgMobileColor = "bg-[#F6F6F6]",
  desktopBg,
  tabletBg,
  mobileBg,
  smallMobileBg,
  title,
  titleClassName,
  titleColor,
  desc,
  desc2,
  desc3,
  desc4,
  descColor,
  linkBtn,
  linkHref,
  cta,
  link,
  className,
  src,
  logoSrc,
  breadcrumbs = true,
  breadcrumbsColor,
}) => {
  const router = useRouter();

  return (
    <>
      {/* Desktop Banner */}
      <div
        className={`md:block hidden justify-center bg-left bg-cover bg-no-repeat rounded-tr-[5rem] ${bgColor} ${className}`}
        style={{
          backgroundImage: `url(${desktopBg})`,
        }}
      >
        <div
          className={`flex flex-row gap-4 md:gap-24 min-h-[40rem] ${bgColor} bg-opacity-50 rounded-tr-[5rem]`}
        >
          {/* Image Col */}
          <div className="w-full h-full md:w-1/3 flex-none">
            {src && <img src={src} alt="" className="min-w-full" />}
          </div>
          {/* Text Col */}
          <div className={`w-full md:w-2/3`}>
            <div className="py-10 md:py-20 pr-30">
              {/* Breadcrumbs on top of the title */}
              <div
                className={`hidden md:block md:col-start-7 md:col-span-5 pb-4`}
              >
                {breadcrumbs == true && (
                  <Breadcrumbs color={breadcrumbsColor} />
                )}
              </div>
              {/* Image on top of title */}
              {logoSrc && (
                <div className="py-4 max-w-xs">
                  <img src={logoSrc} />
                </div>
              )}
              {title && (
                <p
                  className={`leading-10 sm:text-4xl text-3xl font-medium ${titleColor} ${titleClassName}`}
                >
                  {title}
                </p>
              )}
              {desc && (
                <p
                  className={`pt-4 sm:text-2xl text-xl whitespace-pre-line ${descColor}`}
                >
                  {desc}
                </p>
              )}
              {/* If you need a 2nd line for description */}
              {desc2 && (
                <p
                  className={`pt-4 sm:text-2xl text-xl whitespace-pre-line ${descColor}`}
                >
                  {desc2}
                </p>
              )}
              {desc3 && (
                <p
                  className={`pt-4 sm:text-xl text-lg whitespace-pre-line ${descColor}`}
                >
                  {desc3}
                </p>
              )}
              {desc4 && (
                <p
                  className={`pt-4 sm:text-xl text-lg whitespace-pre-line ${descColor}`}
                >
                  {desc4}
                </p>
              )}
              {linkHref && (
                <Link href={linkHref}>
                  <p className="text-left text-lg text-darkRed font-bold cursor-pointer mt-12">
                    + {linkBtn}
                  </p>
                </Link>
              )}
              {/* CTA button */}
              {cta && (
                <div className="pt-8">
                  <Button
                    color="red"
                    type="fill"
                    size="lg"
                    className="uppercase text-lg font-bold min-w-max"
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Banner */}
      <div
        className={`hidden sm:block md:hidden justify-center bg-left bg-cover bg-no-repeat rounded-tr-[5rem] ${bgColor} ${className}`}
        style={{
          backgroundImage: `url(${tabletBg ? tabletBg : desktopBg})`,
        }}
      >
        <div
          className={`flex flex-row items-center gap-4 md:gap-24 min-h-[40rem] ${bgColor} bg-opacity-50 rounded-tr-[5rem]`}
        >
          {/* Image Col */}
          <div className="h-full w-1/2 flex-none">
            {src && <img src={src} alt="" className="min-w-full" />}
          </div>
          {/* Text Col */}
          <div className="w-1/2">
            <div className="py-10 md:py-20 px-4">
              {/* Breadcrumbs on top of the title */}
              <div
                className={`hidden md:block md:col-start-7 md:col-span-5 pb-4`}
              >
                {breadcrumbs == true && (
                  <Breadcrumbs color={breadcrumbsColor} />
                )}
              </div>
              {/* Image on top of title */}
              {logoSrc && (
                <div className="py-4 max-w-xs">
                  <img src={logoSrc} />
                </div>
              )}
              {title && (
                <p
                  className={`leading-10 sm:text-4xl text-3xl font-bold ${titleColor} ${titleClassName}`}
                >
                  {title}
                </p>
              )}
              {desc && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>{desc}</p>
              )}
              {/* If you need a 2nd line for description */}
              {desc2 && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>
                  {desc2}
                </p>
              )}
              {desc3 && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>
                  {desc3}
                </p>
              )}
              {desc4 && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>
                  {desc4}
                </p>
              )}
              {linkHref && (
                <Link href={linkHref}>
                  <p className="text-left text-lg text-darkRed font-bold cursor-pointer mt-12">
                    + {linkBtn}
                  </p>
                </Link>
              )}
              {/* CTA button */}
              {cta && (
                <div className="pt-8">
                  <Button
                    color="red"
                    type="fill"
                    size="lg"
                    className="uppercase text-lg font-bold min-w-max"
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div
        className={`hidden xs:block sm:hidden justify-center bg-contain bg-bottom bg-no-repeat rounded-tr-[5rem] ${bgMobileColor} ${className}`}
        // style={{
        //   backgroundImage: `url(${mobileBg})`,
        // }}
      >
        <div
          className={`flex flex-col-reverse gap-4 md:gap-24 items-center rounded-tr-[5rem]`}
        >
          <div className="w-full h-full flex-none">
            {src && <img src={src} alt="" className="m-auto w-full h-full" />}
            {mobileBg && (
              <img src={mobileBg} alt="" className="m-auto w-full h-full" />
            )}
          </div>
          <div className="w-full">
            <div className="py-10 md:py-20 px-4 mx-auto">
              {/* Image on top of title */}
              {logoSrc && (
                <div className="py-4 max-w-xl">
                  <img src={logoSrc} />
                </div>
              )}
              {/* Breadcrumbs on top of the title */}
              <div
                className={`hidden md:block md:col-start-7 md:col-span-5 pb-4`}
              >
                {breadcrumbs == true && (
                  <Breadcrumbs color={breadcrumbsColor} />
                )}
              </div>
              {title && (
                <p
                  className={`leading-10 sm:text-4xl text-3xl font-bold ${titleColor} ${titleClassName}`}
                >
                  {title}
                </p>
              )}
              {desc && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>{desc}</p>
              )}
              {/* If you need a 2nd line for description */}
              {desc2 && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>
                  {desc2}
                </p>
              )}
              {desc3 && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>
                  {desc3}
                </p>
              )}
              {desc4 && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>
                  {desc4}
                </p>
              )}
              {linkHref && (
                <Link href={linkHref}>
                  <p className="text-left text-lg text-darkRed font-bold cursor-pointer mt-12">
                    + {linkBtn}
                  </p>
                </Link>
              )}
              {/* CTA button */}
              {cta && (
                <div className="pt-8">
                  <Button
                    color="red"
                    type="fill"
                    size="lg"
                    className="uppercase min-w-max text-lg font-bold"
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Small Mobile Banner */}
      <div
        className={`xs:hidden block justify-center bg-contain bg-bottom bg-no-repeat rounded-tr-[5rem] ${bgMobileColor} ${className}`}
        // style={{
        //   backgroundImage: `url(${smallMobileBg ? smallMobileBg : mobileBg})`,
        // }}
      >
        <div
          className={`flex flex-col-reverse gap-4 md:gap-24 items-center rounded-tr-[5rem]`}
        >
          <div className="w-full h-full flex-none">
            {src && <img src={src} alt="" className="m-auto w-full h-full" />}
            {smallMobileBg ? (
              <img
                src={smallMobileBg}
                alt=""
                className="m-auto w-full h-full"
              />
            ) : (
              <img src={mobileBg} alt="" className="m-auto w-full h-full" />
            )}
          </div>
          <div className="w-full">
            <div className="py-8 px-4 max-w-md sm:max-w-2xl mx-auto">
              {/* Image on top of title */}
              {logoSrc && (
                <div className="py-4 max-w-xl">
                  <img src={logoSrc} />
                </div>
              )}
              {/* Breadcrumbs on top of the title */}
              <div
                className={`hidden md:block md:col-start-7 md:col-span-5 pb-4`}
              >
                {breadcrumbs == true && (
                  <Breadcrumbs color={breadcrumbsColor} />
                )}
              </div>
              {title && (
                <p
                  className={`leading-10 sm:text-4xl text-3xl font-bold ${titleColor} ${titleClassName}`}
                >
                  {title}
                </p>
              )}
              {desc && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>{desc}</p>
              )}
              {/* If you need a 2nd line for description */}
              {desc2 && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>
                  {desc2}
                </p>
              )}
              {desc3 && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>
                  {desc3}
                </p>
              )}
              {desc4 && (
                <p className={`pt-4 sm:text-xl text-lg ${descColor}`}>
                  {desc4}
                </p>
              )}
              {linkHref && (
                <Link href={linkHref}>
                  <p className="text-left text-lg text-darkRed font-bold cursor-pointer mt-12">
                    + {linkBtn}
                  </p>
                </Link>
              )}
              {/* CTA button */}
              {cta && (
                <div className="pt-8">
                  <Button
                    color="red"
                    type="fill"
                    size="lg"
                    className="uppercase min-w-max text-2xl"
                    onClick={() => router.push(link)}
                  >
                    {cta}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection4;
