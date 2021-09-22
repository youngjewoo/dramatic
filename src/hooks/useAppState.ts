import { useContext, createContext } from 'react';
import AppStateModel from '../model/app/AppStateModel';

export const AppContext = createContext<AppStateModel>(new AppStateModel());

const useStore = (): AppStateModel => useContext(AppContext);

export default useStore;
