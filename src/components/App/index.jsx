import React, { Component } from "react";
import "./App.scss";
import Top from "../Top";
import Search from "../Search";
import applicantsData from "../../data/applicants.json";
import GroupedLists from "./GroupedLists";
import Loading from "../Loading";

// error message if the request failed to load
// implement search
// remake for web
// Done add bid badge to card

class App extends Component {
  constructor() {
    super();
    this.state = {
      applicants: {},
      loaded: false,
    };
  }

  componentDidMount() {
    const groupedApplicants = {
      Appointment_Set: [],
      Property_Viewed: [],
      Interested: [],
      Offer_Accepted: [],
    };

    applicantsData.map((a) => {
      groupedApplicants[a.status].push(a);
    });

    this.getData(groupedApplicants);
  }

  getData(data) {
    setTimeout(() => {
      this.setState({ applicants: data, loaded: true });
    }, 2000);
  }

  render() {
    const { applicants, loaded } = this.state;

    return (
      <div className="App">
        <Top />
        <Search />
        {loaded ? <GroupedLists data={applicants} /> : <Loading />}
      </div>
    );
  }
}

export default App;
