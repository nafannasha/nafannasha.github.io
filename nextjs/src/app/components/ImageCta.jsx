import { useState } from "react";
import { useTranslation } from "react-i18next";

import Modal from "./Modal";
import Section from "./Section";
import Button from "./Button";

const ImageCta = ({
  className,
  desktopImg,
  tabletImg,
  mobileImg,
  title,
  desc,
  list,
  linkName,
}) => {
  const { t } = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        className={`${desktopImg} ${tabletImg} ${mobileImg} bg-cover bg-bottom bg-no-repeat w-full md:h-[30rem] sm:h-[22rem] h-fit relative rounded-3xl flex flex-col justify-between md:py-14 py-8 md:px-16 px-8 ${className}`}
      >
        <div className="md:w-1/2">
          <p className="sm:text-2xl text-xl font-bold text-black py-4">
            {title}
          </p>
          <p className="sm:text-xl text-lg text-black py-4">{desc}</p>
        </div>
        {list && (
          <p
            className="text-left text-xl text-darkRed font-bold cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            + {linkName ? linkName : t("learn_more")}
          </p>
        )}
      </div>

      {/* MODAL POPUP */}
      <Modal
        isOpen={modalOpen}
        onChangeHandler={(event) => setModalOpen(event)}
      >
        <div className="bg-white md:min-w-[40rem] pb-14">
          <Section>
            {list &&
              list.map((item, index) => {
                return (
                  <>
                    <div
                      className="flex flex-row justify-between items-center"
                      key={index}
                    >
                      <p className="py-5">{item.title}</p>
                      <Button
                        color="red"
                        type="fill"
                        size="sm"
                        className="uppercase ml-4"
                        onClick={() => window.open(item.pdf, "_ blank")}
                      >
                        {t("download")}
                      </Button>
                    </div>
                    <hr />
                  </>
                );
              })}
          </Section>
        </div>
      </Modal>
    </>
  );
};

export default ImageCta;
