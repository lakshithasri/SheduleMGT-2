import React, { useEffect, useState, Fragment } from "react";
//import "../leave/styles.css";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} 
from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../constant";
import moment from "moment";
import { useHistory } from "react-router-dom";
toast.configure();
const Leave = () => {
  //Variables
  const [fromD, setFromD] = useState("");
  const [toD, setToD] = useState("");
  const [sNo, setSNo] = useState("");
  const [reason, setReason] = useState("");
  const [coveringSNo, setCoveringSNo] = useState("");
  const [type, setType] = useState("");

  //Save Data
  const onSubmit = () => {
    const model = {
      fromDate: fromD,
      toDate: toD,
      leaveType: type,
      serialNumber: sNo,
      reason: reason,
      covering: coveringSNo,
      isApproved: false,
      isReject: false,
      approvedBy: "",
      rejectedBy: "",
    };
    axios
      .post(API_URL + "leave/saveLeaves", model)
      .then((resposne) => {
        toast.success("SuccessFully Saved !!");
      })
      .catch((err) => {
        toast.error(err);
        console.log(err);
      });
  };
  //Retrieve Data
  //variable for storing get data
  const [data, setData] = useState("");
  //Method
  const getData = () => {
    axios
      .get(API_URL + "leave/getLeaves")
      .then((resposne) => {
        console.log(resposne);
        setData(resposne.data);
      })
      .catch((err) => {
        toast.warning("Error While Getting Data !!");
      });
  };
  //Form Load Event
  const history = useHistory();
  useEffect(() => {
    if (data == "") {
      getData();
    }
    if (!localStorage.getItem("User")) {
      history.push("/login");
      // JSON.parse(localStorage.getItem("User"))
    }
  });
  return (
    <Fragment>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" style={{ textAlign: "center" }}>
              <h3>Leave Requesting Form</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>From Date</label>
                    <input
                      className="form-control"
                      type="date"
                      onChange={(e) => {
                        setFromD(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>To Date</label>
                    <input
                      className="form-control"
                      type="date"
                      onChange={(e) => {
                        setToD(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Serial Number</label>
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => {
                        setSNo(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Reason</label>
                    <textarea
                      className="form-control"
                      type="text"
                      onChange={(e) => {
                        setReason(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Leave ID</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Covering Serial Number</label>
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => {
                        setCoveringSNo(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Leave Type</label>
                <select
                  className="form-control"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value={1}>VL</option>
                  <option value={2}>CL</option>
                </select>
              </div>

              <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-3 ">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      onSubmit();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Card>
            <CardHeader>All Leave Details</CardHeader>
            <CardBody>
              <Table>
                <tr>
                  <th style={{ textAlign: "center" }}>Leave Id</th>
                  <th style={{ textAlign: "center" }}>Serial Number</th>
                  <th style={{ textAlign: "center" }}>Leave Type</th>
                  <th style={{ textAlign: "center" }}>Start Date</th>
                  <th style={{ textAlign: "center" }}>End Date</th>
                  <th style={{ textAlign: "center" }}>Reason</th>
                  <th style={{ textAlign: "center" }}>
                    Covering Serial Number
                  </th>
                </tr>
                <tbody>
                  {data &&
                    data.map((item) => {
                      return (
                        <tr>
                          <td style={{ textAlign: "center" }}>{item._id}</td>
                          <td style={{ textAlign: "center" }}>
                            {item.serialNumber}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {item.leaveType}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {moment(item.fromDate).format("DD/MM/yyyy")}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {moment(item.toDate).format("DD/MM/yyyy")}
                          </td>
                          <td style={{ textAlign: "center" }}>{item.reason}</td>
                          <td style={{ textAlign: "center" }}>
                            {item.covering}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-2"></div>
      </div>
    </Fragment>
  );
};
export default Leave;
