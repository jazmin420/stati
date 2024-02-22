import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css'
import booking from '/src/assets/booking-01.jpg'

function BasicExample() {
  return (
    <>
    <div className='booking-div'>
      <div className='form-div w-5 mt-5 '>
        <h4>Reservation <span>BOOK TABLE</span></h4>
        <Form className='mt-3' >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Name" className='mt-3'/>
            <Form.Control type="email" placeholder="Phone" className='mt-3' />
            <Form.Control type="email" placeholder="Email address" className='mt-3' />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Select aria-label="Default select example">
          <option>Number of People</option>
          <option value="1">One Person</option>
          <option value="2">Two People</option>
          <option value="3">Three People</option>
        </Form.Select>
    
          <div className='d-flex justify-content-center'>
            <Button variant="primary" className=' button mt-5'>
              Book Table
            </Button>
          </div>
        </Form>
      </div>
      <div>
        <img className='booking-img' src={booking} alt="" />
      </div>
    </div>
    </>
  );
}

export default BasicExample;