import React from "react";
import List from "./List";

const GroupedList = ({ data }) => {
  return (
    <div>
      {Object.entries(data).map((list) => {
        let key = (list[0] + Math.floor(Math.random() * 99));
        console.log(key)
        return (
          list[1].length !== 0 && (
            <List key={key} title={list[0]} applicants={list[1]} />
          )
        );
      })}
    </div>
  );
};

export default GroupedList;
