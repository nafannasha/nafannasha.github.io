import Button from "./Button";

const Card2 = ({
  className,
  textClassName,
  imageClassName = "xs:h-[12rem]",
  ImageSrc,
  desc,
  title,
  ctaTitle,
  ctaLink,
}) => {
  return (
    <div
      className={`
      grid grid-flow-row auto-rows-max
      w-full xs:min-h-[26rem] mx-auto rounded-3xl bg-white md:px-8 px-4 border border-rounded md:py-8 py-4 ${className}`}
    >
      {ImageSrc && (
        <div className={`${imageClassName} relative`}>
          <img
            src={ImageSrc}
            className="mx-auto xs:relative xs:inset-x-0 xs:bottom-0 "
          />
        </div>
      )}
      <div className={`font-bold sm:text-xl text-lg mt-4 ${textClassName}`}>
        {title}
      </div>
      <div className="text-center mt-4 sm:text-lg text-md ">{desc}</div>
      {ctaTitle && (
        <>
          <div className="flex justify-start pt-8 md:block hidden">
            <Button
              color="red"
              type="fill"
              size="md"
              className="uppercase min-w-max tracking-wider"
              onClick={() => router.push(ctaLink)}
            >
              {ctaTitle}
            </Button>
          </div>
          <div className="flex items-center justify-center py-2 block md:hidden">
            <Button
              size="sm"
              type="fill"
              color="red"
              className="uppercase text-sm "
              onClick={() => router.push(ctaLink)}
            >
              {ctaTitle}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card2;
