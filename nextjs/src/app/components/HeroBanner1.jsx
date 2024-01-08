import { useRouter } from "next/router";
import Section from "./Section";
import Button from "./Button";

const HeroBanner1 = ({
  bannerSrc,
  logoSrc,
  imageSrc,
  title,
  subtitle,
  titleColor,
  subtitleColor,
  link,
  cta,
}) => {
  const router = useRouter();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-bottom relative pt-20 sm:-mt-30 lg:-mt-20"
        style={{
          backgroundImage: `url(${bannerSrc})`,
        }}
      >
        {/* 
                    bannerSrc = background image of the banner
                    logoSrc = logo above title
                    imageSrc = image next to title
                    title = text content in banner
                    cta = text in red cta button
                    Text is side by side with the image in desktop screens.
                    Image will wrap down to below the image with flex-col,
                */}
        <Section>
          <div className="flex lg:flex-row flex-col justify-items-end">
            <div className="lg:w-1/2 w-4/5 space-y-8 lg:py-24 2xs:pb-64 pb-48">
              <img src={logoSrc} />
              <p
                className={`sm:text-5xl text-3xl font-bold text-[${titleColor}]`}
              >
                {title}
              </p>
              <Button
                color="red"
                type="fill"
                size="lg"
                className="uppercase min-w-max text-xl"
                onClick={() => router.push(link)}
              >
                {cta}
              </Button>
            </div>
            <div className="absolute right-0 lg:mt-0 sm:mt-64 xs:mt-[20rem] mt-[24rem]">
              <img src={imageSrc} />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default HeroBanner1;
