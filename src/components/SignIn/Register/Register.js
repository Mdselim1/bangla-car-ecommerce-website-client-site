import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import RegisterImg from '../../img/register.svg';
import useAuth from '../../../context/useAuth';
import { useForm } from 'react-hook-form';
import { Link , useHistory} from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit, reset } = useForm();
    const { error, setError, registerUser, loader } = useAuth();
    const history = useHistory();

    const HandelCreateUserForm = data => {
        
        const { name, email, password1, password2 } = data;
        if (password2.length >= 6 && password1.length >= 6) {
            if (password1 === password2) {
                registerUser(name , email,password2,history)
                reset();
            } else {
                setError('Password Did Not Match');
            }
        } else {
            setError('Password At Least 6 character Need');
        }  
    };

    const HandleErrorRemove = () => {
        setError('')
    };

    return (
        <div className="py-5 my-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <h3 className="text-center log-title">Register User</h3>
                        <div className="p-4"  onBlur={HandleErrorRemove}>
                        <form className="input-form-box" onSubmit={handleSubmit(HandelCreateUserForm)}>
                            <input type="text" placeholder="Enter your name" autoComplete="current-name" {...register('name')} required />
                            <input type="email" placeholder="Enter your email" autoComplete="current-password" {...register('email')} required />
                                <input type="password" placeholder="Enter your password" autoComplete="current-password"  {...register('password1')} required />
                                <input type="password" placeholder="Re-nter your password" autoComplete="current-password"  {...register('password2')} required />

                                <span className="text-danger">{error}</span>
                            <input type="submit" value="Register" />
                            </form>
                            <div>
                                <p className="text-center fs-5">Already Have An account ?
                                    <Link className="text-decoration-none fw-bold" to="/login"> Log In <i className="fas fa-arrow-right ms-2"></i></Link>
                                </p>
                            </div>
                            <div className="text-center mt-3">
                {
                    loader && <Spinner animation="border" variant="danger" />
                }
            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img className="img-fluid" src={RegisterImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;