import React from "react";
import DayHeader from "../day-header";
import Styles from "./day.module.scss";

const Day = ({ date }) => {
  console.log(date, "from date");
  return (
    <div className={Styles.day}>
      <DayHeader date={date} />
      <div className={Styles.tasks}></div>
    </div>
  );
};

export default Day;
