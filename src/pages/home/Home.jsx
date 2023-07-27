import React from "react";
import './home.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
        <span>SO, YOU WANT TO TRAVEL TO</span>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <figure className="home__figure">
        <img src="images/group.png" />
      </figure>
      {/* <div className="home__btn">
        <span>EXPLORE</span>
      </div> */}
    </section>
  );
};

export default Home;
