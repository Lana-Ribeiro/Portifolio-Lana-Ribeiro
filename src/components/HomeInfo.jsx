import { Link } from "react-router-dom";


const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center  py-4 px-8 text-white mx-5'>
        Olá, sou a 
        <span className='font-semibold mx-2 text-white'>Lana</span>
        👋
        <br />
        Desenvolvedora FullStack
      </h1>
    );
  return null;
};

export default HomeInfo;