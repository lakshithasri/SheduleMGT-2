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
import { useHistory } from "react-router-dom";
const Dashboard = () => {
    return (
        <Fragment>
            <br></br>
            <h2>Dashboard</h2>
            <br></br>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header" style={{ textAlign: "center" }}>
                            <h3>My Leaves</h3>
                        </div>
                        <div className="card-body">  04&nbsp;&nbsp;  09&nbsp;&nbsp;  21 <br></br> A&nbsp;&nbsp;&nbsp;&nbsp;  B&nbsp;&nbsp;&nbsp;&nbsp;  C
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header" style={{ textAlign: "center" }}>
                            <h3>To Be Approve</h3>
                        </div>
                        <div className="card-body"> 10 <br></br> Leaves <br></br><br></br> 21 <br></br> Changes
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-md-6">
                    <Card>
                    <div className="card-header" style={{ textAlign: "center" }}>
                            <h3>My Time Shedule</h3>
                        </div>
                        <CardBody>
                            <Table>
                                <tr>
                                    <th style={{ textAlign: "center" }}>Date</th>
                                    <th style={{ textAlign: "center" }}>Time(from)</th>
                                    <th style={{ textAlign: "center" }}>Time(to)</th>

                                </tr>

                            </Table>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-6"></div>
            </div>

        </Fragment>
    );
};
export default Dashboard;