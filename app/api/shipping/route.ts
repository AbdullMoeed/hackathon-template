// import { NextResponse } from "next/server";
// import axios from "axios";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { addressFrom, addressTo, parcel } = body;

//     // Debugging logs
//     console.log("Request Body:", body);

//     // Shippo API endpoint
//     const response = await axios.post(
//       "https://api.goshippo.com/shipments/",
//       {
//         address_from: addressFrom,
//         address_to: addressTo,
//         parcels: [parcel],
//       },
//       {
//         headers: {
//           Authorization: `ShippoToken ${process.env.NEXT_PUBLIC_SHIPPO_API_KEY}`, // Access API key from .env.local
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // Debugging logs
//     console.log("Shippo API Response:", response.data);

//     // Return shipping rates
//     return NextResponse.json(response.data.rates);
//   } catch (error) {
//     console.error("Error fetching shipping rates:", error);
//     return NextResponse.json({ error: "Failed to fetch shipping rates" }, { status: 500 });
//   }
// }