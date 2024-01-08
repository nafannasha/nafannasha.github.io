import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

const CardCta = ({ title, desc, src, link, cta }) => {
  const router = useRouter();

  return (
    <div className="md:my-0 my-4 max-w-[32.5rem] mx-auto rounded-[2rem] border border-airGray bg-white drop-shadow-xl">
      <div className="rounded-t-[2rem]">
        <img className="rounded-t-[2rem]" src={src} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="py-4 md:px-[3.5rem] px-8">
          <p className="py-6 text-2xl font-black text-darkBlue text-center">
            {title}
          </p>
          <p className="text-base text-darkGray text-left">{desc}</p>
        </div>
        <div className="flex justify-center py-10">
          <Button
            color="black"
            type="fill"
            size="md"
            className="uppercase min-w-max w-60"
            onClick={() => router.push(link)}
          >
            {cta}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardCta;
