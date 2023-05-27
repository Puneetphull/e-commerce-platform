
import React from "react";

export function Summary(props) {
  return (
    <>
      <main>
        <div class="row">
          <div class="col-12">
            <div class="shadow mb-4 card border-0">
              <div class="card-body">
                <h3 class="mb-4">Summary</h3>
                
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <div id="firstName">
                        <label class="form-label">First Name</label>
                        <p>Puneet</p>
                      </div>
                    </div>
                    <div class="mb-3 col-md-6">
                      <div id="lastName" />
                      <label class="form-label">Last Name</label>
                      <p>Phull</p>
                    </div>
                  </div>
                  <div class="align-items-center row">
                    <div class="mb-3 col-md-6">
                      <div id="problem">
                        <label class="form-label">Problem</label>
                        <p>problem</p>
                      </div>
                    </div>
                    <div class="mb-3 col-md-6">
                      <div id="gender">
                        <label class="form-label">Appointment Date</label>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <div id="email">
                        <label class="form-label">Doctor Name</label>
                        <p>Doctor 1</p>
                      </div>
                    </div>
                    <div class="mb-3 col-md-6">
                      <div id="phone">
                        <label class="form-label">Phone</label>
                        <p>+1( 456)-7896-123 </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <div id="email">
                        <label class="form-label">Location</label>
                        <p>USA</p>
                      </div>
                    </div>
                    <div class="mb-3 col-md-6">
                      <div id="phone">
                        <label class="form-label">Appointment Type</label>
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
