import React, {createContext, useContext} from "react";

const initialValue = {
  fleets: []
}

export const FleetsContext = createContext(initialValue)

export const useFleets = () => useContext(FleetsContext)

