import { Link } from "react-router-dom";
import "./Earth.css";
import earth from "../../images/3.png";
import jsonData from "../../data.json";
import link from "../../images/link.png";
const Earth = () => {

const earthData = jsonData[2];

  return (
    <div className="container">
      <header>
        <div className="firstRow">
          <p className="planet">THE PLANETS</p>
        </div>

        <div className="planets">
          <p>
            <Link to="/">MERCURY</Link>
          </p>
          <p>
            <Link to="/venus">VENUS</Link>
          </p>
          <p>
            <Link to="/earth">EARTH</Link>
          </p>
          <p>
            <Link to="/mars">MARS</Link>
          </p>
          <p>
            <Link to="/jupiter">JUPITER</Link>
          </p>
          <p>
            <Link to="/saturn">SATURN</Link>
          </p>
          <p>
            <Link to="/uranus">URANUS</Link>
          </p>
          <p>
            <Link to="/neptune">NEPTUNE</Link>
          </p>
        </div>
      </header>

      <div className="planetDiv">
        <div className="mercury">
          <img src={earth} />
        </div>

        <div className="mercuryContent">
          <h1>{earthData.name}</h1>
          <p>{earthData.overview.content}</p>
          <p className="source">
            Source :{" "}
            <a target="_blank" href={earthData.overview.source}>
              Wikipedia
            </a>
            <img src={link}></img>
          </p>
        </div>

        <div className="secondRow">
          <p>01 OVERVIEW</p>
          <p>02 STRUCTURE</p>
          <p>03 SURFACE</p>
        </div>
      </div>

      <footer>
        <div className="rotationTime">
          <p className="rotateText">ROTATION TIME</p>
          <p className="rotateNumb">{earthData.rotation}</p>
        </div>

        <div className="revolution">
          <p className="revolutionText">REVOLUTION TIME</p>
          <p className="revolutionNumb">{earthData.revolution}</p>
        </div>

        <div className="radius">
          <p className="radiusText">RADIUS</p>
          <p className="radiusNumb">{earthData.radius}</p>
        </div>

        <div className="temp">
          <p className="tempText">AVERAGE TEMP.</p>
          <p className="tempNumb">{earthData.temperature}</p>
        </div>
      </footer>
    </div>
  );
}

export default Earth