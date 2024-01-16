import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import mediaplayerImage from '../Assets/5.jpg'
import { Row, Col } from 'react-bootstrap';

function Projectcards() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card style={{ width: '18rem' }} onClick={handleShow}>
                <Card.Img variant="top" src={mediaplayerImage} />
                <Card.Body>
                    <Card.Title>Media Player</Card.Title>
                    
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6}>
              <img src={mediaplayerImage} alt="" width={"100%"} height={"250px"} />
            </Col>
            <Col md={6} lg={6}>
              <h4>Discription</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error asperiores amet, velit in doloribus. At alias itaque animi nemo distinctio illo id quia provident. Consequuntur nostrum hic adipisci eum.</p>
              <p><span className='fw-holder'>Technologies</span>HTML, CSS, React, Node</p>
            </Col>
          </Row>
          <div>
            <a href="" target='blank' style={{color:"black", fontSize:"25px"}}><i class="fa-solid fa-link ms-3"></i></a>
            <a href="https://github.com/Elvin9061/Netflix-Page.git" target='blank' style={{color:"black", fontSize:"25px"}}><i class="fa-brands fa-github ms-3"></i></a>
          </div>
        </Modal.Body>
      </Modal>
        </div>
    )
}

export default Projectcards