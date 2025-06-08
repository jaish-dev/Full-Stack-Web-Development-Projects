import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const ListEmp = () => {
  const [Employeelist, setEmployeeList] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:5000/api/employees");
    setEmployeeList(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleView = (id) => {
    navigate(`/view/${id}`);
  };

const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/employees/${id}`);
    // Now refetch list
    fetchEmployees();
  } catch (error) {
    console.error("Error deleting employee", error);
  }
};

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12 px-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="m-0">EMPLOYEE LIST</h4>
              <NavLink to="/add" className="btn btn-primary btn-sm">
                Add Employee
              </NavLink>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">SR. NO.</th>
                    <th scope="col">Name</th>
                    <th scope="col">ID</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">DESIGNATION</th>
                    <th scope="col">PERFORMANCE</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {Employeelist.map((emp, index) => (
                    <tr key={index + 1}>
                      <th className="text-center" scope="row">
                        {index + 1}
                      </th>
                      <td className="text-center">{emp?.Employename}</td>
                      <td className="text-center">{emp?.Employeid}</td>
                      <td className="text-center">{emp?.email}</td>
                      <td className="text-center">{emp?.designation}</td>
                      <td className="text-center">{emp?.performance}</td>
                      <td className="text-center">
                        <i
                          className="fa-solid fa-eye pe-2 pointer text-primary"
                          onClick={() => handleView(emp._id)}
                        ></i>
                        <i
                          className="fa-solid fa-pen-to-square pe-2 pointer text-success"
                          onClick={() => handleEdit(emp._id)}
                        ></i>
                        <i
                          className="fa-solid fa-trash pe-2 pointer text-danger"
                          onClick={() => handleDelete(emp._id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmp;
