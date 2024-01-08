const LogoCloud = ({ logos }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-6 items-center">
        {logos.map((item, index) => {
          return (
            <div key={index}>
              <img className="" src={item} alt="Tuple" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LogoCloud;
