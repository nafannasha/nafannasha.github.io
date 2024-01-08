import React from "react";
import Link from "next/link";

const buttonSize = {
  full: `w-full h-14 rounded-[40px]`,
  xl: `w-[312px] h-20 rounded-[40px]`,
  lg: `w-[219px] h-[58px] rounded-[30px]`,
  md: `w-[166px] h-12 rounded-[30px]`,
  sm: `w-[158px] rounded-[30px]`,
  roundedSqLg: `w-[262px] h-16 rounded-[16px]`,
  roundedSqSm: `w-[202px] h-12 rounded-[16px]`,
};

const buttonType = {
  fill: {
    yellow: `bg-hotSun text-white hover:bg-[#e58e26] active:bg-sunset border-none`,
    red: `bg-mdecRed text-white hover:bg-[#b00e15] active:bg-[#750a0f] border-none`,
    white: `bg-white text-black hover:bg-flatGray active:bg-mutedGray border-none`,
    darkGray: `bg-superGray text-white hover:bg-darkGray active:bg-nardoGray border-none`,
    black: `bg-mdecBlack text-white hover:bg-mutedGray active:bg-superGray border-none`,
    disabled: `bg-[#D9D9D9] bg-opacity-70 text-white border-none hover:cursor-default`,
  },
  outline: {
    red: `border border-mdecRed text-mdecRed hover:border-[#b00e15] hover:text-[#b00e15] active:border-[#750a0f] active:text-[#750a0f]`,
    black: `border border-mdecBlack text-mdecBlack hover:border-mutedGray hover:text-mutedGray active:border-superGray active:text-superGray`,
    white: `border border-white text-white`,
  },
};

const Anchor = React.forwardRef(
  ({ size, type, color, link, className, children, Id, target }, ref) => {
    return (
      <Link href={link}>
        <a
          id={Id}
          ref={ref}
          disabled={type === "disabled"}
          target={target}
          className={`
         d-flex justify-start lg:justify-content-center lg:align-items-center px-4 py-4 border font-bold focus:outline-none
        ${buttonSize[size]}
        ${buttonType[type][color]}
        ${className}
      `}
        >
          {children}
        </a>
      </Link>
    );
  }
);

export default Anchor;
