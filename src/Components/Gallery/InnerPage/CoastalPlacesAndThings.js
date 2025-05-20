import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import ModalComponent from "../../Modal/ModalCom.js";
import { Coastalplacesandthings } from "../../Data.js";
import { Helmet } from "react-helmet";
const CoastalPlacesAndThingsCopy = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  const data = {
    pageName: "COASTAL PLACES AND THINGS",
    comment: [
      "From the earliest years I have made pilgrimages to beaches every summer. The curative ocean is a place where I shed my worries and dream again. This is especially relevant after having experienced severe physical handicap and intense personal loss.  Now in a gradual process of bodily recouperation after spinal surgery in 2023, I am less limited and more hopeful than I had been.  An increased physical freedom and promise of restoration coincides with the spirit of this body of work.  My intent is to distill in these paintings the regenerative state-of-being I feel in the presence of coastal spaces.",
      // "After some of the more exacting paintings I completed for",
      // <em key="italic"> Entropy, Limitation, and Death </em>,
      // "series I began to make paintings of coastal sites because they facilitated my desire to “loosen up.”",
      // <br key="br1" />,
      // <br key="br2" />,
      // "Even more significantly, the change of subject matter represents a shift in my paradigm. The immersion in subject matter that was born of my own physical limitation was intense. I wanted to focus on hopeful themes. From the earliest years I have made pilgrimages to beaches every summer. The curative ocean is a place where I shed my worries and dream again. Now in a gradual process of bodily recuperation after spinal surgery in 2023, I am less limited than I had been. An increased physical freedom and promise of restoration coincides with the spirit of this body of work. My intent is to distill in these paintings the regenerative state-of-being I feel in the presence of coastal spaces."
    ],
  };

  return (
    <>
      <Helmet>
        <title>Coastal Places and Things - Harry Boone | Art Collection</title>
        <meta
          name="description"
          content="Discover the Coastal Places and Things collection by Harry Boone. Explore abstract paintings inspired by coastal landscapes and maritime themes."
        />
      </Helmet>
      <div className="stillLifes structureLandscape" id="stillLifes">
        <div className="container">
          <div className="row">
            <h2 className="color-chng">COASTAL PLACES AND THINGS</h2>
            <p className="middle-text">
              {" "}
              Click the thumbnails below to view full and enlarged images
            </p>
            <ModalComponent {...data} />
            <div className="modal-gallery">
              <div className="container imagegallery">
                <div className="row">
                  {Coastalplacesandthings.map((image, index) => (
                    <div className="col-md-4">
                      <img
                        key={index}
                        src={image.srcset}
                        alt={image.title}
                        onClick={() => openLightbox(index)}
                        className={image.className}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {lightboxOpen && (
                <Lightbox
                  images={Coastalplacesandthings.map((image) => ({
                    url: image.src,
                    title: image.title,
                  }))}
                  startIndex={currentImageIndex}
                  onClose={closeLightbox}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoastalPlacesAndThingsCopy;
