import { useState } from "react";
import Modal from "./Modal";

const ImageVideo = ({ src, videoLink }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        className="hover:cursor-pointer mx-auto"
        onClick={() => setModalOpen(true)}
      />
      <Modal
        isOpen={modalOpen}
        onChangeHandler={(event) => setModalOpen(event)}
      >
        <div className="block md:hidden">
          <iframe
            width="426"
            height="240"
            src={videoLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="hidden md:block">
          <iframe
            width="720"
            height="405"
            src={videoLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default ImageVideo;
