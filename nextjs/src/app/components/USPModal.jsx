import React, { useState } from "react";
import Modal2 from "./Modal2";

const USPModal = ({
  src,
  name,
  location,
  className,
  education,
  specialization,
  awards,
  certification,
  contact,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className={`flex flex-col items-center justify-evenly text-center cursor-pointer ${className}`}
        onClick={() => setModalOpen(true)}
      >
        <img
          src={src}
          className="h-60 w-60 sm:w-96 mb-6 md:h-60 md:w-60 object-scale-down object-bottom"
        />
        <div className="text-xl h-full">
          <p className="font-bold uppercase">{name}</p>
          <p>{location}</p>
        </div>
      </div>
      <Modal2
        isOpen={modalOpen}
        onChangeHandler={(event) => setModalOpen(event)}
      >
        <div className="px-8 py-4 sm:px-16 sm:py-16 max-w-5xl">
          <p className="uppercase text-2xl sm:text-[1.75rem] text-center font-medium text-mdecGreen mb-8">
            {name}
          </p>
          <p className="text-lg sm:text-xl flex items-baseline font-bold gap-4 justify-center mb-8">
            <svg width="1em" height="1em" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z"
              ></path>
              <circle cx="16" cy="13" r="4" fill="none"></circle>
            </svg>
            {location}
          </p>
          {education && (
            <>
              <p className="text-lg sm:text-xl font-bold my-2">Education</p>
              <ul className="text-lg sm:text-xl">
                {education.map((item, index) => {
                  return (
                    <li key={index} className="py-2 whitespace-pre-wrap">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {specialization && (
            <>
              <p className="text-lg sm:text-xl font-bold my-2">
                Specialization
              </p>
              <ul className="text-lg sm:text-xl">
                {specialization.map((item, index) => {
                  return (
                    <li key={index} className="py-2 whitespace-pre-wrap">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {awards && (
            <>
              <p className="text-lg sm:text-xl font-bold my-2">Awards</p>
              <ul className="text-lg sm:text-xl">
                {awards.map((item, index) => {
                  return (
                    <li key={index} className="py-2 whitespace-pre-wrap">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {certification && (
            <>
              <p className="text-lg sm:text-xl font-bold my-2">Certification</p>
              <ul className="text-lg sm:text-xl">
                {certification.map((item, index) => {
                  return (
                    <li key={index} className="py-2 whitespace-pre-wrap">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          {contact && (
            <>
              <p className="text-lg sm:text-xl font-bold my-2">Contact</p>
              <ul className="text-lg sm:text-xl">
                {contact.map((item, index) => {
                  return (
                    <li key={index} className="py-2">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </Modal2>
    </>
  );
};

export default USPModal;
