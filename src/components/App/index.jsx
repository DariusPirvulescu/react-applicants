import React from "react";
import "./App.scss";
import Top from "../Top";
import Search from "../Search";
import applicants from "../../data/applicants.json";
import ApplicantList from "./ApplicantList";

// change App component to class with ComponentDidMount() fct for loading while fetching
// error message if the request failed to load 
// implement search
// remake for web
// add bid badge to card
// 
const groupedApplicants = {
  Appointment_Set: [],
  Property_Viewed: [],
  Interested: [],
  Offer_Accepted: [],
};

applicants.map((a) => {
  groupedApplicants[a.status].push(a);
  return groupedApplicants;
});

function App() {
  return (
    <div className="App">
      <Top />
      <Search />
      {Object.entries(groupedApplicants).map((e) => {
        return (
          e[1].length !== 0 && <ApplicantList title={e[0]} applicants={e[1]} />
        );
      })}
    </div>
  );
}

export default App;
