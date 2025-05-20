import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { StillLifesData } from "../../Data.js";
import ModalComponent from "../../Modal/ModalCom.js";
import { Helmet } from "react-helmet";
const InteriorsAndStillLifes = () => {
  const data = {
    pageName: "Interiors and Still Lifes",
    head1: "Still Lifes",
    haed1desc: [
      "Although my graduate school training focused largely on direct observation of the human figure, beginning with my MFA thesis work and in the early years of my painting career I increasingly turned to still life (though not your typical sort of still life) as my subject matter, choosing objects and putting them into a variety of positions relative to the lighting in order to explore differing visual phenomena. While some might consider these chosen objects mundane (discarded shoes, medicine bottles, etc.), I really liked finding light and color in that mundanity. At this time, I considered myself a “formalist” and was not concerned with subject matter as a vehicle for meaning or narrative. Rather, meaning was to be derived via the process of visual perception revealed in the paintings.",
    ],
    head2: "Interiors",
    haed2desc: [
      "Over time, I started to outgrow my purely formalist leanings. One night at about 3 AM after a long painting session made all the more exhausting by the inhalation of too many solvent fumes, I took a break by sitting down in a green chair in my upstairs studio. Sometimes that chair was positioned to face the corner of the room so that I could not see what I had been working on and so that I could rest my mind, along with the help of a restorative beer or two! After some rest, on a whim I started a new painting: namely, this very chair in its environment. I began to understand that this subject matter was deeply personal to me, and I believed that a painting of it might say something more interesting than the things I had been doing. In hindsight this was the beginning of my path to a more expressive brand of painting. By choosing subject matter more thoughtfully and color as the primary vehicle, I was determined to do explore this expressivity more deeply.",
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
        <title>Interiors and Still Lifes - Harry Boone | Art Collection</title>
        <meta
          name="description"
          content="Browse the Interiors and Still Lifes collection by Harry Boone. Discover abstract interpretations of indoor spaces and still life compositions."
        />
      </Helmet>
      <div className="stillLifes for-visibilty" id="stillLifes">
        <div className="container">
          <div className="row">
            <h2 className="color-chng">INTERIORS AND STILL LIFES</h2>
            <p className="middle-text">
              {" "}
              Click the thumbnails below to view full and enlarged images
            </p>
            <ModalComponent {...data} />
            <div className="modal-gallery">
              <div className="container imagegallery">
                <div className="row">
                  {StillLifesData.map((image, index) => (
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
                  images={StillLifesData.map((image) => ({
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

export default InteriorsAndStillLifes;
