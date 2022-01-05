import React, {
    FunctionComponent,
    ReactElement
} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppProvider } from '../../context/AppContext';

interface IProps {
    children: ReactElement | ReactElement[];
}
const AppContextProvider: FunctionComponent<Partial<IProps>> = (props) => {
    const { children } = props;
    return (
        <PaperProvider>
            <AppProvider>
                {children}
            </AppProvider>
        </PaperProvider>
    )
}

export default React.memo(AppContextProvider);
