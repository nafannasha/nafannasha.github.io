const Card = ({
  className = "bg-white shadow-2xl md:px-20 px-4",
  imgClassName,
  step,
  src,
  desc,
}) => {
  return (
    <>
      <div className={`sm:w-1/2 w-full mx-auto py-12 rounded-3xl ${className}`}>
        {step && (
          <div className="text-center sm:text-xl text-lg font-bold pb-6">
            {step}
          </div>
        )}
        {src && (
          <div>
            <img src={src} className={`mx-auto ${imgClassName}`} />
          </div>
        )}
        <div className="text-center mt-8 sm:text-xl text-lg ">{desc}</div>
      </div>
    </>
  );
};

export default Card;
