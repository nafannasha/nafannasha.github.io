const Tabs2Item = ({
  activeTab,
  tabName,
  onClick,
  className,
  themeColor = "[#292929]",
  activeColor = "[#e23e60]",
}) => {
  return (
    <div onClick={onClick} className={`${className} hidden md:block`}>
      <p
        className={` 
            mb-6 mr-3 capitalize cursor-pointer leading-5 text-xl sm:text-2xl sm:leading-6 inline-block w-1/2
              ${
                activeTab == tabName
                  ? ` text-[#B24863] font-bold after:w-1/2 after:block after:border-[#B24863] after:border-b-4 after:content-[''] `
                  : `font-normal text-[#B24863] hover:after:w-1/2 hover:after:block hover:after:border-[#B24863] hover:after:border-b-4 hover:after:content-[''] `
              }
            `}
      >
        {tabName}
      </p>
    </div>
  );
};

export default Tabs2Item;
