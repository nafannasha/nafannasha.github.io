import { Carousel as RRCarousel } from "react-responsive-carousel";

import { CAROUSEL_CONFIG } from "src/constants";

const Carousel = ({ children }) => {
  return (
    <RRCarousel
      {...CAROUSEL_CONFIG}
      renderIndicator={(_onClickHandler, isSelected, _index, _label) => (
        <li
          className={`
            inline-flex mx-1 h-2 w-2 rounded-full
            ${isSelected ? "bg-darkRed" : "bg-mediumGray"}
          `}
          onClick={_onClickHandler}
          onKeyDown={_onClickHandler}
          value={_index}
          key={_index}
          tabIndex={0}
          aria-label={`${_label} ${_index + 1}`}
          role="button"
        />
      )}
    >
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

export default Carousel;
