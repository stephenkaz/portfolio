import "./css/Work.css";
import airbnbPreview from "./img/airbnb.png";
import loopstudiosPreview from "./img/loopstudios-preview.PNG";
import lorukiPreview from "./img/Loruki-preview.PNG";
import statsPreview from "./img/stats-preview.PNG";

const Work = () => {
  return (
    <>
      <h1>Work</h1>

      <div className="work__container">
        <div className="example__1">
          <div className="iframe__container">
            <img src={airbnbPreview} alt="Airbnb" />
          </div>

          <p>
            <a href="https://airbnb-clone-stephenkaz.vercel.app/">
              Airbnb Clone
            </a>
          </p>
        </div>
        <div className="example__2">
          <div className="iframe__container">
            <img src={loopstudiosPreview} alt="Loopstudios" />
          </div>

          <p>
            <a href="https://loopstudios-landing-page-stephenkaz.vercel.app/">
              Loopstudios
            </a>
          </p>
        </div>
        <div className="example__3">
          <div className="iframe__container">
            <img src={statsPreview} alt="Stats-Preview" />
          </div>

          <p>
            <a href="https://stats-preview-stephenkaz.vercel.app/">
              Stats-Preview
            </a>
          </p>
        </div>
        <div className="example__4">
          <div className="iframe__container">
            <img src={lorukiPreview} alt="Loruki" />
          </div>

          <p>
            <a href="https://loruki-stephenkaz.vercel.app/">Loruki</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
