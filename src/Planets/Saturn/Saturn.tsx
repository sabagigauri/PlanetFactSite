import "./Saturn.css";
import jsonData from "../../data.json";
import { Link } from "react-router-dom";
import saturn from "../../images/6.svg";
import link from "../../images/link.png";


const Saturn = () => {
    const saturnData = jsonData[5];

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
          <img src={saturn} />
        </div>

        <div className="mercuryContent">
          <h1>{saturnData.name}</h1>
          <p>{saturnData.overview.content}</p>
          <p className="source">
            Source :{" "}
            <a target="_blank" href={saturnData.overview.source}>
              Wikipedia
            </a>
            <img src={link}></img>
          </p>
          <div className="secondRow">
            <p>
              <Link to="/saturn" className="LinkP">
                01 OVERVIEW
              </Link>
            </p>
            <p>
              <Link to="/saturn-structure" className="LinkP">
                02 STRUCTURE
              </Link>
            </p>
            <p>
              <Link to="/saturn-surface" className="LinkP">
                03 SURFACE
              </Link>
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="rotationTime">
          <p className="rotateText">ROTATION TIME</p>
          <p className="rotateNumb">{saturnData.rotation}</p>
        </div>

        <div className="revolution">
          <p className="revolutionText">REVOLUTION TIME</p>
          <p className="revolutionNumb">{saturnData.revolution}</p>
        </div>

        <div className="radius">
          <p className="radiusText">RADIUS</p>
          <p className="radiusNumb">{saturnData.radius}</p>
        </div>

        <div className="temp">
          <p className="tempText">AVERAGE TEMP.</p>
          <p className="tempNumb">{saturnData.temperature}</p>
        </div>
      </footer>
    </div>
  );
}

export default Saturn