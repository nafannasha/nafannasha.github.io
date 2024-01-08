import { useTranslation } from "react-i18next";
import Image from "next/image";

import Section from "./Section";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#292929]">
      <Section className="py-8 sm:py-4 md:py-14 text-white text-xs font-medium">
        <footer className="w-full h-full flex flex-wrap md:flex-nowrap gap-x-8 items-center justify-between">
          {/* DESKTOP VIEW */}
          <div className="hidden md:block w-full md:w-auto text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <Image
                src="/static/logo/mdec-white.png"
                width={230}
                height={48}
              />
            </div>
            <p>Malaysia Digital Economy Corporation (MDEC) Sdn Bhd</p>
            <p>2360 Persiaran APEC, 63000 Cyberjaya</p>
            <p>Selangor Darul Ehsan</p>

            {/* <div className="flex grid-rows-2 gap-3 items-center mt-5">
            <p>Visitors</p>
            <p className="bg-gray-500 px-2 py-0.5 tracking-widest">1591207</p>
          </div> */}
          </div>

          <div className="hidden md:flex flex-col w-full md:w-auto justify-center text-center">
            <div className="mb-1 h-14 w-full md:h-16 self-center relative">
              <Image
                layout="fill"
                src="/static/logo/kkd.png"
                alt="kkd-logo"
                objectFit="contain"
              />
            </div>
            <p className="w-20 leading-[10px] text-[8px]">{t("footer.kkd")}</p>
          </div>

          {/* TABLET / MOBILE / SMALL MOBILE VIEW */}
          <div className="mb-4 flex md:hidden w-full justify-between">
            <div className="w-auto">
              <img src="/static/logo/mdec-white.png" className="mb-7 w-40" />
              <p>Malaysia Digital Economy Corporation (MDEC) Sdn Bhd</p>
              <p>2360 Persiaran APEC, 63000 Cyberjaya</p>
              <p>Selangor Darul Ehsan</p>
            </div>

            <div className="w-full flex flex-col items-center justify-center text-center">
              <img
                src="/static/logo/kkd.png"
                className="mb-1 h-14 md:h-16 self-center"
              />
              <p className="w-20 leading-[10px] text-[8px]">
                {t("footer.kkd")}
              </p>

              {/* <div className="flex grid-rows-2 gap-3 items-center mt-5">
              <p>Visitors</p>
              <p className="bg-gray-500 px-2 py-0.5 tracking-widest">1591207</p>
            </div> */}
            </div>
          </div>

          <div className="w-full md:w-auto text-left md:text-right">
            {/* SOCIAL MEDIA / SITE MAP */}
            <div className="mb-5 md:mb-4 grid grid-flow-col auto-cols-max gap-4 justify-start md:justify-end">
              <a href="https://www.facebook.com/MyMDEC/">
                <img
                  src="/static/logo/facebook.svg"
                  className="w-6 h-6 fill-white text-white cursor-pointer"
                />
              </a>
              <a href="https://www.youtube.com/mymdec">
                <img
                  src="/static/logo/youtube.svg"
                  className="w-6 h-6 fill-white text-white cursor-pointer"
                />
              </a>
              <a href="https://www.instagram.com/mymdec/">
                <img
                  src="/static/logo/instagram.svg"
                  className="w-6 h-6 fill-white text-white cursor-pointer"
                />
              </a>

              <a href="https://twitter.com/mymdec">
                <img
                  src="/static/logo/twitter.svg"
                  className="w-6 h-6 fill-white text-white cursor-pointer"
                />
              </a>
              <a href="https://www.linkedin.com/company/mymdec/">
                <img
                  src="/static/logo/linkedin.svg"
                  className="w-6 h-6 fill-white text-white cursor-pointer"
                />
              </a>
            </div>
            <div>
              <p className="w-full mb-5 md:mb-0">
                <a href="/contact-us">Contact Us</a> |{" "}
                <a href="/footer-pages/mdec-code-of-conduct">Code of Conduct</a>{" "}
                |{" "}
                <a href="/footer-pages/whistleblower-policy">
                  Whistleblower Policy
                </a>{" "}
                | <a href="https://career.mdec.my/">Career</a> |{" "}
                <a href="/footer-pages/personal-data-protection/">
                  Personal Data Protection
                </a>{" "}
                | <a href="https://tenders.mdec.com.my/">Tenders</a> |{" "}
                <a href="https://mdec.my/uncategorized/term-and-conditions/">
                  Terms and Conditions
                </a>{" "}
                | <a href="https://blog.mdec.my/">Blog</a>
              </p>
              <p className="w-full">
                © 2022 Malaysia Digital Economy Corporation Sdn Bhd 199601016995
                (389346 - D). All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </Section>
    </div>
  );
};

export default Footer;
