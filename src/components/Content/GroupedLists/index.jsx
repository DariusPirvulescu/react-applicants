import React, { Component } from "react";
import List from "./List";

class GroupedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {},
    };
  }

  componentDidMount() {
    const groupedApplicants = {
      Appointment_Set: [],
      Property_Viewed: [],
      Interested: [],
      Offer_Accepted: [],
    };
    this.props.data.map((a) => {
      return groupedApplicants[a.status].push(a);
    });

    this.setState({ groups: groupedApplicants });
  }

  render() {
    const { groups } = this.state;
    return (
      <div>
        {Object.entries(groups).map((list) => {
          const key = Math.floor(Math.random() * 99);

          return (
            list[1].length !== 0 && (
              <List key={key} title={list[0]} applicants={list[1]} />
            )
          );
        })}
      </div>
    );
  }
}

export default GroupedList;
