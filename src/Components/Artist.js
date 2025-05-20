import React from "react";
import { Helmet } from "react-helmet";
import HarryBoone from "../assests/img/HarryWaltonBoone.webp";
const Artist = () => {
  return (
    <>
      <Helmet>
        <title>
          About the Artist - Harry Boone | Contemporary Abstract Painter
        </title>
        <meta
          name="description"
          content="Discover the story of Harry Boone, a contemporary abstract painter. Learn about his artistic journey, inspirations, and unique style that defines his captivating artwork."
        />
      </Helmet>
      <div id="Artist" className="top-spacing">
        <div className="container">
          <div className="row">
            <div>
              <h2>HARRY WALTON BOONE</h2>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img
                    src={HarryBoone}
                    alt="HarryBoone"
                    title="HarryBoone"
                    rel="noreferrer noopener"
                    loading="lazy"
                  ></img>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 bottom-spacing">
                  <p>
                    Harry Boone, Associate Professor Emeritus of Visual Art,
                    grew up in a family of five free-thinking, creative boys,
                    first in the foothills of southern Virginia and then, from
                    the age of four, in the Piedmont region of North Carolina.
                    The brothers were practically required to take private piano
                    and art lessons, the latter which Harry did for eight years.
                    That he developed an especially strong love of things visual
                    explains in part his destiny in art. Harry completed college
                    with a degree in philosophy intending to further study
                    ethics at the graduate level. During a gap year he weighed
                    his options, determined to identify the field of study and
                    practice most natural for him. Therefore, he sought a career
                    path that would unite his penchant for things intellectual
                    with his love of working with his hands.The problem-solving
                    involved in bringing his designs to fruition was very
                    satisfying and meaningful. Only now did it occur to him that
                    it was “permissible” for him make a life in art.
                  </p>
                </div>
              </div>
              <p className="pt-3">
                Harry reasoned that for at least a year he should move away from
                what he had always known, the South. He pursued an urban center
                that would afford him new experiences and perspectives and where
                he could investigate various directions in art. In 1979 Boone
                relocated to Boston where he took painting and architectural
                design classes at Massachusetts College of Art. Enthused by the
                rigorous and methodical approach to architectural design Harry
                applied and was accepted to architectural school. But something
                powerful and not to be dismissed happened in his painting toward
                the end of the Boston stay. He was inspired by regular visits to
                the Boston Museum of Art where he stared for what seemed like
                hours at a small, colorful Kirchner painting of a figure and at
                a small canvas by Gauguin. It was as if they were shouting out
                at Harry, “be a painter.” As was to become a life-long habit he
                trusted his inner voice and took steps toward this end.<br></br>
                <br></br>
                In January 1981 Boone began study at the University of North
                Carolina at Greensboro in its MFA program, one of the first such
                graduate programs in the South to offer the terminal degree in
                the visual arts. He studied under the Frenchman Andrew Martin
                (who attended the Ecole de Beaux Arts), Peter Agostini (a
                sculptor of international repute), Walter Barker (a protégé of
                Max Beckman), et al. He was most influenced by Martin whose work
                was steeped in Mediterranean color and the styles of French
                modernists. Also, of great import was Harry’s graduate
                assistantship as the chief assistant to the curator of the
                Weatherspoon Art Museum that holds one the most important
                collections of modern and contemporary art in the South. In
                December 1983 Boone was awarded the MFA with a major in painting
                and a minor in Art History.<br></br>
                <br></br>
                In the fall of 1984 Harry began his long career as a professor.
                He taught at several colleges and universities including
                Gallaudet University (the World’s only university for the Deaf
                and Hearing Impaired), and the nationally recognized Herron
                School of Art. In January 2023, after a fourteen-year tenure, he
                retired from Georgia Gwinnett College, a University System of
                Georgia four-year campus in metropolitan Atlanta<br></br>
                <br></br>
                Harry’s paintings have been exhibited in major art markets such
                as New York City, Philadelphia, Baltimore, Washington, DC,
                Charlotte, Atlanta, and San Franciso. His work has been accepted
                into numerous highly selective regional, national and
                international competitions juried by distinguished directors,
                curators, and administrators of museums such as the San
                Francisco Museum of Art, the Denver Museum, the Brooklyn Museum,
                Cranbrook Academy of Art, the Corcoran Museum, The New Museum
                NYC, the Virginia Museum of Art, the Warhol Museum, The Columbus
                School of Design, et al. Harry and his wife Zan, an art
                historian, live in Atlanta Proper.
              </p>
              <p className="download">
                Download Harry’s{" "}
                <a
                  href="/HarryWaltonBoone.pdf"
                  target="_blank"
                  title="HarryWaltonBoone"
                >
                  Curriculum Vitae here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
