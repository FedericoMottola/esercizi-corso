import React, { Component } from "react";
import SingleAppointment from "./SingleAppointment";

class List extends Component {
  render() {
    const { data, removeAppointment } = this.props;

    return (
      <>
        <ul className="user-list">
          {data.map((item) => (
            <li key={item.id}>
              <SingleAppointment item={item} removeAppointment={removeAppointment} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default List;
