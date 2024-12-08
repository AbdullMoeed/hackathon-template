import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-4">GET HELP</h2>
      <div className="mb-4">
        <input 
          type="text"
          placeholder="What can we help you with?"
          className="border-gray-300 border rounded-md w-full p-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-2">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h3>
          <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
          <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
          <p>If you enter your PAN information at checkout, you will be able to pay for your order with PayTM or a local credit or debit card.</p>
          <p>Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you re not already a Member, join us today.</p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">CONTACT US</h3>
          <div className="flex items-center space-x-4 mb-2">
            <FaPhoneAlt className="text-blue-500" />
            <div>
              <p>800.806.6453</p>
              <p>Monday & Tuesday: 7AM to 9PM</p>
              <p>Wednesday - Friday: 9AM to 5PM</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-2">
            <FaEnvelope className="text-blue-500" />
            <p>We will reply within 1 business day</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <p>Find your nearest store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;