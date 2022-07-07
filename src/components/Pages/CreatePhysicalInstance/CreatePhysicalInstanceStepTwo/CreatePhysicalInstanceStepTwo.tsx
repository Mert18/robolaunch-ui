/* eslint-disable react/no-array-index-key */
import React from 'react';
import StepTitle from '../../../Form/StepTitle/StepTitle';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-syntax-highlighter';

const AddRobotStepTwo = () => {
  const key = '3CTyPGRm7hrvcvxcBl1V5RwnBNSKov5L';

  return (
    <>
      <StepTitle title="Connect to your instance" />

      <div className="flex flex-col justify-start items-start mt-8 mb-8 w-full bg-layer-200 p-6 rounded">
        <p className="text-base">
          You can connect to your instance using the following key. To learn about this key, please
          read the FAQ.
        </p>
        <div className="flex justify-center items-center overflow-hidden">
          <SyntaxHighlighter language="javascript" style={nord}>
            {key}
          </SyntaxHighlighter>
          <div
            className="bg-primary-100 p-2 ml-4 hover:bg-primary-200 cursor-pointer font-medium rounded"
            onClick={() => navigator.clipboard.writeText(key)}
          >
            Copy
          </div>
        </div>
      </div>
    </>
  );
};
export default AddRobotStepTwo;
