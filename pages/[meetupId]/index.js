import { Fragment } from "react";
import MeetingDetail from "../../components/meetups/MeetingDetail";

const MeetingDetails = (props) => {
  const data = props.meetupData;
  return (
    <Fragment>
      <MeetingDetail
        image={data.image}
        id={data.id}
        address={data.address}
        title={data.title}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  // make request to backend for all possible ids

  return {
    fallback: false,

    paths: [
      {
        params: {
          meetupId: "m1", // not hard coded use id from backend
        },
      },
      {
        params: {
          meetupId: "m2", // not hard coded use id from backend
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const params = context.params;
  console.log(params);

  // http request

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Emirates_Stadium_east_side_at_dusk.jpg/450px-Emirates_Stadium_east_side_at_dusk.jpg",
        id: params.meetupId,
        title: "test meetup",
        address: "test lane, 5, test city",
      },
    },
  };
};

export default MeetingDetails;
