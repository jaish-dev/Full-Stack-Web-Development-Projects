import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewEmp = () => {
  const [viewData, setViewData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`http://localhost:5000/api/employees/${id}`);
      setViewData(res.data);
    };

    fetchEmployee();
  }, [id]);

  if (!viewData) return <h4 className="text-center mt-4">Employee Not Found</h4>;

  return (
        <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12 px-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="m-0">EMPLOYEE DETAILS</h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Designation</th>
                    <th>Education</th>
                    <th>Address</th>
                    <th>Salary</th>
                    <th>Joining Date</th>
                    <th>Performance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">{viewData?.Employename}</td>
                    <td className="text-center">{viewData?.Employeid}</td>
                    <td className="text-center">{viewData?.designation}</td>
                    <td className="text-center">{viewData?.education}</td>
                    <td className="text-center">{viewData?.address}</td>
                    <td className="text-center">{viewData?.salary}</td>
                    <td className="text-center">{viewData?.joiningDate}</td>
                    <td className="text-center">{viewData?.performance}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
