import React, { Component } from "react";
import "./Content.scss";
import Top from "../Top";
import Search from "../Search";
import applicantsData from "../../data/applicants.json";
import GroupedLists from "./GroupedLists";
import Loading from "../Loading";

// implement search
// // search for multiple fields
// // search updates URL
// // get search query from URL 
// remake for web

class Content extends Component {
  constructor() {
    super();
    this.state = {
      applicants: applicantsData,
      loaded: true,
      failed: false,
      search: ""
    };
  }

  // componentDidMount() {

  // }

  // getData(data) {
  //   setTimeout(() => {
  //     this.setState({ applicants: data, loaded: true });
  //   }, 2000);
  // }

  handleClick() {
    this.setState({ failed: false });
  }

  handleChange(e) {
    console.log(e.target.value);
    const { value } = e.target;
    this.setState({ search: value });
  }

  render() {
    const { applicants, loaded, failed, search } = this.state;

    // console.log(applicants)

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
        <Search value={search} change={this.handleChange.bind(this)} />
        {loaded ? <GroupedLists data={applicants} /> : <Loading />}
      </div>
    );
  }
}

export default Content;
