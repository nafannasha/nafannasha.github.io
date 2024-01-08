import Button from "src/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Cta3({
  layout,
  bgColor = "bg-black",
  desktopBg,
  tabletBg,
  mobileBg,
  smallMobileBg,
  txtColor = "text-white",
  titleStyle = "text-3xl font-bold sm:text-4xl",
  title,
  desc,
  src,
  cta,
  ctaLink,
  ctaLinkColor = "text-white",
  cta2,
  cta2Link,
  cta2LinkColor = "text-white",
  cta3,
  cta3Link,
  cta3LinkColor = "text-white",
  modalOnClick,
  linkInNewTab = false,
  // ctaType = "normal",
}) {
  const router = useRouter();
  return (
    <div className="text-left">
      {layout === "layout-1" && (
        <>
          {/* Desktop View */}
          <div className="md:block hidden max-w-7xl">
            <div
              className={`${bgColor} rounded-[3rem] overflow-hidden grid grid-cols-5 gap-4 bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url(${desktopBg})` }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 col-span-2">
                <div className="lg:self-center ">
                  <h2
                    className={`text-3xl font-bold ${txtColor} sm:text-4xl my-8 uppercase`}
                  >
                    <span className="block">{title}</span>
                  </h2>
                  <div className={`mt-4 text-lg leading-6 ${txtColor} my-8`}>
                    {desc}
                  </div>

                  {cta ? (
                    <Link href={ctaLink ? ctaLink : ""}>
                      <p
                        className={`text-left text-base ${ctaLinkColor} font-bold cursor-pointer my-2`}
                      >
                        {cta ? cta : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}

                  {cta2 ? (
                    <Link href={cta2Link ? cta2Link : ""}>
                      <p
                        className={`text-left text-base  ${cta2LinkColor} font-bold cursor-pointer my-2`}
                      >
                        {cta2 ? cta2 : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}

                  {cta3 ? (
                    <Link href={cta3Link ? cta3Link : ""}>
                      <p
                        className={`text-left text-base  ${cta3LinkColor} font-bold cursor-pointer my-2`}
                      >
                        {cta3 ? cta3 : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* Tablet View */}
          <div className="hidden sm:block md:hidden max-w-7xl">
            <div
              className={`${bgColor} rounded-[3rem] overflow-hidden grid grid-cols-5 md:gap-4 bg-cover bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${tabletBg ? tabletBg : desktopBg})`,
              }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 col-span-3">
                <div className="lg:self-center ">
                  <h2
                    className={`text-3xl font-bold ${txtColor} sm:text-4xl my-8 uppercase`}
                  >
                    <span className="block">{title}</span>
                  </h2>
                  <div className={`mt-4 text-lg leading-6 ${txtColor} my-8`}>
                    {desc}
                  </div>
                  {cta ? (
                    <Link href={ctaLink ? ctaLink : ""}>
                      <p
                        className={`text-left text-base ${ctaLinkColor} font-bold cursor-pointer my-8`}
                      >
                        {cta ? cta : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}

                  {cta2 ? (
                    <Link href={cta2Link ? cta2Link : ""}>
                      <p
                        className={`text-left text-base ${cta2LinkColor} font-bold cursor-pointer my-8`}
                      >
                        {cta2 ? cta2 : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}

                  {cta3 ? (
                    <Link href={cta3Link ? cta3Link : ""}>
                      <p
                        className={`text-left text-base ${cta3LinkColor} font-bold cursor-pointer my-8`}
                      >
                        {cta3 ? cta3 : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile View */}
          <div className="hidden xs:block sm:hidden max-w-7xl">
            <div
              className={`${bgColor} min-h-[45rem] rounded-[3rem] overflow-hidden md:grid md:grid-cols-5 md:gap-4 bg-cover bg-bottom bg-no-repeat`}
              style={{ backgroundImage: `url(${mobileBg})` }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 md:col-span-2">
                <div className="lg:self-center ">
                  <h2
                    className={`text-3xl font-bold ${txtColor} sm:text-4xl my-8 uppercase`}
                  >
                    <span className="block">{title}</span>
                  </h2>
                  <div className={`mt-4 text-lg leading-6 ${txtColor} my-8`}>
                    {desc}
                  </div>
                  {cta ? (
                    <Link href={ctaLink ? ctaLink : ""}>
                      <p
                        className={`text-left text-base ${ctaLinkColor} font-bold cursor-pointer my-8`}
                      >
                        {cta ? cta : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}

                  {cta2 ? (
                    <Link href={cta2Link ? cta2Link : ""}>
                      <p
                        className={`text-left text-base ${cta2LinkColor} font-bold cursor-pointer my-8`}
                      >
                        {cta2 ? cta2 : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}

                  {cta3 ? (
                    <Link href={cta3Link ? cta3Link : ""}>
                      <p
                        className={`text-left text-base ${cta3LinkColor} font-bold cursor-pointer my-8`}
                      >
                        {cta3 ? cta3 : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* Small Mobile View */}
          <div className="xs:hidden block max-w-7xl">
            <div
              className={`${bgColor} min-h-[35rem]  rounded-[3rem] overflow-hidden md:grid md:grid-cols-5 md:gap-4 bg-cover bg-bottom bg-no-repeat`}
              style={{
                backgroundImage: `url(${
                  smallMobileBg ? smallMobileBg : mobileBg
                })`,
              }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 md:col-span-2">
                <div className="lg:self-center ">
                  <h2
                    className={`text-3xl font-bold ${txtColor} sm:text-4xl my-8 uppercase`}
                  >
                    <span className="block">{title}</span>
                  </h2>
                  <div className={`mt-4 text-lg leading-6 ${txtColor} my-8`}>
                    {desc}
                  </div>

                  {cta ? (
                    <Link href={ctaLink ? ctaLink : ""}>
                      <p
                        className={`text-left text-base ${ctaLinkColor} font-bold cursor-pointer my-8 drop-shadow-lg`}
                      >
                        {cta ? cta : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}

                  {cta2 ? (
                    <Link href={cta2Link ? cta2Link : ""}>
                      <p
                        className={`text-left text-base ${cta2LinkColor} font-bold cursor-pointer my-8 drop-shadow-lg`}
                      >
                        {cta2 ? cta2 : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}

                  {cta3 ? (
                    <Link href={cta3Link ? cta3Link : ""}>
                      <p
                        className={`text-left text-base ${cta3LinkColor} font-bold cursor-pointer my-8 drop-shadow-lg`}
                      >
                        {cta3 ? cta3 : `+ Learn More`}
                      </p>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {layout === "layout-2" && (
        <>
          {/* Desktop View */}
          <div className="md:block hidden max-w-7xl">
            <div
              className={`${bgColor} rounded-[3rem] overflow-hidden grid grid-cols-5 gap-4 bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url(${desktopBg})` }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 col-span-2">
                <div className="md:self-center">
                  <h2
                    className={`text-3xl font-bold ${txtColor} sm:text-4xl uppercase`}
                  >
                    <span className="block">{title}</span>
                  </h2>

                  <Button
                    color="red"
                    type="fill"
                    size=""
                    className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                    onClick={() => router.push(cta2Link)}
                  >
                    {cta2}
                  </Button>
                  <Button
                    color="red"
                    type="outline"
                    size=""
                    className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px] text-[#FFFFFF]"
                    onClick={() => router.push(cta3Link)}
                  >
                    {cta3}
                  </Button>
                  {/* <Link href="">
                    <p className="text-left text-base text-darkRed font-bold cursor-pointer">
                      + {"Learn More"}
                    </p>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          {/* Tablet View */}
          <div className="hidden sm:block md:hidden max-w-7xl">
            <div
              className={`${bgColor} rounded-[3rem] overflow-hidden grid grid-cols-5 md:gap-4 bg-cover bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${tabletBg ? tabletBg : desktopBg})`,
              }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 col-span-3">
                <div>
                  <h2
                    className={`text-3xl font-bold ${txtColor} sm:text-4xl uppercase`}
                  >
                    <span className="block">{title}</span>
                  </h2>

                  <Button
                    color="red"
                    type="fill"
                    size=""
                    className="uppercase min-w-max my-8 block h-12 md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                    onClick={() => router.push(cta2Link)}
                  >
                    {cta2}
                  </Button>
                  <Button
                    color="red"
                    type="outline"
                    size=""
                    className="uppercase min-w-max my-8 block h-12 md:mx-0 w-[219px] sm:w-[312px] rounded-[40px] text-[#FFFFFF]"
                    onClick={() => router.push(cta3Link)}
                  >
                    {cta3}
                  </Button>
                  {/* <Link href="">
                    <p className="text-left text-base text-darkRed font-bold cursor-pointer">
                      + {"Learn More"}
                    </p>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile View */}
          <div className="hidden xs:block sm:hidden max-w-7xl">
            <div
              className={`${bgColor} rounded-[3rem] min-h-[45rem] overflow-hidden bg-cover bg-bottom bg-no-repeat`}
              style={{ backgroundImage: `url(${mobileBg})` }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20">
                <div className="md:self-center">
                  <h2
                    className={`text-3xl font-bold ${txtColor} sm:text-4xl uppercase`}
                  >
                    <span className="block">{title}</span>
                  </h2>

                  <Button
                    color="red"
                    type="fill"
                    size=""
                    className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                    onClick={() => router.push(cta2Link)}
                  >
                    {cta2}
                  </Button>
                  <Button
                    color="red"
                    type="outline"
                    size=""
                    className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px] text-[#FFFFFF]"
                    onClick={() => router.push(cta3Link)}
                  >
                    {cta3}
                  </Button>
                  {/* <Link href="">
                    <p className="text-left text-base text-darkRed font-bold cursor-pointer">
                      + {"Learn More"}
                    </p>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          {/* Small Mobile View */}
          <div className="xs:hidden block max-w-7xl">
            <div
              className={`${bgColor} rounded-[3rem] min-h-[35rem] overflow-hidden bg-cover bg-bottom bg-no-repeat`}
              style={{
                backgroundImage: `url(${
                  smallMobileBg ? smallMobileBg : mobileBg
                })`,
              }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20">
                <div className="md:self-center">
                  <h2
                    className={`text-3xl font-bold ${txtColor} sm:text-4xl uppercase`}
                  >
                    <span className="block">{title}</span>
                  </h2>

                  <Button
                    color="red"
                    type="fill"
                    size=""
                    className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                    onClick={() => router.push(cta2Link)}
                  >
                    {cta2}
                  </Button>
                  <Button
                    color="red"
                    type="outline"
                    size=""
                    className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px] text-[#FFFFFF]"
                    onClick={() => router.push(cta3Link)}
                  >
                    {cta3}
                  </Button>
                  {/* <Link href="">
                    <p className="text-left text-base text-darkRed font-bold cursor-pointer">
                      + {"Learn More"}
                    </p>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {layout === "layout-3" && (
        <>
          {/* Desktop View */}
          <div className="md:block hidden max-w-7xl">
            <div
              className={`${bgColor} rounded-[3rem] overflow-hidden grid grid-cols-6 gap-4 bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url(${desktopBg})` }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 col-span-3">
                <div className="lg:self-center ">
                  <h2 className={`${txtColor} ${titleStyle} my-8 uppercase`}>
                    <span className="block">{title}</span>
                  </h2>
                  <div className={`mt-4 text-lg leading-6 ${txtColor} my-8`}>
                    {desc}
                  </div>
                  {modalOnClick
                    ? cta && (
                        <Button
                          color="red"
                          type="fill"
                          size=""
                          className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                          onClick={modalOnClick}
                        >
                          {cta}
                        </Button>
                      )
                    : cta && (
                        <Button
                          color="red"
                          type="fill"
                          size=""
                          className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                          onClick={() =>
                            linkInNewTab
                              ? window.open(ctaLink, "_ blank")
                              : router.push(ctaLink)
                          }
                        >
                          {cta}
                        </Button>
                      )}
                </div>
              </div>
            </div>
          </div>
          {/* Tablet View */}
          <div className="hidden sm:block md:hidden max-w-7xl">
            <div
              className={`${bgColor} rounded-[3rem] overflow-hidden grid grid-cols-5 md:gap-4 bg-cover bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${tabletBg ? tabletBg : desktopBg})`,
              }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 col-span-3">
                <div className="lg:self-center ">
                  <h2 className={`${txtColor} ${titleStyle} my-8 uppercase`}>
                    <span className="block">{title}</span>
                  </h2>
                  <div className={`mt-4 text-lg leading-6 ${txtColor} my-8`}>
                    {desc}
                  </div>
                  {modalOnClick
                    ? cta && (
                        <Button
                          color="red"
                          type="fill"
                          size=""
                          className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                          onClick={modalOnClick}
                        >
                          {cta}
                        </Button>
                      )
                    : cta && (
                        <Button
                          color="red"
                          type="fill"
                          size=""
                          className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                          onClick={() =>
                            linkInNewTab
                              ? window.open(ctaLink, "_ blank")
                              : router.push(ctaLink)
                          }
                        >
                          {cta}
                        </Button>
                      )}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile View */}
          <div className="hidden xs:block sm:hidden max-w-7xl">
            <div
              className={`${bgColor} rounded-[3rem] min-h-[45rem] overflow-hidden bg-cover bg-bottom bg-no-repeat`}
              style={{ backgroundImage: `url(${mobileBg})` }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h2 className={`${txtColor} ${titleStyle} my-8 uppercase`}>
                    <span className="block">{title}</span>
                  </h2>
                  <div className={`mt-4 text-lg leading-6 ${txtColor} my-8`}>
                    {desc}
                  </div>
                  {modalOnClick
                    ? cta && (
                        <Button
                          color="red"
                          type="fill"
                          size=""
                          className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                          onClick={modalOnClick}
                        >
                          {cta}
                        </Button>
                      )
                    : cta && (
                        <Button
                          color="red"
                          type="fill"
                          size=""
                          className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                          onClick={() =>
                            linkInNewTab
                              ? window.open(ctaLink, "_ blank")
                              : router.push(ctaLink)
                          }
                        >
                          {cta}
                        </Button>
                      )}
                </div>
              </div>
            </div>
          </div>
          {/* Small Mobile View */}
          <div className="xs:hidden block max-w-7xl">
            <div
              className={`${bgColor} rounded-[3rem] min-h-[40rem] overflow-hidden bg-cover bg-bottom bg-no-repeat`}
              style={{
                backgroundImage: `url(${
                  smallMobileBg ? smallMobileBg : mobileBg
                })`,
              }}
            >
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 md:col-span-2">
                <div className="lg:self-center ">
                  <h2 className={`${txtColor} ${titleStyle} my-8 uppercase`}>
                    <span className="block">{title}</span>
                  </h2>
                  <div className={`mt-4 text-lg leading-6 ${txtColor} my-8`}>
                    {desc}
                  </div>
                  {modalOnClick
                    ? cta && (
                        <Button
                          color="red"
                          type="fill"
                          size=""
                          className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                          onClick={modalOnClick}
                        >
                          {cta}
                        </Button>
                      )
                    : cta && (
                        <Button
                          color="red"
                          type="fill"
                          size=""
                          className="uppercase min-w-max my-8 block h-12 mx-auto md:mx-0 w-[219px] sm:w-[312px] rounded-[40px]"
                          onClick={() =>
                            linkInNewTab
                              ? window.open(ctaLink, "_ blank")
                              : router.push(ctaLink)
                          }
                        >
                          {cta}
                        </Button>
                      )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
