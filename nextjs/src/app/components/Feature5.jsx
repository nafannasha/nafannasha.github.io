const Feature5 = ({ title, titleColor, benefits1, benefits2, benefits3 }) => {
  return (
    <>
      <p
        className={`sm:text-6xl text-4xl text-[${titleColor}] font-bold text-center uppercase`}
      >
        {title}
      </p>
      <div className="flex md:flex-row flex-col py-10 gap-8">
        <div className="md:w-1/3 sm:w-1/2 w-full max-w-md mx-auto">
          <img src={benefits1.src} className="mx-auto w-full" />
          <p
            className={`font-bold text-center sm:text-2xl text-xl text-[${titleColor}] pt-5`}
          >
            {benefits1.title}
          </p>
          <p className="sm:text-lg text-base text-[#383e43] mx-auto">
            {benefits1.subTitle}
          </p>
        </div>
        <div className="md:w-1/3 sm:w-1/2 w-full max-w-md mx-auto">
          <img src={benefits2.src} className="mx-auto w-full" />
          <p
            className={`font-bold text-center sm:text-2xl text-xl text-[${titleColor}] pt-5`}
          >
            {benefits2.title}
          </p>
          <p className="sm:text-lg text-base text-[#383e43] mx-auto">
            {benefits2.subTitle}
          </p>
        </div>
        <div className="md:w-1/3 sm:w-1/2 w-full max-w-md mx-auto">
          <img src={benefits3.src} className="mx-auto w-full" />
          <p
            className={`font-bold text-center sm:text-2xl text-xl text-[${titleColor}] pt-5`}
          >
            {benefits3.title}
          </p>
          <p className="sm:text-lg text-base text-[#383e43] mx-auto">
            {benefits3.subTitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature5;
