import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("users")) || [];

    // Add new form data
    const updatedData = [...existingData, formData];

    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(updatedData));

    alert("Data saved to Local Storage!");

    // Clear form
    setFormData({
      name: "",
      email: "",
      age: "",
      gender: "",
    });
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <br /><br />

        {/* Dropdown */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
