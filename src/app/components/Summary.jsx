
import React from "react";

export function Summary(props) {
  return (
    <>
      <main>
        <div className="row">
          <div className="col-12">
            <div className="shadow mb-4 card border-0">
              <div className="card-body">
                <h3 className="mb-4">Summary</h3>
                
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <div id="firstName">
                        <label className="form-label">First Name</label>
                        <p>Puneet</p>
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <div id="lastName" />
                      <label className="form-label">Last Name</label>
                      <p>Phull</p>
                    </div>
                  </div>
                  <div className="align-items-center row">
                    <div className="mb-3 col-md-6">
                      <div id="problem">
                        <label className="form-label">Problem</label>
                        <p>problem</p>
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <div id="gender">
                        <label className="form-label">Appointment Date</label>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <div id="email">
                        <label className="form-label">Doctor Name</label>
                        <p>Doctor 1</p>
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <div id="phone">
                        <label className="form-label">Phone</label>
                        <p>+1( 456)-7896-123 </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <div id="email">
                        <label className="form-label">Location</label>
                        <p>USA</p>
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <div id="phone">
                        <label className="form-label">Appointment Type</label>
                        <p>ASAP</p>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
