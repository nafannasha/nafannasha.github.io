import React from "react";

import Section from "src/components/Section";
import Button from "src/components/Button";
import { useRouter } from "next/router";
import FullWidthSection from "./FullWidthSection";

const Newsletter = ({
  backgroundImage,
  backgroundImageMobile,
  title,
  classTitle = "text-black",
  subtitle,
  classSubtitle = "text-black",
  cta,
  link,
}) => {
  const router = useRouter();
  return (
    <>
      <FullWidthSection>
        <div className="md:block hidden">
          <div
            className="py-20 grid grid-cols-1 md:grid-cols-5 gap-20 items-center justify-center bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 col-span-3">
              <Section>
                <h1
                  className={`mb-6 font-bold md:text-5xl text-3xl ${classTitle}`}
                >
                  {title}
                </h1>
                <p className={`md:text-2xl text-xl ${classSubtitle}`}>
                  {subtitle}
                </p>
                {cta && (
                  <div className="pt-8">
                    <Button
                      color="red"
                      type="fill"
                      size="md"
                      className="uppercase min-w-max"
                      onClick={() => router.push(link)}
                    >
                      {cta}
                    </Button>
                  </div>
                )}
              </Section>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <div
            className="py-20 grid grid-cols-1 md:grid-cols-5 items-center justify-center bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageMobile})` }}
          >
            <Section>
              <div className="pt-1 pb-48 px-6 sm:pt-16 sm:px-12 md:py-12 md:pr-0 xl:py-20 xl:px-20 col-span-3">
                <h1
                  className={`mb-6 font-bold md:text-5xl text-3xl ${classTitle}`}
                >
                  {title}
                </h1>
                <p className={`md:text-xl text-base ${classSubtitle}`}>
                  {subtitle}
                </p>
                {cta && (
                  <div className="pt-8">
                    <Button
                      color="red"
                      type="fill"
                      size="md"
                      className="uppercase min-w-max"
                      onClick={() => router.push(link)}
                    >
                      {cta}
                    </Button>
                  </div>
                )}
              </div>
            </Section>
          </div>
        </div>
      </FullWidthSection>
    </>
  );
};

export default Newsletter;
