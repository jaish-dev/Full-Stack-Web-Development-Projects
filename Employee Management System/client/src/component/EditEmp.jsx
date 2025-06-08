import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditEmp = () => {
  const [formValue, setFormValue] = useState({
    Employename: "",
    Employeid: "",
    designation: "",
    email: "",
    education: "",
    address: "",
    salary: "",
    joiningDate: "",
    performance: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`http://localhost:5000/api/employees/${id}`);
      setFormValue(res.data);
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/employees/${id}`, formValue);
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="m-0">EDIT EMPLOYEE</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row row-gap-3">
                  {/* Same form fields as AddEmp */}
                  {[
                    {
                      label: "EMPLOYEE NAME",
                      name: "Employename",
                      type: "text",
                    },
                    { label: "EMPLOYEE ID", name: "Employeid", type: "text" },
                    { label: "DESIGNATION", name: "designation", type: "text" },
                    { label: "EMAIL ID", name: "email", type: "email" },
                    { label: "EDUCATION", name: "education", type: "text" },
                    { label: "ADDRESS", name: "address", type: "text" },
                    { label: "SALARY", name: "salary", type: "number" },
                    {
                      label: "JOINING DATE",
                      name: "joiningDate",
                      type: "date",
                    },
                  ].map((field) => (
                    <div className="col-3" key={field.name}>
                      <label className="font-size-13">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formValue?.[field.name]}
                        className="form-input"
                        placeholder={field.label}
                        onChange={handleChange}
                      />
                    </div>
                  ))}

                  <div className="col-3">
                    <label className="font-size-13">PERFORMANCE</label>
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
                      <button className="btn btn-primary mt-4" type="submit">
                        UPDATE
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

export default EditEmp;
