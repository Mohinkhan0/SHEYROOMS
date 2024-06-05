import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

function Bookingscreen() {
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <div className="bookroom">
            <div className="boxes">

            <Card className="card" style={{ width: '50rem', margin:10}}>
      <Card.Body>
        <Card.Title>Room Policies</Card.Title>
        <Card.Text>

    <p>Occupancy Limits: Each room type has a maximum occupancy limit, which must be adhered to.</p>
   <p> Non-Smoking: Most hotels have non-smoking rooms. Smoking in a non-smoking room can result in a hefty cleaning fee.</p>
   <p> Noise Levels: Guests are expected to keep noise at a reasonable level, especially during nighttime hours (usually 10 PM to 8 AM).</p>
    <p>Pets: Pet policies vary. Some hotels allow pets with an additional fee, while others do not allow pets at all.</p>
    <p>Room Condition: Guests are responsible for keeping the room in good condition. Damages or excessive cleaning will be charged to the guest</p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="Cardcenter" style={{ width: '50rem' , margin:10}}>
      <Card.Body>
        <Card.Title>Check-In and Check-Out</Card.Title>
        <Card.Text>

<p>Check-In Time: Generally between 2 PM and 4 PM. Early check-in may be available upon request.</p>
<p>Payment: Full payment or a deposit may be required at check-in.</p>
<p>Check-Out Time: Usually between 10 AM and 12 PM. Late check-out may incur additional charges.</p>
<p>Identification: A valid government-issued ID and a credit card are typically required at check-in.</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
               <Button variant="primary" onClick={handleShow}>
                 Click to Book
               </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Booking Successful !!!!!!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Features a temperature-controlled outdoor swimming pool and a luxury
            spa for relaxation at The Oberoi Mumbai.
          </p>
          <p>
            Awarded as the Best City Hotel in Asia by Travel + Leisure, USA,
            World’s Best Awards in 2020.
          </p>
          <p>
            Kids can engage in a Junior Chef session while you indulge in
            premium wine tasting at The Oberoi Mumbai.
          </p>
          <p>
            Houses six award-winning dining venues serving gourmet delights and
            an array of cuisines at The Oberoi Mumbai.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Bookingscreen;
