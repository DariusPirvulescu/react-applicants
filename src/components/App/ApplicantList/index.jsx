import React from "react";
import "./ApplicantList.scss";
import ApplicantCard from "../../ApplicantCard";

const ApplicantList = ({ title, applicants }) => {
  //   Appointment_Set”, “Property_Viewed”, “Interested” and
  // “Offer_Accepted”
  return (
    <div className="applicant-list">
      <h1>
        {title.replace("_", " ")} ({applicants.length})
      </h1>
      <div className="horizontal-scroll">
        {applicants.map((applicant) => {
          return (
            <ApplicantCard
              className="card"
              key={applicant.id}
              firstName={applicant.firstName}
              lastName={applicant.lastName}
              phone={applicant.phone}
              email={applicant.email}
              status={applicant.status}
              date={applicant.date}
              time={applicant.time}
              bid={applicant.bid}
              bidAmount={applicant.bidAmount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ApplicantList;
