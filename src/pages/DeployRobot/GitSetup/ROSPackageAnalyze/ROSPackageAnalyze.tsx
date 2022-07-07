import { FastField, Field, FieldArray } from 'formik';
import React from 'react';
import InputField from '../../../../components/Form/InputField/InputField';
import Loader from '../../../../components/Loader/Loader';

interface IROSPackageAnalyze {
  values: any;
  currentFields: any;
  index2: any;
  index1: any;
  loadingROSPackages: any;
  setValues: any;
}

const ROSPackageAnalyze = ({
  values,
  currentFields,
  loadingROSPackages,
  index2,
  index1,
  setValues
}: IROSPackageAnalyze) => {
  return (
    <div>
      <div>
        <p className="text-lowContrast text-sm font-bold uppercase w-full">ROS Package Analyze</p>
      </div>
      {loadingROSPackages ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="bg-light-200 dark:bg-layer-200 border border-lowContrast rounded dark:border-layer-600 min-h-[20vh] p-2">
          <FieldArray name="rosPackages">
            {(arrayHelpers) => (
              <>
                {values.workspaces[index1].repositories[index2].rosPackages.map((item, index) => (
                  <div key={index} className="p-4 border border-lowContrast dark:border-layer-600">
                    <div>
                      <p className="font-bold text-base">{item.name}</p>
                    </div>
                    <div className="flex items-center">
                      <InputField
                        id="isChecked"
                        info="Do you want this package enabled?"
                        label="Is Active"
                      >
                        <span></span>
                      </InputField>
                      <Field
                        type="checkbox"
                        name={`workspaces[${index1}].repositories[${index2}].rosPackages[${index}].isChecked`}
                        className="h-5 w-5 mr-2"
                        onChange={() => {
                          if (
                            values.workspaces[index1].repositories[index2].rosPackages[index]
                              .isChecked
                          ) {
                            values.workspaces[index1].repositories[index2].rosPackages[
                              index
                            ].isChecked = false;
                            setValues(values);
                          } else {
                            values.workspaces[index1].repositories[index2].rosPackages[
                              index
                            ].isChecked = true;

                            setValues(values);
                          }
                        }}
                      />
                    </div>
                    <div>
                      <InputField
                        id="description"
                        info="Description about this package"
                        label="Description"
                      >
                        <p>
                          {
                            values.workspaces[index1].repositories[index2].rosPackages[index]
                              .description
                          }
                        </p>
                      </InputField>
                    </div>
                  </div>
                ))}
              </>
            )}
          </FieldArray>
        </div>
      )}
    </div>
  );
};

export default ROSPackageAnalyze;
