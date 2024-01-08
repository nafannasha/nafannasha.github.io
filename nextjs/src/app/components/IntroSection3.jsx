const IntroSection3 = ({ title, desc, src, onClick, videoSrc, className }) => {
  return (
    <>
      <div
        className={`flex flex-col md:flex-row gap-4 md:gap-24 justify-center ${className}`}
      >
        <div className="md:w-1/2">
          <p className="leading-10 uppercase text-4xl font-bold">{title}</p>
          <p className="pt-4">{desc}</p>
        </div>
        <div className="md:w-1/2 cursor-pointer">
          <a href={videoSrc} target="_blank" onClick={onClick}>
            <img src={src} alt="" className="m-auto" />
          </a>
        </div>
      </div>
    </>
  );
};

export default IntroSection3;
