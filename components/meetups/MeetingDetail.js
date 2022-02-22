import { Fragment } from "react";
import classes from "./MeetingDetail.module.css";

const MeetingDetail = (props) => {
  return (
    <Fragment>
      <section className={classes.detail}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </Fragment>
  );
};

export default MeetingDetail;
