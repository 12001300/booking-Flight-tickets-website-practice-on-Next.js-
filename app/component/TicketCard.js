"use client"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Link from "next/link"
import { useState } from "react"
import "../globals.css"
import { relative } from 'path';
import { Button } from 'react-bootstrap';
export default function TicketCard({flightData}) {
    const [currency,setCurrency]=useState("USD")
  console.log(flightData)
    return (<>
    {flightData.map(flight=>(
        <div key={flight.flight_id} className="card  bg-transparent" style={{padding:0 ,color:'white',boxShadow: "17px 10px 60px #a687a4"}}>
   <div className="card-header d-flex row justify-content-around mx-0" width="100%">
    <p className='col-4 my-auto'>{flight.fares[currency]} {currency}</p>
            
   <div className="col-6 d-flex justify-content-end " style={{ color:"white" , }}  >
        <DropdownButton 
            // as={Button}

            id={`dropdown-button-drop-start`}
           variant='none'
           border="none"
           color='white'
           bsPrefix='btn'

            drop="start"
          
            
            title={`Choose Currency`}
          >
             {Object.keys(flight.fares).map(curr=>(
        <Dropdown.Item onClick={()=>setCurrency(curr)} eventKey={curr} key={curr} value={curr}>
        {curr}
    </Dropdown.Item> 

      ))}
           
          </DropdownButton>

         {/* <div className="btn-group dropend">
  <button type="button" className="btn btn-secondary dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
    Choose Currency
  </button>
  <ul className="dropdown-menu">
    
      {Object.keys(flight.fares).map(curr=>(
        <li  key={curr} value={curr}>
        <p className="dropdown-item">{curr}</p> 
    </li> 

      ))}
       
  </ul>
</div> */}

   </div>
  
</div>
    
  
  <div className="card-body">
    <div className='row'>
      <div className='col-5 text-center'>

     <h5 className="card-title ">{flight.departure.airport}</h5>
     <h6>{flight.departure.city}</h6>
      </div>
    <span className=' col-2 text-center'><i className="bi bi-arrow-right d-block "></i></span>
     <div className='col-5 text-center'>

     <h5 className="card-title ">{flight.arrival.airport}</h5>
     <h6>{flight.arrival.city}</h6>
      </div>


    </div>
    <div className='row'>

    <p className="card-text col-5 text-center">{flight.departure.time}</p>
    <p className='col-2'></p>
    <p className="card-text col-5 text-center">{flight.arrival.time}</p>
    </div>
    <div className='row d-flex' style={{flexDirection:"row-reverse"}}>

    <Link href="/booking/ticket-detailes" className="btn bg-transparent  col-3 mx-3 " style={{boxShadow:" 0px 0px 5px 3px"}}>more details</Link>
    </div>
  </div>
</div>
    ))}
    </>
  )
}
