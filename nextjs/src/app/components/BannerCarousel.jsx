import { Carousel as RRCarousel } from "react-responsive-carousel";

import { BANNER_CAROUSEL_CONFIG } from "src/constants";

const BannerCarousel = ({ children }) => {
  return (
    <RRCarousel
      {...BANNER_CAROUSEL_CONFIG}
      renderArrowPrev={(onClickHandler, _hasPrev, _label) => (
        <div className="w-full grid grid-cols-6 gap-[10px] sm:gap-5 lg:grid-cols-12 mt-[-20px] lg:mt-0 max-w-[1440px] mx-auto">
          <div className="hidden md:block lg:col-span-1" />
          <div className="px-[0.938rem] lg:px-0 col-span-6 lg:col-span-10">
            <div className="absolute bottom-44 lg:bottom-48 z-10 md:flex">
              <p
                onClick={onClickHandler}
                className="text-white pr-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white transform hover:scale-125 duration-300 transition ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="lg:col-span-1" />
        </div>
      )}
      renderArrowNext={(onClickHandler, _hasNext, _label) => (
        <div className="w-full grid grid-cols-6 gap-[10px] sm:gap-5 lg:grid-cols-12 max-w-[1440px] mx-auto">
          <div className="hidden md:block lg:col-span-1" />

          <div className="px-[0.938rem] lg:px-0 col-span-6 lg:col-span-10">
            <div className="absolute bottom-44 lg:bottom-48 ml-12 md:z-10">
              <p
                onClick={onClickHandler}
                className="text-white pr-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white transform hover:scale-125 duration-300 transition ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </p>
            </div>
          </div>

          <div className="lg:col-span-1" />
        </div>
      )}
    >
      {children}
    </RRCarousel>
  );
};
export default BannerCarousel;
