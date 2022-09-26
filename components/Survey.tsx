import React, { useState } from 'react';
import FormMultipleChoice from './FormMultipleChoice';
import FormSubjectiveChoice from './FormSubjectiveChoice';

const Survey = ({
  index,
  deleteSurvey,
  saveSurveyList,
}: {
  index: number;
  deleteSurvey: (index: number) => void;
  saveSurveyList: any;
}) => {
  const [value, setValue] = useState('');
  const [dropQuestionsType, setDropQuestionsType] = useState(false);
  const questionsTypeList = [
    '객관식 질문',
    '체크박스',
    '드롭다운',
    '단답형',
    '장문형',
  ];
  const [selectedQuestionsType, setSelectedQuestionsType] = useState(
    questionsTypeList[0],
  );

  const onChange = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  return (
    <div className='flex flex-col  border border-purple-100 rounded-2xl w-full my-2 pt-8 px-8'>
      <div className='flex flex-row'>
        <input
          type='text'
          className='bg-gray-100 p-2 w-[20rem]'
          value={value}
          placeholder='질문'
          onChange={onChange}
        />
        <div className='relative ml-8 w-[10rem]'>
          <button
            className='border p-3 w-full'
            onClick={() => setDropQuestionsType(!dropQuestionsType)}
          >
            {selectedQuestionsType}
          </button>
          {dropQuestionsType && (
            <div className='flex flex-col border border-gray-200 absolute top-12 p-3 bg-white w-full z-50'>
              {questionsTypeList.map((type, index) => {
                if (type !== selectedQuestionsType)
                  return (
                    <button
                      key={index}
                      className='my-2'
                      onClick={() => {
                        setSelectedQuestionsType(type);
                        setDropQuestionsType(false);
                      }}
                    >
                      {type}
                    </button>
                  );
              })}
            </div>
          )}
        </div>
      </div>
      <div className='mt-4'>
        {selectedQuestionsType === '객관식 질문' && (
          <FormMultipleChoice
            type={'객관식 질문'}
            saveSurveyList={saveSurveyList}
          />
        )}
        {selectedQuestionsType === '체크박스' && (
          <FormMultipleChoice
            type={'체크박스'}
            saveSurveyList={saveSurveyList}
          />
        )}
        {selectedQuestionsType === '드롭다운' && (
          <FormMultipleChoice
            type={'드롭다운'}
            saveSurveyList={saveSurveyList}
          />
        )}
        {selectedQuestionsType === '단답형' && (
          <FormSubjectiveChoice
            type={'단답형'}
            saveSurveyList={saveSurveyList}
          />
        )}
        {selectedQuestionsType === '장문형' && (
          <FormSubjectiveChoice
            type={'장문형'}
            saveSurveyList={saveSurveyList}
          />
        )}
        {/* {selectedQuestionsType === '파일업로드' && <div>파일업로드</div>} */}
      </div>
      <div className='flex justify-end'>
        {index !== 0 && (
          <button
            className='w-15 px-2 mb-4 bg-purple-100 text-[0.7rem] text-purple-700'
            onClick={() => deleteSurvey(index)}
          >
            질문 삭제
          </button>
        )}
      </div>
    </div>
  );
};

export default Survey;
