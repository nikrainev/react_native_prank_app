import { useState, useCallback, SetStateAction, Dispatch } from 'react';

export interface IBool {
    value: boolean;
    onToggle: () => void;
    onTrue: () => void;
    onFalse: () => void;
    onChange: Dispatch<SetStateAction<boolean>>;
}

export const useBool = (defaultValue = false): IBool => {
    const [value, setValue] = useState(defaultValue);

    const onToggle = useCallback(() => setValue(p => !p), []);
    const onTrue = useCallback(() => setValue(true), []);
    const onFalse = useCallback(() => setValue(false), []);

    return {
        value,
        onToggle,
        onTrue,
        onFalse,
        onChange: setValue,
    };
};
