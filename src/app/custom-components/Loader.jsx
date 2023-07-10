import { Image } from "@themesberg/react-bootstrap";
import React from "react";
import companyLogo from "../assets/Logo/favicon-16x16.png";
export function Loader(props) {
  return (
    <>
      {props.loading ? (
        <div className="loader-container">
          <Image src={companyLogo} className="loader-img" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
