import "./Jupiter.css";
import jsonData from "../../data.json";
import jupiter from "../../images/5.png";
import { Link } from "react-router-dom";
import link from "../../images/link.png";
const Jupiter = () => {
    const jupiterData = jsonData[4];

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
          <img src={jupiter} />
        </div>

        <div className="mercuryContent">
          <h1>{jupiterData.name}</h1>
          <p>{jupiterData.overview.content}</p>
          <p className="source">
            Source :{" "}
            <a target="_blank" href={jupiterData.overview.source}>
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
          <p className="rotateNumb">{jupiterData.rotation}</p>
        </div>

        <div className="revolution">
          <p className="revolutionText">REVOLUTION TIME</p>
          <p className="revolutionNumb">{jupiterData.revolution}</p>
        </div>

        <div className="radius">
          <p className="radiusText">RADIUS</p>
          <p className="radiusNumb">{jupiterData.radius}</p>
        </div>

        <div className="temp">
          <p className="tempText">AVERAGE TEMP.</p>
          <p className="tempNumb">{jupiterData.temperature}</p>
        </div>
      </footer>
    </div>
  );
}

export default Jupiter