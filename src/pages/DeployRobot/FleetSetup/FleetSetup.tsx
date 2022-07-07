/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { FastField, FieldArray } from 'formik';
import Button from '../../../components/Button/Button';
import StepTitle from '../../../components/Form/StepTitle/StepTitle';
import InputField from '../../../components/Form/InputField/InputField';
import cloudInstances from '../../../mock/mockCloudInstances.json';
import regions from '../../../mock/mockRegions.json';
import resources from '../../../mock/mockResources.json';
import physicalInstances from '../../../mock/mockPhysicalInstances.json';

interface IFleetSetup {
  values: any;
  setValues: any;
  currentFields: any;
  setCurrentFields: any;
}

const FleetSetup = ({ values, setValues, currentFields, setCurrentFields }: IFleetSetup) => {
  const [region, setRegion] = useState('');
  const [cloudInstance, setCloudInstance] = useState('');
  const [virtualRobotCount, setVirtualRobotCount] = useState(1);
  const [selectedResource, setSelectedResource] = useState(resources[0]);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [addRobotType, setAddRobotType] = useState('virtual');
  const [selectedPhysicalInstances, setSelectedPhysicalInstances] = useState([]);
  const [message, setMessage] = useState('');
  const [messageHybrid, setMessageHybrid] = useState('');

  const handleAddWorkspace = () => {
    values.workspaces.push({
      name: '',
      rosDistro: '',
      repositories: [],
      customBuild: false,
      buildSteps: []
    });
    setValues(values);
  };

  const handleNextStep = () => {
    if (values.workspaces.length === 0) {
      handleAddWorkspace();
    }
    setCurrentFields('workspaces.workspace0');
  };

  const handleAddVirtual = () => {
    if (region === '' || cloudInstance === '') {
      setMessage('Please select a region and a cloud instance');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } else {
      values.robotsVirtual.push({
        region: region,
        cloudInstance: cloudInstance,
        robotCount: virtualRobotCount
      });
      setValues(values);
      setRegion('');
      setCloudInstance('');
      setVirtualRobotCount(1);
    }
  };

  const handleAddHybrid = () => {
    if (region === '' || cloudInstance === '' || selectedPhysicalInstances.length === 0) {
      setMessageHybrid('Please select a region, a cloud instance and a physical instance');
      setTimeout(() => {
        setMessageHybrid('');
      }, 3000);
    } else {
      values.robotsHybrid.push({
        region: region,
        cloudInstance: cloudInstance,
        physicalInstances: selectedPhysicalInstances
      });
      setRegion('');
      setCloudInstance('');
      setValues(values);
      setSelectedPhysicalInstances([]);
    }
  };

  return (
    <div className="w-full">
      <StepTitle title="Basic Information" />
      <div className="flex flex-col items-center justify-center rounded ">
        <div className="w-full">
          <p className=" uppercase text-lowContrast text-sm font-bold">Fleet Setup</p>
        </div>
        <div className="w-full bg-light-200 dark:bg-layer-200 mx-4 border border-lowContrast rounded dark:border-layer-600 p-4">
          <InputField id="robotType" label="Robot Type" info="Select the robot type .">
            <select
              className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
              id="robotType"
              name="robotType"
              onChange={(e) => setAddRobotType(e.target.value)}
              disabled={values.robotsVirtual.length > 0 || values.robotsHybrid.length > 0}
            >
              <option value="virtual">Virtual</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </InputField>
          <InputField id="fleetName" label="Fleet Name" info="Select the fleetName of the robot.">
            <FastField
              className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none placeholder:italic"
              id="fleetName"
              name="fleetName"
              label="Fleet Name"
              placeholder="e.g fleet-chicago"
            />
          </InputField>
          <InputField id="robotName" label="Robot Name" info="Select the robotName of the robot.">
            <FastField
              className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none placeholder:italic"
              id="robotName"
              name="robotName"
              label="Robot Name"
              placeholder="e.g linorobot"
            />
          </InputField>

          <div className="my-6"></div>
          <InputField id="region" label="Region" info="Type the region name.">
            <select
              className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none"
              name="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option disabled={true} value="">
                --Select the region--
              </option>
              {regions.map((region) => {
                return (
                  <option key={region.regionName} value={region.regionName}>
                    {region.regionName}
                  </option>
                );
              })}
            </select>
          </InputField>
          <InputField
            id="cloudInstance"
            label="Cloud Instance Name"
            info="Type the Cloud Instance name."
          >
            <select
              className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none "
              name="cloudInstance"
              value={cloudInstance}
              onChange={(e) => setCloudInstance(e.target.value)}
            >
              <option disabled={true} value="">
                --Select the cloud Instance--
              </option>

              {cloudInstances.map((cloudInstance) => {
                return (
                  <option
                    key={cloudInstance.cloudInstanceName}
                    value={cloudInstance.cloudInstanceName}
                  >
                    {cloudInstance.cloudInstanceName}
                  </option>
                );
              })}
            </select>
          </InputField>
          {addRobotType === 'virtual' ? (
            <InputField
              id="robotCount"
              label="Robot Count"
              info="How many robots you want to deploy?."
            >
              <input
                className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-layer-600 focus:border-none "
                name="robotCount"
                type="number"
                value={virtualRobotCount}
                onChange={(e) => setVirtualRobotCount(Number(e.target.value))}
              />
            </InputField>
          ) : addRobotType === 'hybrid' ? (
            <InputField
              id="physicalInstances"
              label="Physical Instances"
              info="Select the physical instances to deploy to."
            >
              <ul>
                {physicalInstances.map((physicalInstance) => (
                  <li
                    key={physicalInstance.physicalInstanceName}
                    className="flex items-center py-2"
                  >
                    <label className="flex">
                      <input
                        type="checkbox"
                        value={physicalInstance.physicalInstanceName}
                        className="h-5 w-5 mr-2"
                        onChange={() => {
                          if (
                            selectedPhysicalInstances.includes(
                              physicalInstance.physicalInstanceName
                            )
                          ) {
                            setSelectedPhysicalInstances(
                              selectedPhysicalInstances.filter(
                                (instance) => instance !== physicalInstance.physicalInstanceName
                              )
                            );
                          } else {
                            setSelectedPhysicalInstances([
                              ...selectedPhysicalInstances,
                              physicalInstance.physicalInstanceName
                            ]);
                          }
                        }}
                      />
                      <p>{physicalInstance.physicalInstanceName}</p>
                    </label>
                  </li>
                ))}
              </ul>
            </InputField>
          ) : (
            ''
          )}
          {messageHybrid && (
            <div>
              <p>{messageHybrid}</p>
            </div>
          )}
          {message && (
            <div>
              <p>{message}</p>
            </div>
          )}

          <div className="m-2">
            <Button
              type="button"
              disabled={false}
              style="primary"
              handleClick={addRobotType === 'virtual' ? handleAddVirtual : handleAddHybrid}
              text="Add"
            />
          </div>
          <InputField label="Robots" info="Added robots." id="robots">
            <FieldArray name="robotsHybrid">
              {(arrayHelpers) => (
                <>
                  {values.robotsHybrid &&
                    values.robotsHybrid.map((hybridRobot: any, index: number) => (
                      <div className="bg-light-200 dark:bg-layer-200 m-2" key={index}>
                        <div className="flex items-center">
                          <div className="w-[95%]">
                            <div className="flex justify-start items-center text-lowContrast uppercase text-sm font-bold">
                              <p className="flex-1">Region</p>
                              <p className="flex-1">Cloud Instance</p>
                              <p className="flex-1">Physical Instances</p>
                            </div>
                            <div className="flex justify-start items-center">
                              <p className="flex-1">{hybridRobot.region}</p>
                              <p className="flex-1">{hybridRobot.cloudInstance}</p>
                              <div className="flex-1">
                                {hybridRobot.physicalInstances.map((el) => (
                                  <p key={el}>{el}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                          <Button
                            disabled={false}
                            style="delete"
                            type="button"
                            icon="trash"
                            handleClick={() => arrayHelpers.remove(index)}
                          />
                        </div>
                      </div>
                    ))}
                </>
              )}
            </FieldArray>
            <FieldArray name="robotsVirtual">
              {(arrayHelpers) => (
                <>
                  {values.robotsVirtual &&
                    values.robotsVirtual.map((virtualRobot: any, index: number) => (
                      <div className="bg-light-200 dark:bg-layer-200 m-2" key={index}>
                        <div className="flex">
                          <div className="w-[95%]">
                            <div className="flex justify-start items-center text-lowContrast uppercase text-sm font-bold">
                              <p className="flex-1">Region</p>
                              <p className="flex-1">Cloud Instance</p>
                              <p className="flex-1">Robot Count</p>
                            </div>
                            <div className="flex justify-start items-center">
                              <p className="flex-1">{virtualRobot.region}</p>
                              <p className="flex-1">{virtualRobot.cloudInstance}</p>
                              <p className="flex-1">{virtualRobot.robotCount}</p>
                            </div>
                          </div>
                          <Button
                            disabled={false}
                            style="delete"
                            type="button"
                            icon="trash"
                            handleClick={() => arrayHelpers.remove(index)}
                          />
                        </div>
                      </div>
                    ))}
                </>
              )}
            </FieldArray>
          </InputField>

          <div className="my-6"></div>

          <InputField
            id="robotResource"
            label="Robot Resource"
            info="Select the resource for this robot."
          >
            <div className="overflow-scroll overflow-y-auto overflow-x-auto max-h-[30vh]">
              <div onClick={() => setIsResourcesOpen(!isResourcesOpen)}>
                <div className="flex flex-col p-4 bg-light-300 dark:bg-layer-100 border border-lowContrast dark:border-layer-600 hover:bg-light-200 dark:hover:bg-layer-200 cursor-pointer mb-4">
                  <div className="flex">
                    <div className="flex-1">
                      <p className="text-lowContrast text-sm font-bold uppercase">Name</p>
                      <p className="text-sm font-semibold">{selectedResource.name}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-lowContrast text-sm font-bold uppercase">Family</p>
                      <p className="text-sm font-semibold">{selectedResource.family}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-lowContrast text-sm font-bold uppercase">Cpu</p>
                      <p className="text-sm font-semibold">{selectedResource.cpu}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="text-lowContrast text-sm font-bold uppercase">Gpu</p>
                      <p className="text-sm font-semibold">{selectedResource.gpu}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-lowContrast text-sm font-bold uppercase">Memory</p>
                      <p className="text-sm font-semibold">{selectedResource.memory}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-lowContrast text-sm font-bold uppercase">Storage</p>
                      <p className="text-sm font-semibold">{selectedResource.storage}</p>
                    </div>
                  </div>
                </div>
              </div>
              {isResourcesOpen && (
                <ul className="p-2 rounded">
                  {resources.map((resource) => (
                    <li
                      key={resource.name}
                      onClick={() => {
                        setIsResourcesOpen(false);
                        setSelectedResource(resource);
                        values.robotResource = resource;
                        setValues(values);
                      }}
                      className="my-2"
                    >
                      <div className="flex flex-col p-4 bg-light-300 dark:bg-layer-100 border border-lowContrast dark:border-layer-600 hover:bg-light-200 dark:hover:bg-layer-200 cursor-pointer">
                        <div className="flex">
                          <div className="flex-1">
                            <p className="text-lowContrast text-sm font-bold uppercase">Name</p>
                            <p className="text-sm font-semibold">{resource.name}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-lowContrast text-sm font-bold uppercase">Family</p>
                            <p className="text-sm font-semibold">{resource.family}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-lowContrast text-sm font-bold uppercase">Cpu</p>
                            <p className="text-sm font-semibold">{resource.cpu}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-1">
                            <p className="text-lowContrast text-sm font-bold uppercase">Gpu</p>
                            <p className="text-sm font-semibold">{resource.gpu}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-lowContrast text-sm font-bold uppercase">Memory</p>
                            <p className="text-sm font-semibold">{resource.memory}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-lowContrast text-sm font-bold uppercase">Storage</p>
                            <p className="text-sm font-semibold">{resource.storage}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </InputField>
        </div>
      </div>
      <div className="flex justify-center w-full mt-8 mb-8">
        <div className="flex justify-between flex-row-reverse w-full">
          <Button
            text="Next"
            type="button"
            disabled={false}
            style="primary"
            handleClick={handleNextStep}
          />
        </div>
      </div>
    </div>
  );
};
export default FleetSetup;
