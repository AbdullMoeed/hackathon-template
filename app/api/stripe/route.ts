// app/api/stripe/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // Remove apiVersion or use the latest supported version
});

export async function POST(request: Request) {
  try {
    const { amount } = await request.json(); // Amount in cents (e.g., $10.00 = 1000)

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd", // Change to your preferred currency
    });

    // Send the client secret back to the client
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}