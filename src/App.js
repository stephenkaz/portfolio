import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";
import "./css/App.css";

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
      </div>
    </>
  );
};

export default App;
