"use client"
import React from 'react';
import Link from 'next/link';


const CallNowButton = () => {
  const phoneNumber = '+91 8288882923'; // Replace with your actual phone number

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="mt-[-20px] flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="w-full rounded-[50px] hover:bg-[#2C3753] hover:text-white bg-[#ffdd00] px-4 py-3 text-sm font-bold text-[#2C3753] shadow-sm hover:bg-mypurple/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={handleCallButtonClick}
                
              >
                Call Now!
              </button>
              {/* <Link target='_blank' href="/price"><button
                type="button"
                className="rounded-md border md:border-2 border-mypurple px-3 py-2 md:px-6 md:py-3 md:text-[15px] hover:bg-white text-sm font-semibold text-mypurple shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                  Our Plans
                
              </button>
              </Link> */}
            </div>
              
  );
};

export default CallNowButton;
