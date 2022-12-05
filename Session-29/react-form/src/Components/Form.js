import React from "react";
import { useState } from "react";

const Form = () => {
  const currentDate = new Date().toISOString().substring(0, 10);
  const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().substring(0, 10);
  const [formData, setFormData] = useState({
    name: "",
    bookingDate: currentDate,
    numOfPeople: "",
    telNumber: "",
    otherDietReqs: "",
    inOut: "",
    kids: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });

    console.log(formData);
  };
  const [submited, setSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
  };
  return (
    <div>
      <div className="form-container">
        <h1>Booking form</h1>
        <form id="booking form">
          {/* <!-- Name input --> */}
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input value={formData.name} onChange={handleChange} type="text" name="name" required />
          </div>
          {/* <!-- Date input --> */}
          <div className="form-row">
            <label htmlFor="bookingDate">Date</label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              value={formData.bookingDate}
              min={currentDate}
              max={maxDate}
              onChange={handleChange}
            />
          </div>
          {/* <!-- # of People input --> */}
          <div className="form-row">
            <label htmlFor="numOfPeople">Number of People</label>
            <select id="numOfPeople" name="numOfPeople" value={formData.numOfPeople} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="0">10+</option>
            </select>
          </div>
          {/* <!-- Telephone input --> */}
          <div className="form-row">
            <label htmlFor="telNumber">Telephone</label>
            <input type="tel" name="telNumber" id="telNumber" value={formData.telNumber} onChange={handleChange} />
          </div>
          {/* <!-- Dietry requirements input --> */}
          <div className="form-row radio">
            <label htmlFor="gluten">Gluten Free</label>
            <input type="checkbox" name="gluten" id="gluten" value="gluten" onChange={handleChange} />
            <label htmlFor="dairy">Dairy Free</label>
            <input type="checkbox" name="dairy" id="dairy" value="dairy" onChange={handleChange} />
            <label htmlFor="nuts">Nut allergy</label>
            <input type="checkbox" name="nuts" id="nuts" value="nuts" onChange={handleChange} />
            <label htmlFor="vegan">Vegan</label>
            <input type="checkbox" name="vegan" id="vegan" value="vegan" onChange={handleChange} />
            <label htmlFor="other">Other</label>
            <input type="checkbox" name="other" id="other" value="other" onChange={handleChange} />
          </div>
          {/* <!-- Other dietry requirements input --> */}
          <div className="form-row otherDiet hide">
            <label htmlFor="otherDietReqs">Other Dietry Requirements</label>
            <input type="text" name="otherDietReqs" id="otherDietReqs" onChange={handleChange} />
          </div>
          {/* <!-- Inside/Outside --> */}
          <div className="form-row">
            <label htmlFor="inside">Inside</label>
            <input type="radio" id="inside" name="inOut" value="inside" onChange={handleChange} />
            <label htmlFor="outside">Outside</label>
            <input type="radio" id="outside" name="inOut" value="outside" onChange={handleChange} />
          </div>
          {/* <!-- Kids? --> */}
          <div className="form-row">
            <label htmlFor="kids">Childrens Menu Required</label>
            <input type="checkbox" name="kids" id="kids" onChange={handleChange} />
          </div>
          {/* <!-- Other comments --> */}
          <div className="form-row">
            <label htmlFor="other-comments">Other Comments</label>
            <input type="text" name="other-comments" id="other-comments" />
          </div>
          <button type="submit" id="submit-form" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {submited ? Object.entries(formData) : <p>No results</p>}
    </div>
  );
};

export default Form;
