import create from 'zustand';
import createContext from 'zustand/context';
import { useLayoutEffect } from 'react';
import { devtools } from 'zustand/middleware';

const processEnv = process.env.KIYO_NODE_ENV ?? 'development';

export const isTestEnvironment = processEnv === 'development';

let store;

const initialState = {};

const zustandContext = createContext<any>();

export const StoreProvider = zustandContext.Provider;
export const useStoreSSR = zustandContext.useStore;

export const initializeStore = (preloadedState = {}) => {
  const _create = (set, get) => ({
    ...initialState,
    ...preloadedState,
  });

  // zustand devtools
  return isTestEnvironment ? create(devtools(_create)) : create(_create);
};

export function useCreateStore(initialState) {
  // For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(initialState);
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore(initialState);
  // And if initialState changes, then merge states in the next render cycle.

  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks

  useLayoutEffect(() => {
    if (initialState && store) {
      store.setState({ ...initialState, ...store.getState() });
    }
  }, [initialState]);

  return () => store;
}
