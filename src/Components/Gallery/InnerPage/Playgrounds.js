import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { playgroundData } from "../../Data.js";
import ModalComponent from "../../Modal/ModalCom.js";
import { Helmet } from "react-helmet";
const EntropyLimitationAndDeath = () => {
  const data = {
    pageName: "playgrounds",
    comment: [
      "In the late 1990s I began a subject that continues into the twenty-first century. The subjects of these paintings were often witnessed when taking my son to playgrounds and other recreational areas. One time I began meditating on a swing I saw – I was entranced by it for a very long time. I recalled in Martin Buber’s ",
      <em key="italic"> I Thou </em>,
      "the concept of a contemplative relationship between the self and tree, with the inner cojoining with the outer. That swing extracted from deep inside me an almost spiritual state of being. I thought of Mark Rothko paintings that elicit the very same thing. Not questioning it, I launched a painting",
      <em key="italic"> (Swing Series #1) </em>,
      "that did not look necessarily like what I had literally seen, but rather, using memory, attempted to create for the viewer an experience akin to what I had just felt standing before the swing.",
      <br></br>,
      ,
      <br></br>,
      "Swings and slides provided an impetus for looking backward to simpler and more secure times during a turbulent personal period. These symbolic forms and their spaces were painted with knives in an abstract manner capturing their echoes of promise within the dim context. ",
      <em key="italic"> Swing Series: Evening, and Slide Twilight #3 </em>,
      "like most others in this series, display deep but intense color fields eclipsed by blackish slashes of diagonals representing the constructions. The resulting fractured shapes of luminous energy offer evidence of something unseen, but vital.",
    ],
  };
  // MODAL FOR IMAGES
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <>
      <Helmet>
        <title>Playgrounds - Harry Boone | Art Collection</title>
        <meta
          name="description"
          content="View the Playgrounds collection by Harry Boone. Experience abstract paintings inspired by childhood memories and playful scenes."
        />
      </Helmet>
      <div className="stillLifes structureLandscape" id="stillLifes">
        <div className="container">
          <div className="row">
            <h2 className="color-chng">playgrounds</h2>
            <p className="middle-text">
              {" "}
              Click the thumbnails below to view full and enlarged images
            </p>
            <ModalComponent {...data} />
            <div className="modal-gallery">
              <div className="container imagegallery">
                <div className="row">
                  {playgroundData.map((image, index) => (
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
                  images={playgroundData.map((image) => ({
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

export default EntropyLimitationAndDeath;
