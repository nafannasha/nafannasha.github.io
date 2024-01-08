import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { scrollTo } from "src/utils/scrollTo";

const Tabs3 = ({ tabColor, tabContent }) => {
  const handleClick = (id, offset) => {
    scrollTo(id, offset);
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse justify-between gap-x-4">
        <div className="">
          {/* Tab items */}
          <Tab.Group>
            <div className="flex flex-col justify-between">
              <Tab.List className={`mb-13 text-[${tabColor}]`}>
                <div className="flex flex-row flex-wrap justify-start xs:gap-x-16 gap-x-8 gap-y-4">
                  {tabContent.map((item, index) => (
                    <Tab key={index} as={Fragment}>
                      {({ selected }) => (
                        <p
                          className={`text-xl md:text-2xl lg:text-3xl cursor-pointer hover:border-[#b24863] border-transparent border-b-4 ${
                            selected
                              ? "border-[#b24863] border-transparent border-b-4 font-bold"
                              : ""
                          }`}
                        >
                          {item.tabTitle}
                        </p>
                      )}
                    </Tab>
                  ))}
                </div>
              </Tab.List>
              {/* Tab Items's contents */}
              <Tab.Panels>
                {tabContent.map((item, index) => (
                  <Tab.Panel key={index} className={"flex-grow-0"}>
                    {item.tabContents}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default Tabs3;
