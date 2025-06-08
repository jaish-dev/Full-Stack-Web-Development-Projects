import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmp = () => {
  const [formValue, setFormValue] = useState({
    Employename: '',
    Employeid: '',
    designation: '',
    email: '',
    education: '',
    address: '',
    salary: '',
    joiningDate: '',
    performance: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/employees', formValue);
    navigate('/');
  };

  return (
        <div className="container-fluid">
            <div className="row mt-4 ">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header ">
                            <h4 className="m-0"> ADD EMPLOYEE</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row row-gap-3">
                                    <div className="col-3">
                                        <label htmlFor="name" className='font-size-13'>EMPLOYEE NAME</label>
                                        <input
                                            type="text"
                                            name="Employename"
                                            value={formValue?.Employename}
                                            className="form-input"
                                            placeholder="Employee Name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="id" className='font-size-13'>EMPLOYEE ID</label>
                                        <input
                                            type="text"
                                            name="Employeid"
                                            value={formValue?.Employeid}
                                            className="form-input"
                                            placeholder="Employee ID"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="designation" className='font-size-13'>DESIGNATION</label>
                                        <input
                                            type="text"
                                            name="designation"
                                            value={formValue?.designation}
                                            className="form-input"
                                            placeholder="Designation"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="email" className='font-size-13'>EMAIL ID:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formValue?.email}
                                            className="form-input"
                                            placeholder="Email ID"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="education" className='font-size-13'>EDUCATION</label>
                                        <input
                                            type="text"
                                            name="education"
                                            value={formValue?.education}
                                            className="form-input"
                                            placeholder="Education"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="address" className='font-size-13'>ADDRESS</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formValue?.address}
                                            className="form-input"
                                            placeholder="Address"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="salary" className='font-size-13'>SALARY</label>
                                        <input
                                            type="numbers"
                                            name="salary"
                                            value={formValue?.salary}
                                            className="form-input"
                                            placeholder="Salary"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="joiningDate" className='font-size-13'>JOINING DATE</label>
                                        <input
                                            type="date"
                                            name="joiningDate"
                                            value={formValue?.joiningDate}
                                            className="form-input"
                                            placeholder="Joining Date"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="performance" className='font-size-13'>PERFORMANCE</label>
                                        <select
                                            name="performance"
                                            value={formValue?.performance}
                                            className="form-input"
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Performance</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Below Average">Below Average</option>
                                            <option value="Good">Good</option>
                                            <option value="Average">Average</option>
                                            <option value="Excellent">Excellent</option>
                                        </select>   
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-end">
                                            <button className='btn btn-primary mt-4' type="submit">
                                                SUBMIT
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default AddEmp;





