"use client"
import next from "next";
import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return(
        <div className="bg-gray-200 mt-[50px]">
            <div className="bg-[#2C3753] pt-[10px] pb-[10px] text-center">
                <p className="text-[15px] text-white">DISCLAIMER : * This statement has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
            </div>
            <div className="space-x-[100px] m-auto w-max place-content-center m-auto w-max bg-gray-200 pt-[25px] pb-[50px] flex">
                <div>
                    <div className="">
                        <p className="text-[#2C3753] font-bold text-xl">Get in touch</p>
                        <p>
                        Plot no: 956, Sector 82, JLPL Industrial Area,<br/> Sahibzada Ajit Singh Nagar,<br/> Punjab 140306
                        </p>
                        <p>
                        yuktiherbs@gmail.com
                        </p>
                        <p>
                        Office Hours :<br/>
                        10:00 AM - 8:00 PM<br/>
                        ( Sunday Closed)
                        </p>
                        <p className="text-[#2C3753] font-bold text-xl">Follow Us</p>
                        <div className="flex gap-4">
                        <Link href="https://www.rchauhan.in">
                        <Image
                            src="/insta.png"
                            width={30}
                            height={30}
                            alt="Instagram"
                        />
                        </Link>  
                        <Image
                            src="/fb.png"
                            width={30}
                            height={30}
                            alt="Facebook"
                        />
                        <Image
                            src="/linkedin.png"
                            width={30}
                            height={30}
                            alt="Linkedin"
                        />
                        <Image
                            src="/youtube.png"
                            width={30}
                            height={30}
                            alt="Youtube"
                        />
                        <Image
                            src="/pinterest.png"
                            width={30}
                            height={30}
                            alt="Pinterest"
                        />
                        </div>

                    </div>

                </div>
                <div>
                    <div className="">
                        <p className="text-[#2C3753] font-bold text-xl">Quick Links</p>
                        <p>
                        <Link href='https://store.yuktiherbs.com/pages/track-your-order'>
                        Order Status/Track Order
                        </Link>
                        </p>
                        <p>
                        <Link href='https://www.yuktiherbs.com/privacy-policy/'>
                        Privacy Policy
                        </Link>
                        </p>
                        <p>
                        <Link href='https://www.yuktiherbs.com/terms-conditions/'>
                        Terms & Conditions
                        </Link>
                        </p>
                        <p>
                        <Link href='https://www.yuktiherbs.com/cancellation-refund-policy/'>
                        Cancellation/ Refund Policy

                        </Link>
                        </p>
                        {/* <p>
                        <Link href='https://www.yuktiherbs.com/terms-conditions/'>
                        Contact Us
                        </Link>
                        </p> */}
                        <p className="text-[#2C3753] font-bold text-xl">Call or Whatsapp</p>
                        <p>+91 7527869388</p>
                        <p>+91 8288882923</p>
                        
                    </div>
                </div>
                <div>
                    <p className="text-[#2C3753] font-bold text-xl">Inside Yukti</p>
                    <p>
                        <Link href='https://www.yuktiherbs.com/cancellation-refund-policy/'>
                        About Us

                        </Link>
                    </p>
                    <p>
                        <Link href='https://www.yuktiherbs.com/cancellation-refund-policy/'>
                        Job Openings

                        </Link>
                    </p>
                    <p>
                        <Link href='https://www.yuktiherbs.com/cancellation-refund-policy/'>
                        Yuktipedia

                        </Link>
                    </p>
            

                </div>

                <div>
                    <p className="text-[#2C3753] font-bold text-xl">Business Opportunity</p>
                    <p>
                        <Link href='https://www.yuktiherbs.com/cancellation-refund-policy/'>
                        Distribuorship

                        </Link>
                    </p>
                    <p className="text-[#2C3753] font-bold text-xl">We Accept</p>
            {/* pngs of payments */}
            <div className="flex gap-4">
                <Image width={50} height={50} src='/visa.png'/>
                <Image width={50} height={50} src='/mstro.png'/>
                {/* <Image width={100} height={10} src='/upi.png'/> */}
                <Image width={50} height={50} src='/ax.png'/>

            </div>

                </div>
            </div>
                

        </div>
    )
}