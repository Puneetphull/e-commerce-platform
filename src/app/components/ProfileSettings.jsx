import React from "react";

export function ProfileSettings() {
  return (
 <>
      <div className="row mt-4">
        <div className="col-xl-8 col-12">
          <div className="shadow mb-4 card border-0">
            <div className="card-body">
              <h5 className="mb-4">General information</h5>
              <form className="">
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <div id="firstName">
                      <label className="form-label">First Name</label>
                      <input
                        required=""
                        placeholder="Enter your first name"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <div id="lastName">
                      <label className="form-label">Last Name</label>
                      <input
                        required=""
                        placeholder="Also your last name"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="align-items-center row">
                  <div className="mb-3 col-md-6">
                    <div id="birthday">
                      <label className="form-label">Birthday</label>
                      <div className="rdt">
                        <div>
                          <div className="input-group">
                            <span className="input-group-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="icon icon-xs"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <input
                              required=""
                              placeholder="dd/mm/yyyy"
                              type="text"
                              className="form-control"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <div id="gender">
                      <label className="form-label">Gender</label>
                      <select className="mb-0 form-select">
                        <option value="0" selected="">
                          Gender
                        </option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <div id="email">
                      <label className="form-label">Email</label>
                      <input
                        required=""
                        placeholder="name@company.com"
                        type="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <div id="phone">
                      <label className="form-label">Phone</label>
                      <input
                        required=""
                        placeholder="+12-345 678 910"
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <h5 className="my-4">Location</h5>
                <div className="row">
                  <div className="mb-3 col-sm-4">
                    <div id="address">
                      <label className="form-label">Address 1</label>
                      <input
                        required=""
                        placeholder="Enter your home address"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 col-sm-4">
                    <div id="address">
                      <label className="form-label">Address 2</label>
                      <input
                        required=""
                        placeholder="Enter your home address"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 col-sm-4">
                    <div id="addressNumber">
                      <label className="form-label">Number</label>
                      <input
                        required=""
                        placeholder="No."
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-sm-4">
                    <div id="city">
                      <label className="form-label">City</label>
                      <input
                        required=""
                        placeholder="City"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3 col-sm-4">
                    <div className="mb-2">
                      <label className="form-label">Select state</label>
                      <select className="form-select" id="state">
                        <option value="0" selected="">
                          State
                        </option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div id="zip">
                      <label className="form-label">ZIP</label>
                      <input
                        required=""
                        placeholder="ZIP"
                        type="tel"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="mt-2 animate-up-2 btn btn-gray-800"
                  >
                    Save All
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="shadow mb-4 mb-xl-0 card border-0">
            <div className="card-body">
              <h5 className="mb-4">Alerts &amp; Notifications</h5>
              <div className="list-group-flush list-group">
                <div className="d-flex align-items-center justify-content-between px-0 border-bottom list-group-item">
                  <div>
                    <p className="h6 mb-1 card-text">Company News</p>
                    <p className="small pe-4">
                      Get Rocket news, announcements, and product updates
                    </p>
                  </div>
                  <div>
                    <div className="form-switch">
                      <input
                        type="checkbox"
                        id="user-notification-1"
                        className="form-check-input"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between px-0 border-bottom list-group-item">
                  <div>
                    <p className="h6 mb-1 card-text">Account Activity</p>
                    <p className="small pe-4">
                      Get important notifications about you or activity you've
                      missed
                    </p>
                  </div>
                  <div>
                    <div className="form-switch">
                      <input
                        type="checkbox"
                        id="user-notification-2"
                        className="form-check-input"
                        checked=""
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between px-0  list-group-item">
                  <div>
                    <p className="h6 mb-1 card-text">Meetups Near You</p>
                    <p className="small pe-4">
                      Get an email when a Dribbble Meetup is posted close to my
                      location
                    </p>
                  </div>
                  <div>
                    <div className="form-switch">
                      <input
                        type="checkbox"
                        id="user-notification-3"
                        className="form-check-input"
                        checked=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-12">
          <div className="row">
            <div className="mb-4 col-12">
              <div className="shadow text-center p-0 card border-0">
                <div className="profile-cover rounded-top"></div>
                <div className="pb-5 card-body">
                  <img
                    className="card-img avatar-xl rounded-circle mx-auto mt-n7 mb-4"
                    src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-1.508e07ee.jpg"
                    alt=""
                  />
                  <div className="card-title h5">Neil Sims</div>
                  <div className="fw-normal card-subtitle h6">
                    Senior Software Engineer
                  </div>
                  <p className="text-gray mb-4 card-text">New York, USA</p>
                  <button
                    type="button"
                    className="d-inline-flex align-items-center me-2 btn btn-gray-800 btn-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="icon icon-xs me-1"
                    >
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>{" "}
                    Connect
                  </button>
                  <button type="button" className="btn btn-secondary btn-sm">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="shadow mb-4 card border-0">
                <div className="card-body">
                  <h5 className="mb-4">Select profile photo</h5>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-3.55d8a646.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </div>
                    <div className="file-field">
                      <div className="d-flex justify-content-xl-center ms-xl-3">
                        <div className="d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="icon text-gray-500 me-2"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <input type="file" />
                          <div className="d-md-block text-left" />
                          <div className="fw-normal text-dark mb-1">
                            Choose Image
                          </div>
                          <div className="text-gray small">
                            JPG, GIF or PNG. Max size of 800K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-sm-6 col-12">
            <form
              tabindex="0"
              className="dropzone rounded d-flex align-items-center justify-content-center mb-4"
            >
              <input
                accept="image/*"
                multiple=""
                autocomplete="off"
                tabindex="-1"
                type="file"
                className="form-control"
              />
              <div className="dz-default dz-message text-center">
                <p className="dz-button mb-0">Drop files here to upload</p>
              </div>
            </form>
            <div className="dropzone-files row"></div>
          </div>
          <div className="col-xl-12 col-sm-6 col-12">
            <div className="shadow mb-4 card border-0">
              <div className="card-body">
                <h5 className="mb-4">Select cover photo</h5>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <img
                      src="https://demo.themesberg.com/volt-pro-react/static/media/profile-cover.9992e0ee.jpg"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                  <div className="file-field">
                    <div className="d-flex justify-content-xl-center ms-xl-3">
                      <div className="d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="icon text-gray-500 me-2"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <input type="file" />
                        <div className="d-md-block text-left" />
                        <div className="fw-normal text-dark mb-1">Choose Image</div>
                        <div className="text-gray small">
                          JPG, GIF or PNG. Max size of 800K
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
