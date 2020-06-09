import React from "react";
import "./assets/styles/landing.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstBloc from "./components/FirstBloc";
import SecondBloc from "./components/SecondBloc";
import BlocThree from "./components/BlocThree";
import BlocFor from "./components/BlocFor";
import BlocFive from "./components/BlocFive";
import BlocPricing from "./components/BlocPricing";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App flex fdc aic">
      <header className="App-header flex aic jcc">
        <Header />
      </header>

      <FirstBloc />
      <SecondBloc />
      <BlocThree />
      <BlocFive />
      <BlocFor />
      <BlocPricing />
      <FAQ />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
