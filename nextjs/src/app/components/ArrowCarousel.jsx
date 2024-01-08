import { Carousel as RRCarousel } from "react-responsive-carousel";

import { TESTIMONY_CAROUSEL_CONFIG } from "src/constants";

const ArrowCarousel = ({ children }) => {
  return (
    <RRCarousel {...TESTIMONY_CAROUSEL_CONFIG} animationHandler="fade">
      {children}
    </RRCarousel>
  );
};

// const CarouselIndicator = ({ isSelected }) => (
//   <li
//     className={`
//       inline-flex mx-1 h-2 w-2 rounded-full
//       ${isSelected ? "bg-darkRed" : "bg-mediumGray"}
//     `}
//     onClick={_onClickHandler}
//     onKeyDown={_onClickHandler}
//     value={_index}
//     key={_index}
//     tabIndex={0}
//     aria-label={`${_label} ${_index + 1}`}
//     role="button"
//   />
// );

export default ArrowCarousel;
