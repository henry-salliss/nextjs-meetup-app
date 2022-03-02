// domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

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
  return (
    <Fragment>
      <Head>
        <title>Add meetup</title>
        <meta name="description" content="create your own meetups here" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </Fragment>
  );
};

export default NewMeetupPage;
