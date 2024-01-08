import { useRouter } from "next/router";
import Button from "./Button";

const ContactUs = ({ title, description, cta, link }) => {
  const router = useRouter();

  return (
    <div className="py-20 grid grid-cols-1 md:grid-cols-5 gap-20 flex items-center justify-center">
      <div className="md:col-span-3">
        <h1 className={"mb-6 font-bold md:text-5xl text-3xl"}>{title}</h1>
        <p className={"md:text-xl text-base"}>{description}</p>

        {cta && (
          <div className="pt-8">
            <Button
              color="red"
              type="fill"
              size="md"
              className="uppercase min-w-max"
              onClick={() => router.push(link)}
            >
              {cta}
            </Button>
          </div>
        )}
      </div>
      <div className="md:col-span-2 justify-self-end">
        <img
          src={`/static/images/contact-us.png`}
          className="md:w-full md:h-full w-2/3 h-2/3"
        />
      </div>
    </div>
  );
};

export default ContactUs;
