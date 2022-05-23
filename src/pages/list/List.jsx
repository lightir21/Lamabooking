import React, { useState } from "react";
import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>pet night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>pet night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder={options.room}
                />
              </div>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
