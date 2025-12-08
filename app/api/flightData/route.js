import { NextResponse } from "next/server"

const data=[
 
    {
      "flight_id": "FL001",
      "flight_number": "UA456",
      "airline": "United Airlines",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "ORD",
        "city": "Chicago",
        "time": "08:15 AM",
        "date": "2025-12-06"
      },
      "arrival": {
        "airport": "SFO",
        "city": "San Francisco",
        "time": "11:00 AM",
        "date": "2025-12-06"
      },
      "status": "On Time",
      "fares": {
        "USD": 285.50,
        "EUR": 264.84,
        "GBP": 227.15
      },
      "return_flight": null
    },
    {
      "flight_id": "FL002",
      "flight_number": "BA003",
      "airline": "British Airways",
      "trip_type": "Round-Trip",
      "travel_class": "Business",
      "departure": {
        "airport": "LHR",
        "city": "London",
        "time": "09:30 AM",
        "date": "2025-12-10"
      },
      "arrival": {
        "airport": "JFK",
        "city": "New York",
        "time": "12:30 PM",
        "date": "2025-12-10"
      },
      "status": "Delayed",
      "fares": {
        "USD": 2800.00,
        "EUR": 2598.00,
        "GBP": 2230.00
      },
      "return_flight": {
        "flight_number": "BA004",
        "departure": {
          "airport": "JFK",
          "city": "New York",
          "time": "06:00 PM",
          "date": "2025-12-17"
        },
        "arrival": {
          "airport": "LHR",
          "city": "London",
          "time": "06:00 AM",
          "date": "2025-12-18"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL003",
      "flight_number": "LH789",
      "airline": "Lufthansa",
      "trip_type": "One-Way",
      "travel_class": "First",
      "departure": {
        "airport": "FRA",
        "city": "Frankfurt",
        "time": "14:00 PM",
        "date": "2025-12-12"
      },
      "arrival": {
        "airport": "DXB",
        "city": "Dubai",
        "time": "23:55 PM",
        "date": "2025-12-12"
      },
      "status": "Cancelled",
      "fares": {
        "USD": 7500.00,
        "EUR": 6960.00,
        "GBP": 5975.00
      },
      "return_flight": null
    },
    {
      "flight_id": "FL004",
      "flight_number": "AA101",
      "airline": "American Airlines",
      "trip_type": "Round-Trip",
      "travel_class": "Premium Economy",
      "departure": {
        "airport": "LAX",
        "city": "Los Angeles",
        "time": "22:00 PM",
        "date": "2025-12-20"
      },
      "arrival": {
        "airport": "SYD",
        "city": "Sydney",
        "time": "06:45 AM",
        "date": "2025-12-22"
      },
      "status": "On Time",
      "fares": {
        "USD": 1450.00,
        "EUR": 1346.25,
        "GBP": 1155.25
      },
      "return_flight": {
        "flight_number": "AA102",
        "departure": {
          "airport": "SYD",
          "city": "Sydney",
          "time": "15:30 PM",
          "date": "2026-01-05"
        },
        "arrival": {
          "airport": "LAX",
          "city": "Los Angeles",
          "time": "10:00 AM",
          "date": "2026-01-05"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL005",
      "flight_number": "DL200",
      "airline": "Delta Air Lines",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "ATL",
        "city": "Atlanta",
        "time": "07:00 AM",
        "date": "2026-01-01"
      },
      "arrival": {
        "airport": "MIA",
        "city": "Miami",
        "time": "09:00 AM",
        "date": "2026-01-01"
      },
      "status": "Scheduled",
      "fares": {
        "USD": 150.99,
        "EUR": 140.16,
        "GBP": 120.24
      },
      "return_flight": null
    },
    {
      "flight_id": "FL006",
      "flight_number": "EK555",
      "airline": "Emirates",
      "trip_type": "Round-Trip",
      "travel_class": "Business",
      "departure": {
        "airport": "DXB",
        "city": "Dubai",
        "time": "01:30 AM",
        "date": "2025-12-25"
      },
      "arrival": {
        "airport": "CDG",
        "city": "Paris",
        "time": "06:00 AM",
        "date": "2025-12-25"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 3500.00,
        "EUR": 3248.75,
        "GBP": 2788.75
      },
      "return_flight": {
        "flight_number": "EK556",
        "departure": {
          "airport": "CDG",
          "city": "Paris",
          "time": "11:00 AM",
          "date": "2026-01-02"
        },
        "arrival": {
          "airport": "DXB",
          "city": "Dubai",
          "time": "08:00 PM",
          "date": "2026-01-02"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL007",
      "flight_number": "QR123",
      "airline": "Qatar Airways",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "DOH",
        "city": "Doha",
        "time": "17:00 PM",
        "date": "2025-12-08"
      },
      "arrival": {
        "airport": "BCN",
        "city": "Barcelona",
        "time": "22:10 PM",
        "date": "2025-12-08"
      },
      "status": "On Time",
      "fares": {
        "USD": 620.00,
        "EUR": 575.70,
        "GBP": 494.30
      },
      "return_flight": null
    },
    {
      "flight_id": "FL008",
      "flight_number": "AF987",
      "airline": "Air France",
      "trip_type": "One-Way",
      "travel_class": "Premium Economy",
      "departure": {
        "airport": "CDG",
        "city": "Paris",
        "time": "13:45 PM",
        "date": "2025-12-24"
      },
      "arrival": {
        "airport": "NRT",
        "city": "Tokyo",
        "time": "08:00 AM",
        "date": "2025-12-25"
      },
      "status": "Boarding",
      "fares": {
        "USD": 1120.00,
        "EUR": 1040.25,
        "GBP": 893.20
      },
      "return_flight": null
    },
    {
      "flight_id": "FL009",
      "flight_number": "AC321",
      "airline": "Air Canada",
      "trip_type": "Round-Trip",
      "travel_class": "Economy",
      "departure": {
        "airport": "YYZ",
        "city": "Toronto",
        "time": "18:00 PM",
        "date": "2026-01-15"
      },
      "arrival": {
        "airport": "VCR",
        "city": "Vancouver",
        "time": "20:30 PM",
        "date": "2026-01-15"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 320.00,
        "EUR": 297.20,
        "GBP": 255.20
      },
      "return_flight": {
        "flight_number": "AC322",
        "departure": {
          "airport": "VCR",
          "city": "Vancouver",
          "time": "10:00 AM",
          "date": "2026-01-22"
        },
        "arrival": {
          "airport": "YYZ",
          "city": "Toronto",
          "time": "04:15 PM",
          "date": "2026-01-22"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL010",
      "flight_number": "SQ001",
      "airline": "Singapore Airlines",
      "trip_type": "One-Way",
      "travel_class": "First",
      "departure": {
        "airport": "SIN",
        "city": "Singapore",
        "time": "10:00 AM",
        "date": "2025-12-30"
      },
      "arrival": {
        "airport": "LHR",
        "city": "London",
        "time": "17:30 PM",
        "date": "2025-12-30"
      },
      "status": "On Time",
      "fares": {
        "USD": 8500.00,
        "EUR": 7897.50,
        "GBP": 6780.00
      },
      "return_flight": null
    },
    {
      "flight_id": "FL011",
      "flight_number": "VS111",
      "airline": "Virgin Atlantic",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "MCO",
        "city": "Orlando",
        "time": "16:00 PM",
        "date": "2025-12-07"
      },
      "arrival": {
        "airport": "MAN",
        "city": "Manchester",
        "time": "05:00 AM",
        "date": "2025-12-08"
      },
      "status": "On Time",
      "fares": {
        "USD": 450.00,
        "EUR": 417.88,
        "GBP": 358.50
      },
      "return_flight": null
    },
    {
      "flight_id": "FL012",
      "flight_number": "TK222",
      "airline": "Turkish Airlines",
      "trip_type": "Round-Trip",
      "travel_class": "Business",
      "departure": {
        "airport": "IST",
        "city": "Istanbul",
        "time": "20:45 PM",
        "date": "2026-01-05"
      },
      "arrival": {
        "airport": "BKK",
        "city": "Bangkok",
        "time": "09:50 AM",
        "date": "2026-01-06"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 2300.00,
        "EUR": 2135.88,
        "GBP": 1833.50
      },
      "return_flight": {
        "flight_number": "TK223",
        "departure": {
          "airport": "BKK",
          "city": "Bangkok",
          "time": "13:00 PM",
          "date": "2026-01-19"
        },
        "arrival": {
          "airport": "IST",
          "city": "Istanbul",
          "time": "19:00 PM",
          "date": "2026-01-19"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL013",
      "flight_number": "SA432",
      "airline": "South African Airways",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "JNB",
        "city": "Johannesburg",
        "time": "11:00 AM",
        "date": "2025-12-18"
      },
      "arrival": {
        "airport": "CPT",
        "city": "Cape Town",
        "time": "01:00 PM",
        "date": "2025-12-18"
      },
      "status": "Boarding",
      "fares": {
        "USD": 180.00,
        "EUR": 167.18,
        "GBP": 143.40
      },
      "return_flight": null
    },
    {
      "flight_id": "FL014",
      "flight_number": "QF007",
      "airline": "Qantas",
      "trip_type": "Round-Trip",
      "travel_class": "First",
      "departure": {
        "airport": "MEL",
        "city": "Melbourne",
        "time": "19:00 PM",
        "date": "2026-01-20"
      },
      "arrival": {
        "airport": "LAX",
        "city": "Los Angeles",
        "time": "14:00 PM",
        "date": "2026-01-20"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 9100.00,
        "EUR": 8450.50,
        "GBP": 7253.50
      },
      "return_flight": {
        "flight_number": "QF008",
        "departure": {
          "airport": "LAX",
          "city": "Los Angeles",
          "time": "23:00 PM",
          "date": "2026-02-05"
        },
        "arrival": {
          "airport": "MEL",
          "city": "Melbourne",
          "time": "08:30 AM",
          "date": "2026-02-07"
        },
        "status": "Scheduled"
      }
    },
    {
      "flight_id": "FL015",
      "flight_number": "AA123",
      "airline": "American Airlines",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "JFK",
        "city": "New York",
        "time": "10:00 AM",
        "date": "2025-12-15"
      },
      "arrival": {
        "airport": "LAX",
        "city": "Los Angeles",
        "time": "1:30 PM",
        "date": "2025-12-15"
      },
      "status": "On Time",
      "fares": {
        "USD": 350.00,
        "EUR": 324.88,
        "GBP": 278.75
      },
      "return_flight": null
    },
    {
      "flight_id": "FL016",
      "flight_number": "CA981",
      "airline": "Air China",
      "trip_type": "One-Way",
      "travel_class": "Premium Economy",
      "departure": {
        "airport": "PEK",
        "city": "Beijing",
        "time": "06:00 AM",
        "date": "2025-12-28"
      },
      "arrival": {
        "airport": "SFO",
        "city": "San Francisco",
        "time": "01:00 AM",
        "date": "2025-12-28"
      },
      "status": "Gate Change",
      "fares": {
        "USD": 950.00,
        "EUR": 882.38,
        "GBP": 757.25
      },
      "return_flight": null
    },
    {
      "flight_id": "FL017",
      "flight_number": "JL501",
      "airline": "Japan Airlines",
      "trip_type": "Round-Trip",
      "travel_class": "Business",
      "departure": {
        "airport": "HND",
        "city": "Tokyo",
        "time": "12:00 PM",
        "date": "2026-01-10"
      },
      "arrival": {
        "airport": "HKG",
        "city": "Hong Kong",
        "time": "04:30 PM",
        "date": "2026-01-10"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 1800.00,
        "EUR": 1671.75,
        "GBP": 1434.00
      },
      "return_flight": {
        "flight_number": "JL502",
        "departure": {
          "airport": "HKG",
          "city": "Hong Kong",
          "time": "07:00 PM",
          "date": "2026-01-14"
        },
        "arrival": {
          "airport": "HND",
          "city": "Tokyo",
          "time": "11:30 PM",
          "date": "2026-01-14"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL018",
      "flight_number": "IB600",
      "airline": "Iberia",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "MAD",
        "city": "Madrid",
        "time": "15:30 PM",
        "date": "2025-12-06"
      },
      "arrival": {
        "airport": "EZE",
        "city": "Buenos Aires",
        "time": "00:30 AM",
        "date": "2025-12-07"
      },
      "status": "Delayed",
      "fares": {
        "USD": 780.00,
        "EUR": 724.05,
        "GBP": 621.15
      },
      "return_flight": null
    },
    {
      "flight_id": "FL019",
      "flight_number": "OZ111",
      "airline": "Asiana Airlines",
      "trip_type": "Round-Trip",
      "travel_class": "First",
      "departure": {
        "airport": "ICN",
        "city": "Seoul",
        "time": "14:00 PM",
        "date": "2026-02-01"
      },
      "arrival": {
        "airport": "FRA",
        "city": "Frankfurt",
        "time": "18:30 PM",
        "date": "2026-02-01"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 6200.00,
        "EUR": 5757.00,
        "GBP": 4943.00
      },
      "return_flight": {
        "flight_number": "OZ112",
        "departure": {
          "airport": "FRA",
          "city": "Frankfurt",
          "time": "20:00 PM",
          "date": "2026-02-15"
        },
        "arrival": {
          "airport": "ICN",
          "city": "Seoul",
          "time": "12:00 PM",
          "date": "2026-02-16"
        },
        "status": "Scheduled"
      }
    },
    {
      "flight_id": "FL020",
      "flight_number": "AZ888",
      "airline": "ITA Airways",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "FCO",
        "city": "Rome",
        "time": "10:00 AM",
        "date": "2025-12-21"
      },
      "arrival": {
        "airport": "TLV",
        "city": "Tel Aviv",
        "time": "02:45 PM",
        "date": "2025-12-21"
      },
      "status": "On Time",
      "fares": {
        "USD": 310.00,
        "EUR": 287.68,
        "GBP": 247.00
      },
      "return_flight": null
    },
    {
      "flight_id": "FL021",
      "flight_number": "CX333",
      "airline": "Cathay Pacific",
      "trip_type": "One-Way",
      "travel_class": "Premium Economy",
      "departure": {
        "airport": "HKG",
        "city": "Hong Kong",
        "time": "08:00 AM",
        "date": "2026-01-08"
      },
      "arrival": {
        "airport": "TPE",
        "city": "Taipei",
        "time": "09:30 AM",
        "date": "2026-01-08"
      },
      "status": "On Time",
      "fares": {
        "USD": 450.00,
        "EUR": 417.88,
        "GBP": 358.50
      },
      "return_flight": null
    },
    {
      "flight_id": "FL022",
      "flight_number": "ET700",
      "airline": "Ethiopian Airlines",
      "trip_type": "Round-Trip",
      "travel_class": "Business",
      "departure": {
        "airport": "ADD",
        "city": "Addis Ababa",
        "time": "23:00 PM",
        "date": "2025-12-15"
      },
      "arrival": {
        "airport": "PEK",
        "city": "Beijing",
        "time": "14:00 PM",
        "date": "2025-12-16"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 2950.00,
        "EUR": 2738.62,
        "GBP": 2350.75
      },
      "return_flight": {
        "flight_number": "ET701",
        "departure": {
          "airport": "PEK",
          "city": "Beijing",
          "time": "09:00 AM",
          "date": "2025-12-29"
        },
        "arrival": {
          "airport": "ADD",
          "city": "Addis Ababa",
          "time": "14:30 PM",
          "date": "2025-12-29"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL023",
      "flight_number": "NZ90",
      "airline": "Air New Zealand",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "AKL",
        "city": "Auckland",
        "time": "18:00 PM",
        "date": "2026-01-25"
      },
      "arrival": {
        "airport": "TBU",
        "city": "Nuku'alofa",
        "time": "20:30 PM",
        "date": "2026-01-25"
      },
      "status": "On Time",
      "fares": {
        "USD": 195.00,
        "EUR": 181.01,
        "GBP": 155.33
      },
      "return_flight": null
    },
    {
      "flight_id": "FL024",
      "flight_number": "MS999",
      "airline": "EgyptAir",
      "trip_type": "Round-Trip",
      "travel_class": "First",
      "departure": {
        "airport": "CAI",
        "city": "Cairo",
        "time": "11:00 AM",
        "date": "2025-12-11"
      },
      "arrival": {
        "airport": "LHR",
        "city": "London",
        "time": "02:30 PM",
        "date": "2025-12-11"
      },
      "status": "Delayed",
      "fares": {
        "USD": 5500.00,
        "EUR": 5108.75,
        "GBP": 4382.50
      },
      "return_flight": {
        "flight_number": "MS998",
        "departure": {
          "airport": "LHR",
          "city": "London",
          "time": "05:00 PM",
          "date": "2025-12-18"
        },
        "arrival": {
          "airport": "CAI",
          "city": "Cairo",
          "time": "10:30 PM",
          "date": "2025-12-18"
        },
        "status": "Delayed"
      }
    },
    {
      "flight_id": "FL025",
      "flight_number": "TP101",
      "airline": "TAP Air Portugal",
      "trip_type": "One-Way",
      "travel_class": "Premium Economy",
      "departure": {
        "airport": "LIS",
        "city": "Lisbon",
        "time": "14:00 PM",
        "date": "2025-12-09"
      },
      "arrival": {
        "airport": "GIG",
        "city": "Rio de Janeiro",
        "time": "21:00 PM",
        "date": "2025-12-09"
      },
      "status": "On Time",
      "fares": {
        "USD": 850.00,
        "EUR": 789.75,
        "GBP": 678.00
      },
      "return_flight": null
    },
    {
      "flight_id": "FL026",
      "flight_number": "AM444",
      "airline": "Aeromexico",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "MEX",
        "city": "Mexico City",
        "time": "07:30 AM",
        "date": "2026-01-03"
      },
      "arrival": {
        "airport": "MIA",
        "city": "Miami",
        "time": "11:00 AM",
        "date": "2026-01-03"
      },
      "status": "On Time",
      "fares": {
        "USD": 230.00,
        "EUR": 213.59,
        "GBP": 183.35
      },
      "return_flight": null
    },
    {
      "flight_id": "FL027",
      "flight_number": "SU777",
      "airline": "Aeroflot",
      "trip_type": "Round-Trip",
      "travel_class": "Business",
      "departure": {
        "airport": "SVO",
        "city": "Moscow",
        "time": "13:00 PM",
        "date": "2026-02-10"
      },
      "arrival": {
        "airport": "DEL",
        "city": "New Delhi",
        "time": "20:30 PM",
        "date": "2026-02-10"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 1950.00,
        "EUR": 1810.12,
        "GBP": 1553.25
      },
      "return_flight": {
        "flight_number": "SU778",
        "departure": {
          "airport": "DEL",
          "city": "New Delhi",
          "time": "08:00 AM",
          "date": "2026-02-24"
        },
        "arrival": {
          "airport": "SVO",
          "city": "Moscow",
          "time": "12:00 PM",
          "date": "2026-02-24"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL028",
      "flight_number": "SN001",
      "airline": "Brussels Airlines",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "BRU",
        "city": "Brussels",
        "time": "16:45 PM",
        "date": "2025-12-16"
      },
      "arrival": {
        "airport": "GVA",
        "city": "Geneva",
        "time": "18:00 PM",
        "date": "2025-12-16"
      },
      "status": "Cancelled",
      "fares": {
        "USD": 120.00,
        "EUR": 111.45,
        "GBP": 95.60
      },
      "return_flight": null
    },
    {
      "flight_id": "FL029",
      "flight_number": "WS400",
      "airline": "WestJet",
      "trip_type": "One-Way",
      "travel_class": "Premium Economy",
      "departure": {
        "airport": "YVR",
        "city": "Vancouver",
        "time": "21:00 PM",
        "date": "2026-01-28"
      },
      "arrival": {
        "airport": "HNL",
        "city": "Honolulu",
        "time": "01:00 AM",
        "date": "2026-01-29"
      },
      "status": "On Time",
      "fares": {
        "USD": 700.00,
        "EUR": 650.12,
        "GBP": 557.75
      },
      "return_flight": null
    },
    {
      "flight_id": "FL030",
      "flight_number": "HA605",
      "airline": "Hawaiian Airlines",
      "trip_type": "Round-Trip",
      "travel_class": "Economy",
      "departure": {
        "airport": "HNL",
        "city": "Honolulu",
        "time": "08:00 AM",
        "date": "2025-12-07"
      },
      "arrival": {
        "airport": "OGG",
        "city": "Maui",
        "time": "08:45 AM",
        "date": "2025-12-07"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 110.00,
        "EUR": 102.13,
        "GBP": 87.65
      },
      "return_flight": {
        "flight_number": "HA606",
        "departure": {
          "airport": "OGG",
          "city": "Maui",
          "time": "05:00 PM",
          "date": "2025-12-14"
        },
        "arrival": {
          "airport": "HNL",
          "city": "Honolulu",
          "time": "05:45 PM",
          "date": "2025-12-14"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL031",
      "flight_number": "SK808",
      "airline": "SAS",
      "trip_type": "One-Way",
      "travel_class": "Business",
      "departure": {
        "airport": "OSL",
        "city": "Oslo",
        "time": "17:00 PM",
        "date": "2026-01-18"
      },
      "arrival": {
        "airport": "CPH",
        "city": "Copenhagen",
        "time": "18:10 PM",
        "date": "2026-01-18"
      },
      "status": "On Time",
      "fares": {
        "USD": 550.00,
        "EUR": 510.88,
        "GBP": 438.25
      },
      "return_flight": null
    },
    {
      "flight_id": "FL032",
      "flight_number": "FI201",
      "airline": "Icelandair",
      "trip_type": "Round-Trip",
      "travel_class": "Economy",
      "departure": {
        "airport": "KEF",
        "city": "Reykjavik",
        "time": "14:00 PM",
        "date": "2025-12-22"
      },
      "arrival": {
        "airport": "BOS",
        "city": "Boston",
        "time": "04:30 PM",
        "date": "2025-12-22"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 580.00,
        "EUR": 538.52,
        "GBP": 462.10
      },
      "return_flight": {
        "flight_number": "FI202",
        "departure": {
          "airport": "BOS",
          "city": "Boston",
          "time": "08:00 PM",
          "date": "2025-12-29"
        },
        "arrival": {
          "airport": "KEF",
          "city": "Reykjavik",
          "time": "06:00 AM",
          "date": "2025-12-30"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL033",
      "flight_number": "NH181",
      "airline": "ANA",
      "trip_type": "One-Way",
      "travel_class": "First",
      "departure": {
        "airport": "NRT",
        "city": "Tokyo",
        "time": "09:00 AM",
        "date": "2026-01-05"
      },
      "arrival": {
        "airport": "PEK",
        "city": "Beijing",
        "time": "12:00 PM",
        "date": "2026-01-05"
      },
      "status": "On Time",
      "fares": {
        "USD": 3000.00,
        "EUR": 2786.25,
        "GBP": 2392.50
      },
      "return_flight": null
    },
    {
      "flight_id": "FL034",
      "flight_number": "KL643",
      "airline": "KLM",
      "trip_type": "Round-Trip",
      "travel_class": "Premium Economy",
      "departure": {
        "airport": "AMS",
        "city": "Amsterdam",
        "time": "14:30 PM",
        "date": "2025-12-19"
      },
      "arrival": {
        "airport": "SFO",
        "city": "San Francisco",
        "time": "17:00 PM",
        "date": "2025-12-19"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 1350.00,
        "EUR": 1253.81,
        "GBP": 1076.63
      },
      "return_flight": {
        "flight_number": "KL644",
        "departure": {
          "airport": "SFO",
          "city": "San Francisco",
          "time": "19:00 PM",
          "date": "2026-01-03"
        },
        "arrival": {
          "airport": "AMS",
          "city": "Amsterdam",
          "time": "14:30 PM",
          "date": "2026-01-04"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL035",
      "flight_number": "GF123",
      "airline": "Gulf Air",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "BAH",
        "city": "Manama",
        "time": "09:00 AM",
        "date": "2026-02-15"
      },
      "arrival": {
        "airport": "JED",
        "city": "Jeddah",
        "time": "11:00 AM",
        "date": "2026-02-15"
      },
      "status": "On Time",
      "fares": {
        "USD": 190.00,
        "EUR": 176.49,
        "GBP": 151.45
      },
      "return_flight": null
    },
    {
      "flight_id": "FL036",
      "flight_number": "RJ300",
      "airline": "Royal Jordanian",
      "trip_type": "One-Way",
      "travel_class": "Business",
      "departure": {
        "airport": "AMM",
        "city": "Amman",
        "time": "11:00 AM",
        "date": "2025-12-06"
      },
      "arrival": {
        "airport": "TLV",
        "city": "Tel Aviv",
        "time": "11:45 AM",
        "date": "2025-12-06"
      },
      "status": "Delayed",
      "fares": {
        "USD": 450.00,
        "EUR": 417.88,
        "GBP": 358.50
      },
      "return_flight": null
    },
    {
      "flight_id": "FL037",
      "flight_number": "UL800",
      "airline": "SriLankan Airlines",
      "trip_type": "Round-Trip",
      "travel_class": "Economy",
      "departure": {
        "airport": "CMB",
        "city": "Colombo",
        "time": "17:00 PM",
        "date": "2026-03-01"
      },
      "arrival": {
        "airport": "SIN",
        "city": "Singapore",
        "time": "22:00 PM",
        "date": "2026-03-01"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 380.00,
        "EUR": 352.95,
        "GBP": 302.90
      },
      "return_flight": {
        "flight_number": "UL801",
        "departure": {
          "airport": "SIN",
          "city": "Singapore",
          "time": "06:00 AM",
          "date": "2026-03-08"
        },
        "arrival": {
          "airport": "CMB",
          "city": "Colombo",
          "time": "07:30 AM",
          "date": "2026-03-08"
        },
        "status": "Scheduled"
      }
    },
    {
      "flight_id": "FL038",
      "flight_number": "IB444",
      "airline": "Iberia",
      "trip_type": "One-Way",
      "travel_class": "Premium Economy",
      "departure": {
        "airport": "MAD",
        "city": "Madrid",
        "time": "09:00 AM",
        "date": "2026-01-20"
      },
      "arrival": {
        "airport": "MEX",
        "city": "Mexico City",
        "time": "02:00 PM",
        "date": "2026-01-20"
      },
      "status": "On Time",
      "fares": {
        "USD": 1050.00,
        "EUR": 975.19,
        "GBP": 837.38
      },
      "return_flight": null
    },
    {
      "flight_id": "FL039",
      "flight_number": "LY300",
      "airline": "El Al",
      "trip_type": "Round-Trip",
      "travel_class": "First",
      "departure": {
        "airport": "TLV",
        "city": "Tel Aviv",
        "time": "23:00 PM",
        "date": "2025-12-25"
      },
      "arrival": {
        "airport": "JFK",
        "city": "New York",
        "time": "04:30 AM",
        "date": "2025-12-26"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 7000.00,
        "EUR": 6501.25,
        "GBP": 5577.50
      },
      "return_flight": {
        "flight_number": "LY301",
        "departure": {
          "airport": "JFK",
          "city": "New York",
          "time": "08:00 AM",
          "date": "2026-01-10"
        },
        "arrival": {
          "airport": "TLV",
          "city": "Tel Aviv",
          "time": "01:30 PM",
          "date": "2026-01-11"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL040",
      "flight_number": "KE017",
      "airline": "Korean Air",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "ICN",
        "city": "Seoul",
        "time": "10:30 AM",
        "date": "2026-01-12"
      },
      "arrival": {
        "airport": "LAX",
        "city": "Los Angeles",
        "time": "05:00 AM",
        "date": "2026-01-12"
      },
      "status": "On Time",
      "fares": {
        "USD": 720.00,
        "EUR": 668.70,
        "GBP": 574.20
      },
      "return_flight": null
    },
    {
      "flight_id": "FL041",
      "flight_number": "HU792",
      "airline": "Hainan Airlines",
      "trip_type": "One-Way",
      "travel_class": "Business",
      "departure": {
        "airport": "PEK",
        "city": "Beijing",
        "time": "15:00 PM",
        "date": "2025-12-14"
      },
      "arrival": {
        "airport": "BRU",
        "city": "Brussels",
        "time": "19:30 PM",
        "date": "2025-12-14"
      },
      "status": "On Time",
      "fares": {
        "USD": 2100.00,
        "EUR": 1950.37,
        "GBP": 1674.75
      },
      "return_flight": null
    },
    {
      "flight_id": "FL042",
      "flight_number": "NH203",
      "airline": "ANA",
      "trip_type": "Round-Trip",
      "travel_class": "Premium Economy",
      "departure": {
        "airport": "HND",
        "city": "Tokyo",
        "time": "08:00 AM",
        "date": "2026-02-20"
      },
      "arrival": {
        "airport": "CDG",
        "city": "Paris",
        "time": "14:30 PM",
        "date": "2026-02-20"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 1600.00,
        "EUR": 1486.00,
        "GBP": 1276.00
      },
      "return_flight": {
        "flight_number": "NH204",
        "departure": {
          "airport": "CDG",
          "city": "Paris",
          "time": "20:00 PM",
          "date": "2026-03-05"
        },
        "arrival": {
          "airport": "HND",
          "city": "Tokyo",
          "time": "15:30 PM",
          "date": "2026-03-06"
        },
        "status": "Scheduled"
      }
    },
    {
      "flight_id": "FL043",
      "flight_number": "AA505",
      "airline": "American Airlines",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "DFW",
        "city": "Dallas",
        "time": "12:00 PM",
        "date": "2025-12-23"
      },
      "arrival": {
        "airport": "LAS",
        "city": "Las Vegas",
        "time": "01:30 PM",
        "date": "2025-12-23"
      },
      "status": "On Time",
      "fares": {
        "USD": 250.00,
        "EUR": 232.19,
        "GBP": 198.98
      },
      "return_flight": null
    },
    {
      "flight_id": "FL044",
      "flight_number": "SV100",
      "airline": "Saudia",
      "trip_type": "One-Way",
      "travel_class": "First",
      "departure": {
        "airport": "RUH",
        "city": "Riyadh",
        "time": "06:00 AM",
        "date": "2026-01-15"
      },
      "arrival": {
        "airport": "JED",
        "city": "Jeddah",
        "time": "07:30 AM",
        "date": "2026-01-15"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 950.00,
        "EUR": 882.38,
        "GBP": 757.25
      },
      "return_flight": null
    },
    {
      "flight_id": "FL045",
      "flight_number": "TG920",
      "airline": "Thai Airways",
      "trip_type": "Round-Trip",
      "travel_class": "Business",
      "departure": {
        "airport": "BKK",
        "city": "Bangkok",
        "time": "00:30 AM",
        "date": "2026-02-05"
      },
      "arrival": {
        "airport": "LHR",
        "city": "London",
        "time": "07:00 AM",
        "date": "2026-02-05"
      },
      "status": "On Time",
      "fares": {
        "USD": 2700.00,
        "EUR": 2507.62,
        "GBP": 2153.25
      },
      "return_flight": {
        "flight_number": "TG921",
        "departure": {
          "airport": "LHR",
          "city": "London",
          "time": "13:00 PM",
          "date": "2026-02-19"
        },
        "arrival": {
          "airport": "BKK",
          "city": "Bangkok",
          "time": "06:00 AM",
          "date": "2026-02-20"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL046",
      "flight_number": "LO278",
      "airline": "LOT Polish Airlines",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "WAW",
        "city": "Warsaw",
        "time": "14:00 PM",
        "date": "2025-12-10"
      },
      "arrival": {
        "airport": "VIE",
        "city": "Vienna",
        "time": "15:30 PM",
        "date": "2025-12-10"
      },
      "status": "On Time",
      "fares": {
        "USD": 140.00,
        "EUR": 129.98,
        "GBP": 111.53
      },
      "return_flight": null
    },
    {
      "flight_id": "FL047",
      "flight_number": "IB777",
      "airline": "Iberia",
      "trip_type": "Round-Trip",
      "travel_class": "Business",
      "departure": {
        "airport": "MAD",
        "city": "Madrid",
        "time": "19:00 PM",
        "date": "2026-01-20"
      },
      "arrival": {
        "airport": "BOG",
        "city": "Bogotá",
        "time": "22:00 PM",
        "date": "2026-01-20"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 1900.00,
        "EUR": 1764.88,
        "GBP": 1514.50
      },
      "return_flight": {
        "flight_number": "IB778",
        "departure": {
          "airport": "BOG",
          "city": "Bogotá",
          "time": "00:30 AM",
          "date": "2026-02-03"
        },
        "arrival": {
          "airport": "MAD",
          "city": "Madrid",
          "time": "03:30 PM",
          "date": "2026-02-03"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL048",
      "flight_number": "AF888",
      "airline": "Air France",
      "trip_type": "One-Way",
      "travel_class": "Economy",
      "departure": {
        "airport": "CDG",
        "city": "Paris",
        "time": "06:00 AM",
        "date": "2025-12-06"
      },
      "arrival": {
        "airport": "NCE",
        "city": "Nice",
        "time": "07:30 AM",
        "date": "2025-12-06"
      },
      "status": "On Time",
      "fares": {
        "USD": 110.00,
        "EUR": 102.13,
        "GBP": 87.65
      },
      "return_flight": null
    },
    {
      "flight_id": "FL049",
      "flight_number": "DL999",
      "airline": "Delta Air Lines",
      "trip_type": "One-Way",
      "travel_class": "Premium Economy",
      "departure": {
        "airport": "ATL",
        "city": "Atlanta",
        "time": "18:00 PM",
        "date": "2026-01-29"
      },
      "arrival": {
        "airport": "SLC",
        "city": "Salt Lake City",
        "time": "20:00 PM",
        "date": "2026-01-29"
      },
      "status": "Confirmed",
      "fares": {
        "USD": 450.00,
        "EUR": 417.88,
        "GBP": 358.50
      },
      "return_flight": null
    },
    {
      "flight_id": "FL050",
      "flight_number": "EK001",
      "airline": "Emirates",
      "trip_type": "Round-Trip",
      "travel_class": "First",
      "departure": {
        "airport": "DXB",
        "city": "Dubai",
        "time": "08:00 AM",
        "date": "2025-12-24"
      },
      "arrival": {
        "airport": "LHR",
        "city": "London",
        "time": "11:30 AM",
        "date": "2025-12-24"
      },
      "status": "On Time",
      "fares": {
        "USD": 12000.00,
        "EUR": 11145.00,
        "GBP": 9560.00
      },
      "return_flight": {
        "flight_number": "EK002",
        "departure": {
          "airport": "LHR",
          "city": "London",
          "time": "15:00 PM",
          "date": "2026-01-04"
        },
        "arrival": {
          "airport": "DXB",
          "city": "Dubai",
          "time": "01:45 AM",
          "date": "2026-01-05"
        },
        "status": "Confirmed"
      }
    },
    {
      "flight_id": "FL050",
      "flight_number": "EK001",
      "airline": "Emirates",
      "trip_type": "Round-Trip",
      "travel_class": "First",
      "departure": {
        "airport": "DXB",
        "city": "Dubai",
        "time": "08:00 AM",
        "date": "2025-12-24"
      },
      "arrival": {
        "airport": "LHR",
        "city": "London",
        "time": "11:30 AM",
        "date": "2025-12-24"
      },
      "status": "On Time",
      "fares": {
        "USD": 12000.00,
        "EUR": 11145.00,
        "GBP": 9560.00
      },
      "return_flight": {
        "flight_number": "EK002",
        "departure": {
          "airport": "LHR",
          "city": "London",
          "time": "15:00 PM",
          "date": "2026-01-04"
        },
        "arrival": {
          "airport": "DXB",
          "city": "Dubai",
          "time": "01:45 AM",
          "date": "2026-01-05"
        },
        "status": "Confirmed"
      }
    }
  
]

export async function GET(){
   
    return  NextResponse.json(data)
}