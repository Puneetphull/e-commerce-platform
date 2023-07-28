import React, { useState } from "react";
import { Sidebar } from "../custom-components/Sidebar";
import { Navbars } from "../custom-components/Navbar";
export function PrivateRouteSideBar(props) {
  const [show, setShow] = useState(false);

  const onCollapse = () => setShow(!show);
  return (
    <>
      <Sidebar show={show} />
      <main className="content">
        <Navbars collapse={onCollapse} />
        {props.component}
      </main>
    </>
  );
}
