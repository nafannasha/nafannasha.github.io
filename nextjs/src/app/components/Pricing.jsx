import Button from "./Button";
import { useRouter } from "next/router";

const ListingColor = {
  red: `bg-[#BD274D]`,
  green: `bg-mdecGreen`,
  yellow: `bg-[#F3AA31]`,
  blue: `bg-[#5882C3]`,
};

// Example use
// Pricing
//     tier={[
//         {
//             bgColor: "green",
//             name: "Premium",
//             desc: "Unlimited Access & Features",
//             price: "400",
//             features:
//                 [
//                     "Access to the business connection platform, where attendees will be able to set one-to-one meetings with other attendees from the games and animation industry",
//                     "Watch conferences with full playback functionality",
//                     "Browse through our exhibitors and sponsor's page"
//                 ],
//             link: ""
//         },
//         {
//             bgColor: "yellow",
//             name: "Free Pass",
//             desc: "Basic Access & Features",
//             features:
//                 [
//                     "Watch the conference live on 21st and 22nd September only",
//                 ],
//             link: ""
//         },
//     ]}
// />

const Pricing = ({ tier }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center items-center sm:items-stretch gap-4">
        {tier.map((item, index) => {
          return (
            <div
              key={index}
              className={`text-white flex flex-col justify-between p-8 sm:p-12 rounded-tr-[32px] w-full max-w-lg sm:max-w-none h-full rounded-bl-[32px] ${
                ListingColor[item.bgColor]
              }`}
            >
              <div>
                <p className="uppercase font-bold text-2xl">{item.name}</p>
                <p className="text-xl">{item.desc}</p>
                <div className="flex font-bold pt-4 uppercase">
                  {item.price ? (
                    <>
                      <span className="text-2xl">RM</span>
                      <span className="ml-4 text-6xl">{item.price}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-6xl uppercase">Free</span>
                    </>
                  )}
                </div>
                <ul className="divide-y divide-white text-xl">
                  {item.features.map((item, index) => {
                    return (
                      <li key={index} className="py-6">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Button
                size="full"
                type="fill"
                color="red"
                className="my-8"
                onClick={() => router.push(item.link)}
              >
                Register Now
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Pricing;
