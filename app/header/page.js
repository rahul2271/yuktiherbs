import Image from "next/image"
import Link from "next/link"
export default function Header(){

    return(
      <header className='bg-white mt-[20px] md:mx-auto md:w-full md:mt-[-70px] mx-auto w-full'>
      <img className=' mx-auto  relative  h-[60px] w-[255px] md:h-[70px] md:w-[300px] md:mt-[90px] md:mx-[10px]' src="./logo.png" alt="rchauhan" />
          <ul className='mt-[20px] md:mt-[-50px]  flex font-medium   md:text-xl  md:place-content-center lg:flex md:space-x-6 lg:place-content-center text-[12px] text-[#2C3753] space-x-6  place-content-center text-[12px] font-bold'>
            
            <li>
              <Link className="hover:text-mypurple" href="/">
              HOME
              </Link>
            </li>
            <li>
              <Link className="hover:text-mypurple" target="_blank"  href="https://store.yuktiherbs.com/">
              STORE
              </Link>
            </li>
            <li>
              <Link className="hover:text-mypurple" target="_blank" href="https://www.yuktiherbs.com/consultation/">
              CONSULTATION
              </Link>
            </li>
            <li className="hidden">
              <Link className="hover:text-mypurple" href="/blogs">
              YUKTIPEDIA
              </Link>
            </li>
            <li className="hidden">
              <Link className="hover:text-mypurple" href="/rctechadminpanel">
              ABOUT US
              </Link>
            </li> 
            <li>
              <Link className="animate-pulse hover:text-mypurple" href="/contact">
              CONTACT US
              </Link>
            </li>
            <li className="hidden">
              <Link className="animate-pulse hover:text-mypurple" href="/contact">
              TESIMONIALS
              </Link>
            </li>
            {/* <Image className='hidden lg:block md:block absolute inset-y-0 right-0 mt-[10px]' width={150} height={150} alt='makeinindia' src="/MAKEININDIA.png"/>  
            <Image className='visible md:hidden lg:hidden absolute inset-y-0 right-0 mt-[10px]' width={80} height={80} alt='makeinindia' src="/MAKEININDIA.png"/>          */}
          </ul>
          {/* <Image width={200} height={200} alt='makeinindia' src="/MAKEININDIA.png"/> */}
          {/* <Link href="/contact" className="hidden lg:block ml-[1300px] mt-[-50px] ">
      <button
        type="button"
        className="rounded-md bg-[#953ee2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Contact Us
      </button>
    </Link> */}
          
        </header>   
    )
}