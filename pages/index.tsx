import { useState } from 'react';
import LoginLogo from '../components/LoginLogo';
import VetfluxForm from '../components/vetfluxForm';

const Home = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className='flex flex-col justify-center items-center flex-1 w-full h-full mt-8'>
      <div className='flex flex-row mb-4'>
        <LoginLogo />
        <button
          className='h-full border border-purple-400 rounded-lg p-4 bg-purple-400 text-white'
          onClick={() => setOpenForm(!openForm)}
        >
          OPEN
        </button>
      </div>
      {openForm && <VetfluxForm />}
    </div>
  );
};

export default Home;
