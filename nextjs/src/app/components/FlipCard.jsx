const FlipCard = ({ details }) => {
  const flipCardClass =
    "min-h-[20rem] min-w-[18rem] rounded-[1.25rem] overflow-hidden shadow-around flex flex-col items-center justify-center p-1";

  return (
    <div className="relative py-2 xs:py-0 perspective-500">
      <div className="transition duration-500 hover:rotate-y-180 preserve-3d">
        <div className={flipCardClass + " backface-hidden bg-[#00CFA6]"}>
          <img className="max-w-[4.5rem] mb-5" src={details.logo} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center text-white uppercase">
              {details.mainTitle}
            </div>
          </div>
        </div>
        <div
          className={
            flipCardClass +
            " bg-[#5030C5] flip-back backface-hidden h-full w-full absolute top-0 rotate-y-180"
          }
        >
          <ul className="marker:text-white list-disc ml-[0.938rem] px-4 text-white">
            <li>{details.description}</li>
            <li>{details.description2}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
