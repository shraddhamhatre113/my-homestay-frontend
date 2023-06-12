
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faLocationDot,
  faMagnifyingGlass,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Featured.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Featured = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1,

  });
  const handleOption=(name,operation)=>{
setOptions(prev=>{
  return{
    ...prev,[name]: operation ==="i" ? options[name] +1 : options[name] -1,
  }
})
  }

  return (
    <div className="featured">
      <div className="featuredContainer">

        <h1>Welcome to bookMe.com</h1>
        <div className="textOne">
          <span>find and book best accommodations for your </span>
          <span className="vac">vacations</span>
        </div>
        <span className="solText">
          we have the best hotels for your vacations with very reasonable prices
          and locations with lots of discount according to your need
        </span>
        <div className="searchLightWhite">

          <div className="searchWhite">
            <div className="headerSearch">
              <div className="headerSearchItem"></div>
              <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
              <input
                type="text"
                placeholder="Destination"
                className="headerSearchDestination"
              />
            </div>
            <div className="headerSearch">
              <div className="headerSearchItem"></div>
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
            <div className="headerSearch">
              <div className="headerSearchItem"></div>
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">
               {`${options.adult} adult - ${options.children} children - ${options.room} room`}
              </span>
              {openOptions && <div className="optionsGuest">
                <div className="optionItemsGuest">
                  <span className="optionTextGuest">Adult</span>
                  <div className="optionCounterGuest">
                  <button disabled={options.adult <= 1}className="optionCounterButtonGuest" onClick={()=>handleOption("adult","d")}>-</button>
                  <span className="optionCounterNumberGuest">{options.adult}</span>
                  <button className="optionCounterButtonGuest"onClick={()=>handleOption("adult","i")}>+</button>
                  </div>
                </div>
                <div className="optionItemsGuest">
                  <span className="optionTextGuest">Childern</span>
                  <div className="optionCounterGuest">
                  <button disabled={options.children <= 0}className="optionCounterButtonGuest"onClick={()=>handleOption("children","d")}>-</button>
                  <span className="optionCounterNumberGuest">{options.children}</span>
                  <button className="optionCounterButtonGuest"onClick={()=>handleOption("children","i")}>+</button>
                  </div>
                </div>
                <div className="optionItemsGuest">
                  <span className="optionTextGuest">Room</span>
                  <div className="optionCounterGuest">
                  <button disabled={options.room <= 1}className="optionCounterButtonGuest"onClick={()=>handleOption("room","d")}>-</button>
                  <span className="optionCounterNumberGuest">{options.room}</span>
                  <button className="optionCounterButtonGuest"onClick={()=>handleOption("room","i")}>+</button>
                  </div>
                </div>
              </div>}
              <FontAwesomeIcon icon={faAngleDown} className="headerIcon" />
            </div>
            <button className="searchButton1">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="searchIcon"
              />
              Search
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Featured;
