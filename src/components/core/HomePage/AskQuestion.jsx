import React, { useState } from 'react';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log('Submitted:', question);
    setQuestion('')
  };

  return (
    <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-6xl -mt-[80px]">
      <div className="mx-auto text-center dark:border dark:border-slate-600 dark:shadow-none max-w-3xl p-6 rounded-md shadow-xl">
        <div className="text-center md:mx-auto mb-8">
          <h2 className="font-bold font-heading leading-tighter tracking-tighter text-heading md:text-4xl text-4xl">
            Ask Any Question
          </h2>
          <p className="text-richblack-200 dark:text-slate-400 mt-2 text-md">
            Have a question in mind? Don't hesitate to ask! Whether it's about our services, features, or anything else, we're here to help you.
          </p>
        </div>
        <div className="gap-4 m-auto max-w-xs sm:max-w-md mt-6">
          <form className="w-full sm:mb-0 flex flex-row gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full p-2 rounded-md border border-gray-300 text-richblack-900"
              value={question}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="w-[100px] bg-blue-500 text-white p-2 rounded-md mt-2 hover:bg-blue-600 mb-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
