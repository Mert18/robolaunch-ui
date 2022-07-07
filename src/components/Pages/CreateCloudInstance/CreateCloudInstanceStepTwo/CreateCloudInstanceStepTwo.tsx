/* eslint-disable react/no-array-index-key */
import React from 'react';
import CustomLink from '../../../Link/Link';
import StepTitle from '../../../../components/Form/StepTitle/StepTitle';
import { Link } from 'react-router-dom';

interface IAddCloudInstanceStepTwo {
  loading: boolean;
}

const AddCloudInstanceStepTwo = ({ loading }: IAddCloudInstanceStepTwo) => {
  return (
    <>
      <StepTitle title="Create Cloud Instance" />

      <div className="flex flex-col items-center justify-center p-8 text-base font-normal rounded  bg-layer-200">
        <p className="my-4">
          Your cloud Instance is created. Please go to Cloud Instances page to view it.
        </p>
        <CustomLink text="Go To Cloud Instances" to="/instances/cloud-instances" />
      </div>
    </>
  );
};
export default AddCloudInstanceStepTwo;
