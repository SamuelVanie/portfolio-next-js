import React from "react";

const Modal = ({ title, technologies, description, link, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-3/4 flex flex-col" onClick={closeModal}>
        <button
          className="text-white text-xl place-self-end"
          onClick={closeModal}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-teal-600">{technologies}</p>
          <p className="text-gray-800 pt-3">{description}</p>
          <p className="text-gray-800 pt-3">
            {" "}
            Check the link :{" "}
            <a className="text-teal-600" href={link} target="_blank">
              {title}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
