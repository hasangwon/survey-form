import React from 'react';

const FormSubjectiveChoice = () => {
  return (
    <div className='w-full'>
      <div className='flex w-full my-2'>
        <input
          type='text'
          className='flex-1 border border-t-0 border-l-0 border-r-0 border-b-purple-400 p-2 outline-none'
          placeholder={'텍스트'}
          disabled
        />
      </div>
    </div>
  );
};

export default FormSubjectiveChoice;
