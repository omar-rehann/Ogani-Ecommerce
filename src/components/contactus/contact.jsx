import "./contact.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Contact(){
    return(
        <>
        <div className="contact">
            <div className="poster">
              <div className="text">
              <h4>Contact Us</h4>
<h5>Home / Contact Us</h5>

              </div>
            </div>
            <div className="boxes">
                <div className="row g-2">
                    <div className="col-md-4">
  <div className="box">
    <i className="fa-solid fa-phone"></i>
    <h5>Phone</h5>
    <h5>+01-3-88888-6868</h5>
  </div>
</div>

<div className="col-md-4">
  <div className="box">
    <i className="fa-solid fa-house"></i>
    <h5>Address</h5>
    <h5>60-49 Road 11378 New York</h5>
  </div>
</div>

<div className="col-md-4">
  <div className="box">
    <i className="fa-solid fa-clock"></i>
    <h5>Open Time</h5>
    <h5>10:00 AM to 11:00 PM</h5>
  </div>
</div>

<div className="col-md-4">
  <div className="box">
    <i className="fa-solid fa-at"></i>
    <h5>Email</h5>
    <h5>hello@colorlip.com</h5>
  </div>
</div>

<div className="col-md-4">
  <div className="box">
    <i className="fa-solid fa-fax"></i>
    <h5>Fax</h5>
    <h5>+01-3-88888-9999</h5>
  </div>
</div>

<div className="col-md-4">
  <div className="box">
    <i className="fa-solid fa-earth-americas"></i>
    <h5>Website</h5>
    <h5>www.colorlip.com</h5>
  </div>
</div>

<div className="col-md-4">
  <div className="box">
    <i className="fa-brands fa-supple"></i>
    <h5>Support</h5>
    <h5>support@colorlip.com</h5>
  </div>
</div>

<div className="col-md-4">
  <div className="box">
    <i className="fa-brands fa-whatsapp"></i>
    <h5>WhatsApp</h5>
    <h5>+01-3-88888-1234</h5>
  </div>
</div>

                </div>
            </div>
            <div className="map">
                <section>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13642.20025303476!2d32.29941215!3d31.260876650000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1776188672141!5m2!1sar!2seg" width="100%"
 height="450" 
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  ></iframe>              
    </section>
            </div>
            <div className="message">
                <div className="continer text-center mt-4">
                    <h4 className="fw-bold">Leave Message</h4>
                </div>
                <div className="content mt-2">
                     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Name </Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Button variant="success" className="w-100">Send Message</Button>
      </Form.Group>
    </Form>

                </div>
            </div>

        </div>
        </>
    )
}
export default Contact