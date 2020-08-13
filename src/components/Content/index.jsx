import React, { Component } from "react";
import "./Content.scss";
import Top from "../Top";
import Search from "../Search";
import applicantsData from "../../data/applicants.json";
import GroupedLists from "./GroupedLists";
import Loading from "../Loading";

// implement search
// remake for web

class Content extends Component {
  constructor() {
    super();
    this.state = {
      applicants: {},
      loaded: false,
      failed: true,
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
      return groupedApplicants[a.status].push(a);
    });

    this.getData(groupedApplicants);
  }

  getData(data) {
    setTimeout(() => {
      this.setState({ applicants: data, loaded: true });
    }, 2000);
  }

  handleClick() {
    this.setState({ failed: false });
  }

  render() {
    const { applicants, loaded, failed } = this.state;
    if (failed) {
      return (
        <div className="content">
          <Top />
          <div className="failed">
            <h4>Something went wrong while loading Applicants</h4>
            <button
              className="btn btn-warning btn-lg"
              onClick={this.handleClick.bind(this)}
              type="button"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="content">
        <Top />
        <Search />
        {loaded ? <GroupedLists data={applicants} /> : <Loading />}
      </div>
    );
  }
}

export default Content;
