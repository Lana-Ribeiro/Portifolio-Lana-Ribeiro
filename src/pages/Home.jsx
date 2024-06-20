import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from '../components/Loader'
import Spline from '@splinetool/react-spline';
import HomeInfo from '../components/HomeInfo';




const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);

  return (
  
    <section className="w-full h-screen relative">

<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

<Spline scene="https://prod.spline.design/COPXwcBaRkAPJ3Lz/scene.splinecode" />



    <Canvas   

      className='w-full h-screen bg-transparent'
      camera={{near: 0.1, far:1000 }}
      
      >
      <Suspense fallback={<Loader />}>
        <directionalLight  position={[1, 1, 1]} intensity ={2}/>
        <ambientLight  intensity ={0.5} />
        <pointLight />
        <spotLight />
        <hemisphereLight skyColor = '#b1e1ff' groundColor='#000000'/>
      </Suspense>

    </Canvas>


    </section>
  )
}

export default Home
