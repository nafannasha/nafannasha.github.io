import Link from "next/link";

const CompCard = (props) => {
  return (
    <>
      <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-16 rounded-lg overflow-hidden text-center relative flex flex-col justify-center items-center">
          <img
            className="mx-auto w-14 mb-3 opacity-20"
            src={props.itemIcon}
            alt=""
          />
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 capitalize">
            {props.itemPage}
          </h1>
          <p className="leading-relaxed mb-3 text-gray-400">{props.itemDesc}</p>
          <Link href={"components/" + props.itemPage.replace(/\s+/g, "-")}>
            <a className="text-indigo-500 inline-flex items-center">
              View Components
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompCard;
