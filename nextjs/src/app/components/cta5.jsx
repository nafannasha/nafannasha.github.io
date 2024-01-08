const Cta5 = ({ src, imgClassName, contentClassName, content }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:my-16">
        <div className={`md:w-3/12 ${imgClassName}`}>
          <img src={src} alt="" className="mx-auto" />
        </div>
        <div className={`md:w-9/12 ${contentClassName}`}>{content}</div>
      </div>
    </>
  );
};

export default Cta5;
