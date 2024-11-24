import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';

import React, { useState } from "react";
import "./Applyonline.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    course: "",
    center: "",
    name: "",
    gender: "",
    admissionDate: "",
    dob: "",
    fatherName: "",
    qualification: [],
    religion: "",
    category: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
    phoneNumber: "",
    email: "",
    aadhar: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        qualification: checked
          ? [...prevData.qualification, value]
          : prevData.qualification.filter((item) => item !== value),
      }));
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
    <Header/>

    <div className="registration-form">
      <h2>REGISTRATION FORM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Select Course: <span>*</span>
          </label>
          <select name="course" onChange={handleChange} required>
            <option value="">---Select Course---</option>
            <option value="course1">Java</option>
            <option value="course2">Python</option>
            <option value="course3">Fullstack Development  </option>
            <option value="course4">Cloud Computing </option>
            <option value="course5">Robotics</option>
            <option value="course6">App Development</option>
          </select>
        </div>

        <div className="form-row">
          <label>
            Select Center: <span>*</span>
          </label>
          <select name="center" onChange={handleChange} required>
            <option value="">---Select Center---</option>
            <option value="center1">MZP-1</option>
            <option value="center2">MZP-2</option>  
            <option value="center3">MZP-3</option>  
            <option value="center4">VNS-1</option>  
            <option value="center5">VNS-2</option>  
          </select>
        </div>

        <div className="form-row">
          <label>
            Name: <span>*</span>
          </label>
          <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>
            Gender: <span>*</span>
          </label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={handleChange} required /> Female
            </label>
          </div>
        </div>

        <div className="form-row">
          <label>
            Admission Date: <span>*</span>
          </label>
          <input type="date" name="admissionDate" onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>
            DOB: <span>*</span>
          </label>
          <input type="date" name="dob" onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>
            Father Name: <span>*</span>
          </label>
          <input type="text" name="fatherName" placeholder="Enter Father Name" onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>
            Qualification: <span>*</span>
          </label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="qualification" value="10th" onChange={handleChange} /> 10th
            </label>
            <label>
              <input type="checkbox" name="qualification" value="12th" onChange={handleChange} /> 12th
            </label>
            <label>
              <input type="checkbox" name="qualification" value="Graduation" onChange={handleChange} /> Graduation
            </label>
          </div>
        </div>

        {/* Add remaining form fields in the same way */}

        <div className="form-row">
          <label>Upload Photo:</label>
          <input type="file" name="file" onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default RegistrationForm;
