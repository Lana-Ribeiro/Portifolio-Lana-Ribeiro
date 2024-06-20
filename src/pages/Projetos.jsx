import { Link } from "react-router-dom";

import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projetos = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Meus{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projetos
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      Tenho me envolvido em alguns projetos ao longo dos anos, mas estes são os que guardo com mais carinho. Muitos deles são de código aberto, então, se você encontrar algo que desperte seu interesse, sinta-se à vontade para explorar o repositório de código e contribuir com suas ideias para futuras melhorias. Sua colaboração é muito valorizada!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      {/* <CTA /> */}
    </section>
  );
};

export default Projetos;