import { useRouter } from "next/router";

const Cta4 = ({ className, title, desc, link, onClick }) => {
  const router = useRouter();
  return (
    <>
      <div
        className={`flex md:flex-row flex-col md:justify-between justify-center md:items-center ${
          (onClick || link) && "hover:cursor-pointer"
        } ${className}`}
        onClick={onClick ? onClick : () => router.push(link)}
      >
        <div>
          <p className="font-bold sm:text-3xl text-2xl mb-2">{title}</p>
          <p className="sm:text-xl text-lg">{desc}</p>
        </div>
        <div>
          {(onClick || link) && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <g
                id="Group_924"
                data-name="Group 924"
                transform="translate(13541 9430)"
              >
                <g
                  id="Rectangle_411"
                  data-name="Rectangle 411"
                  transform="translate(-13541 -9430)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="1"
                  opacity="0.003"
                >
                  <rect width="50" height="50" stroke="none" />
                  <rect x="0.5" y="0.5" width="49" height="49" fill="none" />
                </g>
                <path
                  id="Icon_awesome-long-arrow-alt-right"
                  data-name="Icon awesome-long-arrow-alt-right"
                  d="M22.074,15.188H.844A.844.844,0,0,0,0,16.031v3.938a.844.844,0,0,0,.844.844h21.23v3.239a1.688,1.688,0,0,0,2.881,1.193l6.051-6.051a1.687,1.687,0,0,0,0-2.386l-6.051-6.051a1.688,1.688,0,0,0-2.881,1.193Z"
                  transform="translate(-13532 -9423.258)"
                  fill="#b24863"
                />
              </g>
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default Cta4;
