import React from "react";
import { Helmet } from "react-helmet";
import Stetement from "../assests/img/ArtistStatemnt01.webp";
const ArtistStatement01 = () => {
  return (
    <>
      <Helmet>
        <title>Artist Statement - Harry Boone | Abstract Art Philosophy</title>
        <meta
          name="description"
          content="Read Harry Boone's artist statement to understand his philosophy and approach to contemporary abstract art. Explore the inspirations and intentions behind his creative process."
        />
      </Helmet>
      <div id="Statement" className="top-spacing">
        <div className="container">
          <div className="row">
            <div>
              {" "}
              <h2>ARTIST’S STATEMENT</h2>
              <img
                src={Stetement}
                alt="Statement"
                title="Statement"
                rel="noreferrer noopener"
                loading="lazy"
              ></img>
              <h3>Harry Walton Boone</h3>
              <p>
                My oeuvre has been steadfastly centered on nature – an expanded
                view of nature, that is. Adopting a Postmodern paradigm, I hold
                that nature contains more than just those things commonly
                associated with it (e.g., animals, landscape, water, etc.)
                Nature includes the human being as well, and all those things
                related to him/her. Rather than viewing nature as a separate
                entity to be witnessed, we invent nature and thus, ourselves.
                Put another way, I experience painting as a binary process: in
                looking through a “window” I begin to look into a mirror.
                <br></br>
                <br></br>
                In essence, what I hope my audience experiences are the various
                states-of-being that these encounters with nature reveal. In
                these paintings, I don’t render that which I see or imagine
                “realistically” but, through a process of abstraction with a
                primary focus on color, I attempt to distill those elements in
                my vision and imagination to the essential qualities that I feel
                most express myself in nature.<br></br>
                <br></br>
                One aspect of nature I have been grappling with for the past few
                years is entropy. As such, my paintings have focused on decline
                witnessed in nature and experienced in the physical human self.
                Some of these deal with the process of aging and various levels
                of limitation. Others have dealt more directly with death itself
                – these I call “Nature Mort Paintings”. For these paintings I
                have experimented with a variety of media to include gold leaf,
                chalk, collage elements in addition to oil pigment and have used
                steel and aluminum plating in some cases as supports. The
                paintings about decline and death are personal reactions to my
                own dealings with death, deterioration, and handicaps. These
                images might be somewhat disturbing for some, but they are not
                supposed to be wholly grim. Rather, I have tried to offer an
                aesthetic context for considering this subject matter in which
                something positive can be gleaned.<br></br>
                <br></br>
                Most recently I have developed work that represents a shift away
                from my focus on entropy. These images, particularly those
                dealing with human limitation, required a more intense or
                tighter manner of image making. While I have not exhausted the
                genre, I felt an overwhelming need to loosen up and return to a
                more painterly approach. Perhaps due to a fortuitous turn in
                personal circumstances I have explored coastal environs as
                subject matter (something I began many years ago) that reflects
                a more hopeful mood. For these paintings I make extensive use of
                palette knives supplemented by brushes where needed. As in all
                my paintings my intent is to distill human experience – even
                that which cannot be literally seen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistStatement01;
