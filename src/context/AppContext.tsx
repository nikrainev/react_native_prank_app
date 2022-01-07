import React, {
    createContext,
    FunctionComponent,
    ReactElement,
    useState,
    useRef,
    useCallback,
    useEffect,
    useContext,
} from 'react';
import Realm from 'realm';
import Prank from '../models/Prank';
import { IInput } from '../models/Prank';
import { IBool, useBool } from '../hooks/useBool';

interface IContext {
    isInit: IBool,
    pranks: Realm.Results<Prank> | [],
    onAddPrank: (input:IInput) => void
}
const AppContext = createContext({} as IContext);
export const useApp = () => useContext(AppContext);

interface IProps {
    children: ReactElement | ReactElement[];
}

export const AppProvider: FunctionComponent<Partial<IProps>> = (props) => {
    const { children } = props;
    const isInit = useBool(false);

    const [pranks, setPranks] = useState<Realm.Results<Prank> | []>([]);

    const realmRef = useRef<Realm | null>(null);

    const subscriptionRef = useRef<Realm.Results<Prank> | null>(null);

    const openRealm = useCallback(async (): Promise<void> => {
        try {
            const config = {
                schema: [Prank.schema],
            };
            const realm = await Realm.open(config);
            realmRef.current = realm;

            const tasksResults: Realm.Results<Prank> = realm.objects('Prank');
            if (tasksResults?.length) {
                setPranks(tasksResults);
            }

            subscriptionRef.current = tasksResults;
            tasksResults.addListener(() => {
                setPranks(realm.objects('Prank'));
            });
        } catch (err:any) {
            console.error('Error opening realm: ', err.message);
        }
    }, [realmRef, setPranks]);

    const closeRealm = useCallback((): void => {
        const subscription = subscriptionRef.current;
        subscription?.removeAllListeners();
        subscriptionRef.current = null;

        const realm = realmRef.current;
        realm?.close();
        realmRef.current = null;
        setPranks([]);
    }, [realmRef]);

    useEffect(() => {
        openRealm();

        // Return a cleanup callback to close the realm to prevent memory leaks
        return closeRealm;
    }, [openRealm, closeRealm]);


    const onAddPrank = useCallback(
        (input): void => {
            if (!input.name) {
                return;
            }

            const realm = realmRef.current;
            realm?.write(() => {
                realm?.create('Prank', Prank.generate(input));
            });
        },
        [realmRef],
    );

    return (
        <AppContext.Provider
            value={{
                isInit,
                pranks,
                onAddPrank,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
