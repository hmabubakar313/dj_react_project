import React, { useEffect, useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { Form,Button,Row,Col, FormGroup } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'




function LoginScreen() {

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email,password))


    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const {error,loading,userInfo} = userLogin
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    useEffect(() => {
        if(userInfo){
            console.log(userInfo);
            navigate('/')
        }
    }, [userInfo])
  return (
    <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setemail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setpassword(e.target.value)}></Form.Control>
            </Form.Group>
        <Button type='submit ' variant='primary' className='mt-3'>Sign In</Button>

        </Form>

        <Row className='py-3'>
            <Col>
                New Customer? <Link to='/register'>Register</Link>
            </Col>
        </Row>


    </FormContainer>
  )
}

export default LoginScreen