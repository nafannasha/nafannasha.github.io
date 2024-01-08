import { useRouter } from "next/router";
import Section from "./Section";

import { scrollTo } from "src/utils/scrollTo";

const NavTabs = ({ title, links, bgColor = "bg-lightGray", className }) => {
  const router = useRouter();

  const handleClick = (id, offset) => {
    scrollTo(id, offset);
  };

  return (
    <>
      <div id="tabs" className={`rounded-tr-[5rem] ${bgColor} ${className}`}>
        <Section className="pt-16 pb-8">
          {title && (
            <p className="sm:text-6xl text-5xl pb-16 font-light">{title}</p>
          )}
          <div className="md:flex hidden flex-row flex-wrap justify-start gap-x-24 gap-y-4">
            {links.map((item, index) => {
              return (
                <a
                  key={index}
                  onClick={() => {
                    router.push(item.href);
                    handleClick("tabs", 100);
                  }}
                  className={
                    router.pathname == item.href
                      ? `mb-6 mr-3 font-bold uppercase cursor-pointer leading-5 text-xl sm:text-2xl sm:leading-6 inline-block text-[#B24863] after:w-full after:block after:border-[#B24863] after:border-b-4`
                      : `mb-6 mr-3 uppercase cursor-pointer leading-5 text-xl sm:text-2xl sm:leading-6 inline-block text-[#B24863] hover:after:w-full hover:after:block hover:after:border-[#B24863] hover:after:border-b-4`
                  }
                >
                  {item.tabTitle}
                </a>
              );
            })}
          </div>
          <div className="md:hidden">
            <label className="block text-sm font-medium"></label>
            <select
              className="bg-transparent text-darkRed border-none shadow-lg font-bold w-full xs:w-1/2"
              defaultValue={router.pathname}
              onChange={(e) => {
                router.push(e.target.value);
                handleClick("tabs", 100);
              }}
            >
              {links.map((items, index) => {
                return (
                  <option key={index} value={items.href}>
                    {items.tabTitle}
                  </option>
                );
              })}
            </select>
          </div>
        </Section>
      </div>
    </>
  );
};

export default NavTabs;
