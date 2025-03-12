
const Footer = () => {
    return (
      <div className="mt-5" >
        <div className="top-foot flex bg-[#ebeeef] p-3 justify-center gap-[150px] ">
          <ul className="pop-location">
            <li className="font-bold">Popular Locations</li>
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
          <ul className="trend-location " >
            <li className="font-bold">Trending Locations</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Bhubaneshwar</li>
            <li>Nashik</li>
          </ul>
          <ul className="about">
            <li className="font-bold">ABOUT US</li>
            <li>Tech@OLX</li>
          </ul>
          <ul className="OLX">
             <li className="font-bold" >OLX</li>
             <li>Blog</li>
             <li>Help</li>
             <li>Sitemap</li>
             <li>Legal & Privacy information</li>
             <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>
        <div className="bottom bg-[#002f34] grid justify-center items-center h-[200px] ">
          <div className="flex justify-center  items-center gap-[90px]">
          <img className="w-[200px]" src="	https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1" alt="" />
          <img className="w-[50px]" src="	https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="" />
          <img className="w-[100px]" src="	https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1" alt="" />
          <img className="w-[100px]" src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1" alt="" />
          <img className="w-[100px]" src="	https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1" alt="" />
          <img className="w-[100px]" src="	https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1" alt="" />
          </div >
  
          <div className="flex justify-end">
          <span className=" w-[80px]  text-[12px] mb-[] text-white">Help - Sitemap</span>
          <p className="ml-[1100px]  text-[12px] mb-[] text-white">All rights reserved © 2006-2025 OLX</p>
          </div>
          
        </div>  
      </div>
    )
  }
  
  export default Footer