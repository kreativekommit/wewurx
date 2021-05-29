import React, { useEffect, useState } from "react";
import DayHeader from "../day-header";
import ScheduledJobItem from "../scheduled-job-item";
import Styles from "./day.module.scss";

const Day = ({ date, numOfJobTasks }) => {
  // each day should subscribe for the data store and get the scheduled jobs and render it!
  const [tasks, setTasks] = useState([{ taskDate: new Date() }]);
  const newDate = new Date();
  const date2 = new Date();
  let firstDay = new Date();
  useEffect(() => {
    let dates = [...tasks];
    for (let i = 1; i < 5; i++) {
      let date = new Date();
      date.setDate(firstDay.getDate() + i);
      date.setHours(i);
      dates = [...dates, { taskDate: date }];
    }
    setTasks(dates);
  }, []);
  const renderJobtask = () => {
    // start of the copied code

    // end of the copied code

    return tasks.map(({ taskDate }) => {
      const taskDay = taskDate.getDay();
      const taskMonth = taskDate.getMonth();
      const taskYear = taskDate.getFullYear();

      const dayDay = date.getDay();
      const dayMonth = date.getMonth();
      const dayYear = date.getFullYear();

      if (taskDay == dayDay && taskMonth == dayMonth && taskYear == taskYear)
        return <ScheduledJobItem date={taskDate} />;
    });
    for (let i = 0; i < numOfJobTasks; i++) {
      tasks.push(<ScheduledJobItem />);
    }
  };
  return (
    <div className={Styles.day}>
      <DayHeader date={date} />
      <div className={Styles.day__tasks}>{renderJobtask()}</div>
    </div>
  );
};

export default Day;
