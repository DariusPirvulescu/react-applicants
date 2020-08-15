import React, { Component } from "react";
import "./Content.scss";
import { pick } from "lodash";
import Top from "../Top";
import Search from "../Search";
import applicantsData from "../../data/applicants.json";
import GroupedLists from "./GroupedLists";
import Loading from "../Loading";

// implement search
// // done search for multiple fields
// // search updates URL
// // get search query from URL
// remake for web

class Content extends Component {
  static groupApplicants(applicantsResponse) {
    const groupedApplicants = {
      Appointment_Set: [],
      Property_Viewed: [],
      Interested: [],
      Offer_Accepted: [],
    };
    applicantsResponse.map((a) => {
      return groupedApplicants[a.status].push(a);
    });

    return groupedApplicants;
  }

  constructor() {
    super();
    this.state = {
      applicants: applicantsData,
      loaded: false,
      failed: false,
      search: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { applicants } = this.state;

    setTimeout(() => {
      this.setState({ applicants: applicantsData, loaded: true });
    }, 2000);
    this.constructor.groupApplicants(applicants);
  }

  handleClick() {
    this.setState({ failed: false });
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ search: value });
  }

  render() {
    const { applicants, loaded, failed, search } = this.state;

    let groups;

    if (search === "") groups = this.constructor.groupApplicants(applicants);
    else {
      const filtered = applicants.filter((obj) => {
        const fields = pick(obj, ["firstName", "lastName", "email"]);
        return Object.keys(fields).some((key) => {
          return obj[key].match(new RegExp(search, "i"));
        });
      });

      groups = this.constructor.groupApplicants(filtered);
    }

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
        <Search value={search} change={this.handleChange} />
        {loaded ? <GroupedLists data={groups} /> : <Loading />}
      </div>
    );
  }
}

export default Content;
