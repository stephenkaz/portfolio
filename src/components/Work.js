import "../css/Work.css";

const Work = () => {
  return (
    <div id="work">
      <h1>Work</h1>

      <div className="work__container">
        <div className="example__1">
          <div className="iframe__container">
            <iframe
              src="https://airbnb-clone-stephenkaz.vercel.app/"
              title="Airbnb"
              frameBorder="0"
            ></iframe>
          </div>

          <p>
            <a href="https://airbnb-clone-stephenkaz.vercel.app/">
              Airbnb Clone
            </a>
          </p>
        </div>
        <div className="example__2">
          <div className="iframe__container">
            <iframe
              src="https://loopstudios-landing-page-stephenkaz.vercel.app/"
              title="Loopstudios"
              frameBorder="0"
            ></iframe>
          </div>

          <p>
            <a href="https://loopstudios-landing-page-stephenkaz.vercel.app/">
              Loopstudios
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
