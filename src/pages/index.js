
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Typewriter} from 'react-simple-typewriter'
import { useState,useEffect } from 'react';
const GIF1 = '/videos/home1.mp4';
const GIF2 = '/videos/home2.gif';

export default function Home() {
  const [more, setMore] = useState('more');

	useEffect(() => {
		setMore('more...');
	}, []);

  return (
  <><Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </Head>
    <main className="text-white font-mons bg-black" >
      {/* heading */}
      <div className="mx-[6%] min-h-screen flex flex-col justify-center items-center" >
        <h1 className="font-bold uppercase text-xl m-5 text-center md:text-4xl lg:text-5xl ">Sell your products <span className="text-blue ">
            <em>
              <Typewriter words={[more]} cursor cursorStyle=' ' typeSpeed={100}  deleteSpeed={100}  delaySpeed={4000} cursorBlinking={false} loop={true}/>
            </em>
            </span>
        </h1>
        <h3 className="text-center normal-case font-bold text-[14px] sm:text-2xl text-grey">Dynamic deep tech to increase your conversion rate <br/>and lower the return rate on your products</h3>       
        <button className="flex items-center justify-center gap-2 md:w-auto bg-blue text-white font-bold py-2 px-5 rounded-lg m-20 whitespace-nowrap text-sm sm:text-xl">
          <span className="inline">Speak with us</span>
          <img src="/Vector.png" alt="Button Image"/>
        </button>
      </div>
      
      {/* features */}
      <div className="mx-[6%] min-h-screen flex flex-col-reverse justify-center items-center sm:flex-row">
        <div className='flex justify-center'>
        <video src={GIF1} autoPlay loop muted className='w-[70%] sm:w-[60%] ' />
        </div>
        <div className="flex flex-col justify-between pb-5 ">
          <h1 className="text-green font-bold text-lg uppercase pb-[5%] sm:text-3xl ">Try out all the featuristic features</h1>
          <p className="text-grey font-medium text-md pb-[5%] sm:text-xl">A complete new feature for the new you. Be a model of your own. Try as many clothes as you want
          </p>
          <p className="text-grey font-medium text-md pb-[5%] sm:text-xl">
            No Time Constraints!
          </p>
          <div className="flex flex-row justify-evenly gap-2">
            <button className="bg-blue rounded-lg border-2 border-blue uppercase font-medium p-1 text-sm w-1/3 sm:text-lg" >3d view</button>
            <button className="rounded-lg border-4 border-aquaBlue uppercase font-medium p-1 text-sm w-1/3 sm:text-lg">view ar</button>
          </div>
        </div>
      </div>

      {/* stepin */}
      <div className="mx-[6%] min-h-screen flex flex-col justify-center gap-4">
        <h1 className="text-purple text-3xl font-bold sm:text-6xl">Lets Enter the future from here</h1>
        <h3 className='text-white text-1xl sm:text-3xl'>A world of 3D, AR & VIRTUAL TRY ON awaits you </h3>
        <p className='text-xs text-grey leading-none  sm:text-base'>Made for future. Made for you.<br/>Celebrate the uniqueness with us.
        </p>
        <button className="rounded-lg bg-purple text-white w-40 font-semibold p-2 sm:p-3 ">STEP-IN</button>
      </div>

      {/* funfacts */}
      <div className="mx-[6%]  min-h-screen flex flex-col justify-center items-center sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-4 font-medium tracking-wider pb-4">
          <button className="rounded-lg text-green border-2 border-green w-36 p-1 font-semibold" >Fun Facts</button>
          <h1 className="text-green text-3xl font-semibold sm:text-5xl">27% Increase</h1>
          <p className="text-sm sm:text-base">In conversion rate, when you use AR technology</p>
          <h1 className="text-green text-3xl font-semibold sm:text-5xl">40% Decrease</h1>
          <p className="text-sm sm:text-base">In product return rate, when you use AR technology</p>
        </div>
        <div >
          <img src={GIF2}></img>
        </div>
      </div>

      {/* cards */}
      <div>
        
      </div>
    </main>
  </>
  )
}
