import React, { useState } from "react";
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
import Popup from "./components/small.components/Popup";

function App() {
  const [popup, setPopup] = useState(false);
  const tooglePopup = () => {
    setPopup(!popup);
  };
  return (
    <div
      className="App flex fdc aic "
      style={{
        backgroundColor: "#F0F1F7",
      }}
    >
      <header className="App-header flex aic jcc">
        <Header tooglePopup={tooglePopup} />
      </header>
      {popup && <Popup tooglePopup={tooglePopup} />}
      <FirstBloc />
      <SecondBloc tooglePopup={tooglePopup} />
      <BlocThree tooglePopup={tooglePopup} />
      <BlocFive />
      <BlocFor />
      <BlocPricing tooglePopup={tooglePopup} />
      <FAQ tooglePopup={tooglePopup} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
