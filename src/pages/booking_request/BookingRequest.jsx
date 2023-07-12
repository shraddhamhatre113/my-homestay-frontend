import "./BookingRequest.css";
import dest1 from "../../images/destination-1.jpg";
import { useProfileState } from "../../contexts";
import { useEffect, useState } from "react";
import axios from "axios";

const BookingRequest = () => {
  const userDetails = useProfileState();
  const [propertyBookings, setPropertyBookings]= useState([])
  const fetchData = async ()=>{
    const bookings = await axios.get(
      "http://localhost:4040/api/booking/"+userDetails.user._id+"/property-bookings"
    );
    setPropertyBookings(bookings.data);
  }
  useEffect( ()=>{
   fetchData();
  },[])
  const acceptBooking=async (bookingId)=>{
    await axios.put(
      "http://localhost:4040/api/booking/"+bookingId,
      {
        status:'ACCEPTED'
      }
    );
    fetchData()
  }
  const rejectBooking=async (bookingId)=>{
    await axios.put(
      "http://localhost:4040/api/booking/"+bookingId,
      {
        status:'REJECTED'
      }
    );
    fetchData()
  }
  return (
    <div className="container reservation-tab ">
    <h1>Booking Request</h1>
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
          {propertyBookings.filter(booking=>booking.status=='PENDING').map((booking,index) => {
            return (
              <div className="row reservation-row" key={index}>
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
                      <span >
                        <strong>Check In: </strong>
                      </span>
                      <span  className="text-muted">
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
                      <span  className="text-muted">{booking.traveler.occupancy.adults} Adults</span>{" "}
                      <span  className="text-muted">
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
                    className="btn btn-primary px-5"
                    type="button"
                    style={{ marginRight: 5 + "px" }}
                    onClick={()=>acceptBooking(booking._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-secondary px-5"
                    type="button"
                    style={{ marginRight: 5 + "px" }}
                    onClick={()=>rejectBooking(booking._id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div id="tab-2" className="tab-pane" role="tabpannel">
          {propertyBookings.filter(booking=> booking.status =='COMPLETED'|| booking.status =='ACCEPTED').map((booking,index) => {
            return (
              <div className="row reservation-row"  key={index}>
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
          {propertyBookings.filter(booking=> booking.status=='REJECTED').map(
            (booking,index) => {
              return (
                <div className="row reservation-row"  key={index}>
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
                    <div className="d-flex justify-content-lg-start reservation-content">
                      <div>dest1
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

export default BookingRequest;
