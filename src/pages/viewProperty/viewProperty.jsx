import PropertyMap from "../../components/googlemap/map";
import { useProfileDispatch, useProfileState } from "../../contexts";
import { addBooking, propertyView } from "../../contexts/action";
import { useEffect, useState } from "react";
import ImageGallery from "../../components/imageGallery/imageGallery";
import Reviews from "../../components/reviews/reviews";
import "./viewProperty.css";
import Amenities from "../../components/amenities/amenity";
import { useNavigate, useParams } from "react-router-dom";
import $ from "jquery";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const ViewProperty = (props) => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [guestCount, setGuestCount] = useState("Guests");
  const navigate = useNavigate();

  const details = useProfileState();

  const dispatch = useProfileDispatch();
  const { propertyId } = useParams();
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    try {
      console.log('calling')
      propertyView(dispatch, propertyId);
    } catch (error) {
      console.error(error);
    }
    $(".date").datepicker({});
  }, []);
  useEffect(() => {
    setGuestCount(`${adultCount + childCount} Guests, ${infantCount} Infants`);
  });
 

  const increment = function (e) {
    console.log(e.target.name);
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

  const reserve = function(){
    console.log(dateRange[0])
    const bookingRequest ={
      property: details.property,
      start_date: dateRange[0].startDate.toDateString(),
      end_date: dateRange[0].endDate.toDateString(),
      adults: adultCount,
      childs: childCount,
      infant: infantCount,
    }
    addBooking(dispatch,bookingRequest);
    navigate("/payments")
  }

  return (
    <div className="container-md mt-5">
      {/* section  for images */}
      <div className="row">
        <ImageGallery imageCollage={details.property.images}></ImageGallery>
      </div>

      {/* sectio for property info */}
      <div className="row mt-5 justify-content-around">
        <div className="col-8 d-flex flex-column ">
          <div className="row ">
            <div className="col-10">
              <h4>{details.property.name}</h4>
              <span className="text-muted ">
                {details.property.address.street}-
                {details.property.address.street_number},{" "}
                {details.property.address.postal_code},{" "}
                {details.property.address.city},{" "}
                {details.property.address.country}{" "}
              </span>
            </div>
            <div className="col-2 d-flex justify-content-around align-items-center">
              <a>
                <i className="fa fa-heart fs-3"></i>
              </a>
              <a>
                <i className="fa fa-share-alt fs-3"></i>
              </a>
            </div>
          </div>
          <div className="d-flex mt-5">
            <div className="d-flex flex-column justify-content-center align-items-center facility ">
              <i className="fa fa-bed"></i>
              <span>Bedrooms {details.property.bedrooms}</span>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center facility">
              <i className="fa fa-bath"></i>
              <span>Bathrooms {details.property.bathrooms}</span>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center facility">
              <i class="fa fa-building"></i>
              <span>{details.property.room_type}</span>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center facility">
              <i className="fa fa-paw"></i>
              <span>Pets Allowed</span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h5>Summary</h5>
              <p>{details.property.summary}</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              
                <h6 className="text-uppercase text-muted">Standard</h6>
                <h4 className="display-6 fw-bold">€{details.property.price}</h4>
                <hr></hr>

                <DateRange
                  editableDateInputs={false}
                  moveRangeOnFirstSelection={false}
                  onChange={(item) => {

                    setDateRange([item.selection])}}
                  ranges={dateRange}
                  startDatePlaceholder="Check-In"
                  endDatePlaceholder="Check-Out"
                />

                <div class="dropdown">
                  <input
                    class="btn btn-secondary btn-block"
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
              <a onClick={reserve} className="btn btn-primary d-block w-100 mt-5">
                Reserve
              </a>
            </div>
            <div className="card-footer">
              <ul className="list-unstyled d-flex justify-content-around">
                <li>
                  <span>
                    <i className="fa fa-building mr-2"></i>
                  </span>
                  <span>Property enquiry</span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-phone mr-2"></i>
                  </span>
                  <span>Contact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-5">
          <Amenities offerAmenities={details.property.amenities}></Amenities>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-5">
          <PropertyMap address={details.property.address}></PropertyMap>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <Reviews
            reviewScore={details.property.review_scores}
            reviews={details.property.reviews}
          ></Reviews>
        </div>
      </div>
    </div>
  );
};
export default ViewProperty;
