import "./Landing.css";
import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button, Typography } from 'antd';
import {getRandomUser} from "../../api/RandomUser"

const Landing = () => {
    const [randomUser, setRandomUser] = useState();

    const handleClick = async () => {
        const randomUserRes = await getRandomUser();
        console.log(randomUserRes);
        setRandomUser(randomUserRes);
    }

    return(
        <div>
            <div style={{"height": "45vh"}} />
            <Row>
                <Col span={8} push={8}>
                    <Button block type="primary" onClick={handleClick}>
                        Click Me!
                    </Button>
                </Col>
            </Row>
            <div style={{"height": "5vh"}} />
            {randomUser && 
                <Typography.Title level={3} style={{"text-align": "center"}}>
                    {randomUser.results[0].name.title} {randomUser.results[0].name.first} {randomUser.results[0].name.last}
                </Typography.Title>
            }
        </div>
    );
};

export default Landing;