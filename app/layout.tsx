
"use client"; // Add this at the top of the file

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./globals.css";
import Footer from "./Footer/Footer";

// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the entire app with Stripe's Elements provider */}
        <Elements stripe={stripePromise}>
          {children}
        </Elements>
        <Footer />
      </body>
    </html>
  );
}