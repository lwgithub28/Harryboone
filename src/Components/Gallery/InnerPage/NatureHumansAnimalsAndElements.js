import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import ModalComponent from "../../Modal/ModalCom.js";
import { HumansAndAnimals } from "../../Data.js";
import { Helmet } from "react-helmet";
const NatureHumansAnimalsAndElements = () => {
  const data = {
    pageName: "Nature: Humans, Animals, and Elements",
    head1: "Humans",
    haed1desc: [
      "The major objective was to understand and express the essence of a broadly defined nature to include the human, in addition to animals and earthly elements.  The human paintings begin with both the witnessed and imagined.  An example of the former is ",
      <em>Meditation on a Pocket. </em>,
      "While at a beach resort billiard room I watched my son anticipate his next play and at the same time I recalled watching his approach to the surf earlier that day.  I conceived of a triptych as the logical means for a visual narrative, memorializing a special day.  Other examples of human experience are ",
      <em>Waiting, Bear Market, and Lost in Reading. </em>,
      "These works invite the viewer to ponder certain states-of-being.",
    ],
    head2: "Animals",
    haed2desc: [
      "Anthropomorphic depictions are sometimes a better way of calling attention to compelling aspects of human existence, the light-hearted and the grave, thus my foray into animal imagery.   The dog paintings ,",
      <em>(e.g., Encounter, Sniff and Play, Blue Canine, et al) </em>,
      "portray human interactions and responses.  The ",
      <em>“Death Mort” </em>,
      "series that features dead animals reference human sorrow and mourning.",
    ],
    head3: "Elements ",
    haed3desc: [
      "My",
      <em> “Entropy” </em>,
      "paintings are intended to lead the viewer to consider the link between human life and the earth around us, and the inevitable decline of physical form.  ",
      <br></br>,
      <br></br>,
      "The first of my   “entropy paintings”, ",
      <em>Double Negative 1, </em>,
      "was inspired by a visit to Michael ",
      <em>Heizer’s Double Negative, </em>,
      "a massive earth work in a remote area of Nevada. A huge rectangular trench dug into one mesa faces its complement on a mesa opposite it; the two divided by a broad valley. It suffers the slow continual erosion of its elements until which time they are transformed into the undifferentiated dust of the desert floor.  We humans too are subject to decay, destined to return to the earth – a sobering thought, but oddly beautiful as well.  In my three versions of ",
      <em>Double Negative, </em>,
      "I attempted to bring the feeling of the stunning, overwhelming site into a two-dimensional format while maintaining the visceral sensation of vast space. I applied raw layers of highly keyed pigment to recreate the profound and barren vista.",
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
        <title>
          Nature, Humans, Animals, and Elements - Harry Boone | Art Collection
        </title>
        <meta
          name="description"
          content="Explore the Nature, Humans, Animals, and Elements collection by Harry Boone. Delve into abstract art pieces depicting the interconnection of natural elements and beings."
        />
      </Helmet>
      <div className="stillLifes for-visibilty" id="stillLifes">
        <div className="container">
          <div className="row">
            <h2 className="color-chng">
              {" "}
              NATURE: HUMANS, ANIMALS, AND ELEMENTS
            </h2>
            <p className="middle-text">
              {" "}
              Click the thumbnails below to view full and enlarged images
            </p>
            <ModalComponent {...data} />
            <div className="modal-gallery">
              <div className="container imagegallery">
                <div className="row">
                  {HumansAndAnimals.map((image, index) => (
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
                  images={HumansAndAnimals.map((image) => ({
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

export default NatureHumansAnimalsAndElements;
