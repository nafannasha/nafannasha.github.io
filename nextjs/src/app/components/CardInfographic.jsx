import parse from "html-react-parser";

export default function CardInfographic({ src, title, desc, points }) {
  return (
    <div className="m-4 w-[18.75rem] py-10 mx-auto h-[26.25rem] rounded-3xl border border-airGray bg-white drop-shadow-lg">
      <div className="max-w-content">
        <img className="mx-auto" src={src} />
      </div>
      <div className="row-span-3 grid grid-row-3 px-6">
        <p className="font-bold text-2xl text-mdecBlue text-center py-4">
          {title}
        </p>

        {desc && <p className="text-base text-[#292929] text-center">{desc}</p>}
        {points && (
          <ul className="ml-5 text-md list-disc list-outside marker:text-black">
            {points.map((point, index) => (
              <li key={index}>{parse(point)}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
