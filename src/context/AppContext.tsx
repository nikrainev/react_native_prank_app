import React, {
    createContext,
    FunctionComponent,
    ReactElement,
} from 'react';
import { IBool, useBool } from '../hooks/useBool';

interface IContext {
    isInit: IBool
}
const AppContext = createContext({} as IContext);

interface IProps {
    children: ReactElement | ReactElement[];
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
