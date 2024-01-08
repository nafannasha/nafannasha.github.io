const bg = {
  green: "bg-mdecGreen",
  yellow: "bg-hotSun",
  red: "bg-darkRed",
  blue: "bg-[#4c83c9]",
  brightRed: "bg-brightRed",
  darkBlue: "bg-darkBlue",
  purple: "bg-royalPurple",
};

const CrossSellCard = ({ title, desc, image, cta, ctaLink, color }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <img
        className="h-[13.938rem] rounded-tr-2xl w-full object-cover"
        src={image}
        alt=""
      />
      <div
        className={`rounded-bl-2xl ${bg[color]} p-6 min-h-[255px] h-full flex-grow`}
      >
        <div className="flex flex-col justify-between h-full flex-grow">
          <div>
            <h2 className="text-xl text-white font-medium text-left">
              {title}
            </h2>
            <p className="mt-3 text-white text-left text-xl">{desc}</p>
          </div>
          <a href={ctaLink} className="inline-flex items-center mt-2">
            <svg
              className="h-4 w-4 text-white font-bold mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="text-white font-bold">{cta}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CrossSellCard;
