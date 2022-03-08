import React from "react";


const useStateWithLocalStorage = (localStorageKey: any)=> {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue] as const;
};

export default useStateWithLocalStorage
