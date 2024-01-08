const FullWidthSection = ({ children, className = "", style }) => {
  return (
    <div
      className={`w-full grid grid-cols-6 gap-[10px] sm:gap-5 lg:grid-cols-12 max-w-[1440px] mx-auto ${className}`}
      style={style}
    >
      <div className="col-span-6 lg:col-span-12">{children}</div>
    </div>
  );
};

export default FullWidthSection;
