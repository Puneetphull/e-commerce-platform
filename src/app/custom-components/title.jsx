import React from "react";
import {Helmet} from "react-helmet";

export function Title(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
  );
}
