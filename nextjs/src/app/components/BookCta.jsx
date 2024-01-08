const BookCta = ({ src, title, cta, link }) => {
  return (
    <>
      <div className="flex flex-col max-w-xs w-full">
        <div className="aspect-w-3 aspect-h-4">
          <img src={src} className="w-full" />
        </div>
        <div>
          {title && <p className="sm:text-xl text-lg font-bold">{title}</p>}
          <div className="mt-8">
            <a
              href={link}
              target={"_blank"}
              className="text-left text-base text-darkRed font-bold cursor-pointer"
            >
              {cta ? cta : "+ Download Makerzine"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCta;
