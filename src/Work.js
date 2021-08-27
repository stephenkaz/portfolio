import "./css/Work.css";
import workJson from "./api/workData";

const Work = () => {
  return (
    <>
      <h1>Work</h1>
      <div className="work__container">
        {workJson?.map(({ img, title, alt, href }) => {
          return (
            <div className="example">
              <img src={img} alt={alt} />

              <p>
                <a href={href}>{title}</a>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Work;
