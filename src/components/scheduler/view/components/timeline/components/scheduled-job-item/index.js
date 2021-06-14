import React from "react";
import CustomerInfo from "./components/customerinfo";
import JobInfo from "./components/jobinfo";
import Styles from "./scheduled-job-item.module.scss";

const ScheduledJobItem = ({ date }) => {
  const renderEllipsis = () => {
    const ellipsisJsx = [];
    for (let i = 0; i < 3; i++) {
      ellipsisJsx.push(<i className=' fa fa-ellipsis-v ' key={i}></i>);
    }
    return ellipsisJsx;
  };

  return (
    <div className={Styles.job}>
      <div className={`${Styles.job__resizeStart} ${Styles.job__resize}`}>
        {renderEllipsis()}
      </div>
      <div className={Styles.job__main}>
        <JobInfo date={date} />
        <CustomerInfo />
      </div>
      <div className={`${Styles.job__resizeEnd} ${Styles.job__resize}`}>
        {renderEllipsis()}
      </div>
    </div>
  );
};

export default ScheduledJobItem;
