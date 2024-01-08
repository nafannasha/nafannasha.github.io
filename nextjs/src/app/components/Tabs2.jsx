import { useState } from "react";

//components
import Tabs2Item from "./Tabs2Item";

const Tabs2 = ({ tabsObjects }) => {
  const firstTab = Object.values(tabsObjects[0].title)
    .toString()
    .replace(/,/g, "");
  const [tab2, setTab2] = useState(`${firstTab}`);

  return (
    <>
      <div className="md:flex md:flex-row">
        {/* Tabs Item rendering */}
        <div className="md:w-2/6  my-8">
          <div
            className={`md:flex md:flex-col xs:justify-around md:justify-start overflow-x-scroll mb-6 hide-scroll hidden `}
          >
            {tabsObjects.map((items, index) => {
              return (
                <Tabs2Item
                  key={index}
                  activeTab={tab2}
                  tabName={items.title}
                  onClick={() => setTab2(items.title)}
                />
              );
            })}
          </div>

          <div className="md:hidden">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <select
              id="location"
              name="location"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue="Canada"
              onChange={(e) => setTab2(e.target.value)}
            >
              {tabsObjects.map((items, index) => {
                return (
                  <option key={index} value={items.title}>
                    {items.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Tabs Content rendering */}
        <div className="p-12 md:w-4/6  bg-[#F0F2F6] rounded-[50px]">
          {tabsObjects.map((items, index) => {
            return (
              <div key={index}>
                {tab2 === items.title && <>{items.children}</>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tabs2;
