import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Home from './Home';
import Gallery from "./Gallery/Gallery"
import Artist from './Artist';
import ArtistStatement01 from './Statement01';
import Press from "./Press";
import Contact from "./Contact";
import Footer from './Footer';
import SelectedEarlyWorks from './Gallery/SelectedEarlyWorks(1982-1999)';
import InteriorsAndStillLifes from "./Gallery/InnerPage/InteriorsAndStillLifes";
import NatureHumansAnimalsAndElements from "./Gallery/InnerPage/NatureHumansAnimalsAndElements";
import CoastalPlacesAndThings from "./Gallery/InnerPage/CoastalPlacesAndThingscopy";
import CoastalPlacesAndThingsNew from "./Gallery/InnerPage/CoastalPlacesAndThingsNew";
import CoastalPlacesAndThingsCopy from "./Gallery/InnerPage/CoastalPlacesAndThings";
import EntropyLimitationAndDeath from "./Gallery/InnerPage/EntropyLimitationAndDeath";
import Playground from "./Gallery/InnerPage/Playgrounds";
import TermsConditions from './TermsConditions';
import NoPage from './NoPage';
const BrowserRouterApp = () => {
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
                <Route path="gallery/interiors-and-still-lifes" element={<InteriorsAndStillLifes />} />
                <Route path="gallery/nature-humans-animals-and-elements" element={<NatureHumansAnimalsAndElements />} />
                <Route path="gallery/coastal-places-and-things-copy" element={<CoastalPlacesAndThings />} />
                <Route path="gallery/coastal-places-and-things-new" element={<CoastalPlacesAndThingsNew />} />
                <Route path="gallery/coastal-places-and-things" element={<CoastalPlacesAndThingsCopy />} />
                <Route path="gallery/limitation-and-death" element={<EntropyLimitationAndDeath />} />
                <Route path="gallery/playgrounds" element={<Playground />} />
                <Route path="contact" element={<Contact />} />
                <Route path="terms-conditions" element={<TermsConditions />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default BrowserRouterApp
