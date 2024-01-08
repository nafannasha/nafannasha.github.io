import { Carousel as RRCarousel } from "react-responsive-carousel";

import { AUTOPLAY_CONFIG } from "src/constants";

const AutoplayCarousel = ({ children }) => {
  return (
    <RRCarousel
      {...AUTOPLAY_CONFIG}
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

export default AutoplayCarousel;
