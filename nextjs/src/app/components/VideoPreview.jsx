import Button from "src/components/Button";
import { useRouter } from "next/router";

const VideoPreview = ({
  videoSrc,
  title,
  imageSrc,
  onClick,
  cta,
  link,
  desc,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (typeof link === "function") {
      link();
    } else router.push(link);
  };

  return (
    <div className="pt-8">
      <div className="flex flex-wrap items-center md:py-14 pb-8">
        <div className="h-full w-full md:w-1/3 md:px-4">
          <div className="flex flex-col h-full justify-between">
            <div className="h-full flex flex-col justify-center">
              <div className="text-lg text-left justify-self-center">
                <p className="mb-5 font-bold text-xl md:text-3xl">{title}</p>
              </div>
            </div>
          </div>
          <div className="pt-4 hidden md:block">
            <Button
              color="red"
              type="fill"
              size="md"
              className="uppercase min-w-max"
              onClick={() => handleClick()}
            >
              {cta}
            </Button>
          </div>
          <div className="py-4 pb-8 block md:hidden">
            <Button
              color="red"
              type="fill"
              size="sm"
              className="uppercase min-w-max text-sm"
              onClick={() => handleClick()}
            >
              {cta}
            </Button>
          </div>
        </div>
        {/* IMAGE PLACEHOLDER */}
        <div className="h-full w-full md:w-2/3 flex cursor-pointer">
          <a href={videoSrc} target="_blank" onClick={onClick}>
            <img
              src={imageSrc}
              className={`
              w-full h-full
              object-contain
            `}
            />
          </a>
        </div>
      </div>
      <div className="text-md text-justify">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default VideoPreview;
