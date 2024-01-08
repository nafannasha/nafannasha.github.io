import { useTranslation } from "react-i18next";
import Link from "next/link";

const USPCard = ({
  src,
  desc,
  className,
  link,
  classNameImg = "object-cover",
}) => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col items-center mb-10 ${className}`}>
      <div className="w-60 h-60">
        <img
          draggable={false}
          src={src}
          className={`w-full h-full rounded-full ${classNameImg}`}
        />
      </div>
      <p className="mt-6 text-xl text-center w-full px-2">{desc}</p>
      {link && (
        <Link href={link}>
          <p className="text-left text-lg text-darkRed font-bold cursor-pointer mt-8">
            + {t("learn_more")}
          </p>
        </Link>
      )}
    </div>
  );
};

export default USPCard;
