import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import loginImg from '../../img/login.svg';
import useAuth from '../../../context/useAuth.js';
import './Login.css';
import { Link,useHistory,useLocation } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const { LogInEmailAndPassword, error, setError, loader } = useAuth();
    
    const history = useHistory();
    const location = useLocation();
    
     const HandleLogInSubmitForm = data => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        LogInEmailAndPassword(email, password,history,location );
        reset();
        };

    const HandleErrorRemove = () => {
        setError('')
    };

    return (
        <div className="py-5 my-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <h3 className="text-center log-title">Log In User</h3>
                        <div className="p-4"  onBlur={HandleErrorRemove}>
                        <form className="input-form-box" onSubmit={handleSubmit(HandleLogInSubmitForm)}>
                            <input type="email" placeholder="Enter your email" autoComplete="current-password" {...register('email')} />
                                <input type="password" placeholder="Enter your password" autoComplete="current-password"  {...register('password')} />
                                <span className="text-danger">{error}</span>
                            <input type="submit" value="Log In" />
                            </form>
                            <p className="text-center fs-5">No account ?
                                <Link
                                    className="text-decoration-none fw-bold" to="/register"> Register Now <i className="fas fa-arrow-right ms-2"></i></Link>
                                </p>
                        </div>
                        <div className="text-center mt-3">
                {
                    loader && <Spinner animation="border" variant="danger" />
                }
            </div>
                    </Col>
                    <Col lg={6}>
                        <img className="img-fluid" src={loginImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;