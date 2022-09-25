import React, { useEffect, useState } from 'react';

const FormMultipleChoice = () => {
  const [options, setOptions] = useState([{ key: 0, text: '옵션 1' }]);
  const [deleteCatch, setDeleteCatch] = useState(1);

  const addOption = () => {
    setOptions((option) => [
      ...option,
      {
        key: options.length + 1,
        text: `옵션 ${options.length + 1}`,
      },
    ]);
  };
  const addEtc = () => {
    setOptions((option) => [
      ...option,
      {
        key: options.length + 1,
        text: '기타...',
      },
    ]);
  };
  const deleteOption = (index: number) => {
    let newArr = options;
    newArr.splice(index, 1);
    setOptions(newArr);
    setDeleteCatch(deleteCatch + 1);
  };
  return (
    <div className='w-full'>
      {options.map((option, index) => (
        <div key={index} className='flex w-full my-2'>
          <input
            type='text'
            className='flex-1 border border-t-0 border-l-0 border-r-0 border-b-purple-400 p-2 outline-none'
            placeholder={option.text}
          />
          {options.length > 1 && (
            <button className='ml-4' onClick={() => deleteOption(index)}>
              X
            </button>
          )}
        </div>
      ))}

      {options?.length < 10 ? (
        <div className='my-4'>
          <button className='text-blue-500' onClick={addOption}>
            옵션 추가
          </button>{' '}
          또는{' '}
          <button className='text-blue-500' onClick={addEtc}>
            기타 추가
          </button>
        </div>
      ) : (
        <div className='my-4'>
          <button className='text-blue-500' onClick={addEtc}>
            기타 추가
          </button>
        </div>
      )}
    </div>
  );
};

export default FormMultipleChoice;
