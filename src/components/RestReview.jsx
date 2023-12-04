import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({reviews}) {
  const [open, setOpen] = useState(false);
  return (
    <>
       <button onClick={() => setOpen(!open)} type="button" class="btn btn-outline-primary" fdprocessedid="3iuqur">Click here to View the Review</button>
       
       
      <Collapse in={open}>
              <div className='my-4'>

             { reviews?.map((item)=>(<>
             
              <hr />
              <h6 style={{color:'black'}}>name : {item.name} - date : {item.date}</h6>
              <p style={{color:'black'}}>Rating : {item.rating}</p>
              <p>{item.comments}</p>
             
             </>))
              }
              </div>
        
      </Collapse>

    </>
  )
}

export default RestReview