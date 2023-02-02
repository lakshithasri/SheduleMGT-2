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
const ChangeDutyRequst = () => {
  const [wordID, setwordID] = useState("");
  const [dutyNumber, setdutyNumber] = useState("");
  const [changeSerialNumber, setchangeSerialNumber] = useState("");
  const [changereason, setchangereason] = useState("");
  const [serialNumber, setserialNumber] = useState("");

   //Save Data
  const onSubmit = () => {
    const model = {
      wordID: wordID,
      dutyNumber: dutyNumber,
      changeSerialNumber: changeSerialNumber,
      changereason: changereason,
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
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" style={{ textAlign: "center" }}>
              <h3>Change Duty Requesting Form</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Ward ID</label>
                    <input 
                    className="form-control" 
                    type="text" 
                    onChange={(e) => {
                      setwordID(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
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
                <div className="col">
                  <div className="form-group">
                    <label>Duty Number</label>
                    <input 
                    className="form-control" 
                    type="text" 
                    onChange={(e) => {
                      setdutyNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label> Change Serial Number</label>
                    <input 
                    className="form-control" 
                    type="text" 
                    onChange={(e) => {
                      setchangeSerialNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Reason</label>
                    <textarea 
                    className="form-control" 
                    type="date" 
                    onChange={(e) => {
                      setchangereason(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-3 ">
                  <button 
                  className="btn btn-success"
                  onClick={() => {
                      onSubmit();
                    }}
                  >Submit</button>
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
            <CardHeader>All Requesting Details</CardHeader>
            <CardBody>
              <Table>
                <tr>
                  <th style={{ textAlign: "center" }}>Ward ID</th>
                  <th style={{ textAlign: "center" }}>Serial Number</th>
                  <th style={{ textAlign: "center" }}>Duty Number</th>
                  <th style={{ textAlign: "center" }}>Change Serial Number</th>
                  <th style={{ textAlign: "center" }}>Change Reason</th>
                </tr>
                
                <tbody>
                  {data &&
                    data.map((item) => {
                      return (
                        <tr>
                          <td>{item._id}</td>
                          <td>{item.serialNumber}</td>
                          <td>{item.dutyNumber}</td>
                          <td>{item.changeSerialNumber}</td>
                          <td>{item.changereason}</td>
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
export default ChangeDutyRequst;
