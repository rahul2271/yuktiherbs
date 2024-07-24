import React, { useState } from 'react';
import Image from 'next/image'
import CallNowButton from '../call/page';
import Link from 'next/link';
import Doctor from '../doctor/page';
// import Slider from '../components/page';
import Carousel from '../components/Carousel';
// import Head from 'next/head';
import Tile from '../components/Tile';
import RazorpayButton from '../components/RazorpayButton';
// import styles from '../styles/Home.module.css';

const tilesData = [
  { id: 1, iconSrc: '/Digestive.png', title: 'Digestive Disorders', description: 'Stimulate Digestive enzymes to eliminate cranky vibes' },
  { id: 2, iconSrc: '/Skin.png', title: 'Skin Disorders', description: 'Skin shine and all fine.' },
  { id: 3, iconSrc: '/Joint.png', title: 'Joint Disorders', description: 'Eliminate stiffness to stimulate flexibility.' },
  { id: 4, iconSrc: '/Immune.png', title: 'Auto-Immune Disorders', description: 'Build internal army to fight internal unseen invaders. ' },
  { id: 5, iconSrc: '/Liver.png', title: 'Liver Disorders', description: 'Love your liver to live life.' },
  { id: 6, iconSrc: '/Kidney.png', title: 'Kidney Disorders', description: 'Restore Kidney function to hit back kidney failure.' },
  { id: 7, iconSrc: '/Heart.png', title: 'Heart Disorders', description: 'Defeat disease to healthy beat.' },
  { id: 8, iconSrc: '/Respiratory.png', title: 'Respiratory Disorders', description: 'Breathe with ease, Feel comfortable.' },
  { id: 9, iconSrc: '/Malefemale.png', title: 'Male & Female Infertility', description: 'Happy you and Happy us.' },
  { id: 10, iconSrc: '/Brain.png', title: 'Brain Disorders', description: 'The complexities of brain disorders and care strategies.' },
];


// import Check from './check.gif'
// import { Menu, X, MapPin } from 'lucide-react'

const items = [
  { 
    id: 6, 
    imgSrc: "/Digestive.png", 
    title: "Digestive Disorders", 
    description: "Stimulate Digestive enzymes to eliminate cranky vibes." 

  },
  { 
    id: 7, 
    imgSrc: "/skin.jpg", 
    title: "Skin Disorders", 
    description: "Skin shine and all fine." 

  },
  { 
    id: 8, 
    imgSrc: "/bones.jpg", 
    title: "Joint Disorders", 
    description: "Eliminate stiffness to stimulate flexibility." 

  },

  { 
    id: 10, 
    imgSrc: "/AID.jpg", 
    title: "Auto-Immune Disorders", 
    description: "Build internal army to fight internal unseen invaders" 

  },
  { 
    id: 5, 
    imgSrc: "/liver.jpg", 
    title: "Liver Disorders", 
    description: "Love your liver to live life." 
  },
  { 
    id: 6, 
    imgSrc: "/kidney.jpg", 
    title: "Kidney Disorders", 
    description: "Restore Kidney function to hit back kidney failure." 
  },
  { 
    id: 7, 
    imgSrc: "/heart.jpg", 
    title: "Heart Disorders", 
    description: "Defeat disease to healthy beat." 
  },
  { 
    id: 8, 
    imgSrc: "/lungs.jpg", 
    title: "Respiratory Disorders", 
    description: "Breathe with ease, Feel comfortable." 
  },
  { 
    id: 9, 
    imgSrc: "/mf.jpg", 
    title: "Male & Female Infertility", 
    description: "Happy you and Happy us." 
  },
  { 
    id: 4, 
    imgSrc: "/brain.jpg", 
    title: "Brain Disorders", 
    description: "The complexities of brain disorders and care strategies." 
  }
];

