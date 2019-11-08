import { useState, useEffect } from 'react';

export const storeCustomHook = {
  state: [],
  setValue(value) {
    this.state = value;
    this.setters.map((setter) => setter(this.state));
    // for each individual setter store state as it comes in
    console.log(this.state);
    // console.log(this.setters.map(setter => setter(this.state)));
  },
  setters: [],
};

// Bind the setState function to the store object so we don't lose context when calling it elsewhere
storeCustomHook.setValue = storeCustomHook.setValue.bind(storeCustomHook);

// this is the custom hook we'll call on components.
export function useCustomHook() {
  const [state, set] = useState(storeCustomHook.state);

  if (!storeCustomHook.setters.includes(set)) {
    storeCustomHook.setters.push(set);
  }
  useEffect(() => () => {
    storeCustomHook.setters = storeCustomHook.setters.filter((setter) => setter !== set);
  }, []);
  // storeCustomHook.state[state] = [state];

  return [state, storeCustomHook.setValue];
}

// --------------------------------------------------------------------//

export const storeShareData = {
  state: [],
  setValue(value) {
    this.state = value;
    this.setters.map((setter) => setter(this.state));
  },
  setters: [],
};
storeShareData.setValue = storeShareData.setValue.bind(storeShareData);

// this is the custom hook we'll call on components.
export function useShareData() {
  const [state, set] = useState(storeShareData.state);

  if (!storeShareData.setters.includes(set)) {
    storeShareData.setters.push(set);
  }
  useEffect(() => () => {
    storeShareData.setters = storeShareData.setters.filter((setter) => setter !== set);
  }, []);
  return [state, storeShareData.setValue];
}

// --------------------------------------------------------------------//

export const storeCloseMenuData = {
  state: [],
  setValue(value) {
    this.state = value;
    this.setters.map((setter) => setter(this.state));
  },
  setters: [],
};
storeCloseMenuData.setValue = storeCloseMenuData.setValue.bind(storeCloseMenuData);

// this is the custom hook we'll call on components.
export default function useCloseMenuHook() {
  const [state, set] = useState(storeCloseMenuData.state);

  if (!storeCloseMenuData.setters.includes(set)) {
    storeCloseMenuData.setters.push(set);
  }
  useEffect(() => () => {
    storeCloseMenuData.setters = storeCloseMenuData.setters.filter((setter) => setter !== set);
  }, []);
  return [state, storeCloseMenuData.setValue];
}
