import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import closeicon from "../assests/img/close.webp";
import popupimage from "../assests/img/GelleryImg/coastal-places-and-things/The Conversation in Teal, 2025, acrylic and oil on wood panel.webp"
import Header from "../Header/Header";
import Home from "./Home";
import Gallery from "./Gallery/Gallery";
import Artist from "./Artist";
import ArtistStatement01 from "./Statement01";
import Press from "./Press";
import Contact from "./Contact";
import Footer from "./Footer";
import SelectedEarlyWorks from "./Gallery/SelectedEarlyWorks(1982-1999)";
import InteriorsAndStillLifes from "./Gallery/InnerPage/InteriorsAndStillLifes";
import NatureHumansAnimalsAndElements from "./Gallery/InnerPage/NatureHumansAnimalsAndElements";
import CoastalPlacesAndThings from "./Gallery/InnerPage/CoastalPlacesAndThingscopy";
import CoastalPlacesAndThingsNew from "./Gallery/InnerPage/CoastalPlacesAndThingsNew";
import CoastalPlacesAndThingsCopy from "./Gallery/InnerPage/CoastalPlacesAndThings";
import EntropyLimitationAndDeath from "./Gallery/InnerPage/EntropyLimitationAndDeath";
import Playground from "./Gallery/InnerPage/Playgrounds";
import TermsConditions from "./TermsConditions";
import Exhibition from "./Exhibition";
import CvAndResume from "./CvAndResume";
import NoPage from "./NoPage";
const BrowserRouterApp = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      document.body.style.overflow = "hidden"; // Disable background scroll
    }, 2000); // Show popup after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto"; // Re-enable background scrolling
  };
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about-the-artist" element={<Artist />} />
        <Route path="artist-statement" element={<ArtistStatement01 />} />
        <Route path="press" element={<Press />} />
        <Route path="Selected-Early-Works" element={<SelectedEarlyWorks />} />
        <Route
          path="gallery/interiors-and-still-lifes"
          element={<InteriorsAndStillLifes />}
        />
        <Route
          path="gallery/nature-humans-animals-and-elements"
          element={<NatureHumansAnimalsAndElements />}
        />
        <Route
          path="gallery/coastal-places-and-things-copy"
          element={<CoastalPlacesAndThings />}
        />
        <Route
          path="gallery/coastal-places-and-things-new"
          element={<CoastalPlacesAndThingsNew />}
        />
        <Route
          path="gallery/coastal-places-and-things"
          element={<CoastalPlacesAndThingsCopy />}
        />
        <Route
          path="gallery/limitation-and-death"
          element={<EntropyLimitationAndDeath />}
        />
        <Route path="gallery/playgrounds" element={<Playground />} />
        <Route path="contact" element={<Contact />} />
        <Route path="exhibition" element={<Exhibition />} />
         <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="cv-resume" element={<CvAndResume />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      {/* Full-Screen Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button onClick={closePopup} className="close-btn">
              <img src={closeicon} alt="closeicon" title="closeicon" loading="lazy"></img>
            </button>
            <div className="popup-main">
              <h2 className='main-head-popup'><span>FROM ENTROPY</span> TO RENEWAL:<br /> HARRY <span>BOONE</span></h2>
              <div className='row'>
                <div className='col-lg-6 col-sm-12 col-xs-12 know-more-btn-outer'>
                  <div className='popup-content-text'>
                    <h3 className='rotate-date'>APRIL 25 - JUNE 6 </h3>
                    <h3>HARRY BOONE </h3>
                    <p>Main Gallery at GHIA, Augusta, GA.</p>
                    <div className='date'>
                      <h3>APRIL 25. 5-7 PM </h3>
                      <p>Opening Reception. Free to the public.</p>
                    </div>
                    <Link className='know-more' to="/exhibition" onClick={closePopup}>know more</Link>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-12 col-xs-12'>
                  <div className='img'>
                    <img src={popupimage} alt='popupimage' title='popupimage' loading="lazy"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default BrowserRouterApp;
