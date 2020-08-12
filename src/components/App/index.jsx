import React from "react";
import "./App.scss";
import Top from "../Top";
import Search from "../Search";
import applicants from "../../data/applicants.json";
import ApplicantCard from "../ApplicantCard";

function App() {
  return (
    <div className="App">
      <Top />
      <Search />

      <ApplicantCard
        firstName="Joseph"
        lastName="Francisk"
        phone="+49 212 554 3232"
        email="fr.joseph@gmail.com"
        status="APPOINTMENT"
        date="22 JULY"
        time="14:00"
        bid="false"
        bidAmount="0"
      />
    </div>
  );
}

export default App;
