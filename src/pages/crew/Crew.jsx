import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../routes/Router";
import CrewInfo from "../../components/crewInfo/CrewInfo";
import "./crew.scss";
import { filterCrew } from "../../services/crew";

const Crew = () => {
  const navigate = useNavigate();
  const crews = [
    "Douglas Hurley",
    "Mark Shuttleworth",
    "Victor Glover",
    "Anousheh Ansari",
  ];
  const { setCrewPathName } = useContext(AppContext);
  const [crew, setCrew] = useState({});
  const { crewName } = useParams();

  useEffect(() => {
    setCrewPathName(crewName);
    setCrew(filterCrew(separePathName()));

  }, [crewName]);

  const separePathName = () => {
    return crewName.replace('-', ' ')
  }

  const handleCrew = (crew) => {
    setCrewPathName(crew);
    navigate(`/crew/${crew.replace(' ', '-')}`);
  };

  return (
    <>
       {crew?.name && (
        <section className="crew">
          <h2 className="crew__subtitle">
            <span>02</span>MEET YOUR CREW
          </h2>
          <div className="crew__container">
            <img
              className="crew__image"
              src={crew.images.png}
            />
            <hr />
            <div className="crew__info">
              <nav className="crew__nav">

                  {crews.map((item, index) => (
                    <div
                      key={index + 1}
                      className={`crew__nav--item ${crew.name === item ? "active-crew" : "" }`}
                      onClick={() => handleCrew(item)}
                    ></div>
                  ))}

              </nav>
              <CrewInfo crew={crew}/>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Crew;
