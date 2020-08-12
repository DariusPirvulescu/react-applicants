import React from "react";
import "./ApplicantCard.scss";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Avatar from "./Avatar";

const ApplicantCard = ({
  firstName,
  lastName,
  phone,
  email,
  status,
  date,
  time,
  ...prop
}) => {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
  return (
    <Card className="card">
      <div className="card-avatar">
        <Avatar initials={initials} />
      </div>
      <Card.Body>
        <Card.Title>
          {firstName} {lastName}
        </Card.Title>
        <Card.Text>{phone}</Card.Text>
        <Card.Text>{email}</Card.Text>
        <Badge variant="secondary">
          {status} {date} {time}
        </Badge>
      </Card.Body>
    </Card>
  );
};

// firstName="Joseph"
//         lastName="Francisk"
//         phone="+49 212 554 3232"
//         email="fr.joseph@gmail.com"
//         status="APPOINTMENT"
//         date="22 JULY"
//         time="14:00"
//         bid="false"
//         bidAmount="0"

export default ApplicantCard;
