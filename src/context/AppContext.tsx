import React, {
    createContext, FunctionComponent,
    useContext,
    useEffect,
} from 'react';
import { IBool, useBool } from '../hooks/useBool';

interface IContext {
    isInit: IBool
}
const AppContext = createContext({} as IContext);

interface IProps {
    children: React.FunctionComponent,
}

export const AppProvider: FunctionComponent<Partial<IProps>> = (props) => {
    const { children } = props;
    const isInit = useBool(false);

    return (
        <AppContext.Provider
            value={{
                isInit,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
