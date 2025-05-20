import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineZoomIn } from "react-icons/md";
import { MdOutlineZoomOut } from "react-icons/md";
import ModalComponent from "../../Modal/ModalCom.js";
import { Coastalplacesandthings } from "../../Data.js";
const CoastalPlacesAndThings = () => {
  const data = {
    pageName: "COASTAL PLACES AND THINGS",
    comment: [
      "After some of the more exacting paintings I completed for",
      <em key="italic"> Entropy, Limitation, and Death </em>,
      "series I began to make paintings of coastal sites because they facilitated my desire to “loosen up.”",
      <br></br>,
      ,
      <br></br>,
      "Even more significantly, the change of subject matter represents a shift in my paradigm.  The immersion in subject matter that was born of my own physical limitation was intense.  I wanted to focus on hopeful themes.  From the earliest years I have made pilgrimages to beaches every summer. The curative ocean is a place where I shed my worries and dream again. Now in a gradual process of bodily recouperation after spinal surgery in 2023, I am less limited than I had been.  An increased physical freedom and promise of restoration coincides with the spirit of this body of work.  My intent is to distill in these paintings the regenerative state-of-being I feel in the presence of coastal spaces.",
    ],
    // comment1: ["After some of the more exacting paintings I completed for", <em key="italic"> Entropy, Limitation, and Death </em>, "series I began to make paintings of coastal sites because they facilitated my desire to “loosen up.”", <br></br>, , <br></br>, "Even more significantly, the change of subject matter represents a shift in my paradigm.  The immersion in subject matter that was born of my own physical limitation was intense.  I wanted to focus on hopeful themes.  From the earliest years I have made pilgrimages to beaches every summer. The curative ocean it is a place where I shed my worries and dream again. Now in a gradual process of bodily recouperation after spinal surgery in 2023, I am less limited than I had been.  An increased physical freedom and promise of restoration coincides with the spirit of this body of work.  My intent is to distill in these paintings the regenerative state-of-being I feel in the presence of coastal spaces."]
  };
  // MODAL FOR IMAGES
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const maxZoom = 2; // Maximum zoom level

  const openLightbox = (event, { photo, index }) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxOpen(false);
    setZoomLevel(1);
  };
  const zoomIn = () => {
    if (zoomLevel < maxZoom) {
      setZoomLevel(zoomLevel + 0.3); // Increase zoom level
    }
  };

  const zoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.3); // Decrease zoom level
    }
  };

  const previousImage = () => {
    setZoomLevel(1);
    setCurrentImage((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + Coastalplacesandthings.length) %
        Coastalplacesandthings.length;
      return newIndex;
    });
  };

  const nextImage = () => {
    setZoomLevel(1);
    setCurrentImage((prevIndex) => {
      const newIndex = (prevIndex + 1) % Coastalplacesandthings.length;
      return newIndex;
    });
  };

  return (
    <>
      <div className="stillLifes structureLandscape" id="stillLifes">
        <div className="container">
          <div className="row">
            <h2 className="color-chng">COASTAL PLACES AND THINGS</h2>
            <ModalComponent {...data} />
            <div className="modal-gallery">
              <div className="container imagegallery">
                <div className="row">
                  {Coastalplacesandthings.map((photo, index) => {
                    return (
                      <div className="col-md-4 imagegallerycol" key={index}>
                        <GalleryPhoto
                          photo={photo}
                          index={index}
                          openLightbox={openLightbox}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="modal-box">
                <ModalGateway>
                  {lightboxOpen && (
                    <Modal onClose={closeLightbox}>
                      <div className="image-modal">
                        <div className="top-header">
                          <button onClick={zoomIn} className="zoom-button">
                            <MdOutlineZoomIn />
                          </button>
                          <button onClick={zoomOut} className="zoom-button">
                            <MdOutlineZoomOut />
                          </button>
                          <button
                            onClick={closeLightbox}
                            className="close-button"
                          >
                            <RxCross2 />
                          </button>
                          <button
                            onClick={previousImage}
                            className="nav-button prev-button"
                          >
                            {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
                            <HiOutlineArrowSmallLeft />
                          </button>
                          <button
                            onClick={nextImage}
                            className="nav-button next-button"
                          >
                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                            <HiArrowSmallRight />
                          </button>
                        </div>
                        <div className="carousel-container">
                          <Carousel
                            currentIndex={currentImage}
                            views={Coastalplacesandthings.map((photo) => ({
                              ...photo,
                              srcset: `${photo.src} ${photo.width}w`,
                              caption: photo.title,
                            }))}
                            components={{ Footer: null }}
                            styles={{
                              view: (base) => ({
                                ...base,
                                transform: `scale(${zoomLevel})`,
                                transition: "transform 0.5s ease",
                              }),
                            }}
                          />
                          <div className="caption">
                            <p>{Coastalplacesandthings[currentImage].title}</p>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}
                </ModalGateway>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const GalleryPhoto = ({ photo, index, openLightbox }) => (
  <div onClick={(event) => openLightbox(event, { photo, index })}>
    <img
      src={photo.src}
      alt={`Gallery ${index + 1}`}
      title={photo.caption}
      className={photo.className}
    />
  </div>
);
export default CoastalPlacesAndThings;
