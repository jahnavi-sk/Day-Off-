import React, { useState, useEffect } from 'react';
import off_logo from './assets/off_logo.png';
import next from './assets/next.png';
import class1 from './assets/class.svg';
import { useNavigate } from 'react-router-dom';


import { ReactTyped } from 'react-typed';



export default function Home() {

    const navigate  = useNavigate();
    const [isVisible, setIsVisible] = useState(true);
    const [className, setClassName] = useState('initial-class');
    const [isCompact, setIsCompact] = useState(false);
    const [isArrCompact, setIsArrCompact] = useState(true);

    const [isOnScreen, setIsOnScreen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    
    

    const buttonClick = () => {
      if (!isCompact) {
        // No delay when going from w-full to w-1/2
        setIsCompact(true);
      } else {
        // Apply a 1-second delay when going from w-1/2 to w-full
        setTimeout(() => {
          setIsCompact(false);
        }, 500);
      }
      // setIsCompact(prev=>!prev)
      setIsArrCompact(false);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Match this timeout with your animation duration
    };
  
    // useEffect(() => {
    //     setTimeout(() => {
    //       setIsOnScreen(true);
    //     }, 1500); 
    //   }, []);

        

  return (
    <div className="bg-yellow-50 min-h-screen w-full px-2">

      <div className='flex-column md:flex justify-between items-center'>
        <div className="rounded-lg relative flex justify-center md:justify-start md:hover:shadow-xl transition ease-out duration-500">
          <div className='pt-6 pr-5 text-3xl font-heading absolute font-bold '>dAyofF</div>
          <img src={off_logo} className='rounded-lg shadow-sm pl-24 w-15 h-20'/>
        </div>
        <div className="flex justify-center md:justify-end md:pr-5 md:space-x-4 mt-4 md:mt-0">
          {/* <div className='bg-black rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider text-center hover:bg-white hover:text-black'>
            
          </div> */}
          <div onClick={buttonClick} className="md:bg-black rounded-full py-3 px-4 uppercase text-lg font-bold cursor-pointer tracking-wider text-center tect-black md:text-neutral-50 text-md hover:underline md:hover:no-underline md:hover:bg-darkyellow  md:hover:text-black transition ease-out duration-500">Log in</div>
          <div onClick={buttonClick}className="md:bg-darkyellow rounded-full py-3 px-4 uppercase text-lg font-bold cursor-pointer tracking-wider text-center text-black text-md hover:underline md:hover:no-underline md:hover:bg-black md:hover:text-white transition ease-out duration-500">Sign Up</div>


          {/* <div className='bg-darkyellow rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider' >
            <div className='text-neutral-50 text-md'>Sign Up</div>
          </div> */}
        </div>
        
      </div>

      

    <div className='flex'> 
            <div>
              



            <div className={`w-full ${isCompact? 'ease-in-out duration-1000 w-1/2' : 'ease-in duration-1000'} pt-20 transition-all duration-1000 ease-in-out`}>
            <div className={`flex flex-col items-center pl-8 ${isCompact? 'ease-in-out duration-1000 text-8xl' : 'ease-in-out duration-1000 text-9xl'}`}>
          <div className='flex justify-center'>
            {`All the `}
              {/* <div></div> */}
            {!isArrCompact || !isCompact && (
                <>
                <div>
                      <img src={class1} alt="Card Image" className="rounded-lg shadow-lg block w-20 md:w-48 h-14 md:h-40 relative hover:shadow-2xl transition ease-out duration-200 mr-2"/>
                </div>
                </>
            )}
            class-skipping
          </div>
          
          <div className='flex justify-center'> {/* This div keeps images horizontally aligned */}
            {`help you need `}
            {!isArrCompact || !isCompact && (
              <>
              <div>
                <img id="img1" src={next} alt="Card Image" className="inline-block w-10 h-10 md:w-20 md:h-20 relative"/>
                <img id="img1" src={next} alt="Card Image" className="inline-block w-10 h-10 md:w-20 md:h-20 relative"/>
                </div>
              </>
            )}
            right here
          </div>


        </div>

            </div>



            <div className={`ml-10 w-full ${isCompact? 'ease-in-out duration-1000 w-1/2' : ''} pt-20 flex items-center ${isCompact? 'justify-start' : 'justify-center'} bg-yellow-50 px-2`}>
              <div className="pt-8 pb-8 flex justify-center">
                <img id="img1" src={off_logo} alt="Image Card Description" className="rounded-lg shadow-lg w-10 h-10"/>
              </div>
              <ReactTyped className={`text-neutral-700 text-2xl text-center ${isCompact? 'md:text-4xl' : 'md:text-4xl'}`}
                strings={[
                  "Bunking has never been less stressful",
                  "Bunking has never been less easier",
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </div>



    </div>
    

{isCompact && (
    <>
    <div className={`w-7/12 ml-36 transition-opacity duration-1000 flex justify-center ease-in-out ${isAnimating ||!isCompact? 'opacity-0' : 'opacity-100'} bg-box mt-20 mr-8 ml-4  rounded-5xl`}>
    <div className='flex-column'>
      <div className='text-6xl flex align-text-center' style={{fontFamily:"Gagalin"}}>
        Log In
      </div>
  
    <div className='text-5xl'>
      Welcome Back
    </div>
    <div>
      username
    </div>
    <div>
      line
    </div>
    <div>
      password
    </div>
    <div>
      line
    </div>
    <div>
      forgot password
    </div>
    <div>
      log in
    </div>
    <div>
      New? Create Account
    </div>
    <div>

    </div>
    </div>
    
    
  </div>
    </>
    
     )} 


    
  
    </div>


    
    
    {/* <div className={`w-full ${isCompact? 'ease-in-out duration-1000 w-1/2' : ''} pt-20 flex items-center ${isCompact? 'justify-start' : 'justify-center'} bg-yellow-50 px-2`}>
        <div className="pt-8 pb-8 flex justify-center">
          <img id="img1" src={off_logo} alt="Image Card Description" className="rounded-lg shadow-lg w-10 h-10"/>
        </div>
        <ReactTyped className={`text-neutral-700 text-2xl  text-center ${isCompact? 'md:text-3xl' : 'md:text-4xl'}`}
          strings={[
            "Bunking has never been less stressful",
            "Bunking has never been less easier",
          ]}
          typeSpeed={70}
          backSpeed={50}
          loop
        />
      </div> */}
    </div>
  );
}