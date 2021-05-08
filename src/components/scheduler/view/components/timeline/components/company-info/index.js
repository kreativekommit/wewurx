import React from "react";
import DayHeader from "../day-header";
import Styles from "./company-info.module.scss";

const CompanyInfo = (props) => {
  return (
    <div className={Styles.companyinfo}>
      <DayHeader />
    </div>
  );
};

export default CompanyInfo;
