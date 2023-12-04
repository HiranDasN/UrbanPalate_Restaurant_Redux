import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchrestaurant } from '../redux/restaurantSlice'

function Home() { 

  //accessing the state
  const allrestaurant = useSelector((state)=> state.restaurantSlice.allrestaurant)
  console.log(allrestaurant);

  const dispatch = useDispatch()

  useEffect(()=>{
    //to update the value in state by using thunk api call
    dispatch(fetchrestaurant())
  },[])
  return (
    <>
    <Row>
      {allrestaurant?.length>0?
      allrestaurant.map((item)=>(<Col className='px-5 py-3' sm={6} md={4}>
      <RestCard restuarant={item}/>
    </Col>))
      : 
      <p style={{color:'red'}} className='fs-4 ms-5 mt-5'>Nothing to Display!!</p>  
      }
    </Row>
    </>
  )
}

export default Home