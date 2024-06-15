"use client"
import React from 'react';
import Link from 'next/link';


const CallNowButton = () => {
  const phoneNumber = '+91 7527869388'; // Replace with your actual phone number

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="mt-[-20px] flex items-center justify-center gap-x-2">
              <button
                type="button"
                className=" rounded-[20px] bg-[#ffdd00] border- border-black px-[60px] py-2 md:px-[80px] md:py-[10px] text-sm md:text-[18px] font-semibold text-black shadow-md hover:bg-[#ffdd00]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
