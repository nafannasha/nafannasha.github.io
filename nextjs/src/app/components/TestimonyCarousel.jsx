import { Carousel as RRCarousel } from "react-responsive-carousel";

import { TESTIMONY_CAROUSEL_CONFIG } from "src/constants";

const TestimonyCarousel = ({ children }) => {
  return (
    <RRCarousel
      {...TESTIMONY_CAROUSEL_CONFIG}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <div className="w-full grid grid-cols-6 gap-[10px] sm:gap-5 lg:grid-cols-12 max-w-[1440px] mx-auto">
          <div
            className={
              hasPrev
                ? "absolute md:bottom-10 bottom-0 ml-4 md:z-10 text-darkRed"
                : "absolute md:bottom-10 bottom-0 ml-4 md:z-10 text-lightGray"
            }
            onClick={onClickHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <div className="w-full grid grid-cols-6 gap-[10px] sm:gap-5 lg:grid-cols-12 max-w-[1440px] mx-auto">
          <div
            className={
              hasNext
                ? "absolute md:bottom-10 bottom-0 ml-20 md:z-10 text-darkRed"
                : "absolute md:bottom-10 bottom-0 ml-20 md:z-10 text-lightGray"
            }
            onClick={onClickHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
    >
      {children}
    </RRCarousel>
  );
};
export default TestimonyCarousel;
