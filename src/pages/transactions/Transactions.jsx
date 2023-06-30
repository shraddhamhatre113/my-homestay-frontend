import { useProfileState } from "../../contexts";
import "./Transactions.css";

const Transactions = () => {
  const userDetails = useProfileState();
  const one_day = 1000 * 60 * 60 * 24;
  const totalDays = (booking) => {
    var totalTime =
      Date.parse(booking.end_date) - Date.parse(booking.start_date);
    const totalDay = Math.round(totalTime / one_day);
    return totalDay;
  };
  const calcAmount = (booking) => {
    var sumOfcharges =
      booking.room_rate.amount +
      booking.room_rate.additional_charges +
      booking.room_rate.VAT;

    const totalAmount = totalDays(booking) * sumOfcharges;
    return `${booking.room_rate.currency} ${totalAmount}`;
  };
  const grossAmount = (bookings) => {
    return bookings
      .map((booking) => {
        return booking.room_rate.amount * totalDays(booking);
      })
      .reduce((accumulator, current) => accumulator + current, 0);
  };
  const grossCharges = (bookings) => {
    return bookings
      .map((booking) => booking.room_rate.additional_charges* totalDays(booking))
      .reduce((accumulator, current) => accumulator + current, 0);
  };
  const grossVat = (bookings) => {
    return bookings
      .map((booking) => booking.room_rate.VAT* totalDays(booking))
      .reduce((accumulator, current) => accumulator + current, 0);
  };
  const grossTotal = (bookings) => {
    return`USD ${grossAmount(bookings) + grossCharges(bookings) + grossVat(bookings)}`;
  };
  return (
    <div className="container transaction-tab ">
      <h1>Transactions</h1>
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              href="#tab-1"
              role="tab"
              data-bs-toggle="tab"
            >
              Past
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              role="tab"
              data-bs-toggle="tab"
              href="#tab-2"
            >
              Current
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="#tab-3"
              role="tab"
              data-bs-toggle="tab"
            >
              Gross Earning
            </a>
          </li>
        </ul>
        <div className="tab-content transaction">
          <div id="tab-1" className="tab-pane active" role="tabpanel">
            {userDetails.user.property_bookings.past_booking.map((booking) => {
              return (
                <div className="row transaction-content">
                  <div className="col-10 d-flex flex-column ">
                    <div className="d-flex ">
                      <span>
                        <strong>
                          {booking.traveler.first_name}{" "}
                          {booking.traveler.last_name}
                        </strong>
                      </span>
                    </div>
                    <div>
                      <span>{booking.booking_date}</span>
                    </div>
                  </div>
                  <div className="col-2 align-items-center d-flex flex-row justify-content-around pl-4 pr-4">
                    <span>{calcAmount(booking)}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="tab-2" className="tab-pane" role="tabpannel">
            {userDetails.user.property_bookings.current_bookings.map(
              (booking) => {
                return (
                  <div className="row transaction-content">
                    <div className="col-10 d-flex flex-column ">
                      <div className="d-flex ">
                        <span>
                          <strong>
                            {booking.traveler.first_name}{" "}
                            {booking.traveler.last_name}
                          </strong>
                        </span>
                      </div>
                      <div>
                        <span>{booking.booking_date}</span>
                      </div>
                    </div>
                    <div className="col-2 align-items-center d-flex flex-row justify-content-around pl-4 pr-4">
                      <span>{calcAmount(booking)}</span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div id="tab-3" className="tab-pane" role="tabpannel">
            <table className="table">
              <caption>List of users</caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Additional Charges</th>
                  <th scope="col">VAT</th>
                 
                  <th scope="col">Total Earning</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.user.property_bookings.past_booking.map(
                  (booking, index) => {
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{booking.room_rate.amount*totalDays(booking)}</td>
                        <td>{booking.room_rate.additional_charges*totalDays(booking)}</td>
                        <td>{booking.room_rate.VAT*totalDays(booking)}</td>
                      
                        <td>{calcAmount(booking)}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td>Gross Total</td>
                  <td>
                    {grossAmount(
                      userDetails.user.property_bookings.past_booking
                    )}
                  </td>
                  <td>
                    {grossCharges(
                      userDetails.user.property_bookings.past_booking
                    )}
                  </td>
                  <td>
                    {grossVat(userDetails.user.property_bookings.past_booking)}
                  </td>
                  <td>
                    {grossTotal(
                      userDetails.user.property_bookings.past_booking
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
