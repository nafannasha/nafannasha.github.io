// the dots at the bottom of carousel
const CarouselIndicator = ({ isSelected }) => (
  <li
    className={`
      inline-flex mx-1 h-2 w-2 rounded-full 
      ${isSelected ? "bg-darkRed" : "bg-mediumGray"}
    `}
  />
);

export default CarouselIndicator;
