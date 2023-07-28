import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../routes/Router";
import CrewInfo from "../../components/crewInfo/CrewInfo";
import "./crew.scss";

const Crew = () => {
  // const navigate = useNavigate();
  const crews = [
    "Douglas Hurley",
    "Mark Shuttleworth",
    "Victor Glover",
    "Anousheh Ansari",
  ];
  // const { setCrewPathName } = useContext(AppContext);
  // const [crew, setCrew] = useState({});
  // const { crewName } = useParams();

  // useEffect(() => {
  //   setCrewPathName(crewName);
  //   setCrew(crewName);
  // }, [crewName]);

  // const handleCrew = (crew) => {
  //   setCrewPathName(crew);
  //   navigate(`crew/${crew}`);
  // };

  return (
    <>
      {/* {crew?.name && (
        <section className="crew">
          <h2 className="crew__subtitle">
            <span>02</span>Meet your crew
          </h2>
          <div className="crew__container">
            <img
              className="crew__image"
              src="/images/crew/image-douglas-hurley.png"
            />
            <hr />
            <div className="crew__info">
              <nav className="crew__nav">
                <ul className="crew__nav__lis">
                  {crews.map((item, index) => (
                    <li
                      key={index + 1}
                      className={`${crewName === item && "active-crew"}`}
                      onClick={() => handleCrew(item)}
                    ></li>
                  ))}
                </ul>
              </nav>
              <CrewInfo />
            </div>
          </div>
        </section>
      )} */}
       <section className="crew">
          <h2 className="crew__subtitle">
            <span>02</span>Meet your crew
          </h2>
          <div className="crew__container">
            <img
              className="crew__image"
              src="/images/crew/image-douglas-hurley.png"
            />
            <hr />
            <div className="crew__info">
              <nav className="crew__nav">
                <ul className="crew__nav__lis">
                  {crews.map((item, index) => (
                    // <li
                    //   key={index + 1}
                    //   className={`${crewName === item && "active-crew"}`}
                    //   onClick={() => handleCrew(item)}
                    // ></li>
                    <li></li>
                  ))}
                </ul>
              </nav>
              <CrewInfo />
            </div>
          </div>
        </section>
    </>
  );
};

export default Crew;
