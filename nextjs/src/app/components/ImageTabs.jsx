import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import Carousel from "./Carousel";

const ImageTabs = ({ ImageContent }) => {
  return (
    <>
      <div className="hidden sm:block">
        <Tab.Group>
          <div className="flex flex-col">
            <Tab.List>
              <div className="grid grid-cols-6 md:grid-cols-9 items-center">
                {ImageContent.map((item, index) => {
                  return (
                    <Tab key={index} as={Fragment}>
                      {({ selected }) => (
                        <img
                          src={item.src}
                          className={`transition duration-300 cursor-pointer opacity-[0.5] hover:opacity-[1] ${
                            selected ? "grayscale-0 opacity-[1]" : "grayscale"
                          }`}
                        />
                      )}
                    </Tab>
                  );
                })}
              </div>
            </Tab.List>
            <Tab.Panels className="p-8 py-14 bg-[#057ac9]">
              {ImageContent.map((item, index) => {
                return (
                  <Tab.Panel key={index}>
                    <div className="flex col-span-2 gap-4">
                      <div className="w-full text-lg sm:text-xl text-white md:pt-[4rem] md:px-[3rem]">
                        {item.children}
                      </div>
                      <div>
                        <img src={item.img} className="w-auto h-auto" />
                      </div>
                    </div>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
      <div className="sm:hidden">
        <Carousel>
          {ImageContent.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-8">
                <div className="w-full">
                  <img src={item.src} />
                </div>
                <div className="flex justify-center items-center w-full text-lg sm:text-xl">
                  {item.children}
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ImageTabs;
