// domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetup = (meetupInfo) => {
    console.log(meetupInfo);
  };
  return <NewMeetupForm onAddMeetup={addMeetup} />;
};

export default NewMeetupPage;
