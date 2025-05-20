import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

const ModalComponent = ({
  pageName,
  comment,
  head1,
  haed1desc,
  head2,
  haed2desc,
  head3,
  haed3desc,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      // ESCAPE key code
      closeModal();
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div id="comment-modal">
      <button onClick={openModal} className="artist-comment">
        ARTIST'S COMMENTS
      </button>
      {isModalOpen && (
        <div className="full-modal">
          <div className="modal">
            <div className="modal-content" ref={modalRef}>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h1>{pageName}</h1>
              <h2>ARTIST'S COMMENTS</h2>
              <span className="main-content">
                <p>{comment}</p>
              </span>
              <div className="modal-content-head">
                <h1>{head1}</h1>
                <p>{haed1desc}</p>
                <h1>{head2}</h1>
                <p>{haed2desc}</p>
                <h1>{head3}</h1>
                <p>{haed3desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
