import { ErrorMessage, FastField } from 'formik';
import React, { useContext } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import LabelWithInfo from '../../../../components/Form/LabelWithInfo/LabelWithInfo';
import { ThemeContext } from '../../../../context/ThemeContext';

const BuildField = ({ index1, index4, values, arrayHelpers4 }) => {
  const [code, setCode] = React.useState('');
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      key={index4}
      className="rounded bg-light-200 dark:bg-layer-200 relative border border-lowContrast dark:border-layer-600"
    >
      <div className="w-full bg-light-200 dark:bg-layer-200 flex justify-between pl-4 pt-4 items-center text-sm rounded">
        <p className="uppercase text-sm text-lowContrast font-semibold">Step {index4 + 1}</p>
        <div className="flex justify-center absolute bottom-0 right-0 z-50">
          {values.workspaces[index1].buildSteps.length > 0 && (
            <button
              className="bg-red-100 cursor-pointer py-2 px-3 border-none transition-all rounded-tl-xl rounded-br hover:bg-red-200"
              type="button"
              onClick={() => arrayHelpers4.remove(index4)}
            >
              <img src="/icons/trash.svg" alt="trash" width="20px" />
            </button>
          )}
        </div>
      </div>

      <div className="bg-light-200 dark:bg-layer-200 p-4 mb-4 ">
        <label htmlFor="buildSteps" id="buildSteps">
          <LabelWithInfo label="Build Name" info="Enter build name" />
          <FastField
            className="h-input rounded p-2 bg-light-300 dark:bg-layer-100 border border-lowContrast dark:border-layer-600 outline-none focus:outline-1 focus:outline-lowContrast focus:border-none"
            placeholder="name"
            name={`workspaces[${index1}].buildSteps[${index4}].name`}
          />

          <LabelWithInfo
            label={
              values.workspaces[index1].buildSteps[index4].type === 'command' ? 'Command' : 'Script'
            }
            info={
              values.workspaces[index1].buildSteps[index4].type === 'command'
                ? 'Enter command.'
                : 'Enter script.'
            }
          />
          <CodeEditor
            value={values.workspaces[index1].buildSteps[index4].text}
            language="bash"
            onChange={(e) => {
              values.workspaces[index1].buildSteps[index4].text = String(e.target.value);
            }}
            style={
              theme === 'dark'
                ? {
                    fontSize: 12,
                    color: 'var(--text-color)',
                    border: '1px solid var(--layer-600)',
                    backgroundColor: 'var(--layer-100)',
                    fontFamily:
                      'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
                  }
                : {
                    fontSize: 12,
                    color: 'var(--layer-100)',
                    border: '1px solid var(--lowContrast)',
                    backgroundColor: 'var(--light-300)',
                    fontFamily:
                      'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
                  }
            }
            padding={10}
          />
          <ErrorMessage
            name={`workspaces[${index1}].buildSteps[${index4}].step_name`}
            render={(msg) => <div className="form__error">{msg}</div>}
          />
        </label>
      </div>
    </div>
  );
};

export default BuildField;
