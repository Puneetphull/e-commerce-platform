import React from "react";
import { Link } from "react-router-dom";
import { customRoutes } from "../../routes/routes";

export function CustomerHomePage() {

  return (
    <>
      <h1>Admin Url</h1>
      <div className="d-flex flex-row justify-content-around ">

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.adminSignup.path} >Admin Register</Link>

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.adminLogin.path} >Admin Login</Link>

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.adminDetail.path} >Admin Detail</Link>

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.adminHome.path} >Admin Dashboard</Link>

        
        <Link className="btn btn-secondary" target="_blank" to="/bookappointment" >Admin Book Appointment</Link>
        <Link className="btn btn-secondary" target="_blank" to="/profileReset" >Profile Reset</Link>

      </div>
      <h1>Staff Url</h1>
      <div className="d-flex flex-row justify-content-around">
        <Link className="btn btn-secondary" to={customRoutes.staffSignup.path} >Staff Register</Link>

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.staffLogin.path} >Staff Login</Link>

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.staffDetail.path} >Staff Detail</Link>

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.adminHome.path} >Staff Dashboard</Link>
      </div>
      <h1>Customer Url</h1>
      <div className="d-flex flex-row justify-content-around">

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.userSignUp.path} >Customer Register</Link>

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.userLogin.path} >Customer Login</Link>

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.userDetail.path} >Customer Detail</Link>

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.adminHome.path} >Customer Dashboard</Link>
      </div>

      <h1>Error Pages</h1>
      <div className="d-flex flex-row justify-content-around">

        <Link className="btn btn-secondary" target="_blank" to={customRoutes.serverError.path} >500 Page</Link>
        <Link className="btn btn-secondary" target="_blank" to="/regreg" >404 Page</Link>


      </div>

    </>
  );
}
