import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
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
