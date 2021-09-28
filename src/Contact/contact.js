import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
export class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="sendbtn">
                <Button variant="success" >SEND</Button>
                </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Contact
