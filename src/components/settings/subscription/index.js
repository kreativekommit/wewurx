import React, { useState } from "react";
import AddONs from "./components/addons";
import Package from "./components/package";
import TotalPrice from "./components/totalprice";
import Users from "./components/users";
import Styles from "./subscription.module.scss";

const Subscription = (props) => {
  return (
    <div className={Styles.subscription}>
      <h2 className={Styles.subscription__heading}>Your Wewurx subscription</h2>
      <Package initialValues={{ packageValue: "ultimate" }} />
      <Users initialValues={{ numberOfUsers: 1 }} />
      <AddONs />
      <TotalPrice />
      <footer className={Styles.subscription__footer}>
        <div className={Styles.subscription__footer__terms}>
          <p>
            See{" "}
            <a href='#' className={Styles.subscription__footer__terms__link}>
              Terms & Conditions
            </a>{" "}
            for more details
          </p>
          <a href='#' className={Styles.subscription__footer__viewinvoice}>
            View your invoice
          </a>
          <br />
          <a href='#' className={Styles.subscription__footer__carddetails}>
            Update card details
          </a>
          <br />
          <a
            href='#'
            className={Styles.subscription__footer__cancelsubscription}
          >
            Cancel subscription
          </a>
        </div>
        <div className={Styles.subscription__activate}>
          <button>Activate</button>
        </div>
      </footer>
    </div>
  );
};

export default Subscription;
