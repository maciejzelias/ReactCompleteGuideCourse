import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="elo"
      title="A first meetup"
      address="Some Street 5, Some City"
      description="meetup desc"
    />
  );
}
