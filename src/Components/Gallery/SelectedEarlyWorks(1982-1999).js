import React from "react";
import { gallery } from "../Data";
import { Link } from "react-router-dom";
const SelectedEarlyWorks = () => {
  return (
    <>
      <div className="SelectedEarlyWorks top-spacing" id="SelectedEarlyWorks">
        <div className="container">
          <div className="row">
            {gallery.map((item) => {
              return (
                <div className="col-md-6 box-top-spacing">
                  <Link to={item.link}>
                    <div className="selectedImgBox leftBox">
                      <img
                        src={item.img}
                        alt={item.alt}
                        loading="lazy"
                        title={item.title}
                        className={item.className}
                      ></img>
                      <h1>{item.name}</h1>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedEarlyWorks;
