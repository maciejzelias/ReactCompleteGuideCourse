import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const addMeetupHandler = () => {};
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
