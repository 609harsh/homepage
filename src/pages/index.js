

import {Typewriter} from 'react-simple-typewriter'
import { useState,useEffect } from 'react';
import {home_tryon} from "../utils/constants";


const GIF1 = '/videos/home1.mp4';
const GIF2 = '/videos/home2.gif';
// const home_tryon ="https://res.cloudinary.com/dcjufjwed/video/upload/v1676318604/Rjwada/Home/home3_nswfok.mp4";


export default function Home() {
  const [more, setMore] = useState('more');
  // const home_tryon ="https://res.cloudinary.com/dcjufjwed/video/upload/v1676318604/Rjwada/Home/home3_nswfok.mp4";
	useEffect(() => {
		setMore('more...');
	}, []);
  console.log(home_tryon);
  return (
    <div className="bg-black">
    <main className="text-white font-mons  bg-[url('/bg.svg')] bg-cover bg-no-repeat bg-fixed snap-y snap-mandatory" >
      {/* heading */}
      <div className="mx-[6%] min-h-screen flex flex-col justify-center items-center snap-end" >
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
      <div className="mx-[6%] min-h-screen flex flex-col-reverse justify-center items-center sm:flex-row snap-end">
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
      <div className="mx-[6%] min-h-screen flex flex-col justify-center gap-4 snap-end">
        <h1 className="text-purple text-3xl font-bold sm:text-6xl">Lets Enter the future from here</h1>
        <h3 className='text-white text-1xl sm:text-3xl'>A world of 3D, AR & VIRTUAL TRY ON awaits you </h3>
        <p className='text-xs text-grey leading-none  sm:text-base'>Made for future. Made for you.<br/>Celebrate the uniqueness with us.
        </p>
        <button className="rounded-lg bg-purple text-white w-40 font-semibold p-2 sm:p-3 ">STEP-IN</button>
      </div>

      {/* funfacts */}
      <div className="mx-[6%]  min-h-screen flex flex-col justify-center items-center sm:flex-row sm:justify-between snap-end">
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
      <div className="mx-[6%] my-[10%] snap-end flex flex-col justify-center gap-12 sm:flex-row">
        <div className=" flex flex-row gap-6 w-full sm:w-2/3 sm:gap-12 h-[300px] sm:h-auto sm:max-h-[550px]">
          <div className="border-white border-2 rounded-lg flex flex-col w-1/2">
            <div className="h-1/2 bg-[url('/Rectangle77.png')] bg-[length:100%_100%] bg-no-repeat rounded-lg relative">
              <img src={"/dashboard (2) 1.png"} className="absolute h-1/3 top-[10%] right-[10%] first-letter:"></img>
              <p className="absolute top-[70%] left-[10%] text-3xl md:text-4xl lg:text-6xl" >1</p>
            </div>
            <div className="h-1/2 m-[5%] flex flex-col gap-2 lg:gap-6">
              <h1 className="text-lg md:text-2xl lg:text-4xl ">Integrate on <br/><em className="text-blue">dashboard</em></h1>
              <p className="text-grey text-xs md:text-base lg:text-xl ">Easy Integration with dashboard via shopify.</p>
              <p className="text-grey text-xs md:text-base lg:text-xl ">Instant Integeration</p>
            </div>
          </div>
          <div className=" border-white border-2 rounded-lg flex flex-col  w-1/2">
            <div className="h-1/2 bg-[url('/Rectangle77.png')] bg-[length:100%_100%] bg-no-repeat rounded-lg relative">
              <img src={"/augmented-reality 1.png"} className="absolute h-1/3 top-[10%] right-[10%] first-letter:"></img>
              <p className="absolute top-[70%] left-[10%] text-3xl md:text-4xl lg:text-6xl">2</p>
            </div>
            <div className="h-1/2 m-[5%] flex flex-col gap-2 lg:gap-6">
              <h1 className="text-lg md:text-2xl lg:text-4xl">Upload <em className="text-blue">3D</em><br/> Models</h1>
              <p className="text-grey text-xs md:text-base lg:text-xl">Get 3d models after integrating on dashboard</p>
              <p className="text-grey text-xs md:text-base lg:text-xl">3-5 days for models</p>
            </div>
          </div>
        </div>
        <div className="border-white border-2 overflow-hidden rounded-lg flex-1 w-full max-h-[550px] sm:w-1/3 ">
          <video src={home_tryon} autoPlay loop muted className="rounded-lg"/>
        </div>
      </div>
    </main>
    </div>
    
    
  )
}
