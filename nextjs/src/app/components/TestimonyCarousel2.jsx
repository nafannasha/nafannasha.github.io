import { Carousel as RRCarousel } from "react-responsive-carousel";

import { TESTIMONY2_CAROUSEL_CONFIG } from "src/constants";

const TestimonyCarousel2 = ({ children }) => {
  return (
    <RRCarousel
      {...TESTIMONY2_CAROUSEL_CONFIG}
      renderIndicator={(_onClickHandler, isSelected, _index, _label) => (
        <li
          className={`
            inline-flex mx-2 h-2 w-2 rounded-full
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
export default TestimonyCarousel2;
