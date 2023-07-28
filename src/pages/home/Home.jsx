import React from "react";
import './home.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
        <span className="home__subtitle" >SO, YOU WANT TO TRAVEL TO</span>
        <h1 className="home__title">SPACE</h1>
        <p className="home__description">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <figure className="home__figure">
        <img src="images/group.png" />
      </figure>
    </section>
  );
};

export default Home;
