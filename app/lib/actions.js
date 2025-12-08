export  const SearchForFlights=async(flightsData)=>{
   
    const res=await fetch("http://localhost:3000/api/flightData").then(data=>data.json())
    console.log(flightsData)
    const availableFlights=await res.filter((flight)=>(flightsData.departureAirport===flight.departure.airport&&flightsData.arrivalAirport===flight.arrival.airport
             && flightsData.TripType===flight.trip_type &&flightsData.TravelClass===flight.travel_class && flightsData.flight_Date===flight.departure.date
    )||(flightsData.TripType==="One-Way"?flightsData.return_flight_date=null:flightsData.return_flight_date===flight.return_flight)
    //  (flightsData.return_flight_date===flight.return_flight?.departure?.date)

    )
    if(availableFlights.length!=0){

        console.log("this is the available flights : " , availableFlights)
    }
    else{
        console.log("there are no available flights like this ")
    }

}