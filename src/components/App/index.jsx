import React from "react";
import "./App.scss";
import Top from "../Top";
import Search from "../Search";
import applicants from "../../data/applicants.json";
import ApplicantList from "./ApplicantList";

// change App component to class with ComponentDidMount() fct for loading while fetching

// done take the applicants.json sepparate them by status
const groupedApplicants = {
  Appointment_Set: [],
  Property_Viewed: [],
  interested: [],
  offerACcepted: [],
};

applicants.map((a) => {
  groupedApplicants[a.status].push(a);
  return groupedApplicants;
});

// Object.entries(groupedApplicants).map((e) => {
//   console.log(e)
// })
// console.log(Object.entries(groupedApplicants))
// // “Appointment_Set”, “Property_Viewed”, “Interested” and
// // “Offer_Accepted”

// create applicantList comp

// the applicantList takes different names for h1 title and the array of applicants

//

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
