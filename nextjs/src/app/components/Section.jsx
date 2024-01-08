const Section = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full grid grid-cols-6 gap-[10px] sm:gap-5 lg:grid-cols-12 max-w-[1440px] mx-auto ${className}`}
    >
      <div className="lg:col-span-1" />
      <div className="px-[0.938rem] lg:px-0 col-span-6 lg:col-span-10">
        {children}
      </div>
      <div className="lg:col-span-1" />
    </div>
  );
};

export default Section;
