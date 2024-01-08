import Modal from "src/components/Modal";
import { useState } from "react";

const VideoCard = ({ video_link, title, imgSrc, date, desc }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="pb-6 relative overflow-hidden bg-white shadow-sm hover:cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <div>
          <img className="xs:h-[10rem] sm:h-[15rem] w-full" src={imgSrc} />
        </div>
        <div className="text-center text-xl font-bold text-left p-6">
          <p>{title}</p>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onChangeHandler={(event) => setModalOpen(event)}
        outerModalClassName="mt-20"
      >
        <div className="px-6">
          <p className="text-mdecRed text-2xl font-bold pb-6">{title}</p>
          <p className="font-bold pb-6">{date}</p>
          <p className="pb-6">{desc}</p>

          <div className="block xs:hidden">
            <iframe
              width="240"
              height="240"
              src={video_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hidden xs:block">
            <iframe
              width="720"
              height="405"
              src={video_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VideoCard;
