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
          <div className="wrapcontent">
            <Image className="author" src="/16e808064ed94956bfb407b3391bd261.webp" alt="author" width={80} height={80}/>


<p className="authorName">By Chad S. White</p>
<div className="features"> <p style={{color:'black'}} className="Date">February 6, 2025</p>
<div className="line"></div>
<p style={{color:'blue'}} className="Market">Digital Marketing</p></div>
</div>
          <div className="links"><Link href="/">hi</Link></div>
          <div className="buttons"> <div className="Sharing">      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>  
          <p className="shared" style={{color:'black'}}>Share</p>
          </div>
          <div className="Saving">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>
          <p className="saved" style={{color:'black'}}>Save</p>

          </div></div>
          <p className="contentss" style={{color:'black'}}>Less personalization in your email marketing strategy? You heard that right.
          </p>
         <p style={{color:'black'}}>The Gist</p>
         <ul>
          
          <li>Optimizing campaign frequency. Adjust email frequency based on engagement. Send fewer emails to less-engaged subscribers while increasing opportunities for highly-engaged ones.</li>
          <li>
         Increasing revenue with automation. Automate key lifecycle moments. High-performing campaigns like cart abandonment and welcome emails drive the majority of email marketing revenue.
         </li>
          <li>Personalization pitfalls. Less can be more. Overpersonalization diminishes brand voice, so dial back on variations to maintain a unified experience.</li>

         </ul>
         

        </div>
       
       </div>
       
    </main>
    </>
  );
}
