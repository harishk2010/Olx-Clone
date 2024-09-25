const Footer = () => {
  return (
    <>
     
        <div className=" flex justify-evenly flex-wrap   bg-gray-100 mt-5 p-5 ">
          <div className="py-2">
            <h3 className="font-serif font-semibold py-3 "> POPULAR LOCATIONS</h3>
            <ul className=" ">
              <li>kolkata</li>

              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
          <div className="py-2">
            <h3 className="font-serif font-semibold py-3 "> POPULAR LOCATIONS</h3>
            <ul className=" ">
              <li>About OLX Group</li>

              <li>Careers</li>
              <li>Contact Us
              </li>
              <li>OLXPeople
              </li>
            </ul>
          </div>
          <div className="py-2">
            <h3 className="font-serif font-semibold py-3 "> OLX</h3>
            <ul className=" ">
              <li>Help</li>

              <li>Sitemap</li>
              <li>Legal & Privacy information
              </li>
             
            </ul>
          </div>
        </div>
        <div className="flex  flex-wrap items-center justify-center h-24 gap-2 bg-green-900 text-white">
          <p>Other Countries Pakistan - South Africa - Indonesia</p>
          <p>Free Classifieds in India. © 2006-2021 OLX</p>
        </div>
      
    </>
  );
};

export default Footer;
