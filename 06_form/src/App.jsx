// Create a multi-step form, where next and previous button are there on the last page user should be able to submit the form, on previous click the data entered should be persisted.

import { useState } from "react";
import DatePicker from "react-datepicker";
import "./App.css";

function App() {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    address: { city: "", state: "" },
    DOB: new Date(),
  });

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        ></input>
      </div>

      <div>
        <label>Last Name</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        ></input>
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="Email" value={formData.email} />
      </div>

      <div>
        <label>Address</label>
        <input
          type="text"
          value={formData.address.city}
          onChange={(e) => {
            handleChange({
              ...e,
              target: { ...e.target, name: "address.city" },
            });
          }}
          placeholder="City"
        />
        <input
          type="text"
          value={formData.address.state}
          placeholder="State"
          onChange={(e) => {
            handleChange({
              ...e,
              target: { ...e.target, name: "address.state" },
            });
          }}
        />
      </div>

      <div>
        <label>Start Date</label>
        <DatePicker
          selected={formData.DOB}
          onChange={(date) =>
            setformData({
              ...formData,
              DOB: date || new Date(),
            })
          }
        />
      </div>
    </form>
  );
}

export default App;
