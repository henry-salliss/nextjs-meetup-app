// domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetup = async (meetupInfo) => {
    console.log(meetupInfo);
    const request = await fetch("./api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupInfo),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(request);
    const data = await request.json();

    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={addMeetup} />;
};

export default NewMeetupPage;
