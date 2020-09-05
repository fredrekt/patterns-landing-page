import React from 'react'
import {Helmet} from "react-helmet";
import { Button } from 'shards-react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
                <meta name="description" content="This is about page meta data"/>
            </Helmet>
        <MDBContainer className="" fluid>
            <MDBRow className="hero-section">
                <MDBCol className="align-self-center px-5">
                    <h1 className="font-weight-bold display-3">Hello About</h1>
                    <p className="lead w-75">
                    Generate font combinations with deep learningGenerate font combinations with deep learning
                    </p>
                    <Button className="mx-0 text-capitalize" squared theme="dark">
                        Get Started
                    </Button>
                </MDBCol>
                <MDBCol style={{ backgroundImage: `url(https://products.ls.graphics/paaatterns/images/024-p-1080.png)` }} className="pr-0"/>
            </MDBRow>
        </MDBContainer>
        </div>
    )
}

export default About
