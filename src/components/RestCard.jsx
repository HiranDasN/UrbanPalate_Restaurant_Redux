import React from 'react'
import { CardText, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function RestCard({restuarant}) {
  return (  
   <>

     <Link to={`/restaurant_view/${restuarant.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '100%'}} className='border shadow'>
        <Card.Img height={'300px'} variant="top" src={restuarant.photograph} />
        <Card.Body>
          <Card.Title className='text-primary text-center p-2'>{restuarant.name}</Card.Title>
         <hr />
    
        <Row>
            <Col className='ms-3 p-3'>
            <CardText>
                <p style={{fontSize:'20px'}}>{restuarant.neighborhood}</p>
            </CardText>
            </Col>
    
            <Col className='p-3'>
            <CardText>
                <p style={{fontSize:'20px'}}>Cuisine: 
                {restuarant.cuisine_type}</p>
            </CardText>
            </Col>
        </Row>
    
        </Card.Body>
      </Card>
     </Link>
   </>
  )
}

export default RestCard