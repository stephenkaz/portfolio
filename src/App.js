import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";
import "./css/App.css";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <div className="container">
        <section className="one">
          <Header />
          <Hero />
        </section>
        <section className="two">
          <Work />
        </section>
        <section className="three">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;
