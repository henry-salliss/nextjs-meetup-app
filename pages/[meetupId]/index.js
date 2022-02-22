import { Fragment } from "react";
import MeetingDetail from "../../components/meetups/MeetingDetail";

const MeetingDetails = () => {
  return (
    <Fragment>
      <MeetingDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Emirates_Stadium_east_side_at_dusk.jpg/450px-Emirates_Stadium_east_side_at_dusk.jpg"
        title="test meetup"
        address="test lane, 5, test city"
      />
    </Fragment>
  );
};

export default MeetingDetails;
