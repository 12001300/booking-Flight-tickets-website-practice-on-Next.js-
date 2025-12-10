"use client"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Link from "next/link"
import { useState } from "react"
import "../globals.css"
export default function TicketCard({flightData}) {
    const [currency,setCurrency]=useState("USD")
  console.log(flightData)
    return (<>
    {flightData.map(flight=>(
        <div key={flight.flight_id} className="card" style={{padding:0}}>
   <div className="card-header d-flex row justify-content-between my-auto mx-0" width="100%">
    <p className='col-sm-3'>{flight.fares[currency]} {currency}</p>
   <div className="col-sm-3 text-center ">
        <DropdownButton 
            
            
            id={`dropdown-button-drop-start`}
            drop="start"
            variant="primary"
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
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link href="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    ))}
    </>
  )
}
