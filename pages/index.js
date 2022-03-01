import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const testMeetups = [
  {
    id: "m1",
    title: "Coding meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Emirates_Stadium_east_side_at_dusk.jpg/450px-Emirates_Stadium_east_side_at_dusk.jpg",
    address: "London UK",
    description: "A meetup for junior web developers to network with eachother",
  },
  {
    id: "m2",
    title: "Gaming meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "New York USA",
    description: "A meetup for gamers to play together and discuss games",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // make http request

  const client = await MongoClient.connect(
    "mongodb+srv://testuser:ZQrhMKk9y41MNwTt@cluster0.oyawi.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  // get database and collection of data from database
  const database = client.db();
  const meetupsCollection = database.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
