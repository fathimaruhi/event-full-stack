import React from "react";
import Header from "./components/Header";
import EventDetails from "./components/Event details";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <EventDetails />
        <Schedule />
      </main>
      <Footer />
    </div>
  );
}

export default App;   