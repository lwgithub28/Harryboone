import React from "react";
import { Helmet } from "react-helmet";
import HomePage from "../assests/img/HarryBoone.webp";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Harry Boone | Painter | Contemporary Artist</title>
        <meta
          name="description"
          content="Welcome to the official website of Harry Boone. Discover his contemporary abstract paintings, read about his journey, and explore his diverse art collections."
        />
      </Helmet>
      <div id="Home" className="top-spacing">
        <div className="container">
          <div className="row">
            <div className="home">
              <img
                src={HomePage}
                alt="HomePage"
                rel="noreferrer noopener"
                title="HomePage"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
