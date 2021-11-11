import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <>
        <div>
            
            <div class="contact-image">
  <div class="contact-text">
    <h1>CONTACT US</h1>
    <p>Dentures actually improve our smiles and overall apperance. Not only they make us look better, but also make our life easier.</p>
    
  </div>
</div>

</div>

<div className="contact-section">
  <div className="form-img">
    <img className=" rounded" src="https://media.istockphoto.com/photos/customer-support-executive-picture-id1263114732?b=1&k=20&m=1263114732&s=170667a&w=0&h=YyjgIISSjYm0Eps16fsgaGYPyZm22rWgn-x06LjouJg=" alt="" />
  </div>

  <div className="form-section">
  <Form>
  <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Name" />
  </Form.Group>

  <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  
  <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={4} placeholder="Message" />
  </Form.Group>

  <div className="form-button mt-">
  <Button variant="warning" type="submit">
    Submit
  </Button>
  </div>

</Form>
  </div>
</div>


  </>      
    );
};

export default Contact;