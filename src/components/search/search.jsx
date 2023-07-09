import "./search.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import $ from "jquery";

const Search = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [guestCount, setGuestCount] = useState("Guests");
  const navigate = useNavigate()
  const [state, setState] = useState({
    destination: "",
    startDate: "",
    endDate: "",
  });
  useEffect(() => {
    // Update the document title using the browser API
    $(".date").datepicker({});
    setGuestCount(`${adultCount + childCount} Guests, ${infantCount} Infants`);
  });

  const increment = function (e) {
    if (e.target.name === "adult") {
      setAdultCount(adultCount + 1);
    } else if (e.target.name === "child") {
      setChildCount(childCount + 1);
    } else if (e.target.name === "infant") {
      setInfantCount(infantCount + 1);
    }
  };
  const decrement = function (e) {
    if (e.target.name === "adult" && adultCount > 0) {
      setAdultCount(adultCount - 1);
    } else if (e.target.name === "child" && childCount > 0) {
      setChildCount(childCount - 1);
    } else if (e.target.name === "infant" && infantCount > 0) {
      setInfantCount(infantCount - 1);
    }
  };

  const updateInputField = async (e) => {
    e.preventDefault();
    const fieldName = e.target.name;
    setState({
      ...state,
      [fieldName]: e.target.value,
    });
  };

  const searchAction= (e)=>{
    e.preventDefault()
   
    navigate(`/properties?city=${state.destination}&start=${state.startDate}&end=${state.endDate}&adults=${adultCount}&child=${childCount}&infant=${infantCount}`)
  }

  return (
    <div className="container-fluid booking  pb-5">
      <div className="container pb-5">
        <div className="bg-light shadow" style={{ padding: 30 + "px" }}>
          <div
            className="row align-items-center"
            style={{ minHeight: 60 + "px" }}
          >
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <span>Destination</span>
                  <div className=" mb-md-0">
                    <div className="input-group">
                      <span class="input-group-append bg-secondary border-right-0 border-top-end-radius-0 border-bottom-end-radius-0">
                        <span class="input-group-text bg-secondary">
                          <i className="fa fa-location-pin ml-2"></i>
                        </span>
                      </span>
                      <input
                        type="text"
                        className="form-control p-4 border-left-0 border-top-start-radius-0"
                        name="destination"
                        value={state.destination}
                        onChange={updateInputField}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className=" mb-md-0">
                    <span>Check In</span>
                    <div className="input-group date">
                      <span class="input-group-append bg-secondary border-right-0 border-top-end-radius-0 border-bottom-end-radius-0">
                        <span class="input-group-text bg-secondary">
                          <i className="fa fa-calendar ml-2"></i>
                        </span>
                      </span>
                      <input
                        type="text"
                        className="form-control p-4 border-left-0 border-top-start-radius-0"
                        name="startDate"
                        value={state.startDate}
                        onChange={updateInputField}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className=" mb-md-0">
                    <span>Check Out</span>
                    <div className="input-group date">
                      <span class="input-group-append bg-secondary border-right-0 border-top-end-radius-0 border-bottom-end-radius-0">
                        <span class="input-group-text bg-secondary">
                          <i className="fa fa-calendar ml-2"></i>
                        </span>
                      </span>
                      <input
                        type="text"
                        className="form-control p-4 border-left-0 border-top-start-radius-0"
                        name="endDate"
                        value={state.endDate}
                        onChange={updateInputField}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className=" mb-md-0">
                    <span>Guest</span>
                    <div class="dropdown">
                      <input
                        class="btn btn-secondary btn-block"
                        style={{ padding: "0.8rem 0rem" }}
                        type="text"
                        readOnly
                        value={guestCount}
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      ></input>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="row p-4">
                          <div class="col-12">
                            <div class="d-flex justify-content-between">
                              <div>
                                <p class="text-dark">Adults</p>
                              </div>
                              <div class="input-group w-auto justify-content-end align-items-center">
                                <input
                                  name="adult"
                                  type="button"
                                  value="-"
                                  class="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                                  data-field="quantity"
                                  onClick={decrement}
                                />
                                <input
                                  type="text"
                                  readOnly
                                  value={adultCount}
                                  name="quantity"
                                  class="quantity-field border-0 text-center w-25"
                                />
                                <input
                                  name="adult"
                                  type="button"
                                  value="+"
                                  class="button-plus border rounded-circle icon-shape icon-sm "
                                  data-field="quantity"
                                  onClick={increment}
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="d-flex justify-content-between">
                              <div>
                                <p class="text-dark">Children</p>
                              </div>
                              <div class="input-group w-auto justify-content-end align-items-center">
                                <input
                                  name="child"
                                  type="button"
                                  value="-"
                                  class="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                                  data-field="quantity"
                                  onClick={decrement}
                                />
                                <input
                                  type="text"
                                  readOnly
                                  value={childCount}
                                  name="quantity"
                                  class="quantity-field border-0 text-center w-25"
                                />
                                <input
                                  name="child"
                                  type="button"
                                  value="+"
                                  class="button-plus border rounded-circle icon-shape icon-sm lh-0"
                                  data-field="quantity"
                                  onClick={increment}
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="d-flex justify-content-between">
                              <div>
                                <p class="text-dark">Infants</p>
                              </div>
                              <div class="input-group w-auto justify-content-end align-items-center">
                                <input
                                  name="infant"
                                  type="button"
                                  value="-"
                                  class="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                                  data-field="quantity"
                                  onClick={decrement}
                                />
                                <input
                                  type="text"
                                  readOnly
                                  value={infantCount}
                                  name="quantity"
                                  class="quantity-field border-0 text-center w-25"
                                />
                                <input
                                  name="infant"
                                  type="button"
                                  value="+"
                                  class="button-plus border rounded-circle icon-shape icon-sm lh-0"
                                  data-field="quantity"
                                  onClick={increment}
                                />
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
            <div className="col-md-2">
              <div className="mt-4 mb-md-0">
              
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  onClick={searchAction}
                  style={{ height: 47 + "px", marginTop: -2 + "px" }}
                >
                  Find
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;