import MeetupList from "../components/meetups/MeetupList";

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

const HomePage = () => {
  return <MeetupList meetups={testMeetups} />;
};

export default HomePage;
