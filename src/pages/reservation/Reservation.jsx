import "./Reservation.css";
import dest1 from "../../images/destination-1.jpg";
import { useProfileState } from "../../contexts";
import { useEffect, useState } from "react";
import axios from "axios";

const Reservation = () => {
  const userDetails = useProfileState();
  const [guestBookings, setGuestBookings]= useState([])
  const getBookings = async ()=>{
    const bookings = await axios.get(
      "http://localhost:4040/api/booking/"+userDetails.user._id+"/guest-bookings"
    );
    setGuestBookings(bookings.data);
  }
  useEffect( ()=>{
    
   getBookings()
  },[])
  const cancelBooking=async (bookingId)=>{
    await axios.put(
      "http://localhost:4040/api/booking/"+bookingId,
      {
        status:'CANCELLED'
      }
    );
    getBookings()
  }
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
          <li className="nav-item" role="prese00ntation">
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
            {guestBookings.filter(booking=>booking.status=="PENDING").map((booking) => {
              return (
                <div className="row reservation-row">
                  <div className="col-2 d-flex justify-content-center ">
                    <img src={booking.property.images[0].picture_url} alt="" className="reservation-image" />
                  </div>
                  <div className="col-8 d-flex flex-column justify-content-between">
                    <div>
                      <a href={"/property/"+booking.property._id} className="text-decoration-none">
                        <strong>{booking.property.name}</strong>
                      </a>
                      
                    </div>
                    <div className="d-flex justify-content-betweem w-75 reservation-content">
                      <div>
                        <span>
                          <strong>Check In: </strong>
                        </span>
                        <span className="text-muted">
                          {new Date(
                            Date.parse(booking.start_date)
                          ).toDateString()}
                        </span>
                      </div>
                      <div>
                        <span>
                          <strong>Check Out: </strong>
                        </span>
                        <span className="text-muted">
                          {new Date(
                            Date.parse(booking.end_date)
                          ).toDateString()}
                        </span>
                      </div>
                      <div>
                        <span>
                          <strong>Guest: </strong>
                        </span>
                        <span className="text-muted">{booking.traveler.occupancy.adults} Adults</span>{" "}
                        <span className="text-muted">
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
                      onClick={()=>cancelBooking(booking._id)}
                    >
                      Cancel Reservation
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="tab-2" className="tab-pane" role="tabpannel">
            {guestBookings.filter(booking=>booking.status =='COMPLETED'|| booking.status =='ACCEPTED'|| booking.status =='CANCELLED').map((booking) => {
              return (
                <div className="row reservation-row">
                  <div className="col-2 d-flex justify-content-center ">
                    <img src={booking.property.images[0].picture_url} alt="" className="reservation-image" />
                  </div>
                  <div className="col-8 d-flex flex-column justify-content-between">
                    <div>
                    <a href={"/property/"+booking.property._id} className="text-decoration-none">
                        <strong>{booking.property.name}</strong>
                      </a>
                      
                    </div>
                    <div className="d-flex justify-content-between w-75 reservation-content">
                      <div>
                        <span>
                          <strong>Check In: </strong>
                        </span>
                        <span className="text-muted">
                          {new Date(
                            Date.parse(booking.start_date)
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div>
                        <span>
                          <strong>Check Out: </strong>
                        </span>
                        <span className="text-muted">
                          {new Date(
                            Date.parse(booking.end_date)
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div>
                        <span>
                          <strong>Guest: </strong>
                        </span>
                        <span className="text-muted">{booking.traveler.occupancy.adults} Adults</span>{" "}
                        <span className="text-muted">
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
            {guestBookings.filter(booking=> booking.status =='REJECTED').map(
              (booking) => {
                return (
                  <div className="row reservation-row">
                    <div className="col-2 d-flex justify-content-center ">
                    <a href={"/property/"+booking.property._id} className="text-decoration-none">
                  <img src={booking.property.images[0].picture_url} alt="" className="reservation-image" />
                  </a>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-between">
                      <div>
                      <a href={"/property/"+booking.property._id} className="text-decoration-none">
                        <strong>{booking.property.name}</strong>
                      </a>
                      
                      </div>
                      <div className="d-flex justify-content-between w-75 reservation-content">
                        <div>
                          <span>
                            <strong>Check In: </strong>
                          </span>
                          <span className="text-muted">
                            {new Date(
                              Date.parse(booking.start_date)
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div>
                          <span>
                            <strong>Check Out: </strong>
                          </span>
                          <span className="text-muted">
                            {new Date(
                              Date.parse(booking.end_date)
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div>
                          <span>
                            <strong>Guest: </strong>
                          </span>
                          <span className="text-muted">
                            {booking.traveler.occupancy.adults} Adults
                          </span>{" "}
                          <span className="text-muted">
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
