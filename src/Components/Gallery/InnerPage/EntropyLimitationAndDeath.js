import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import ModalComponent from "../../Modal/ModalCom.js";
import { Entropylimitationanddeath } from "../../Data.js";
import { Helmet } from "react-helmet";
const EntropyLimitationAndDeath = () => {
  const data = {
    pageName: "Limitation and Death",

    haed1desc: [
      "This series of paintings may seem to be much more literal than the bulk of my work that is more nuanced.  Though an outlier, it afforded me a means for working through and expressing the circumstances involving limitation and death described below.  To a less direct degree the “Death Mort” and “Entropy” paintings seen in the “Nature” group relate to these events, as well.",
    ],
    head2: "Limitations",
    haed2desc: [
      "In 2016 I began to suffer a spinal disease that would become severe a few short years later. My pain became so debilitating that I could not walk more than 50 feet or stand for more than a minute.  Luckily, I could still paint, but I required the use of a wheelchair whenever I went to an art museum, grocery store, etc.  How physical limitations alter one’s view of the self is the subject of these paintings. The triptychs included in this section were inspired by a trip to the UK in 2018.  When I saw an old gentleman in a wheelchair in Hyde Park a vision of three panels came to me – on one end was the man who appeared to be deeply reflecting upon something, perhaps a remembrance, and on the other end was my visual memory of Provence Canyons that I had visited recently in southwestern Georgia. Dividing them was an area of shimmering light undefined by shape or form. I intuited a link between the canyons (that had resulted by the forces of entropy) and this man’s condition.  It only made sense to bring this vision to life. ",
      <br></br>,
      <br></br>,
      "The disconnect between sexual desire and being physically compromised as it affects the male psyche is seen in ",
      <em>Who Are You Really, What Are We Gonna Do? Can you? </em>,
      "Here, a young woman standing naked, pants dropped to her ankles stares at a wheelchair, that is literally empty, but an occupant is implied by her stare.  The unseen (assumed) man represents a vanishing sense of self and unattainable desire. ",
    ],
    head3: "Death",
    haed3desc: [
      "Within a short span of time, I lost two family members and witnessed the agonizing death of my wife’s father.  I struggled to come to terms not so much with their passing but rather my undecipherable reaction or non-reaction to their deaths.  I did not bear the overt symptoms of loss that I would have expected of myself.  When executing ",
      <em>Death Meets Flight </em>,
      "it dawned on me that it was in fact about my mother’s recent death.  It was cathartic.  Though death, particularly thinking about my own, has been a difficult, even paralyzing subject, I felt the need to paint about death itself and its effects on the living. Other works such as ",
      <em>Dead Immigrant, Morgue after Bacon, Mourning, Burial, </em>,
      "and ",
      <em>Amphibious Skull </em>,
      "reflect my discomfort with death.  It is a grim subject, but these paintings provided the much-needed opportunity to stare death in the face.",
    ],
  };
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
        <title>Limitation and Death - Harry Boone | Art Collection</title>
        <meta
          name="description"
          content="Check the Limitation and Death collection by Harry Boone. Reflect on abstract paintings exploring themes of mortality and existential limits."
        />
      </Helmet>
      <div
        className="stillLifes structureLandscape for-visibilty"
        id="stillLifes"
      >
        <div className="container">
          <div className="row">
            <h2 className="color-chng"> Limitation, and Death</h2>
            <p className="middle-text">
              {" "}
              Click the thumbnails below to view full and enlarged images
            </p>
            <ModalComponent {...data} />
            <div className="modal-gallery">
              <div className="container imagegallery">
                <div className="row">
                  {Entropylimitationanddeath.map((image, index) => (
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
                  images={Entropylimitationanddeath.map((image) => ({
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