const locations = [
  {
    title: 'Mohali',
    timings: 'Mon-Sat 9am to 5pm.',
    address: 'Plot. 956, Sector 82, JLPL Industrial area, Mohali, Punjab 140306 IN',
  },
//   {
//     title: 'Chandigarh office',
//     timings: 'Mon-Sat 9am to 5pm.',
//     address: '3124, Sector 61, Phase-7, Mohali 160061 IN',
//   },
  // {
  //   title: 'Contact : +91 7527869388',
  // },
  // {
  //   title: 'Email : yuktiherbs@gmail.com',
  // },
]
const Form = () => {
  const [showTick, setShowTick] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gmail: '',
    number: '',
    issueType: '',
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

    const sheetDBEndpoint = 'https://sheetdb.io/api/v1/jim20ot1ysl19';

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
    {/* <img className='m-auto max-w-auto md:mt-[52px] mt-[25px]' src='./bnr.jpg'/> */}
    {/* <div className='mt-[15px] md:mt-[50px] '><Slider/></div> */}
    <div className=' mt-[15px] md:mt-[50px]  '><Carousel/></div>

    
{/* <div>
  <p className="text-center text-2xl font-extrabold text-[#2C3753] md:mt-[20px] md:text-6xl">Multi-Speciality Ayurveda & Panchakarma Hospital.</p>
</div> */}
<div className=" mx-auto md:max-w-max px-4">
        <div className=" mx-auto max-w-7xl py-12 md:py-24">
          <div className="border-2 rounded-[25px] grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
           
            <div className="  rounded-[10px] shadow-black/50 p-6 flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-left text-2xl font-bold text-[#2C3753] md:text-xl">Your First Step to a Healthy Tomorrow </p>
                <p className="font-light text-left mt-4 text-lg md:text-sm text-[#2C3753]">
                Submit Your Details Now, to Get a Call Back!!!
                </p>
<form onSubmit={handleSubmit} className="item-center mt-8 space-y-4">
  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
    <div className="grid w-full items-center gap-1.5">
      <label
        className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="fullName"
      >
        Full Name
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type="text"
        id="fullName"
        name="fullName"
        aria-describedby="basic-addon3 basic-addon4"
        placeholder='Rajesh Kumar'
        value={formData.fullName}
        onChange={handleChange} 
        required                        
      />
    </div>
  </div>

  <div className="grid w-full items-center gap-1.5">
    <label
      className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="gmail"
    >
      Email
    </label>
    <input
      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      type="text"
      id="gmail"
      name="gmail"
      aria-describedby="basic-addon3 basic-addon4"
      placeholder='example@gmail.com'
      value={formData.gmail}
      onChange={handleChange} 
      required
    />
  </div>

  <div className="grid w-full items-center gap-1.5">
    <label
      className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      For="basic-url"
    >
      Phone number
    </label>
    <input
      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
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

  <div className="grid w-full items-center gap-1.5">
    <label
      className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="issueType"
    >
      Health Disorder type
    </label>
    <select
      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      id="issueType"
      name="issueType"
      value={formData.issueType}
      onChange={handleChange} 
      required
    >
      <option value="" disabled>Select your issue</option>
      <option value="Digestive Disorders">Digestive Disorders</option>
      <option value="Skin Disorders">Skin Disorders</option>
      <option value="Joint Disorders">Joint Disorders</option>
      <option value="Auto-Immune Disorders ">Auto-Immune Disorders      </option>
      <option value="Liver Disorders ">Liver Disorders      </option>
      <option value="Kidney Disorders">Kidney Disorders</option>
      <option value="Heart Disorders">Heart Disorders</option>
      <option value="Respiratory Disorders">Respiratory Disorders</option>
      <option value="Male & Female Infertility">Male & Female Infertility</option>
      <option value="Brain">Brain Disorders</option>
      <option value="other">other  </option>

    </select>
  </div>

  <div className="grid w-full items-center gap-1.5">
    <label
      className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="query"
    >
      What problem you are facing?
    </label>
    <textarea
      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      id="query"
      name="query"
      aria-describedby="basic-addon3 basic-addon4"
      placeholder='Your Health Issue !'
      value={formData.query}
      onChange={handleChange} 
      required
      cols={3}
    />
  </div>

  <div className='justify-item-center'>
    <button
      type="submit"
      className="hover:bg-[#ffdd00] hover:text-[#2C3753] bg-[#2C3753] w-full rounded-[50px] px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-mypurple/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Submit
    </button>
    {showTick && (
                  <div className="text-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Form submitted successfully!</p>
                  </div>
                )}
  </div>
  {/* <RazorpayButton /> */}
  <p className="text-center mt-4 text-xl font-bold text-[#2C3753]">OR</p>
  <CallNowButton/>
</form>

                
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden  max-h-[640px] w-full rounded-lg object-cover lg:block"
              src="./fff.jpg"
            />
            {/* <Image
              width={500}
              height={500}
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="/contact3.jpg"
            /> */}
          </div>
        </div>
      </div>
      



{/* Our Hospital */}
<div className="hidden md:block rounded-lg bg-mypurple">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="w-full text-6xl font-bold text-[#2C3753]">Visit our<br/> <span>Hospital at</span> </p>
                {/* <p className="w-full text-lg text-[#2C3753]">Find us at these locations.</p> */}
              </div>
              <div className="space-y-4 divide-y-2">
                
                  <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                    {/* <p className="w-full text-xl font-semibold  text-[#2C3753]">{location.title}</p> */}
                    {/* <p className="w-full text-base  text-[#2C3753]">{location.timings}</p> */}
                    <div className='flex gap-x-4 '>
                      <img className='w-[30px] h-[40px]' src='./Location.png'/>
                    <p className="text-lg font-normal text-[#2C3753]">Plot. 956, Sector 82, JLPL Industrial <br/>
                    Area, Mohali, Punjab 140306 IN</p>
                    </div>
                  </div>
                
                <div className='flex gap-x-4'>
                  <img className='w-[40px] h-[40px]' src='./Phone.png'/>
                  <p className="text-lg font-normal text-[#2C3753]">+91 7527869388 | +91 8288882923</p>
                  {/* <span className=" text-xl  text-[#2C3753] font-bold"> <span className='font-light'>  <span className='font-bold'>|</span> </span> </span> */}
                  {/* <div className=" flex text-base  text-[#2C3753] ">+91 7527869388 <span className='font-bold'>|</span> +91 8288882923</div><br/> */}
                </div>
                <div className='flex gap-x-4'>
                <img className='w-[40px] h-[30px]' src='./Gmail.png'/>

                  {/* <p className=" text-base  text-[#2C3753]"></p> */}
                  {/* <p className=" text-xl  text-[#2C3753] "></p> */}
                  <p className=" text-base text-lg  text-[#2C3753]">yuktiherbs@gmail.com</p>

                </div>
                <div className='block md:hidden w-auto'>
                  <p className=" text-lg  text-[#2C3753] font-bold">Contact: </p>
                  <p className=" text-base  text-[#2C3753] ">+91 7527869388 <span className='font-bold'>|</span> +91 8288882923</p> <br/>
                  
                  <p className=" text-base  text-[#2C3753]"></p>
                  <p className=" text-lg  text-[#2C3753] font-bold">Email: </p>
                  <p className=" text-base  text-[#2C3753]">yuktiherbs@gmail.com</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="block md:hidden rounded-lg bg-mypurple">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="w-full text-4xl font-bold text-[#2C3753]">Visit our<br/> <span>Hospital at</span> </p>
                {/* <p className="w-full text-lg text-[#2C3753]">Find us at these locations.</p> */}
              </div>
              <div className="space-y-4 divide-y-2">
                
                  <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                    {/* <p className="w-full text-xl font-semibold  text-[#2C3753]">{location.title}</p> */}
                    {/* <p className="w-full text-base  text-[#2C3753]">{location.timings}</p> */}
                    <div className='flex gap-x-4 '>
                      <img className='w-[15px] h-[20px]' src='./location.png'/>
                    <p className="text-[13px] font-bold text-[#2C3753]">Plot. 956, Sector 82, JLPL Industrial <br/>
                    Area, Mohali, Punjab 140306 IN</p>
                    </div>
                  </div>
                
                <div className='flex gap-x-4'>
                  <img className='w-[15px] h-[20px]' src='./Phone.png'/>
                  <p className="text-[12px] font-bold text-[#2C3753]">+91 8288882923</p>
                  {/* <span className=" text-xl  text-[#2C3753] font-bold"> <span className='font-light'>  <span className='font-bold'>|</span> </span> </span> */}
                  {/* <div className=" flex text-base  text-[#2C3753] ">+91 7527869388 <span className='font-bold'>|</span> +91 8288882923</div><br/> */}
                </div>
                <div className='flex gap-x-4'>
                <img className='w-[18px] h-[15px]' src='./Gmail.png'/>

                  {/* <p className=" text-base  text-[#2C3753]"></p> */}
                  {/* <p className=" text-[12px]  text-[#2C3753] ">Email: </p> */}
                  <p className="  text-[12px] font-bold  text-[#2C3753]">yuktiherbs@gmail.com</p>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
{/*          
      <iframe
      width="450"
      height="250"
      frameborder="0"
      referrerpolicy="no-referrer-when-downgrade"
      src="https://g.co/kgs/VBh2FnS"
      allowfullscreen>
      </iframe> */}


{/* Conditions we treat for desktop */}
{/* <div className='bg-[#2C3753] rounded-[50px]'>
    <div className='pt-[50px] hidden md:block place-content-center m-auto w-max'>
      <p className="text-2xl font-bold text-white md:text-6xl">Conditions We Treat. </p>
    </div>
    <div className='hidden md:block'>
    <div className=" mx-auto grid w-full max-w-7xl items-center  px-2 py-10 grid-cols-5 gap-6">
  {items.map((item) => (
    <div
      key={item.id}
      className=" relative aspect-[16/9] w-auto rounded-md md:aspect-auto md:h-[250px] md:w-[250px]"
    >
      <Image
        width={50}
        height={50}
        src={item.imgSrc}
        alt={item.title}
        className=" border-1 border-black z-0 h-[50px] w-[50px]  "
      />
   
      <div className="rounded-tr-[50px] rounded-bl-[50px]   absolute inset-0 rounded-md bg-black opacity-50 "></div>
      
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-2xl font-semibold text-white">{item.title}</h1>
        <p className="mt-2 text-[15px] text-gray-100">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
</div> */}
<div className='md:block hidden  bg-[#2C3753]'>
<div className='pt-[50px] hidden md:block place-content-center m-auto w-max'>
      <p className="text-2xl font-bold text-white md:text-6xl">Conditions We Treat. </p>
    </div>
<div className='md:pt-[30px] md:pb-[100px] mx-auto w-max  item-center'>
<main className="flex flex-col md:mb-[-50px]  max-w-7xl items-center justify-center ">
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 w-full">
          {tilesData.map((tile, index) => (
            <Tile 
              className='border-2 border-white'
              key={tile.id} 
              iconSrc={tile.iconSrc} 
              title={tile.title} 
              description={tile.description}
              bgColorClass={index % 2 === 0 ? 'bg-[#2C3753] text-white' : 'bg-white text-[#2C3753]'}
              borderColorClass={index % 2 === 0 ? 'border-white' : 'border-[#2C3753]'}
            />
          ))}
        </div>
      </main>
      </div>

</div>





{/* Conditions we treat for mobile */}
<div className='block md:hidden place-content-center m-auto w-max'>
      <p className="text-3xl font-bold text-[#2C3753] md:text-6xl">Conditions We Treat. </p>
    </div>
    {/* <div className='block md:hidden'>
    <div className="mx-auto grid w-full max-w-7xl items-center px-2 py-10 grid-cols-2 gap-6">
  {items.map((item) => (
    <div
      key={item.id}
      className="relative aspect-[16/9] w-auto rounded-md md:aspect-auto md:h-[250px] md:w-[250px]"
    >
      <Image
        width={250}
        height={250}
        src={item.imgSrc}
        alt={item.title}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 rounded-md bg-gradient-to-t from-[#2C3753] to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-sm font-semibold text-white">{item.title}</h1>
        <p className=" text-[7px] text-gray-300">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
    </div> */}
    <div className='block md:hidden rounded-[50px] '>
<div className=' mx-auto w-auto  item-center'>
<main className="flex flex-col  max-w-7xl items-center justify-center min-h-screen">
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 w-auto">
          {tilesData.map((tile, index) => (
            <Tile 
              className='border-2 border-white'
              key={tile.id} 
              iconSrc={tile.iconSrc} 
              title={tile.title} 
              description={tile.description}
              bgColorClass={index % 2 === 0 ? 'bg-[#2C3753] text-white' : 'bg-white text-[#2C3753]'}
              borderColorClass={index % 2 === 0 ? 'border-white' : 'border-[#2C3753]'}
            />
          ))}
        </div>
      </main>
      </div>

</div>



{/* Doctor */}
<Doctor/>
    


      {/* testimonils */}
      <div className=' mt-[50px] hidden md:block place-content-center m-auto w-max'>
      <p className=" text-2xl font-bold text-[#2C3753] md:text-6xl">Customer Reviews </p>
      </div>
      <div className='hidden md:block md:mt-[25px]  pt-[20px] pb-[20px] rounded-[50px]'>
      <div className='flex place-content-center m-auto gap-[25px] max-w-[800px]   '>
      <iframe className='rounded-[20px] border-[2px] border-[#2C3753]' width="560" height="315" src="https://www.youtube.com/embed/rYQ5SkH4GhU?si=KXyqpaF_X2__vxSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe className='rounded-[20px] border-[2px] border-[#2C3753]' width="560" height="315" src="https://www.youtube.com/embed/ZHQUJj8HRW8?si=Z77O1qUlQaYXfwvd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe className='rounded-[20px] border-[2px] border-[#2C3753]' width="560" height="315" src="https://www.youtube.com/embed/eIZQf_APSOY?si=-HkyGSSaQ7wA8Bel" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe className='rounded-[20px] border-[2px] border-[#2C3753]' width="560" height="315" src="https://www.youtube.com/embed/Bo0sIdX0dJ0?si=DOMZ5JxeocEqgu61" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
    {/* testimonila for mobile */}
      <div className='bg-[] block mt-[30px] md:hidden place-content-center m-auto w-max'>
      <p className="text-3xl font-bold text-[#2C3753] md:text-6xl">Customer Reviews </p>
      </div>
      <div className='block md:hidden mt-[10px] md:mt-[25px]  pt-[20px] pb-[20px] rounded-[20px]'>
      <div className=' place-content-center w-max m-auto   '>
      <iframe className='rounded-[20px] border-[2px] border-[#2C3753] mb-[30px]' width="300" height="210" src="https://www.youtube.com/embed/rYQ5SkH4GhU?si=KXyqpaF_X2__vxSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe className='rounded-[20px] border-[2px] border-[#2C3753] mb-[30px]' width="300" height="210" src="https://www.youtube.com/embed/ZHQUJj8HRW8?si=Z77O1qUlQaYXfwvd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe className='rounded-[20px] border-[2px] border-[#2C3753] mb-[30px]' width="300" height="210" src="https://www.youtube.com/embed/eIZQf_APSOY?si=-HkyGSSaQ7wA8Bel" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe className='rounded-[20px] border-[2px] border-[#2C3753] mb-[30px]' width="300" height="210" src="https://www.youtube.com/embed/Bo0sIdX0dJ0?si=DOMZ5JxeocEqgu61" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
      {/* More button */}
      <div className="mt-[20px] flex items-center justify-center gap-x-2">
        <Link className="rounded-[20px] bg-[#2C3753]  px-[60px] py-2 md:px-[80px] md:py-[10px] text-sm md:text-[18px] font-semibold text-white shadow-md hover:bg-[#2C3753]/50 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" target='_blank' href="https://www.youtube.com/@Yukti_Herbs">More</Link>
      </div>

    </>
  );
};

