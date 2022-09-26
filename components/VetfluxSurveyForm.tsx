import React, { useState } from 'react';
import Survey from './Survey';

const VetfluxSurveyForm = () => {
  const [surveyList, setSurveyList] = useState([{ key: 0, option: null }]);

  const addSurvey = () => {
    setSurveyList((survey: any) => [
      ...survey,
      { key: survey.length, option: null },
    ]);
  };
  const deleteSurvey = (index: number) => {
    let newArr = surveyList;
    newArr.splice(index, 1);
    setSurveyList([...newArr]);
  };
  return (
    <div className='flex flex-col justify-center h-full'>
      {surveyList.map((val, index) => (
        <Survey key={index} index={index} deleteSurvey={deleteSurvey} />
      ))}
      <button
        className='border border-black w-full my-2 p-4 text-white bg-purple-400'
        onClick={addSurvey}
      >
        +
      </button>
    </div>
  );
};

export default VetfluxSurveyForm;
