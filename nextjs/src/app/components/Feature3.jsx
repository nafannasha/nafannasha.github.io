import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";

import { CAROUSEL_CONFIG } from "src/constants";

import CarouselIndicator from "src/components/CarouselIndicator";

const Feature3 = ({ heading, cardContent }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-20 md:px-4">
        <div className="pr-12">
          <h1 className="text-2xl text-mdecGreen uppercase">{heading}</h1>
        </div>

        {/* MOBILE VIEW */}
        <div className="block sm:hidden">
          <Carousel
            {...CAROUSEL_CONFIG}
            renderIndicator={(onClickHandler, isSelected, index) => (
              <CarouselIndicator isSelected={isSelected} />
            )}
          >
            {cardContent.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-full my-8"
              >
                <img
                  src={item.imageSrc}
                  alt=""
                  className="my-4 hover:grayscale max-w-[15rem] h-auto"
                />
                <p className="text-lg text-center text-black uppercase mb-4">
                  {item.cardTitle}
                </p>
                <p className="text-base text-center text-black">
                  {item.cardDesc}
                </p>
              </div>
            ))}
          </Carousel>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden sm:flex items-start flex-wrap">
          {cardContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-1/3 px-4 my-8"
            >
              <img
                src={item.imageSrc}
                alt=""
                className="py-4 hover:grayscale"
              />
              <p className="text-xl text-center text-black uppercase mb-4">
                {item.cardTitle}
              </p>
              <p className="text-lg text-center text-black">{item.cardDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature3;
