import React, { useEffect, useState } from "react";
import { getDayName, getMonthName } from "../../../../../../../helpers";
import Styles from "./days-directory.module.scss";

const DaysDirectory = (props) => {
  const [numberOfDays, setNumberOfDays] = useState(10);
  let firstDay = new Date();
  const [days, setDays] = useState({ 0: new Date() });
  useEffect(() => {
    console.log("from useEffect");
    let dates = { ...days };
    for (let i = 1; i < numberOfDays; i++) {
      let date = new Date();
      date.setDate(firstDay.getDate() + i);
      dates = { ...dates, [i]: date };
    }
    setDays(dates);
  }, []);

  const renderDates = () => {
    let jsxArray = [];
    for (let day in days) {
      const dayInNumbers = days[day].getDate();
      const fullDay = getDayName(days[day]);
      const fullMonth = getMonthName(days[day]);
      jsxArray.push(
        <div>
          {fullDay} , {dayInNumbers} {fullMonth}
        </div>
      );
    }

    return jsxArray;
  };
  return (
    <table>
      <tbody>
        <tr>
          <td>{renderDates()}</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
};
export default DaysDirectory;
