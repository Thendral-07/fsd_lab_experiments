import React, { useState } from "react";
import "./StudentRegistrationForm.css";

function StudentRegistrationForm() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [phone, setPhone] = useState("");
  const [emis, setEmis] = useState("");
  const [address, setAddress] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function calculateAge(dobValue) {
    const birthDate = new Date(dobValue);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name) return setError("Name is required");
    if (!fatherName) return setError("Father name required");
    if (!motherName) return setError("Mother name required");
    if (age < 18) return setError("Age must be 18 or above");
    if (!/^\d{12}$/.test(aadhaar)) return setError("Aadhaar must be 12 digits");
    if (!/^[6-9]\d{10}$/.test(phone)) return setError("Invalid phone number");
    if (!/^\d{8}$/.test(emis)) return setError("EMIS must be 8 digits");
    if (!state || !district) return setError("State & District required");
    if (!address) return setError("Address required");

    setSubmitted(true);
  }

  return (
    <div className="container">
      <h2>Student Registration Form</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Father Name</label>
        <input value={fatherName} onChange={(e) => setFatherName(e.target.value)} />

        <label>Mother Name</label>
        <input value={motherName} onChange={(e) => setMotherName(e.target.value)} />

        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
            calculateAge(e.target.value);
          }}
        />

        <label>Age</label>
        <input value={age} readOnly />

        <label>Aadhaar Number</label>
        <input maxLength="12" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} />

        <label>Phone Number</label>
        <input maxLength="10" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label>EMIS Number</label>
        <input maxLength="8" value={emis} onChange={(e) => setEmis(e.target.value)} />

        <label>Department</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Select</option>
          <option>CSE</option>
          <option>IT</option>
          <option>ECE</option>
          <option>EEE</option>
          <option>Civil</option>
          <option>Mechanical</option>
        </select>

        <label>Year</label>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select</option>
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
          <option>4th Year</option>
        </select>

        <label>Section</label>
        <select value={section} onChange={(e) => setSection(e.target.value)}>
          <option value="">Select</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
          <option>F</option>
        </select>

        <label>State</label>
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select</option>
          <option>Tamil Nadu</option>
          <option>Kerala</option>
          <option>Karnataka</option>
        </select>

        <label>District</label>
        <select value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option value="">Select</option>
          <option>Chennai</option>
          <option>Coimbatore</option>
          <option>Madurai</option>
        </select>

        <label>Address</label>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} />

        <button type="submit">Register</button>
      </form>
      {submitted && (
        <div id="output">
          <h3>Student Details</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Father Name:</b> {fatherName}</p>
          <p><b>Mother Name:</b> {motherName}</p>
          <p><b>DOB:</b> {dob}</p>
          <p><b>Age:</b> {age}</p>
          <p><b>Aadhaar:</b> {aadhaar}</p>
          <p><b>Phone:</b> {phone}</p>
          <p><b>EMIS:</b> {emis}</p>
          <p><b>Department:</b> {department}</p>
          <p><b>Year:</b> {year}</p>
          <p><b>Section:</b> {section}</p>
          <p><b>State:</b> {state}</p>
          <p><b>District:</b> {district}</p>
          <p><b>Address:</b> {address}</p>
        </div>
      )}
    </div>
  );
}

export default StudentRegistrationForm;
