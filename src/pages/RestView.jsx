import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrestaurant } from '../redux/restaurantSlice'
function RestView() {
  const [show, setShow] = useState(false);

  const {id} = useParams()
  console.log(id);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectedRestaurant = useSelector((state)=>state.restaurantSlice.allrestaurant.find((item)=>item?.id==id))
  console.log(selectedRestaurant);

  const allrestaurant = useSelector((state)=> state.restaurantSlice.allrestaurant)
  console.log(allrestaurant);

  const dispatch = useDispatch()

  useEffect(()=>{
    //to update the value in state by using thunk api call
    dispatch(fetchrestaurant())
  },[])
  return (
    <>
      <Row className='my-5'>
        <Col md={1}></Col>
        <Col md={3}>
        <img width={'100%'} height={'390px'} src={selectedRestaurant?.photograph} alt="" />
        </Col> 

        <Col md={7} className='px-5' >
        <div>
          <hr />
          <h4 className=''><span className='text-warning'>RESTAURANT</span> DETAILS</h4>
          <hr />
          <ListGroup className='text-primary'>
      <ListGroup.Item className='text-center p-4 text text-primary'><h4>{selectedRestaurant?.name}</h4></ListGroup.Item>
      <ListGroup.Item>Neighbourhood : {selectedRestaurant?.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine_type : {selectedRestaurant?.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address : {selectedRestaurant?.address}</ListGroup.Item>
      <ListGroup.Item className='p-4 text-center'>
      
          <button type="button" class="btn btn-outline-primary me-4" fdprocessedid="3iuqur" onClick={handleShow}>Operating Hours</button>
          <RestReview reviews={selectedRestaurant?.reviews}/>
      
        </ListGroup.Item>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item >Monday : {selectedRestaurant?.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {selectedRestaurant?.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {selectedRestaurant?.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday : {selectedRestaurant?.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {selectedRestaurant?.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {selectedRestaurant?.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {selectedRestaurant?.operating_hours.Sunday}</ListGroup.Item>
      </ListGroup>
        </Modal.Body>
      </Modal>
    </ListGroup>
        </div>
        </Col> 
        <Col md={1}></Col>             
      </Row>
    </>
  )
}

export default RestView