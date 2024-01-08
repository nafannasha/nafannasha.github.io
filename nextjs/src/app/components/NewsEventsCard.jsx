import { useRouter } from "next/router";

const NewsEventsCard = ({ cta_link, title, date, time, imgSrc }) => {
  const router = useRouter();

  return (
    <div className="pb-6 border border-gray overflow-hidden bg-white shadow-sm">
      <div>
        <img className="xs:h-[15rem] sm:h-[20rem] w-full" src={imgSrc} />
      </div>
      <div
        className="hover:cursor-pointer"
        onClick={() => router.push(cta_link)}
      >
        <div className="text-xl font-bold sm:max-h-[6rem] text-left p-6">
          <p>{title}</p>
        </div>
        <div className="relative sm:pt-6 pb-12 pl-6 sm:pl-0">
          <div className="sm:absolute left-6 flex items-center">
            {date && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="pl-1">{date}</p>
              </>
            )}
          </div>
          <div className="sm:absolute right-6 flex items-center">
            {time && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="pl-1">{time}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEventsCard;
