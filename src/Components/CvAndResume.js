import React from "react";
import pdf from "../assests/img/pdf.webp";
const CvAndResume = () => {
  return (
    <>
      <div className="container">
        <div className="row cv-resume">
          <div className="col-md-6 cv-resume-inner left">
            <div className="inner-box">
              <a
                href="/HarryWaltonBoone_CV.pdf"
                target="_blank"
                title="HarryWaltonBoone_CV"
              >
                <img src={pdf} alt="pdf" title="pdf"></img>
              </a>
              <a
                href="/HarryWaltonBoone_CV.pdf"
                target="_blank"
                title="HarryWaltonBoone_CV"
              >
                <h2>Curriculum Vitae (CV)</h2>
              </a>
              <p className="middle-text">
                <b>Download Harry's Full CV – </b> A detailed document
                chronicling Harry’s complete artistic career, including
                exhibitions, residencies, publications, awards, and education.
                Best suited for curators, academic reviewers, and arts
                organizations requiring an in-depth record of his work.
              </p>
            </div>
          </div>
          <div className="col-md-6 cv-resume-inner right">
            <div className="inner-box">
              <a
                href="/HarryWaltonBoone_Resume.pdf"
                target="_blank"
                title="HarryWaltonBooneResume"
              >
                <img src={pdf} alt="pdf" title="pdf"></img>
              </a>
              <a
                href="/HarryWaltonBoone_Resume.pdf"
                target="_blank"
                title="HarryWaltonBooneResume"
              >
                <h2>Resume</h2>
              </a>
              <p className="middle-text">
                <b> Download Harry's Resume –</b> A concise overview of Harry’s
                artistic journey, highlighting key exhibitions, collaborations,
                and accomplishments. Ideal for galleries, collectors, and art
                institutions seeking a quick snapshot of his professional
                profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvAndResume;
