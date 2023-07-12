import { useState, useEffect } from "react";
import "./payments.css";
import { useNavigate } from "react-router-dom";
import { useProfileDispatch, useProfileState } from "../../contexts";
import { MdFlightLand, MdLocalTaxi } from "react-icons/md";
import { requestBooking } from "../../contexts/action";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { booking, user, loading } = useProfileState();
  const dispatch = useProfileDispatch();
  const one_day = 1000 * 60 * 60 * 24;

  const handleInputChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownSelect = (method) => {
    setPaymentMethod(method);
    setShowDropdown(false);
  };

  const paymentMethods = ["Credit Card", "Paypal", "Bank Transfer"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const totalDays = (booking) => {
    console.log(Date.parse(booking.end_date));
    var totalTime =
      Date.parse(booking.end_date) - Date.parse(booking.start_date);
    const totalDay = Math.round(totalTime / one_day);
    return totalDay;
  };
  const calculateTotalPrice = () => {
    // Your calculation logic here
    const basePrice = 100;
    const cleaningFee = 50;
    const serviceFee = 10;
    const total = basePrice + cleaningFee + serviceFee;
    return total;
  };
  const calcAmount = (booking) => {
    const totalAmount = totalDays(booking) * booking.property.price;
    const sumOfCharges =
      totalAmount +
      (booking.property.cleaning_fee || 0) +
      (booking.property.security_deposit || 0);
    return sumOfCharges;
  };

  const sendBookingRequest = () => {
    const requestBody = {
      propertyId: booking.property._id,
      start_date: booking.start_date,
      end_date: booking.end_date,
      guestId: user._id,
      adults: booking.adults,
      childs: booking.childs,
    };
    requestBooking(dispatch, requestBody);
  };
  return (
    <div className="container-md mt-5">
      <div className="row">
        <h4>Confirm and Pay</h4>
        <span className=" mt-4">Your trip</span>
        <div className="col-6 mt-3">
          <div className=" d-flex  justify-content-between">
            <span>
              <strong>Dates</strong>
            </span>
            <button
              className="btn btn-secondary btn-sm"
              role="button"
              aria-disabled="true"
            >
              Edit
            </button>
          </div>
          <div className=" d-flex  justify-content-between mt-2">
            <span>Start-Dates:</span>
            <span>{booking.start_date}</span>
          </div>
          <div className=" d-flex  justify-content-between mt-3">
            <span>End-Dates:</span>
            <span>{booking.end_date}</span>
          </div>
          <div className=" d-flex  justify-content-between mt-3">
            <span>
              <strong>Guests</strong>
            </span>
            <button
              className="btn btn-secondary btn-sm"
              role="button"
              aria-disabled="true"
            >
              Edit
            </button>
          </div>
          <div className="">
            {" "}
            {(booking.adults || 0) +
              " Adults, " +
              " Child, " +
              (booking.infant || 0) +
              " Infant"}
          </div>
          <div className="payment-form mt-4  border-top border-bottom ">
            <div className="d-flex flex-row justify-content-between mt-3 
            ">
            <label htmlFor="paymentInput">
              <strong>Payment Method:</strong>
            </label>
            <div class="radio" data-value="credit">
              <img
                src="https://i.imgur.com/28akQFX.jpg"
                width="100px"
                height="50px"
              />
            </div>
            <div class="radio" data-value="paypal">
              <img
                src="https://i.imgur.com/5QFsx7K.jpg"
                width="100px"
                height="50px"
              />
            </div>
            </div>
            <div class="input-group mb-4 ">
              <input
                type="text"
                class="form-control"
                aria-label="Text input with dropdown button"
                value={paymentMethod}
                onChange={handleInputChange}
                placeholder="Select payment method"
              />
              <button
                class="btn btn-primary btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleDropdownToggle}
              >
                Payment options
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                {showDropdown && (
                  <div className="payment__dropdown-menu">
                    {paymentMethods.map((method) => (
                      <div
                        key={method}
                        className="payment__dropdown-item"
                        onClick={() => handleDropdownSelect(method)}
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <div className="right  p-3 mb-2 bg-secondary rounded">
            <div className="row item border-bottom mb-3">
              <div className="col-4 align-self-center my-3">
                <img
                  className="rounded float-left"
                  src={booking.property.images[0].picture_url}
                  alt="booking-image"
                />
              </div>
            </div>

            <div className="row lower mt-3 ">
              <div className="col d-flex justify-content-between">
                <h5 className=" text-left ">Price Details</h5>
                <span className=" text-right">
                  {" "}
                  €{" "}
                  {booking.property.price +
                    " x " +
                    totalDays(booking) +
                    " = " +
                    totalDays(booking) * booking.property.price}
                </span>
              </div>
            </div>
            <div className="row lower mt-3">
              <span className="col text-left">Cleaning fee</span>
              <span class="col text-right">
                € {booking.property.cleaning_fee}
              </span>
            </div>
            <div className="row lower mt-3">
              <span className="col text-left">security deposit</span>
              <span class="col text-right">
                € {booking.property.security_deposit}
              </span>
            </div>
            <div className="row lower mt-3">
              <div className="col text-left">Total to pay</div>
              <div className="col text-right">
                <b> € {calcAmount(booking)} </b>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <h4 style={{ marginTop: "100px" }}>Cancellation Policy</h4>
            <h6 style={{ marginTop: "20px" }}>
              Free cancellation until 24 hours before check-in
            </h6>
          </div>
          <div
            className="container-md bg-secondary border border-end-0 bg-opacity-10"
            style={{ marginTop: "20px" }}
          >
            <h4>Add to your booking</h4>
            <div className="form-check d-flex flex-column">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                I'm interested in booking a flight to my destination.
              </label>
              <MdFlightLand className=" d-flex justify-start"></MdFlightLand>
              <p>
                Skip the stress of searching - we’ll add flight options
                (provided by bookMe.com) to your destination in your booking
                confirmation.{" "}
              </p>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Want to book a taxi or shuttle ride in advance?{" "}
              </label>
              <p>
                Avoid surprises - get from the airport to your accommodation
                easily. We’ll add taxi options to your booking confirmation
              </p>
              <MdLocalTaxi className="mr-10"></MdLocalTaxi>
            </div>
          </div>

          <p style={{ marginTop: "25px" }}>
            By selecting the button below, I agree to the updated terms of
            service, payment terms of service, and acknowledge the privacy
            policy.
          </p>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={sendBookingRequest}
          >
            Request to book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
