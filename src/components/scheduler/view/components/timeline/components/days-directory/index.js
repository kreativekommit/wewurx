import React, { useEffect, useReducer, useRef, useState } from "react";
import CompanyInfo from "../company-info";
import Day from "../day";
import Styles from "./days-directory.module.scss";

const DaysDirectory = (props) => {
  console.log("from days directory");
  const [numberOfDays, setNumberOfDays] = useState(5);
  let firstDay = new Date();
  const [days, setDays] = useState({ 0: new Date() });
  const [dayWidth, setDayWidth] = useState("");
  const directoryRef = useRef(null);

  useEffect(() => {
    let dates = { ...days };
    for (let i = 1; i < numberOfDays; i++) {
      let date = new Date();
      date.setDate(firstDay.getDate() + i);
      dates = { ...dates, [i]: date };
    }
    setDays(dates);
  }, []);

  useEffect(() => {
    console.log(directoryRef.current.getBoundingClientRect().x);
    const directoryWidth = directoryRef.current.getBoundingClientRect().x;
    setDayWidth(directoryWidth / numberOfDays);
  }, []);

  const Days = () => {
    let jsxArray = [];
    for (let dayDate in days) {
      if (dayDate == "1") {
        jsxArray.push(
          <Day date={days[dayDate]} numOfJobTasks={1} key={dayDate} />
        );
        continue;
      }
      jsxArray.push(
        <Day date={days[dayDate]} width={dayWidth} key={dayDate} />
      );
    }
    return jsxArray;
  };

  return (
    <div className={Styles.directory} ref={directoryRef}>
      <CompanyInfo />
      <Days />
    </div>
  );
};
export default DaysDirectory;
