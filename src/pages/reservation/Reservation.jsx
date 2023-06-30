import "./Reservation.css";
import dest1 from "../../images/destination-1.jpg";
import { useProfileState } from "../../contexts";

const Reservation = () => {
  const userDetails = useProfileState();
  return (
    <div className="container reservation-tab ">
      <h1>Reservations</h1>
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              href="#tab-1"
              role="tab"
              data-bs-toggle="tab"
            >
              Upcoming
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              role="tab"
              data-bs-toggle="tab"
              href="#tab-2"
            >
              Past
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="#tab-3"
              role="tab"
              data-bs-toggle="tab"
            >
              Rejected
            </a>
          </li>
        </ul>
        <div className="tab-content reservation">
          <div id="tab-1" className="tab-pane active" role="tabpanel">
            {userDetails.user.guest_booking.current_bookings.map((booking) => {
              return (
                <div className="row reservation-row">
                  <div className="col-2 d-flex justify-content-center ">
                    <img src={dest1} alt="" className="reservation-image" />
                  </div>
                  <div className="col-8 d-flex flex-column justify-content-between">
                    <div>
                      <h5>
                        <strong>{booking.property}</strong>
                      </h5>
                    </div>
                    <div className="d-flex justify-content-lg-start reservation-content">
                      <div>
                        <span>
                          <strong>Check In: </strong>
                        </span>
                        <span>
                          {new Date(
                            Date.parse(booking.start_date)
                          ).toDateString()}
                        </span>
                      </div>
                      <div>
                        <span>
                          <strong>Check Out: </strong>
                        </span>
                        <span>
                          {new Date(
                            Date.parse(booking.end_date)
                          ).toDateString()}
                        </span>
                      </div>
                      <div>
                        <span>
                          <strong>Guest: </strong>
                        </span>
                        <span>{booking.traveler.occupancy.adults} Adults</span>{" "}
                        <span>
                          {booking.traveler.occupancy.children} Children
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-bold">By: </span>
                      <span className="text-bold">
                        {booking.traveler.first_name}
                      </span>
                    </div>
                  </div>
                  <div className="col-2 align-items-center d-flex flex-row justify-content-around">
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{ marginRight: 5 + "px" }}
                    >
                      Cancel Reservation
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="tab-2" className="tab-pane" role="tabpannel">
            {userDetails.user.guest_booking.past_booking.map((booking) => {
              return (
                <div className="row reservation-row">
                  <div className="col-2 d-flex justify-content-center ">
                    <img src={dest1} alt="" className="reservation-image" />
                  </div>
                  <div className="col-8 d-flex flex-column justify-content-between">
                    <div>
                      <h5>
                        <strong>{booking.property}</strong>
                      </h5>
                    </div>
                    <div className="d-flex justify-content-lg-start reservation-content">
                      <div>
                        <span>
                          <strong>Check In: </strong>
                        </span>
                        <span>
                          {new Date(
                            Date.parse(booking.start_date)
                          ).toDateString()}
                        </span>
                      </div>
                      <div>
                        <span>
                          <strong>Check Out: </strong>
                        </span>
                        <span>
                          {new Date(
                            Date.parse(booking.end_date)
                          ).toDateString()}
                        </span>
                      </div>
                      <div>
                        <span>
                          <strong>Guest: </strong>
                        </span>
                        <span>{booking.traveler.occupancy.adults} Adults</span>{" "}
                        <span>
                          {booking.traveler.occupancy.children} Children
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-bold">By: </span>
                      <span className="text-bold">
                        {booking.traveler.first_name}
                      </span>
                    </div>
                  </div>
                  <div className="col-2 align-items-center d-flex flex-row justify-content-around"></div>
                </div>
              );
            })}
          </div>
          <div id="tab-3" className="tab-pane" role="tabpannel">
            {userDetails.user.guest_booking.cancelled_bookings.map(
              (booking) => {
                return (
                  <div className="row reservation-row">
                    <div className="col-2 d-flex justify-content-center ">
                      <img src={dest1} alt="" className="reservation-image" />
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-between">
                      <div>
                        <h5>
                          <strong>{booking.property}</strong>
                        </h5>
                      </div>
                      <div className="d-flex justify-content-lg-start reservation-content">
                        <div>
                          <span>
                            <strong>Check In: </strong>
                          </span>
                          <span>
                            {new Date(
                              Date.parse(booking.start_date)
                            ).toDateString()}
                          </span>
                        </div>
                        <div>
                          <span>
                            <strong>Check Out: </strong>
                          </span>
                          <span>
                            {new Date(
                              Date.parse(booking.end_date)
                            ).toDateString()}
                          </span>
                        </div>
                        <div>
                          <span>
                            <strong>Guest: </strong>
                          </span>
                          <span>
                            {booking.traveler.occupancy.adults} Adults
                          </span>{" "}
                          <span>
                            {booking.traveler.occupancy.children} Children
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-bold">By: </span>
                        <span className="text-bold">
                          {booking.traveler.first_name}
                        </span>
                      </div>
                    </div>
                    <div className="col-2 align-items-center d-flex flex-row justify-content-around">
                      <span>Rejected</span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
