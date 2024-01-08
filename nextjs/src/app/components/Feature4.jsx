import Carousel from "./Carousel";

const Feature4 = ({ title, titleColor, benefits1, benefits2, benefits3 }) => {
  return (
    <>
      <p
        className={`sm:text-6xl text-5xl text-[${titleColor}] text-center uppercase`}
      >
        {title}
      </p>
      <div className="flex-row py-10 md:flex hidden">
        <div className="w-1/3">
          <img src={benefits1.src} className="mx-auto" />
          <p
            className={`font-bold text-center text-2xl text-[${titleColor}] pt-5`}
          >
            {benefits1.title}
          </p>
          <p className="text-center text-2xl text-[#383e43]">
            {benefits1.subTitle}
          </p>
        </div>
        <div className="w-1/3">
          <img src={benefits2.src} className="mx-auto" />
          <p
            className={`font-bold text-center text-2xl text-[${titleColor}] pt-5`}
          >
            {benefits2.title}
          </p>
          <p className="text-center text-2xl text-[#383e43]">
            {benefits2.subTitle}
          </p>
        </div>
        <div className="w-1/3">
          <img src={benefits3.src} className="mx-auto" />
          <p
            className={`font-bold text-center text-2xl text-[${titleColor}] pt-5`}
          >
            {benefits3.title}
          </p>
          <p className="text-center text-2xl text-[#383e43]">
            {benefits3.subTitle}
          </p>
        </div>
      </div>
      <div className="md:hidden xs:block hidden">
        <Carousel>
          <div className="flex flex-row my-10 justify-center gap-x-12">
            <div className="xs:w-1/2 sm:w-1/3">
              <img src={benefits1.src} className="m-auto h-[200px]" />
              <p
                className={`font-bold text-center text-2xl text-[${titleColor}] pt-5`}
              >
                {benefits1.title}
              </p>
              <p className="text-center text-2xl text-[#383e43]">
                {benefits1.subTitle}
              </p>
            </div>
            <div className="xs:w-1/2 sm:w-1/3">
              <img src={benefits2.src} className="m-auto h-[200px]" />
              <p
                className={`font-bold text-center text-2xl text-[${titleColor}] pt-5`}
              >
                {benefits2.title}
              </p>
              <p className="text-center text-2xl text-[#383e43]">
                {benefits2.subTitle}
              </p>
            </div>
          </div>
          <div className="flex flex-row my-10 justify-center">
            <div className="xs:w-1/2 sm:w-1/3">
              <img src={benefits3.src} className="m-auto h-[200px]" />
              <p
                className={`font-bold text-center text-2xl text-[${titleColor}] pt-5`}
              >
                {benefits3.title}
              </p>
              <p className="text-center text-2xl text-[#383e43]">
                {benefits3.subTitle}
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="xs:hidden block">
        <Carousel>
          <div className="flex flex-row my-10 justify-center">
            <div className="w-full">
              <img src={benefits1.src} className="m-auto h-[200px]" />
              <p
                className={`font-bold text-center text-2xl text-[${titleColor}] pt-5`}
              >
                {benefits1.title}
              </p>
              <p className="text-center text-2xl">{benefits1.subTitle}</p>
            </div>
          </div>
          <div className="flex flex-row my-10 justify-center">
            <div className="w-full">
              <img src={benefits2.src} className="m-auto h-[200px]" />
              <p
                className={`font-bold text-center text-2xl text-[${titleColor}] pt-5`}
              >
                {benefits2.title}
              </p>
              <p className="text-center text-2xl">{benefits2.subTitle}</p>
            </div>
          </div>
          <div className="flex flex-row my-10 justify-center">
            <div className="w-full">
              <img src={benefits3.src} className="m-auto h-[200px]" />
              <p
                className={`font-bold text-center text-2xl text-[${titleColor}] pt-5`}
              >
                {benefits3.title}
              </p>
              <p className="text-center text-2xl">{benefits3.subTitle}</p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Feature4;
