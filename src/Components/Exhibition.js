import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from "../assests/img/HarryBoone.webp";
import exhibitionimg2 from "../assests/img/GelleryImg/coastal-places-and-things/The Conversation in Teal, 2025, acrylic and oil on wood panel.webp";
const Exhibition = () => {
    return (
        <>
            <div id='exhibition'>
                <div className='container'>
                    {/* exhibition-banner start */}
                    <div className='row exhibition-banner'>
                        <h2>FROM ENTROPY TO RENEWAL: HARRY BOONE</h2>
                        <img
                            src={HomePage}
                            alt="HomePage"
                            rel="noreferrer noopener"
                            title="HomePage"
                        ></img>
                    </div>
                    {/* exhibition-banner end */}
                    {/* -------------------- */}
                    {/* exhibition-second start */}
                    <div className='row exhibition-second'>
                        <div className='col-md-12 col-lg-6 exhibition-second-img'>
                            <img src={exhibitionimg2} alt='exhibitionimg2' title='exhibitionimg2'></img>
                            <p>The Conversation in Teal, 2025, acrylic and oil on wood panel, 45” x 48”</p>
                        </div>
                        <div className='col-md-12 col-lg-6 exhibition-second-text'>
                            <h4>ON VIEW IN THE MAIN GALLERY AT GHIA <span>APRIL 25 - JUNE 6</span></h4>
                            <h4><span>APRIL 25, 5-7PM:</span> OPENING RECEPTION, FREE TO THE PUBLIC </h4>
                            <p> An exhibition of works by artist Harry Boone in the Main Gallery at the Gertrude Herbert Institute of Art, Augusta, GA.</p>
                            <p>Work will be on view April 25 - June 6, 2025.</p>
                            <div className='about-the-show'>
                                <h2>ABOUT THE SHOW</h2>
                                <p>The collection of work featured in focuses on subjects that may at first seem very different, but are in fact related by themes of decline, limitation, regeneration and revival. The work is sourced from two of Boone's series - beach scenes from his Coastal Places and Things series to represent renewal, and stark images of mourning and death in his Entropy, Limitation, and Death series.</p>
                            </div>
                        </div>
                    </div>
                    {/* exhibition-second end */}
                    {/* ----------------------- */}
                    {/* about the artist start */}
                    <div className='about-the-artist'>
                        <h2>ABOUT THE ARTIST</h2>
                        <p>Artist Harry Boone, Associate Professor Emeritus of Visual Art at Georgia Gwinnett College, paints contemporary works that explore definitions of nature, humanity, and their relationship.</p>
                        <Link to="/about-the-artist">READ MORE</Link>
                    </div>
                    {/* about the artist end */}
                    {/* ----------------------- */}
                </div>

            </div>
        </>
    )
}

export default Exhibition