export default Form;


                {/* <form onSubmit={handleSubmit} className="item-center mt-8 space-y-4">
  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
    <div className="grid w-full items-center gap-1.5">
      <label
        className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="fullName"
      >
        Full Name
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type="text"
        id="fullName"
        name="fullName"
        aria-describedby="basic-addon3 basic-addon4"
        placeholder="Rajesh Kumar"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
    </div>
  </div>
  <div className="grid w-full items-center gap-1.5">
    <label
      className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="gmail"
    >
      Email
    </label>
    <input
      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      type="text"
      id="gmail"
      name="gmail"
      aria-describedby="basic-addon3 basic-addon4"
      placeholder="example@gmail.com"
      value={formData.gmail}
      onChange={handleChange}
      required
    />
  </div>
  <div className="grid w-full items-center gap-1.5">
    <label
      className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      For="basic-url"
    >
      Phone number
    </label>
    <input
      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
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
  <div className="grid w-full items-center gap-1.5">
    <label
      className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="query"
    >
      What problem you are facing?
    </label>
    <textarea
      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      id="query"
      name="query"
      aria-describedby="basic-addon3 basic-addon4"
      placeholder="Your Health Issue!"
      value={formData.query}
      onChange={handleChange}
      required
      cols={3}
    />
  </div>
  <div className="w-full flex justify-center">
    <button
      type="submit"
      className="w-[200px] rounded-md bg-[#c7a03b] px-3 py-2 text-sm font-bold text-[#2C3753] shadow-sm hover:bg-mypurple/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Submit
    </button>
  </div>
  <p className="text-center mt-4 text-2xl font-extrabold text-[#2C3753]">OR</p>
  <CallNowButton />
                </form> */}