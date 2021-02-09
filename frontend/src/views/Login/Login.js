import "./Login.css";
import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button, Form, Input } from 'antd';
import { register } from "../../api/LoginApi"

const Login = () => {
    const [form] = Form.useForm();
    const [userInfo, setUserInfo] = useState({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            password: "",
            reentered: ""
        })

    const handleClick = async () => {
        form.resetFields();
        const registerInfo = await register(userInfo);
        console.log(registerInfo.data)
    }

    return(
        <div>
            <div style={{"height": "15vh"}} />
            <Row>
                <Col span={12} push={6}>
                    <Form layout="horizontal" labelCol={{span: 4}} wrapperCol={{span: 18}} form={form}>
                        <Form.Item label="First Name">
                            <Input onChange={(e) => {
                                setUserInfo({
                                    firstName: e.target.value,
                                    middleName: userInfo.middleName,
                                    lastName: userInfo.lastName,
                                    email: userInfo.email,
                                    password: userInfo.pass,
                                    reentered: userInfo.reentered
                                });
                            }}/>
                        </Form.Item>
                        <Form.Item label="Middle Name">
                        <Input onChange={(e) => {
                                setUserInfo({
                                    firstName: userInfo.firstName,
                                    middleName: e.target.value,
                                    lastName: userInfo.lastName,
                                    email: userInfo.email,
                                    password: userInfo.pass,
                                    reentered: userInfo.reentered
                                });
                            }}/>
                        </Form.Item>
                        <Form.Item label="Last Name">
                        <Input onChange={(e) => {
                                setUserInfo({
                                    firstName: userInfo.firstName,
                                    middleName: userInfo.middleName,
                                    lastName: e.target.value,
                                    email: userInfo.email,
                                    password: userInfo.pass,
                                    reentered: userInfo.reentered
                                });
                            }}/>
                        </Form.Item>
                        <Form.Item label="Email">
                        <Input onChange={(e) => {
                                setUserInfo({
                                    firstName: userInfo.firstName,
                                    middleName: userInfo.middleName,
                                    lastName: userInfo.lastName,
                                    email: e.target.value,
                                    password: userInfo.pass,
                                    reentered: userInfo.reentered
                                });
                            }}/>
                        </Form.Item>
                        <Form.Item label="Password">
                        <Input.Password onChange={(e) => {
                                setUserInfo({
                                    firstName: userInfo.firstName,
                                    middleName: userInfo.middleName,
                                    lastName: userInfo.lastName,
                                    email: userInfo.email,
                                    password: e.target.value,
                                    reentered: userInfo.reentered
                                });
                            }}/>
                        </Form.Item>
                        <Form.Item label="Re-enter Password">
                        <Input.Password onChange={(e) => {
                                setUserInfo({
                                    firstName: userInfo.firstName,
                                    middleName: userInfo.middleName,
                                    lastName: userInfo.lastName,
                                    email: userInfo.email,
                                    password: userInfo.password,
                                    reentered: e.target.value
                                });
                            }}/>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col span={11} push={6}>
                    <Button block type="primary" onClick={handleClick}>
                        Register User
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default Login;