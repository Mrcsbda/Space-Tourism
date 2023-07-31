import React, { useContext } from "react";
import './home.scss';
import { Link } from "react-router-dom";
import { AppContext } from "../../routes/Router";

const Home = () => {
  const { destinationPathName } = useContext(AppContext)
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
      <Link to={`/destination/${destinationPathName}`}>
        <figure className="home__figure">
          <img src="images/group.png" />
        </figure>
      </Link>
    </section>
  );
};

export default Home;
