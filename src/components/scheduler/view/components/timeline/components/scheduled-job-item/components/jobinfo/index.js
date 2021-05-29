import React from "react";
import Styles from "./jobinfo.module.scss";

const JobInfo = ({ date }) => {
  return (
    <div className={Styles.jobinfo}>
      <span
        className={Styles.jobinfo__status}
        style={{ backgroundColor: `var(--color-travelling)` }}
      ></span>
      <span className={Styles.jobinfo__number}>2</span>
      <span className={Styles.jobinfo__name}>second job name</span>
      <div className={Styles.jobinfo__time}>
        <span className={Styles.jobinfo__time__start}>
          {date.toISOString().slice(11, 16)}
        </span>
        <span>-</span>
        <span className={Styles.jobinfo__time__end}>00:00</span>
      </div>
    </div>
  );
};

export default JobInfo;
