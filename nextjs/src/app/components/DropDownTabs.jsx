import { useState } from "react";

const DropdownTabs = ({ tabsObjects }) => {
  const firstTab = Object.values(tabsObjects[0].title)
    .toString()
    .replace(/,/g, "");
  const [tab2, setTab2] = useState(`${firstTab}`);

  return (
    <>
      {/* Tabs Item rendering */}
      <div className="my-8">
        <select
          id="location"
          name="location"
          defaultValue="Kuala Lumpur"
          className="bg-white text-darkRed border-none shadow-lg font-bold w-1/2"
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

      {/* Tabs Content rendering */}
      <div className="">
        {tabsObjects.map((items, index) => {
          return (
            <div key={index}>
              {tab2 === items.title && <>{items.children}</>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DropdownTabs;
