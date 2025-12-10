"use client"

import { useEffect, useState } from "react"
import LoginButton from "../component/LoginButton"
import { SearchForFlights } from "../lib/actions"
import TicketCard from "../component/TicketCard"
export default function BookingPage() {
  const [TripType,setTripType]=useState("")
  const [flightsData,setFlightData]=useState({
    departureAirport:null,
    arrivalAirport:null,
    TripType:null,
    TravelClass:null,
    flight_Date:null,
    return_flight_date:null

  })
  const [departureplaces,setDepartureplaces]=useState(null)
  const [arrivalplaces,setarrivalplaces]=useState(null)
  const [loading,setLoading]=useState(true)
  const [availableFlights,setavailableFlights]=useState([])
 useEffect(()=>{
  const fetchFlightData=async()=>{
    try{
      const res=await fetch("/api/flightData")
      const data=await res.json()
      const  departureData= await data.map(item=>({
       airport:item.departure.airport,
       city:item.departure.city
      })).filter((item,index,self)=>index===self.findIndex(t=>t.airport===item.airport))
      
      const  arrivalData= await data.map(item=>({
       airport:item.arrival.airport,
       city:item.arrival.city
      })).filter((item,index,self)=>index===self.findIndex(t=>t.airport===item.airport))
      
      // setFlightData(data)
      setarrivalplaces(arrivalData)
      setDepartureplaces(departureData)
      setLoading(false)
      console.log(data)
    }catch(err){
      console.error("Error fetching flights : " , err)
    }
  }
  fetchFlightData()
  
 },[])
 const handleSubmit=async(e)=>{

  e.preventDefault()
  setTimeout(async()=>{setLoading(false)
    const availableFlights= await SearchForFlights(flightsData)
    setavailableFlights(availableFlights)
  },3000)
  // console.log(flightsData)
 
  setLoading(true)
 }
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

      <div className="row mb-5 mt-5">
        <div className="col-sm-5">
    <label htmlFor="from" className="form-label">From</label>
    <input
    list="from"
    name="from"
    className="form-control"
    placeholder="search or select"
    onChange={(e)=>setFlightData((prev)=>({...prev,departureAirport:e.target.value}))}

    />
    <datalist id="from"  >
      {
        loading?<option>loading .....</option> :departureplaces.map(departurePlace=>(
          <option key={departurePlace.airport} value={`${departurePlace.airport}`}>{departurePlace.airport},{departurePlace.city}</option>
        ))
      }
      
      
        
    </datalist>
  </div>
  <div className="col-sm-2 d-flex justify-content-center align-items-center " style={{flexDirection:"row"}}>
    <i className="bi bi-arrow-left-right " style={{width:"0",height:"0"}}></i>

  </div>
        <div className="col-sm-5">
    <label htmlFor="to" className="form-label">To</label>
    <input
    list="to"
    name="to"
    className="form-control"
    placeholder="search or select"
    onChange={(e)=>setFlightData((prev)=>({...prev,arrivalAirport:e.target.value}))}
    />
    <datalist id="to"  >
      {
        loading?<option>loading .....</option> :arrivalplaces.map(ArrivalPlace=>(
          <option key={ArrivalPlace.airport} value={`${ArrivalPlace.airport}`}>{ArrivalPlace.airport},{ArrivalPlace.city}</option>
        ))
      }
      
      
        
    </datalist>
  </div>
        

       
      </div>
      <div className="row mt-3 mb-4">
        <div className="col-sm-3">
          <label htmlFor="Trip-Type" className="mb-2">Trip Type</label>

          <input
    list="Trip-Type"
    name="Trip-Type"
    className="form-control"
    placeholder="search or select"
    value={TripType}
    onChange={(e)=>{setTripType(e.target.value)
      setFlightData((prev)=>({...prev,TripType:e.target.value}))
    }}
    />
    <datalist id="Trip-Type"  >
      <option  value="One-Way"></option>
       <option  value="Round-Trip"></option>
    </datalist>

        </div>
        <div className="col-sm-3">
          <label htmlFor="Travel-class" className="mb-2">Travel Class</label>
          <input
    list="Travel-class"
    name="Travel-class"
    className="form-control"
    placeholder="search or select"
    onChange={(e)=>setFlightData((prev)=>({...prev,TravelClass:e.target.value}))}
    />
    <datalist id="Travel-class"  >
      <option  value="Economy"></option>
       <option  value="Premium Economy"></option>
       <option  value="Business"></option>
       <option  value="First"></option>
    </datalist>

        </div>
        {TripType==="One-Way"?
        <div className="col-sm-6">
          <label htmlFor="flight-Departure-Date" className="mb-2">flight Date</label>
      <input
    list="Trip-Date"
    name="Trip-Date"
    className="form-control"
    onChange={(e)=>setFlightData((prev)=>({...prev,flight_Date:e.target.value}))}
    type="date"
    
    />
    {/* <datalist id="Trip-Date"  >
      <option  value="One-Way"></option>
       <option  value="Round-Trip"></option>
    </datalist> */}
        </div>
        :
        <div className="col-sm-6">
          
          <div className="row">

          <div className="col-sm-6">
<label htmlFor="Trip-D-Date" className="mb-2" style={{width:"180px"}}>flight Departure Date</label>
      <input
    list="Trip-Date"
    name="Trip-D-Date"
    className="form-control col-sm-6"
    placeholder="Departure Date"
    type="date"
    onChange={(e)=>setFlightData((prev)=>({...prev,flight_Date:e.target.value}))}
    />
    </div>
    <div className="col-sm-6">
<label htmlFor="Trip-R-Date" className="mb-2">flight Return Date</label>
      <input
    list="Trip-Date"
    name="Trip-R-Date"
    className="form-control col-sm-6"
    placeholder="Arrive Date"
    type="date"
    onChange={(e)=>setFlightData((prev)=>({...prev,return_flight_date:e.target.value}))}
    />
    </div>
    </div>

        </div>
      }
      <div className="row d-flex justify-content-center">
        <div className="col-sm-3  py-3" style={{textAlign:"center"}}>
          <button className="btn aurora-background-button" disabled={loading} style={{color:"#ffffff" , border:"solid white 1px"}}>
             {loading ?<div><span className="spinner-border spinner-border-sm" aria-hidden="true"></span> Searching</div>:"Search"}
          </button>
        </div>

      </div>

      </div>
      </form>

      {availableFlights.noTickets&&  <div className="alert alert-danger d-flex align-items-center" role="alert">
  <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"></svg>
  <div>
   {availableFlights.noTickets}
  </div>
</div>


}
        {availableFlights.length!=0 && !availableFlights.noTickets ?
        
      <div className="row">
          <TicketCard flightData={availableFlights}/>
        </div>:""
        
      }
    </div>
  )
}
