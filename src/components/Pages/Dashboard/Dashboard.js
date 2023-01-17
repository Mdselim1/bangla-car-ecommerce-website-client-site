import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import {
    Link,
    useRouteMatch,Switch,Route, 
  } from "react-router-dom";
import MyOrder from './MyOrder/MyOrder';
import Payment from './Payment/Payment';
import Review from './Review/Review';
import './Dashboard.css';
import useAuth from '../../../context/useAuth';
import AddCars from './AddCars/AddCars';
import AllService from '../../HomePage/HomeProducts/AllService/AllService';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';



const Dashboard = () => {

    const { path, url } = useRouteMatch();

    const { HandleLogOutUser, admin } = useAuth();

    return (
        <div>
            <Row>
                <Col lg={2} className="h-100">
                    <div className="dashboard-link border-end border-2 border-danger">
                        
                        <h1 className="dash-title text-white py-3">Dashboard</h1>
                    
                        {
                            !admin && <>
                                   
                    <Link className="my-or" to={`${url}/myorder`}>My Order <i className="fas fa-cart-plus ms-3"></i></Link>
                       
                       <Link to={`${url}/pay`}>Pay <i className="fab fa-cc-amazon-pay ms-3"></i></Link>
                      
                        <Link to={`${url}/review`}>Review <i className="fas fa-eye ms-3"></i></Link>
                            </>
                        }
                        
                        {
                            admin &&<>
                            <Link to={`${url}/allservice`}>Manage Products <i className="fas fa-tasks ms-3"></i></Link>
                        
                        <Link to={`${url}/makeadmin`}>Make Admin <i className="fas fa-marker ms-3"></i></Link>
                        
                        <Link to={`${url}/manageallorders`}>Manage All Orders <i className="fas fa-tasks ms-3"></i></Link>
                        
                       <Link to={`${url}/addservice`}>Add A Product <i className="fas fa-plus ms-3"></i></Link>
                       </>
                        }
                      
                       <Nav.Link onClick={HandleLogOutUser}>Log Out <i className="fas fa-sign-out-alt ms-3"></i></Nav.Link>
                        
                    </div>
                </Col>
                <Col lg={10}>
                    <div>
                        
                        <Switch>
                            {
                                admin ?<Route exact path={`${path}`}>
                                        <AllService></AllService>
                        </Route> :
                                    <Route exact path={`${path}`}>
                            <MyOrder/>
                                </Route> 
                      }
                      <Route path={`${path}/myorder`}>
                            <MyOrder/>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Payment/>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review/>
                        </Route>
                        <Route path={`${path}/addservice`}>
                            <AddCars/>
                        </Route>
                        <Route path={`${path}/manageallorders`}>
                            <ManageAllOrders/>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin/>
                        </Route>
                        <Route path={`${path}/allservice`}>
                            <AllService/>
                        </Route>
                    </Switch>
                   
                    </div>            
                </Col>
            </Row>
           

        </div>
    );
};

export default Dashboard;