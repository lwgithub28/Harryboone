import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import img1 from "../assests/img/HarryBoone.webp";
const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const images = [
    {
      src: "https://unsplash.it/200.jpg?image=250",
      title: "Image first",
      className: "first-img bigimg",
    },
    {
      src: "https://unsplash.it/200.jpg?image=251",
      title: "Image 2nd",
      className: "img2 smallimg",
    },
    {
      src: "https://unsplash.it/200.jpg?image=252",
      title: "Image 3rd",
      className: "first-img bigimg",
    },
    {
      src: "https://unsplash.it/200.jpg?image=253",
      title: "Image 4th",
      className: "first-img bigimg",
    },
    { src: [img1], title: "Image 5th", className: "2nd-img bigimgsecond " },
    {
      src: "https://unsplash.it/200.jpg?image=255",
      title: "Image 5th",
      className: "first-img bigimg",
    },
    {
      src: "https://unsplash.it/200.jpg?image=256",
      title: "Image 5th",
      className: "first-img bigimg",
    },
    {
      src: "https://unsplash.it/200.jpg?image=257",
      title: "Image 5th",
      className: "2nd-img smallimg",
    },
    {
      src: "https://unsplash.it/200.jpg?image=258",
      title: "Image 5th",
      className: "first-img bigimg",
    },
    {
      src: "https://unsplash.it/200.jpg?image=259",
      title: "Image 5th",
      className: "first-img bigimg",
    },
    {
      src: "https://unsplash.it/200.jpg?image=260",
      title: "Image 5th",
      className: "2nd-img bigimgsecond ",
    },
    {
      src: "https://unsplash.it/200.jpg?image=261",
      title: "Image 5th",
      className: "first-img bigimg",
    },
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setTimeout(() => {
      setCurrentImage(null);
      setModalOpen(false);
      document.body.style.overflow = "auto";
    }, 300);
  };

  const goToNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeLightbox();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        goToNextImage();
      } else if (event.key === "ArrowLeft") {
        goToPrevImage();
      }
    };

    if (modalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <div className="container py-5">
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4" key={index}>
            <a
              href="#"
              className="col-sm-3"
              onClick={(e) => {
                e.preventDefault();
                openLightbox(index);
                console.log(index, "index---------->");
              }}
            >
              <div className="image-container">
                <img
                  src={image.src}
                  className={image.className}
                  alt={image.title}
                  title={image.title}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
            </a>
          </div>
        ))}
      </div>

      {currentImage !== null && (
        <div
          className={`modal fade show ${modalOpen ? "d-block" : ""}`}
          id="exampleLightbox"
          tabIndex="-1"
          aria-labelledby="exampleLightboxLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" ref={modalRef}>
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeLightbox}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div id="lightboxExampleCarousel" className="carousel slide">
                  <div className="carousel-inner">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item text-center ${
                          currentImage === index ? "active" : ""
                        }`}
                      >
                        <img
                          src={image.src}
                          className="img-fluid"
                          alt={image.title}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#lightboxExampleCarousel"
                    data-bs-slide="prev"
                    onClick={goToPrevImage}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#lightboxExampleCarousel"
                    data-bs-slide="next"
                    onClick={goToNextImage}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="caption-container">
                  <p>{images[currentImage].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalOpen && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default ImageGallery;
