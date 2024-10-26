import React from 'react';

const Footer = () => {
    return (
        <div>

            <div className='border-2 flex flex-col justify-center items-center mb-10 bg-amber-400 border-black p-2 mx-20 rounded-md py-12'>
                <h2 className='text-2xl font-semibold'>Subscribe to our Newsletter</h2>
                <h4 className='from-neutral-400 my-2'>Get the latest updates and news right in your inbox!</h4>
                <div className='flex flex-row gap-3'>
                    <button><input
                    type=""
                    placeholder="Enter your email"
                    className="" /></button>
                    <button>Subscribe</button>
                </div>
       </div>





            <footer className='bg-black pt-44 mt-60 '>
                <div className='flex justify-center items-center '>
                    <img  src="../../assets/logo-footer.png" alt="" />
                </div>
                <div className="footer bg-black text-white p-10 flex justify-between flex-row gap-3">
                <nav>
    <div className="">
      
                        <h1 className="text-2xl font-bold">About Us</h1>
                        <h4>We are a passionate team <br />dedicated to providing the bestbr
                        <br />    services to our customers.</h4>
    </div>
    
    <div className="grid grid-flow-col gap-4">
     
      
   
    </div>
  </nav>
  <nav className='flex flex-col'>
    <h6 className="">Quick Links</h6>
    <a className="">Home</a>
    <a className=""> Service</a>
    <a className="">About</a>
    <a className=""> Contact</a>
  </nav>
  <nav className='flex flex-col'>
                    <h6 className="">Subscribe</h6>
                    <h5>Subscribe to our newsletter for the latest updates.</h5>
    <div className="">
      <input
        type=""
        placeholder="Enter your email"
        className="" />
      
    </div>

    <button className="btn btn-accent">Subscribe</button>
    
  </nav>
  </div>
            </footer> 
            






        </div>
    );
};

export default Footer;