import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";
import classnames from "classnames";

const FaqSection = ({
  title,
  titleFontSize = "text-[1.75rem]",
  titleColor = "text-darkRed",
  faqs,
  qTextColor = "text-superGray",
  aTextColor = "text-mdecDarkGray",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="md:px-5 lg:px-0">
      <h1 className={`${titleFontSize} ${titleColor} uppercase mb-10`}>
        {title}
      </h1>
      <Accordion
        onChange={(index) => {
          setCurrentIndex(index);
        }}
      >
        {faqs.map((pair, index) => {
          return (
            <AccordionItem className="border-b" key={index}>
              <AccordionButton>
                <p
                  className={classnames(
                    `text-xl sm:text-2xl ${aTextColor} flex items-center text-left`,
                    {
                      "pb-3": index !== currentIndex,
                      "mt-7.5": index !== 0,
                    }
                  )}
                >
                  <span>
                    {index === currentIndex ? (
                      <svg
                        className={`h-5 w-5 ${titleColor} font-bold mr-7 md:mr-10`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className={`h-5 w-5 ${titleColor} font-bold mr-7 md:mr-10`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    )}
                  </span>
                  {pair.q}
                </p>
              </AccordionButton>
              <AccordionPanel className="pb-3 mt-5 ml-12 md:ml-16">
                <div
                  className={`text-lg break-words whitespace-pre-line ${aTextColor}`}
                >
                  {pair.a}
                </div>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqSection;
