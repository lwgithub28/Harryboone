import React from "react";
// import SelectedRecentWorks from './SelectedRecentWorks(2000-PRESENT)';
import SelectedEarlyWorks from "./SelectedEarlyWorks(1982-1999)";
import { Helmet } from "react-helmet";
const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>
          Art Gallery - Harry Boone | Contemporary Abstract Paintings
        </title>
        <meta
          name="description"
          content="Browse the art gallery of Harry Boone, showcasing his contemporary abstract paintings. Explore various collections and find your favorite pieces of art."
        />
      </Helmet>
      <div
        className="SelectedEarlyWorks main-gallery top-spacing "
        id="SelectedEarlyWorks"
      >
        <div className="container">
          <h2>gallery</h2>
          <p className="middle-text">
            Click on an image to view the entire group
          </p>
          <div className="row">
            <SelectedEarlyWorks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
