import next from "next";
import Link from "next/link";
import Image from "next/image";


export default function Doctor(){
    return(
        <>
           <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max bg-gray-50 place-content-center m-auto">
            {/* <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p> */}
      <p className="place-content-center m-auto w-max text-3xl font-bold text-[#2C3753] md:text-6xl">Locate Us Here. </p>

          </div>
          <p className="place-content-center m-auto w-max text-xl font-bold text-[#2C3753] md:text-5xl md:leading-10">
            Made with love, right here in Mohali
          </p>
          {/* <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p> */}
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="/gps.png"
            alt=""
          />
        </div>
        {/* locations */}

        {/* <hr className="mt-20" /> */}
        {/* greetings */}
        {/* <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">Join Us &rarr;</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <div></div>
          </div>
        </div> */}
        {/* TEAM */}

        {/* Dr. Suhas */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-1 md:flex-row ">
            <div className="md:mt-o mt-10 w-full">
            <img
              src="./d2.png"
              alt="Getting Started"
              className="rounded-lg"
            />
            </div>
          <div className="space-y-6">
            <p className="text-md text-[#2C3753] font-semibold md:text-base">10+ Years of Experience &rarr;</p>
            <p className="text-3xl text-[#2C3753] font-bold md:text-4xl">Dr. Suhas Sakhare</p>
            <p className="text-lg text-[#2C3753] font-bold md:text-xl">MD, Ph.D Ayurveda & Panchakarma Expert</p>

            <p className="text-base text-[#2C3753]/80 md:text-lg">
            I am an Ayurvedic Gastroenterologist making treatment breakthroughs in patient lives for over 10 years.<br/> After spending time and witnessing patient journeys,<br/> I have started putting faith and belief in the Ayurveda cause all the more than ever.
            </p>
            <p className="text-base text-[#2C3753]/80 md:text-lg">
            <span className="text-xl text-[#2C3753] font-bold md:text-xl">My Expertise:</span><br/>
            IBS<br/>
            IBD<br/>
            Liver Cirrhosis<br/>
            Ulcerative Colitis<br/>
            CKD<br/>
            Hyperacidity<br/>
            GERD, Celiac Disease<br/>
            </p>
            <button
              type="button"
              className="rounded-md bg-[#2C3753] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2C3753]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Consult Now
            </button>
          </div>

        </div>
        {/* Dr. Sandeep */}
        {/* <div className="md:hidden block flex flex-col items-center gap-x-4 gap-y-4 py-1 md:flex-row ">

          <div className="space-y-2">
            <p className="text-md text-[#2C3753] font-semibold md:text-base">5+ Years of Experience &rarr;</p>
            <p className="text-3xl text-[#2C3753] font-bold md:text-4xl">Dr. Sandeep Singh</p>
            <p className="text-lg text-[#2C3753] font-bold md:text-xl">BAMS Ayurveda</p>

            <p className="text-base text-[#2C3753]/80 md:text-lg">
            My goal is to enrich the lives of patients with Ayurveda-rich traditions.<br/> At Yukti Herbs, we consider diagnosis (Nadi Pariksha) a breakthrough session.<br/> I take time to know my patients and learn their body behaviour. The right diagnosis<br/> and practising Ayurveda (Yoga, Panchkarma) elevates hope and draws courage.<br/> Believe in a natural way of living and conducting yourself.
            </p>
            <p className="text-base text-[#2C3753]/80 md:text-lg">
            <span className="text-xl text-[#2C3753] font-bold md:text-xl">My Expertise:</span><br/>
            IBS<br/>
            IBD<br/>
            Liver Cirrhosis<br/>
            Ulcerative Colitis<br/>
            CKD<br/>
            Hyperacidity<br/>
            GERD, Celiac Disease<br/>
            </p>
            <button
              type="button"
              className="rounded-md bg-[#2C3753] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2C3753]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Consult Now
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="./d3.png"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>

        </div>

        <div className="sm:block md:hidden flex flex-col items-center gap-x-4 gap-y-4 py-1 md:flex-row ">
        <div className="md:mt-o mt-10 w-full">
            <img
              src="./d3.png"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <p className="text-md text-[#2C3753] font-semibold md:text-base">5+ Years of Experience &rarr;</p>
            <p className="text-3xl text-[#2C3753] font-bold md:text-4xl">Dr. Sandeep Singh</p>
            <p className="text-lg text-[#2C3753] font-bold md:text-xl">BAMS Ayurveda</p>

            <p className="text-base text-[#2C3753]/80 md:text-lg">
            My goal is to enrich the lives of patients with Ayurveda-rich traditions.<br/> At Yukti Herbs, we consider diagnosis (Nadi Pariksha) a breakthrough session.<br/> I take time to know my patients and learn their body behaviour. The right diagnosis<br/> and practising Ayurveda (Yoga, Panchkarma) elevates hope and draws courage.<br/> Believe in a natural way of living and conducting yourself.
            </p>
            <p className="text-base text-[#2C3753]/80 md:text-lg">
            <span className="text-xl text-[#2C3753] font-bold md:text-xl">My Expertise:</span><br/>
            IBS<br/>
            IBD<br/>
            Liver Cirrhosis<br/>
            Ulcerative Colitis<br/>
            CKD<br/>
            Hyperacidity<br/>
            GERD, Celiac Disease<br/>
            </p>
            <button
              type="button"
              className="rounded-md bg-[#2C3753] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2C3753]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Consult Now
            </button>
          </div>


        </div>         */}
        {/* Dr. Yashasvi */}
        {/* <div className="flex flex-col items-center gap-x-4 gap-y-4 py-1 md:flex-row ">
            <div className="md:mt-o mt-10 w-full">
            <img
              src="./d1.png"
              alt="Getting Started"
              className="rounded-lg"
            />
            </div>
          <div className="space-y-6">
            <p className="text-md text-[#2C3753] font-semibold md:text-base">10+ Years of Experience &rarr;</p>
            <p className="text-3xl text-[#2C3753] font-bold md:text-4xl">Dr. Suhas Sakhare</p>
            <p className="text-lg text-[#2C3753] font-bold md:text-xl">MD, Ph.D Ayurveda & Panchakarma Expert</p>

            <p className="text-base text-[#2C3753]/80 md:text-lg">
            I'm an Ayurvedic Gastroenterologist making treatment breakthroughs in patient lives for over 10 years.<br/> After spending time and witnessing patient journeys,<br/> I have started putting faith and belief in the Ayurveda cause all the more than ever.
            </p>
            <p className="text-base text-[#2C3753]/80 md:text-lg">
            <span className="text-xl text-[#2C3753] font-bold md:text-xl">My Expertise:</span><br/>
            IBS<br/>
            IBD<br/>
            Liver Cirrhosis<br/>
            Ulcerative Colitis<br/>
            CKD<br/>
            Hyperacidity<br/>
            GERD, Celiac Disease<br/>
            </p>
            <button
              type="button"
              className="rounded-md bg-[#2C3753] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2C3753]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Consult Now
            </button>
          </div>

        </div> */}
        {/* Dr. Jahanvi */}
        {/* <div className="flex flex-col items-center gap-x-4 gap-y-4 py-1 md:flex-row ">
            <div className="md:mt-o mt-10 w-full">
            <img
              src="./d1.png"
              alt="Getting Started"
              className="rounded-lg"
            />
            </div>
          <div className="space-y-6">
            <p className="text-md text-[#2C3753] font-semibold md:text-base">10+ Years of Experience &rarr;</p>
            <p className="text-3xl text-[#2C3753] font-bold md:text-4xl">Dr. Suhas Sakhare</p>
            <p className="text-lg text-[#2C3753] font-bold md:text-xl">MD, Ph.D Ayurveda & Panchakarma Expert</p>

            <p className="text-base text-[#2C3753]/80 md:text-lg">
            I'm an Ayurvedic Gastroenterologist making treatment breakthroughs in patient lives for over 10 years.<br/> After spending time and witnessing patient journeys,<br/> I have started putting faith and belief in the Ayurveda cause all the more than ever.
            </p>
            <p className="text-base text-[#2C3753]/80 md:text-lg">
            <span className="text-xl text-[#2C3753] font-bold md:text-xl">My Expertise:</span><br/>
            IBS<br/>
            IBD<br/>
            Liver Cirrhosis<br/>
            Ulcerative Colitis<br/>
            CKD<br/>
            Hyperacidity<br/>
            GERD, Celiac Disease<br/>
            </p>
            <button
              type="button"
              className="rounded-md bg-[#2C3753] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2C3753]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Consult Now
            </button>
          </div>

        </div> */}
      </div>
      <hr className="mt-6" />
        </>
    )
}