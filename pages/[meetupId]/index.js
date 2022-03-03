import { Fragment } from "react";
import MeetingDetail from "../../components/meetups/MeetingDetail";
import { getMeetupCollection } from "../../helpers";
import { ObjectId } from "mongodb";
import Head from "next/head";

const MeetingDetails = (props) => {
  console.log(props);
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetingDetail
        image={props.meetupData.image}
        id={props.meetupData.id}
        address={props.meetupData.address}
        title={props.meetupData.title}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  // make request to backend for all possible ids
  const meetupsCollection = await getMeetupCollection();
  const meetups = await meetupsCollection.find().toArray();

  return {
    fallback: "blocking",

    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const params = context.params;
  const meetupId = params.meetupId;

  // http request
  const meetupsCollection = await getMeetupCollection();
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        title: selectedMeetup.title,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetingDetails;
