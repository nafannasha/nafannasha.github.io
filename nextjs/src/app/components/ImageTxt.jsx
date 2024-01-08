import { useRouter } from "next/router";

const ImageTxt = ({ className, src, text, link }) => {
  const router = useRouter();
  return (
    <>
      {/* Text on image */}
      <div
        className={`w-full md:h-auto h-72 relative ${className} ${
          link && "hover:cursor-pointer"
        }`}
        onClick={link ? () => router.push(link) : undefined}
      >
        <img src={src} className="w-full h-full object-cover rounded-3xl" />
        <div className="absolute bottom-1/2 translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-70 transition duration-300 rounded-3xl h-full w-full">
          <p className="relative top-1/2 -translate-y-1/2 sm:text-lg text-base text-center text-white px-8 py-4">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageTxt;
