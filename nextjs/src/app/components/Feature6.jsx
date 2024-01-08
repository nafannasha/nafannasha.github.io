import { useTranslation } from "react-i18next";
import Link from "next/link";

const Feature6 = ({
  heading,
  title,
  subtitle,
  cardContent,
  itemWidth = "sm:w-1/3",
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-20 md:px-4">
        <div className="mb-10 text-left">
          <p className="mb-2 text-mdecGreen text-2xl md:text-4xl font-normal uppercase">
            {heading}
          </p>
          <p className="mb-4  text-3xl md:text-6xl font-normal uppercase">
            {title}
          </p>
          <div className="text-2xl">{subtitle}</div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="flex items-center justify-center flex-wrap flex-col sm:flex-row">
          {cardContent.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-center items-center w-full ${itemWidth} px-4 my-8`}
            >
              <Link href={item.linkHref ? item.linkHref : ""}>
                <a className="text-[#b24863] text-center underline font-semibold text-lg cursor-pointer">
                  <img
                    src={item.imageSrc}
                    alt=""
                    className="py-4 transform duration-150 hover:scale-110 mx-auto"
                  />
                  {item.link}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature6;
