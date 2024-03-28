import "./Mars.css";
import jsonData from "../../data.json";
import { Link } from "react-router-dom";
import link from "../../images/link.png";
import mars from "../../images/marsLast.png";
const MarsSurface = () => {
  const marsData = jsonData[3];

  return (
    <div className="container">
      <header>
        <div className="firstRow">
          <p className="planet">THE PLANETS</p>
        </div>

        <div className="planets">
          <p>
            <Link to="/" className="LinkP">
              MERCURY
            </Link>
          </p>
          <p>
            <Link to="/venus" className="LinkP">
              VENUS
            </Link>
          </p>
          <p>
            <Link to="/earth" className="LinkP">
              EARTH
            </Link>
          </p>
          <p>
            <Link to="/mars" className="LinkP">
              MARS
            </Link>
          </p>
          <p>
            <Link to="/jupiter" className="LinkP">
              JUPITER
            </Link>
          </p>
          <p>
            <Link to="/saturn" className="LinkP">
              SATURN
            </Link>
          </p>
          <p>
            <Link to="/uranus" className="LinkP">
              URANUS
            </Link>
          </p>
          <p>
            <Link to="/neptune" className="LinkP">
              NEPTUNE
            </Link>
          </p>
        </div>
      </header>

      <div className="planetDiv">
        <div className="mercury">
          <img src={mars} />
        </div>

        <div className="mercuryContent">
          <h1>{marsData.name}</h1>
          <p>{marsData.geology.content}</p>
          <p className="source">
            Source :{" "}
            <a target="_blank" href={marsData.geology.source}>
              Wikipedia
            </a>
            <img src={link}></img>
          </p>
          <div className="secondRow">
            <p>
              <Link to="/mars" className="LinkP">
                01 OVERVIEW
              </Link>
            </p>
            <p>
              <Link to="/mars-structure" className="LinkP">
                02 STRUCTURE
              </Link>
            </p>
            <p>
              <Link to="/mars-surface" className="LinkP">
                03 SURFACE
              </Link>
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="rotationTime">
          <p className="rotateText">ROTATION TIME</p>
          <p className="rotateNumb">{marsData.rotation}</p>
        </div>

        <div className="revolution">
          <p className="revolutionText">REVOLUTION TIME</p>
          <p className="revolutionNumb">{marsData.revolution}</p>
        </div>

        <div className="radius">
          <p className="radiusText">RADIUS</p>
          <p className="radiusNumb">{marsData.radius}</p>
        </div>

        <div className="temp">
          <p className="tempText">AVERAGE TEMP.</p>
          <p className="tempNumb">{marsData.temperature}</p>
        </div>
      </footer>
    </div>
  );
};

export default MarsSurface;
