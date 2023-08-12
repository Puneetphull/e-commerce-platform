import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ThankYouPage = () => {
  return (
    <section className="thankyouPage full-height">
        <div className="thankyou-wrapper">
            <div className="p-5 text-center">
                <div className="success-icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                <div className="heading-text my-3">Thank You for your purchase.</div>
                <div className="transaction-id mb-4">Transaction/Order ID #1234567890</div>
                <div className="compliment-text mb-4">Thanks for Being Awesome, We hope you enjoy your purchase.</div>
                <div>If you have and questions or concerns regarding this, do not hesitate to contact us at <a href="mailto:testuser@yopmail.com">testuser@yopmail.com</a></div>
            </div>
        </div>
    </section>
  );
};
