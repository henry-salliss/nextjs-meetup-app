import { Fragment } from "react/cjs/react.production.min";
import MeetupList from "../components/meetups/MeetupList";
import { getMeetupCollection } from "../helpers";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Meetups website</title>
        <meta
          name="description"
          content="Create and be a part of a wide range of meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  // make http request
  const meetupsCollection = await getMeetupCollection();
  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
