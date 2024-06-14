import React, { useState } from 'react';
import Image from 'next/image'
import CallNowButton from '../call/page';
// import Check from './check.gif'
// import { Menu, X, MapPin } from 'lucide-react'

const locations = [
  {
    title: 'Mohali',
    timings: 'Mon-Sat 9am to 5pm.',
    address: 'Plot. 956, Sector 82, JLPL Industrial area, SAS Nagar, Punjab 140306 IN',
  },
//   {
//     title: 'Chandigarh office',
//     timings: 'Mon-Sat 9am to 5pm.',
//     address: '3124, Sector 61, Phase-7, Mohali 160061 IN',
//   },
  {
    title: 'Contact : +91 7527869388',
  },
  {
    title: 'E-mail : yuktiherbs@gmail.com',
  },
]
const Form = () => {
  const [showTick, setShowTick] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gmail: '',
    number: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Check if the phone number has exactly 10 digits
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!validatePhoneNumber(formData.number)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    setShowTick(true);

    const sheetDBEndpoint = 'https://sheetdb.io/api/v1/2p0uu86aviogy';

    try {
      const response = await fetch(sheetDBEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        setShowTick(true);
        // Reset form data
        setFormData({
            fullName: '',
            gmail: '',
            number: '',
            query: '',
          });

          // Hide tick animation after 2 seconds (adjust as needed)
        setTimeout(() => {
          setShowTick(false);
        }, 2000);
      } else {
        console.error('Failed to send data, Please fill all details (correctly)');
        alert('Failed to send data, Please fill all details (correctly)');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>

<title>Contact Us - Yukti Herbs</title>
        <meta name="description" content="Contact us for inquiries, feedback, or any other questions you may have." />
        <meta name="keywords" content="contact, contact us, get in touch, inquiries, feedback, support, Yukti Herbs, Dr. Suhas" />

    

<div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-[#2C3753] md:text-4xl">Contact Us Today</p>
                <p className="mt-4 text-lg text-[#2C3753]">
                Our executives will help you.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="fullName"
                        name="fullName"
                        aria-describedby="basic-addon3 basic-addon4"
                        placeholder='Rajesh Kumar'
                        value={formData.fullName}
                        onChange={handleChange} required                        
                      />
                    </div>
            
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="gmail"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="gmail"
                      name="gmail"
                      aria-describedby="basic-addon3 basic-addon4"
                      placeholder='example@gmail.com'
                      value={formData.gmail}
                      onChange={handleChange} required
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      For="basic-url"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="basic-url"
                      aria-describedby="basic-addon3 basic-addon4"
                      required
                      placeholder="8888XXXXXX"
                      name="number"
                      value={formData.number}
                onChange={handleChange} 
                    />
                  </div>
                 
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="query"
                    >
                      What problem you are facing?
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="query"
                      name="query"
                      aria-describedby="basic-addon3 basic-addon4"
                      placeholder='Your Health Issue !'
                      value={formData.query}
                      onChange={handleChange} required
                    
                      cols={3}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#2C3753] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mypurple/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <Image
              width={500}
              height={500}
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="/contact.jpg"
            />
          </div>
        </div>
      </div>
      <CallNowButton/>

      {/* {showTick && (
        <div className='messageok'>
        <div className="centered-div">
          <Image src={Check} alt="Check" id='check' />
        </div>
        </div>
      )} */}

<div className="rounded-lg bg-mypurple">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="w-full text-4xl font-bold text-[#2C3753]">Our Hospital</p>
                <p className="w-full text-lg text-[#2C3753]">Find us at these locations.</p>
              </div>
              <div className="space-y-4 divide-y-2">
                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                  >
                    <p className="w-full text-xl font-semibold  text-[#2C3753]">{location.title}</p>
                    <p className="w-full text-base  text-[#2C3753]">{location.timings}</p>
                    <p className="text-sm font-semibold text-[#2C3753]">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
         

    </>
  );
};

export default Form;