import React, { useEffect, useState, Fragment } from "react";

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
} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../constant";
import moment from "moment";
toast.configure();
const DutyRoster = () => {
    //Variables
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");
  const [fromTime, setfromTime] = useState("");
  const [toTime, settoTime] = useState("");
  const [serialNumber, setserialNumber] = useState("");

   //Save Data
  const onSubmit = () => {
    const model = {
      fromDate: fromDate,
      toDate: toDate,
      fromTime: fromTime,
      toTime: toTime,
      serialNumber: serialNumber,
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
  
  useEffect(() => {
    if (data == "") {
      getData();
    }
    
  });

  return (
    <Fragment>
      <br></br>
      <br></br> 
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
            <h3>Duty Roaster</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>From Date</label>
                    <input 
                      className="form-control" 
                      type="date"
                      onChange={(e) => {
                      setfromDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>From Time</label>
                    <input 
                    className="form-control" 
                    type="time"
                    onChange={(e) => {
                    setfromTime(e.target.value);
                    }}
                       />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Serial Number</label>
                    <input 
                    className="form-control" 
                    type="text"
                    onChange={(e) => {
                    setserialNumber(e.target.value);
                    }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>To Date</label>
                    <input 
                    className="form-control" 
                    type="date" 
                    onChange={(e) => {
                    settoDate(e.target.value);
                      }} 
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>To Time</label>
                    <input 
                    className="form-control" 
                    type="time" 
                    onChange={(e) => {
                    settoTime(e.target.value);
                    }}
                    />
                  </div>
                </div>
                <div className="col-md-4 text right">
                  <br></br>
                  <button 
                  className="btn btn-success" 
                  onClick={() => {
                      onSubmit();
                    }}
                  >Add</button>
                </div>
              </div> <br></br>

             
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Card>
            <CardHeader>All Duty Details</CardHeader>
            <CardBody>
              <Table>
                <tr>
                  <th style={{ textAlign: "center" }}>Id</th>
                  <th style={{ textAlign: "center" }}>Serial Number</th>
                  <th style={{ textAlign: "center" }}>From</th>
                  <th style={{ textAlign: "center" }}>To</th>
                  <th style={{ textAlign: "center" }}>From Time</th>
                  <th style={{ textAlign: "center" }}>To Time</th>
                </tr>

                <tbody>
                  {data &&
                    data.map((item) => {
                      return (
                        <tr>
                          <td>{item._id}</td>
                          <td>{item.serialNumber}</td>
                          <td>{moment(item.fromDate).format("DD/MM/yyyy")}</td>
                          <td>{moment(item.toDate).format("DD/MM/yyyy")}</td>
                          <td>{moment(item.fromTime).format("HH:mm:ss")}</td>
                          <td>{moment(item.toTime).format("HH:mm:ss")}</td>
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
export default DutyRoster;
