"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  return (
    <><nav className="bg-white relative shadow-md  top-0 left-0 w-full z-50">
      <div className="flex flex-row w-full justify-between items-center p-4">
        <div className="w-14"><button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button></div>
      
        {/* Logo */}
        <div className="w-64 hi"><Link href="/">
          <Image src="/logo.png" alt="Logo" width={200} height={51}  />
        </Link></div>
        < div className="w-64 flex flex-row ">

        <Image className="ml-20 hu " src="/download.jpeg" alt="search" width={30} height={33}/>
    <button type="button" className=" w-50 h-10  Join " >Join Us</button>

    <Image className=" ml-10 ha" src="/user-icon-on-transparent-background-free-png.webp" alt="icon" width={100} height={33}/>
</div>
        {/* Desktop Menu */}
       
        </div>

        
    </nav>
    <main>
      <div className="bg-black mt-500 w-full h-200 hm"></div>
      <div className="headers">
        <div className="contents"> 
          <span>EDITORIAL</span>
          </div>
          <div className="w-30 h-20 nn">        <h1> 4 Hallmarks of Today’s Best Email Marketing Strategies</h1>
          </div>
        <p>4 MINUTE READ</p>
        <div className="maincontent">
          <Image className="author" src="/16e808064ed94956bfb407b3391bd261.webp" alt="author" width={80} height={80}/>
         

                    <p className="authorName">By Chad S. White</p>
                    <div className="features"> <p style={{color:'black'}} className="Date">February 6, 2025</p>
         <div className="line"></div>
         <p style={{color:'blue'}} className="Market">Digital Marketing</p></div>

        </div>
        </div>
       <div>
       <Link href="/" style={{color:'red'}} className="links">Link</Link>
       </div>
    </main>
    </>
  );
}
