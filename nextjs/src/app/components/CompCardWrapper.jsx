const CompCardWrapper = (props) => {
  return (
    <>
      <div className="mb-20">
        <div className="flex flex-wrap justify-between items-end mb-4">
          <h2 className="text-xl font-bold">{props.componentName}</h2>
          <p className="font-bold">
            File location:{" "}
            <span className="text-gray-400 font-normal">
              "src/components/{props.fileName}"
            </span>
          </p>
        </div>
        <div className="border border-gray-200">{props.children}</div>
      </div>
    </>
  );
};

export default CompCardWrapper;
